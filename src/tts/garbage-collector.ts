/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Gerenciar a limpeza em lote de arquivos temporários de áudio (.wav) agrupados por sessão.
2. Monitorar o limite de tamanho do cache e apagar automaticamente as sessões mais antigas (FIFO).
3. Deletar arquivos físicos com tratamento seguro de erros (como ENOENT).

Mapa de Relacionamentos do Script

1. pipeline-service.ts
   - Tipo: Dependência Inversa
   - Relação: Registra arquivos de áudio temporários e gerencia o ciclo de limpeza via Garbage Collector.
   - Criticidade: Alta

Invariantes do Script

1. Nunca deletar arquivos que ainda não foram marcados para limpeza ou de sessões que ainda não foram explicitamente finalizadas ou descartadas por FIFO.
2. O tratamento de erro ao deletar arquivos físicos deve ser resiliente a erros do tipo ENOENT.
3. A limpeza por limite de tamanho deve seguir ordem FIFO estrita (First In, First Out) baseada na ordem de registro das sessões.
4. Nenhuma operação de deleção pode concorrer em uma mesma sessão simultaneamente (travas obrigatórias).

--- FIM ARQUITETURA DO SCRIPT ---
*/

import * as fs from "fs";
import * as path from "path";

/**
 * Gerencia o ciclo de vida e a limpeza segura de arquivos de áudio temporários.
 */
export class GarbageCollector {
  private sessions = new Map<number, string[]>();
  private sessionSizes = new Map<number, number>();
  private sessionOrder = new Set<number>();
  private cleaningPromises = new Map<number, Promise<void>>();
  
  // Track size in memory to avoid O(n) readdir and stat calls
  private totalSizeBytes = 0;
  private isCheckingSize = false;
  private generationCount = 0;

  /**
   * Registra um arquivo temporário associado a uma sessão específica.
   */
  registerFile(sessionId: number, absolutePath: string, fileSize: number = 0): void {
    if (!this.sessions.has(sessionId)) {
      this.sessions.set(sessionId, []);
      this.sessionOrder.add(sessionId);
      this.sessionSizes.set(sessionId, 0);
    }
    this.sessions.get(sessionId)!.push(absolutePath);
    this.sessionSizes.set(sessionId, this.sessionSizes.get(sessionId)! + fileSize);
    this.totalSizeBytes += fileSize;
    this.generationCount++;
  }

  /**
   * Verifica o limite de tamanho apenas a cada 10 arquivos gerados.
   * Chamado de forma não-bloqueante pelo pipeline.
   */
  async maybeCheckSizeLimit(limitMB: number): Promise<void> {
    if (this.generationCount % 10 === 0) {
      await this.checkSizeLimit(limitMB);
    }
  }

  /**
   * Deleta todos os arquivos temporários de uma sessão específica.
   */
  async cleanupSession(sessionId: number): Promise<void> {
    const existingPromise = this.cleaningPromises.get(sessionId);
    if (existingPromise) {
      await existingPromise; // Aguarda a limpeza em andamento
      return;
    }
    
    const cleanupPromise = this._doCleanupSession(sessionId);
    this.cleaningPromises.set(sessionId, cleanupPromise);
    
    try {
      await cleanupPromise;
    } finally {
      this.cleaningPromises.delete(sessionId);
    }
  }

  private async _doCleanupSession(sessionId: number): Promise<void> {
    try {
      const files = this.sessions.get(sessionId);
      if (files && files.length > 0) {
        await this.deleteFiles(files);
      }
    } catch (error) {
      console.error(`[Obsidian Voice GC] Erro ao deletar arquivos da sessão ${sessionId}:`, error);
      // Não relançar para não bloquear chamadas subsequentes
    } finally {
      const sessionSize = this.sessionSizes.get(sessionId) || 0;
      this.totalSizeBytes -= sessionSize;
      if (this.totalSizeBytes < 0) {
        console.warn(`[Obsidian Voice GC] totalSizeBytes ficou negativo (${this.totalSizeBytes}). Resetando para 0.`);
        this.totalSizeBytes = 0;
      }

      this.sessions.delete(sessionId);
      this.sessionSizes.delete(sessionId);
      this.removeSessionFromOrder(sessionId);
    }
  }

  /**
   * Deleta todos os arquivos temporários de todas as sessões registradas.
   */
  async cleanupAllSessions(): Promise<void> {
    const allFiles: string[] = [];
    for (const files of this.sessions.values()) {
      allFiles.push(...files);
    }
    
    await this.deleteFiles(allFiles);
    this.sessions.clear();
    this.sessionSizes.clear();
    this.sessionOrder.clear();
    this.cleaningPromises.clear();
    this.totalSizeBytes = 0;
    this.generationCount = 0;
  }

  /**
   * Verifica se o diretório de cache excedeu o limite em MB e limpa sessões antigas se necessário.
   */
  async checkSizeLimit(limitMB: number): Promise<void> {
    if (this.isCheckingSize) {
      return;
    }
    
    this.isCheckingSize = true;
    try {
      // Recalcular a cada 100 gerações para garantir consistência
      if (this.generationCount % 100 === 0) {
        this.recalculateTotalSize();
      }

      const limitBytes = limitMB * 1024 * 1024;
      
      if (this.totalSizeBytes <= limitBytes) {
        return;
      }

      console.log(`[Obsidian Voice GC] Limite de cache excedido (${(this.totalSizeBytes / (1024 * 1024)).toFixed(2)} MB > ${limitMB} MB). Iniciando limpeza automática...`);

      const oldestSessions = this.getOldestSessions();
      for (const sessionId of oldestSessions) {
        await this.cleanupSession(sessionId);
        if (this.totalSizeBytes <= limitBytes) {
          break;
        }
      }
    } finally {
      this.isCheckingSize = false;
    }
  }

  private recalculateTotalSize(): void {
    let total = 0;
    for (const size of this.sessionSizes.values()) {
      total += size;
    }
    this.totalSizeBytes = total;
  }

  /**
   * Limpa arquivos .wav órfãos do diretório de cache (não registrados no GC).
   * 
   * ATENÇÃO: Este método só deve ser chamado no onunload do plugin, quando o player
   * já parou e não há arquivos em uso. Chamá-lo em outros momentos pode deletar
   * arquivos que estão sendo tocados, causando erros de reprodução.
   */
  async cleanupOrphanedFiles(cacheDir: string): Promise<void> {
    try {
      const files = await fs.promises.readdir(cacheDir);
      const wavFiles = files.filter(f => f.endsWith('.wav'));
      
      for (const file of wavFiles) {
        const filePath = path.join(cacheDir, file);
        try {
          await fs.promises.unlink(filePath);
        } catch (e: any) {
          if (e?.code !== "ENOENT") {
            console.warn(`[Obsidian Voice GC] Erro ao deletar arquivo órfão: ${filePath}`, e);
          }
        }
      }
      
      if (wavFiles.length > 0) {
        console.log(`[Obsidian Voice GC] Limpeza de arquivos órfãos concluída: ${wavFiles.length} arquivos deletados.`);
      }
    } catch (_) {
      // Ignora se o diretório não existir
    }
  }

  /**
   * Retorna o mapa atual de sessões e arquivos registrados.
   */
  getRegisteredFiles(): Map<number, string[]> {
    return this.sessions;
  }

  private async deleteFiles(files: string[]): Promise<void> {
    let deletedCount = 0;

    for (const file of files) {
      let attempts = 0;
      const maxAttempts = 3;

      while (attempts < maxAttempts) {
        try {
          // Cede o event loop para o pipeline usando setTimeout(0), que é universal
          // (setImmediate é específico do Node.js e não está disponível em browsers)
          await new Promise(resolve => setTimeout(resolve, 0));
          await fs.promises.unlink(file);
          deletedCount++;
          break;
        } catch (e: any) {
          if (e?.code === 'EBUSY' && attempts < maxAttempts - 1) {
            // Arquivo ainda em uso pelo SO (tipicamente Windows): espera e tenta novamente
            attempts++;
            await new Promise(resolve => setTimeout(resolve, 100));
            continue;
          }
          if (e?.code !== 'ENOENT') {
            console.warn(`[Obsidian Voice GC] Erro ao deletar arquivo: ${file}`, e);
          }
          break;
        }
      }
    }

    if (deletedCount > 0) {
      console.log(`[Obsidian Voice GC] Limpeza concluída: ${deletedCount} arquivos deletados.`);
    }
  }

  private getOldestSessions(): number[] {
    return Array.from(this.sessionOrder);
  }

  private removeSessionFromOrder(sessionId: number): void {
    this.sessionOrder.delete(sessionId);
  }
}
