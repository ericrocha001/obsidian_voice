/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Adaptar o motor Kokoro ao contrato interno de engines TTS.
2. Validar caminhos do executável e do modelo de voz usados pelo Kokoro.
3. Criar sessões de geração de áudio do Kokoro para o pipeline de narração.

Mapa de Relacionamentos do Script

1. subprocess-runtime.ts
   - Tipo: Dependência Direta
   - Relação: Cria SubprocessRuntime para executar o comando Kokoro.
   - Criticidade: Alta

2. engine-factory.ts
   - Tipo: Dependência Inversa
   - Relação: KokoroEngine é instanciado pela fábrica de engines.
   - Criticidade: Alta

3. pipeline-service.ts
   - Tipo: Fluxo de Dados
   - Relação: Consome sessões geradas por KokoroEngine.
   - Criticidade: Alta

Invariantes do Script

1. O warmup() é intencionalmente no-op, pois o subprocesso é lançado por geração.
2. O caminho do executável é sempre resolvido via resolveKokoroPath().

--- FIM ARQUITETURA DO SCRIPT ---
*/

import * as fs from "fs";
import * as path from "path";
import {
  EngineHealth,
  EngineSession,
  EngineValidationResult,
  GenerationRequest,
  GenerationResult,
  TTSCapabilities,
  TTSEngine,
} from "../types";
import { SubprocessRuntime } from "../runtime/subprocess-runtime";

export interface KokoroEngineOptions {
  kokoroPath: string;
  selectedVoice: string;
  basePath?: string;
}

export class KokoroEngine implements TTSEngine {
  readonly id = "kokoro";
  readonly name = "Kokoro";
  readonly version = "1";
  private health: EngineHealth = { state: "degraded" };

  constructor(private readonly options: KokoroEngineOptions) {}

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
    const { kokoroPath, selectedVoice } = this.options;
    const kokoroExists = !!kokoroPath && fs.existsSync(this.resolveKokoroPath());

    let modelExists = false;
    if (selectedVoice) {
      const voicePath = this.resolveVoicePath(selectedVoice);
      modelExists = fs.existsSync(voicePath);
    }

    if (!kokoroExists || !modelExists) {
      const error = "Kokoro executable or voice model is missing.";
      this.health = { state: "broken", lastValidation: Date.now(), lastError: error };
      return { ok: false, error };
    }

    this.health = { state: "healthy", lastValidation: Date.now() };
    return { ok: true };
  }

  createSession(): EngineSession {
    return new KokoroEngineSession(this, new SubprocessRuntime());
  }

  buildCommand(
    text: string,
    voice: string,
    outputFile: string,
  ): { command: string; cwd?: string } {
    const resolvedKokoro = this.resolveKokoroPath();
    return {
      command: `"${resolvedKokoro}" --text "${text}" --voice "${voice}" --output "${outputFile}"`,
      cwd: this.options.basePath,
    };
  }

  resolveKokoroPath(): string {
    const { kokoroPath, basePath } = this.options;
    if (path.isAbsolute(kokoroPath) || !basePath) return kokoroPath;
    return path.resolve(basePath, kokoroPath);
  }

  resolveVoicePath(voice: string): string {
    const { kokoroPath, basePath } = this.options;
    if (!voice || !kokoroPath) return "";
    const dir = path.dirname(this.resolveKokoroPath());
    return path.join(dir, "voices", voice);
  }

  getSelectedVoice(): string {
    return this.options.selectedVoice;
  }
}

class KokoroEngineSession implements EngineSession {
  constructor(
    private readonly engine: KokoroEngine,
    private readonly runtime: SubprocessRuntime,
  ) {}

  async warmup(): Promise<void> {
    // Kokoro subprocess is launched per generation, so warmup is intentionally a no-op.
  }

  async generate(request: GenerationRequest): Promise<GenerationResult> {
    const startedAt = Date.now();
    const { command, cwd } = this.engine.buildCommand(
      request.text,
      this.engine.getSelectedVoice(),
      request.outputFile,
    );
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