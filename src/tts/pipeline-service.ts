/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Orquestrar o ciclo de sessão da engine TTS durante a narração.
2. Pré-gerar chunks de áudio da fila de narração e limpar arquivos temporários.
3. Aplicar blindagem de falhas (Circuit Breaker) na geração TTS.

Mapa de Relacionamentos do Script

1. queue.ts
   - Tipo: Dependência Direta
   - Relação: Consome fila de chunks para gerar áudio.
   - Criticidade: Alta

2. engine-factory.ts / engines
   - Tipo: Dependência Direta
   - Relação: Cria e gerencia sessões da engine TTS ativa.
   - Criticidade: Alta

3. main.ts
   - Tipo: Dependência Inversa
   - Relação: main.ts consome TTSPipelineService para orquestrar narração.
   - Criticidade: Alta

4. circuit-breaker.ts
   - Tipo: Dependência Direta
   - Relação: Protege contra falhas repetidas da engine TTS.
   - Criticidade: Média

Invariantes do Script

1. Nunca deve haver mais de um prefetch ativo por vez.
2. O Circuit Breaker deve ser respeitado antes de cada geração.
3. Arquivos temporários devem ser limpos após o uso.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { FileSystemAdapter, Vault } from "obsidian";
import { ObsidianVoiceQueue } from "../queue";
import { CircuitBreaker } from "./circuit-breaker";
import { EngineSession, GenerationResult, TTSEngine } from "./types";

export type ChunkResult = { resourcePath: string; absolutePath: string; filename: string; text: string; metadata?: GenerationResult; error?: string } | null;

export class TTSPipelineService {
  private nextChunkPromise: Promise<ChunkResult> | null = null;
  private session: EngineSession | null = null;
  private breaker = new CircuitBreaker();

  constructor(
    private readonly vault: Vault,
    private readonly queue: ObsidianVoiceQueue,
    private readonly engine: TTSEngine
  ) {}

  async validate(): Promise<{ ok: boolean; error?: string }> {
    return this.engine.validate();
  }

  async start(): Promise<void> {
    await this.stop();
    this.session = this.engine.createSession();
    await this.session.warmup();
    this.nextChunkPromise = this.prefetchNextChunk();
  }

  async stop(): Promise<void> {
    if (this.session) {
      this.session.abort();
      await this.session.dispose();
      this.session = null;
    }
    await this.cleanupPrefetchedChunk();
  }

  async getNextChunk(): Promise<ChunkResult> {
    if (!this.nextChunkPromise) this.nextChunkPromise = this.prefetchNextChunk();
    const currentPromise = this.nextChunkPromise;
    this.nextChunkPromise = null;
    return currentPromise;
  }

  async cancelCurrentGeneration(): Promise<void> {
    if (this.session) {
      this.session.abort();
    }
    await this.cleanupPrefetchedChunk();
  }

  prefetch(): void {
    this.nextChunkPromise = this.prefetchNextChunk();
  }

  holdChunk(chunk: NonNullable<ChunkResult>): void {
    this.nextChunkPromise = Promise.resolve(chunk);
  }

  async resetPrefetch(): Promise<void> {
    await this.cleanupPrefetchedChunk();
  }

  async runTest(text: string, outputFile: string): Promise<GenerationResult> {
    if (!this.session) this.session = this.engine.createSession();
    await this.session.warmup();
    return this.generate(text, outputFile);
  }

  private async prefetchNextChunk(): Promise<ChunkResult> {
    const chunk = this.queue.getNextChunk();
    if (chunk === null) return null;

    const cacheDir = path.join(os.tmpdir(), "ObsidianVoiceCache");
    await fs.promises.mkdir(cacheDir, { recursive: true });

    const filename = `voice_chunk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.wav`;
    const absolutePath = path.join(cacheDir, filename);

    try {
      const metadata = await this.generate(chunk.text, absolutePath);
      return { resourcePath: this.toResourcePath(absolutePath), absolutePath, filename, text: chunk.text, metadata };
    } catch (error: any) {
      const message = error?.message || String(error);
      return { resourcePath: "", absolutePath, filename, text: chunk.text, error: message };
    }
  }

  private async generate(text: string, outputFile: string): Promise<GenerationResult> {
    if (!this.breaker.canExecute()) throw new Error(`TTS engine circuit is ${this.breaker.getState()}. Try again later.`);
    if (!this.session) this.session = this.engine.createSession();

    try {
      const result = await this.session.generate({ text, outputFile });
      this.breaker.recordSuccess();
      return result;
    } catch (error) {
      this.breaker.recordFailure();
      throw error;
    }
  }

  private toResourcePath(absolutePath: string): string {
    if (this.vault.adapter instanceof FileSystemAdapter) {
      const basePath = this.vault.adapter.getBasePath();
      const relativePath = path.relative(basePath, absolutePath);
      return this.vault.adapter.getResourcePath(relativePath);
    }
    return `app://local/${absolutePath.replace(/\\/g, "/").replace(/^([A-Za-z]):/, "$1%3A")}`;
  }

  private async cleanupPrefetchedChunk(): Promise<void> {
    if (!this.nextChunkPromise) return;
    const chunk = await this.nextChunkPromise;
    this.nextChunkPromise = null;
    if (chunk?.absolutePath) {
      try {
        await fs.promises.unlink(chunk.absolutePath);
      } catch (e: any) {
        // Ignora ENOENT (arquivo já não existe)
        if (e?.code !== 'ENOENT') {
          console.warn("[Obsidian Voice] Não foi possível remover o chunk prefetch:", chunk.absolutePath, e);
        }
      }
    }
  }
}
