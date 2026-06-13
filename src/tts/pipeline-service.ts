// Responsabilidades do Script
//
// 1. Orquestrar o ciclo de sessão da engine TTS durante a narração.
// 2. Pré-gerar chunks de áudio da fila de narração e limpar arquivos temporários.
// 3. Aplicar blindagem de falhas e registrar metadados da geração TTS.

import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { FileSystemAdapter, Vault } from "obsidian";
import { ObsidianVoiceQueue } from "../queue";
import { VoiceLogger } from "../logger";
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
    private readonly engine: TTSEngine,
    private readonly logger: VoiceLogger,
    private readonly getSpeed: () => number
  ) {}

  async validate(): Promise<{ ok: boolean; error?: string }> {
    return this.engine.validate();
  }

  async start(): Promise<void> {
    await this.stop();
    this.session = this.engine.createSession();
    this.logger.logEngineEvent(this.engine.id, "session", "warming");
    await this.session.warmup();
    this.logger.logEngineEvent(this.engine.id, "session", "ready");
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

  prefetch(): void {
    this.nextChunkPromise = this.prefetchNextChunk();
  }

  holdChunk(chunk: NonNullable<ChunkResult>): void {
    this.nextChunkPromise = Promise.resolve(chunk);
  }

  async resetPrefetch(): Promise<void> {
    await this.cleanupPrefetchedChunk();
  }

  async runTest(text: string, outputFile: string, speed: number): Promise<GenerationResult> {
    if (!this.session) this.session = this.engine.createSession();
    await this.session.warmup();
    return this.generate(text, outputFile, speed);
  }

  private async prefetchNextChunk(): Promise<ChunkResult> {
    const chunk = this.queue.getNextChunk();
    if (chunk === null) return null;

    const cacheDir = path.join(os.tmpdir(), "ObsidianVoiceCache");
    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });

    const filename = `voice_chunk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.wav`;
    const absolutePath = path.join(cacheDir, filename);

    try {
      const metadata = await this.generate(chunk.text, absolutePath, this.getSpeed());
      return { resourcePath: this.toResourcePath(absolutePath), absolutePath, filename, text: chunk.text, metadata };
    } catch (error: any) {
      const message = error?.message || String(error);
      this.logger.logEngineEvent(this.engine.id, "generation", message);
      return { resourcePath: "", absolutePath, filename, text: chunk.text, error: message };
    }
  }

  private async generate(text: string, outputFile: string, speed: number): Promise<GenerationResult> {
    if (!this.breaker.canExecute()) throw new Error(`TTS engine circuit is ${this.breaker.getState()}. Try again later.`);
    if (!this.session) this.session = this.engine.createSession();

    try {
      const result = await this.session.generate({ text, outputFile, speed });
      this.breaker.recordSuccess();
      this.logger.logGeneration(result);
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
    if (chunk?.absolutePath && fs.existsSync(chunk.absolutePath)) fs.unlinkSync(chunk.absolutePath);
  }
}
