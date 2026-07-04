/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Orquestrar o fluxo de extração e staging para instalação atômica de modelos.
2. Controlar as transições de estado da instalação com proteção contra concorrência.
3. Persistir metadados do modelo instalado via callback de salvamento.
4. Utilizar imports estáticos de módulos Node.js para compatibilidade com o ambiente Obsidian.
5. Buscar executável recursivamente nos subdiretórios da raiz de instalação.

Mapa de Relacionamentos do Script

1. src/services/model/archive-manager.ts
   - Tipo: Dependência Direta
   - Relação: Extrai arquivos do archive para staging.
   - Criticidade: Alta

2. src/services/model/staging-manager.ts
   - Tipo: Dependência Direta
   - Relação: Prepara e promove diretório de staging para destino final.
   - Criticidade: Alta

3. src/services/model/model-management-service.ts
   - Tipo: Fluxo de Dados
   - Relação: Consome callbacks para persistir metadados após instalação.
   - Criticidade: Alta

Invariantes do Script

1. A raiz da instalação (destDir) é sempre registrada, nunca deduzida.
2. O executável deve ser localizado dentro da raiz antes de persistir.
3. Os metadados são persistidos imediatamente após a promoção do staging.
4. A remoção só atualiza estado após confirmação física de exclusão.
5. Nunca usar imports dinâmicos de módulos Node.js (fs, fs/promises, path) — sempre usar imports estáticos no topo do arquivo.
6. O executável deve ser localizado em qualquer nível de profundidade dentro da raiz de instalação.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import * as fs from 'fs';
import * as fsp from 'fs/promises';
import * as path from 'path';
import { ArchiveManager } from './archive-manager';
import { StagingManager } from './staging-manager';
import { InstallStateMachine } from './install-state-machine';
import { InstallState } from '../../types/model';
import type { ModelId, InstalledModelMetadata } from '../../types/model';

export interface InstallCallbacks {
  onStateChange?: (modelId: ModelId, state: InstallState) => void;
  onInstalled?: (modelId: ModelId, metadata: InstalledModelMetadata) => void;
  onRemoved?: (modelId: ModelId) => void;
}

/**
 * Encontra o binário executável dentro de um diretório de instalação.
 * Busca recursivamente nos subdiretórios.
 * Retorna null se não encontrar, sem lançar exceção.
 */
async function findExecutableInDir(dir: string): Promise<string | null> {
  const candidates = process.platform === 'win32' ? ['piper.exe', 'piper'] : ['piper'];
  
  async function walk(currentDir: string): Promise<string | null> {
    try {
      const entries = await fsp.readdir(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        if (entry.isDirectory()) {
          const found = await walk(fullPath);
          if (found) return found;
        } else if (candidates.includes(entry.name)) {
          return fullPath;
        }
      }
    } catch {
      // Diretório não existe ou erro de leitura
    }
    return null;
  }
  
  return await walk(dir);
}

export class ModelInstaller {
  private archiveManager: ArchiveManager;
  private stagingManager: StagingManager;
  private machines: Map<ModelId, InstallStateMachine> = new Map();
  private callbacks: InstallCallbacks;
  private isInstalledFn?: (modelId: ModelId) => boolean;

  constructor(stagingRoot: string, callbacks: InstallCallbacks = {}, isInstalledFn?: (modelId: ModelId) => boolean) {
    this.archiveManager = new ArchiveManager();
    this.stagingManager = new StagingManager(stagingRoot);
    this.callbacks = callbacks;
    this.isInstalledFn = isInstalledFn;
  }

  getMachine(modelId: ModelId): InstallStateMachine {
    let machine = this.machines.get(modelId);
    if (!machine) {
      // INVARIANT: Estado inicial é determinístico baseado em metadados persistidos
      const initialState = this.isInstalledFn?.(modelId)
        ? InstallState.INSTALLED
        : InstallState.NOT_INSTALLED;

      machine = new InstallStateMachine(initialState);
      machine.setOnStateChange((state) => this.callbacks.onStateChange?.(modelId, state));
      this.machines.set(modelId, machine);
    }
    return machine;
  }

  async install(modelId: ModelId, archivePath: string, destDir: string, version: string): Promise<void> {
    const machine = this.getMachine(modelId);

    try {
      machine.transitionTo(InstallState.VERIFYING);
      machine.transitionTo(InstallState.EXTRACTING);

      const stagingDir = await this.stagingManager.prepareStaging(modelId);

      machine.transitionTo(InstallState.VALIDATING_RUNTIME);
      machine.transitionTo(InstallState.INSTALLING);

      await this.archiveManager.extract(archivePath, stagingDir);
      await this.stagingManager.promoteStaging(stagingDir, destDir);

      // INVARIANT: Encontrar executável dentro da raiz antes de persistir
      const executablePath = await findExecutableInDir(destDir);
      if (!executablePath) {
        throw new Error(`Executável não encontrado na raiz de instalação: ${destDir}`);
      }

      machine.transitionTo(InstallState.INSTALLED);

      const metadata: InstalledModelMetadata = {
        id: modelId,
        activeVersion: version,
        installedRootPath: destDir,
        executablePath: executablePath,
        installedAt: Date.now(),
      };

      this.callbacks.onInstalled?.(modelId, metadata);
    } catch (err) {
      machine.transitionTo(InstallState.FAILED);
      throw err;
    }
  }

  async remove(modelId: ModelId, installRoot: string): Promise<boolean> {
    const machine = this.getMachine(modelId);

    if (machine.isInstalling()) {
      throw new Error(`Remoção bloqueada: instalação em andamento para o modelo: ${modelId}`);
    }

    machine.transitionTo(InstallState.REMOVING);

    try {
      // INVARIANT: Verificar se a raiz realmente existe antes de remover
      const rootExists = fs.existsSync(installRoot);
      if (!rootExists) {
        // Raiz já não existe - remoção já concluída
        machine.transitionTo(InstallState.NOT_INSTALLED);
        this.callbacks.onRemoved?.(modelId);
        return true;
      }
      
      await fsp.rm(installRoot, { recursive: true, force: true });
      
      // INVARIANT: Confirmar remoção física antes de atualizar estado
      const stillExists = fs.existsSync(installRoot);
      if (stillExists) {
        machine.transitionTo(InstallState.FAILED);
        throw new Error(`Falha ao remover diretório: ${installRoot}`);
      }
      
      machine.transitionTo(InstallState.NOT_INSTALLED);
      this.callbacks.onRemoved?.(modelId);
      return true;
    } catch (err) {
      machine.transitionTo(InstallState.FAILED);
      throw err;
    }
  }
}