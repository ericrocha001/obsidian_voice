/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Orquestrar o ciclo de sessão da engine TTS durante a narração.
2. Manter fila interna de chunks pré-gerados com um loop de geração contínuo.
3. Registrar arquivos temporários no Garbage Collector para limpeza em lote.
4. Aplicar blindagem de falhas (Circuit Breaker) na geração TTS.

Mapa de Relacionamentos do Script

1. queue.ts
   - Tipo: Dependência Direta
   - Relação: Consome fila de chunks para gerar áudio e delega estimativa de duração.
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

5. garbage-collector.ts
   - Tipo: Dependência Direta
   - Relação: Delega o registro e a limpeza em lote de arquivos temporários.
   - Criticidade: Alta

Invariantes do Script

1. O Circuit Breaker deve ser respeitado antes de cada geração.
2. Arquivos temporários devem ser registrados no Garbage Collector e limpos em lote.
3. O buffer deve respeitar o sessionId: chunks de sessões antigas são descartados.
4. O loop contínuo deve ceder o event loop (sleep) quando o buffer estiver cheio.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { FileSystemAdapter, Vault } from "obsidian";
import { ObsidianVoiceQueue } from "../queue";
import { CircuitBreaker } from "./circuit-breaker";
import { EngineSession, GenerationResult, TTSEngine } from "./types";
import { GarbageCollector } from "./garbage-collector";

export type ChunkAudio = {
  resourcePath: string;
  absolutePath: string;
  filename: string;
  text: string;
  metadata?: GenerationResult;
  error?: string;
  sessionId: number;
};

export type ChunkResult = ChunkAudio | { discarded: true; sessionId: number } | null;

export class TTSPipelineService {
  private session: EngineSession | null = null;
  private breaker = new CircuitBreaker();
  private currentSessionId: number = 0;
  private garbageCollector: GarbageCollector;
  private bufferedChunks: ChunkAudio[] = [];
  private bufferedDuration: number = 0;
  private currentPlaybackRate: number = 1.0;
  private isRunning = false;

  private static readonly MAX_BUFFERED_CHUNKS = 12;
  private static readonly CHARS_PER_SECOND = 150;

  constructor(
    private readonly vault: Vault,
    private readonly queue: ObsidianVoiceQueue,
    private readonly engine: TTSEngine
  ) {
    this.garbageCollector = new GarbageCollector();
  }

  async validate(): Promise<{ ok: boolean; error?: string }> {
    return this.engine.validate();
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Inicia uma nova sessão de narração de forma não-bloqueante.
   */
  async start(sessionId: number): Promise<void> {
    if (this.isRunning) {
      await this.stop();
    }
    
    this.currentSessionId = sessionId;
    this.session = this.engine.createSession();
    await this.session.warmup();
    
    this.isRunning = true;
    void this.runContinuousGeneration();
  }

  async stop(): Promise<void> {
    this.isRunning = false;
    if (this.session) {
      this.session.abort();
      await this.session.dispose();
      this.session = null;
    }
    this.bufferedChunks = [];
    this.bufferedDuration = 0;
    this.currentSessionId = 0;
  }

  private async runContinuousGeneration(): Promise<void> {
    const sessionAtStart = this.currentSessionId;

    while (this.isRunning && this.currentSessionId === sessionAtStart) {
      if (!this.breaker.canExecute()) {
        console.warn("[Obsidian Voice] Circuit Breaker aberto, pausando geração");
        await this.sleep(1000);
        continue;
      }

      const budget = this.calculateTimeBudget(this.currentPlaybackRate);
      const chunksMin = this.calculateChunksMin(this.currentPlaybackRate);
      const currentDuration = this.getBufferedDuration();
      const currentChunks = this.bufferedChunks.length;

      const isTimeSatisfied = currentDuration >= budget;
      const isQuantitySatisfied = currentChunks >= chunksMin;
      const isMaxReached = currentChunks >= TTSPipelineService.MAX_BUFFERED_CHUNKS;

      if ((isTimeSatisfied && isQuantitySatisfied) || isMaxReached) {
        await this.sleep(100);
        continue;
      }

      const chunk = await this.generateNextChunk();

      if (chunk === null) {
        break;
      }

      if (chunk.sessionId !== this.currentSessionId) {
        this.garbageCollector.registerFile(chunk.sessionId, chunk.absolutePath);
        break;
      }

      if (chunk.error) {
        console.warn("[Obsidian Voice] Chunk com erro ignorado:", chunk.error);
        continue;
      }

      this.bufferedChunks.push(chunk);
      this.bufferedDuration += this.estimateDuration(chunk.text);

      if (this.bufferedChunks.length % 5 === 0) {
        console.log(`[Obsidian Voice] Buffer: ${this.bufferedChunks.length} chunks (min ${chunksMin}), ${this.bufferedDuration.toFixed(1)}s / ${budget.toFixed(1)}s alvo`);
      }
    }
  }

  private consumeFromBuffer(): ChunkResult {
    const chunk = this.bufferedChunks.shift() ?? null;
    if (chunk === null) return null;

    this.bufferedDuration -= this.estimateDuration(chunk.text);
    if (this.bufferedDuration < 0) this.bufferedDuration = 0;

    if (chunk.sessionId !== this.currentSessionId) {
      this.garbageCollector.registerFile(chunk.sessionId, chunk.absolutePath);
      return { discarded: true, sessionId: this.currentSessionId };
    }

    return chunk;
  }

  async getNextChunk(): Promise<ChunkResult> {
    if (this.bufferedChunks.length === 0) {
      return null;
    }
    return this.consumeFromBuffer();
  }

  async cancelCurrentGeneration(): Promise<void> {
    this.isRunning = false;
    if (this.session) {
      this.session.abort();
    }
    this.bufferedChunks = [];
    this.bufferedDuration = 0;
  }

  holdChunk(chunk: ChunkAudio): boolean {
    if (chunk.sessionId !== this.currentSessionId) {
      return false;
    }
    const exists = this.bufferedChunks.some(c => c.absolutePath === chunk.absolutePath);
    if (!exists) {
      this.bufferedChunks.unshift(chunk);
      this.bufferedDuration += this.estimateDuration(chunk.text);
      return true;
    }
    return false;
  }

  async resetPrefetch(): Promise<void> {
    this.bufferedChunks = [];
    this.bufferedDuration = 0;
  }

  async runTest(text: string, outputFile: string): Promise<GenerationResult> {
    if (!this.session) this.session = this.engine.createSession();
    await this.session.warmup();
    return this.generate(text, outputFile);
  }

  setPlaybackRate(speed: number): void {
    this.currentPlaybackRate = speed;
  }

  async cleanupSession(sessionId: number): Promise<void> {
    await this.garbageCollector.cleanupSession(sessionId);
  }

  async cleanupAllSessions(): Promise<void> {
    await this.garbageCollector.cleanupAllSessions();
  }

  async cleanupOrphanedFiles(): Promise<void> {
    const cacheDir = path.join(os.tmpdir(), "ObsidianVoiceCache");
    await this.garbageCollector.cleanupOrphanedFiles(cacheDir);
  }

  private calculateTimeBudget(speed: number): number {
    const safeSpeed = Math.max(0.1, speed);
    return 10 + (Math.pow(safeSpeed, 1.35) * 6);
  }

  private calculateChunksMin(speed: number): number {
    const safeSpeed = Math.max(0.1, speed);
    return Math.round(4 + (safeSpeed * 2));
  }

  private estimateDuration(text: string): number {
    return this.queue.estimateDuration(text);
  }

  private getBufferedDuration(): number {
    return this.bufferedDuration;
  }

  private async generateNextChunk(): Promise<ChunkAudio | null> {
    const chunk = this.queue.getNextChunk();
    if (chunk === null) return null;

    const sessionIdAtGenerationStart = this.currentSessionId;

    const cacheDir = path.join(os.tmpdir(), "ObsidianVoiceCache");
    await fs.promises.mkdir(cacheDir, { recursive: true });

    void this.garbageCollector.maybeCheckSizeLimit(500);

    const filename = `voice_chunk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.wav`;
    const absolutePath = path.join(cacheDir, filename);

    try {
      const metadata = await this.generate(chunk.text, absolutePath);

      const fileSize = chunk.text.length * 4;

      this.garbageCollector.registerFile(sessionIdAtGenerationStart, absolutePath, fileSize);
      return { resourcePath: this.toResourcePath(absolutePath), absolutePath, filename, text: chunk.text, metadata, sessionId: sessionIdAtGenerationStart };
    } catch (error: any) {
      const message = error?.message || String(error);
      return { resourcePath: "", absolutePath, filename, text: chunk.text, error: message, sessionId: sessionIdAtGenerationStart };
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
}