// Responsabilidades do Script
//
// 1. Adaptar o motor Piper ao contrato interno de engines TTS.
// 2. Validar caminhos do executável e do modelo de voz usados pelo Piper.
// 3. Criar sessões de geração de áudio do Piper para o pipeline de narração.

import * as fs from "fs";
import * as path from "path";
import { EngineHealth, EngineSession, EngineValidationResult, GenerationRequest, GenerationResult, TTSCapabilities, TTSEngine } from "../types";
import { SubprocessRuntime } from "../runtime/subprocess-runtime";
import { VoiceLogger } from "../../logger";

export interface PiperEngineOptions {
  piperPath: string;
  selectedVoice: string;
  basePath?: string;
  logger: VoiceLogger;
}

export class PiperEngine implements TTSEngine {
  readonly id = "piper";
  readonly name = "Piper";
  readonly version = "1";
  private health: EngineHealth = { state: "degraded" };

  constructor(private readonly options: PiperEngineOptions) {}

  getCapabilities(): TTSCapabilities {
    return {
      outputModes: ["wav-file"],
      supportsRealtime: false,
      supportsVoiceSwitch: true,
      supportsSpeedControl: true,
    };
  }

  getHealth(): EngineHealth {
    return { ...this.health };
  }

  async validate(): Promise<EngineValidationResult> {
    const { piperPath } = this.options;
    const resolvedModel = this.resolveModelPath();
    const isPiperCommand = this.isCommand(piperPath);
    const piperExists = !!piperPath && (isPiperCommand || fs.existsSync(this.resolvePiperPath()));
    const modelExists = !!resolvedModel && fs.existsSync(resolvedModel);

    if (!piperExists || !modelExists) {
      const error = "Piper executable or voice model is missing.";
      this.health = { state: "broken", lastValidation: Date.now(), lastError: error };
      return { ok: false, error };
    }

    this.health = { state: "healthy", lastValidation: Date.now() };
    return { ok: true };
  }

  createSession(): EngineSession {
    return new PiperEngineSession(this, new SubprocessRuntime(this.options.logger));
  }

  buildCommand(outputFile: string, speed: number): { command: string; cwd?: string } {
    const resolvedPiper = this.resolvePiperPath();
    const resolvedModel = this.resolveModelPath();
    const lengthScale = (1 / speed).toFixed(4);
    return {
      command: `"${resolvedPiper}" --model "${resolvedModel}" --length_scale ${lengthScale} --output_file "${outputFile}"`,
      cwd: this.options.basePath,
    };
  }

  private resolvePiperPath(): string {
    const { piperPath, basePath } = this.options;
    if (this.isCommand(piperPath) || path.isAbsolute(piperPath) || !basePath) return piperPath;
    return path.resolve(basePath, piperPath);
  }

  private resolveModelPath(): string {
    const { piperPath, selectedVoice, basePath } = this.options;
    if (!selectedVoice || !piperPath) return "";
    const isPiperCommand = this.isCommand(piperPath);
    let modelDir = isPiperCommand ? "" : path.dirname(this.resolvePiperPath());
    if (modelDir && !path.isAbsolute(modelDir) && basePath) modelDir = path.resolve(basePath, modelDir);
    return modelDir ? path.join(modelDir, selectedVoice) : selectedVoice;
  }

  private isCommand(piperPath: string): boolean {
    return !piperPath.includes("/") && !piperPath.includes("\\");
  }
}

class PiperEngineSession implements EngineSession {
  constructor(private readonly engine: PiperEngine, private readonly runtime: SubprocessRuntime) {}

  async warmup(): Promise<void> {
    // Piper subprocess is launched per generation, so warmup is intentionally a no-op.
  }

  async generate(request: GenerationRequest): Promise<GenerationResult> {
    const startedAt = Date.now();
    const { command, cwd } = this.engine.buildCommand(request.outputFile, request.speed);
    await this.runtime.run({ command, cwd, input: request.text });
    return {
      filePath: request.outputFile,
      generationMs: Date.now() - startedAt,
      engineId: this.engine.id,
      cached: false,
    };
  }

  abort(): void {
    this.runtime.abort();
  }

  dispose(): void {
    this.abort();
  }
}
