// Responsabilidades do Script
//
// 1. Definir contratos compartilhados para engines TTS no pipeline de narração.
// 2. Descrever metadados de geração, capacidades e saúde usados pelos serviços TTS.

export type TTSOutputMode = "wav-file" | "pcm-stream" | "buffer";
export type EngineHealthState = "healthy" | "degraded" | "broken" | "warming";
export type CircuitState = "closed" | "open" | "half-open";

export interface TTSCapabilities {
  outputModes: TTSOutputMode[];
  supportsRealtime: boolean;
  supportsVoiceSwitch: boolean;
  supportsSpeedControl: boolean;
}

export interface EngineHealth {
  state: EngineHealthState;
  lastValidation?: number;
  lastError?: string;
}

export interface GenerationRequest {
  text: string;
  outputFile: string;
}

export interface GenerationResult {
  filePath: string;
  durationMs?: number;
  generationMs: number;
  engineId: string;
  sampleRate?: number;
  cached: boolean;
}

export interface EngineValidationResult {
  ok: boolean;
  error?: string;
}

export interface EngineSession {
  warmup(): Promise<void>;
  generate(request: GenerationRequest): Promise<GenerationResult>;
  abort(): void;
  dispose(): Promise<void> | void;
}

export interface TTSEngine {
  readonly id: string;
  readonly name: string;
  readonly version: string;
  getCapabilities(): TTSCapabilities;
  getHealth(): EngineHealth;
  validate(): Promise<EngineValidationResult>;
  createSession(): EngineSession;
}

export interface EngineDescriptor {
  id: string;
  name: string;
  version: string;
  supportedOS: NodeJS.Platform[] | "all";
  factory(): TTSEngine;
}
