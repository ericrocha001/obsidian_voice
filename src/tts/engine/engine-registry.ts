// Responsabilidades do Script
//
// 1. Registrar descritores de engines TTS disponíveis para o plugin.
// 2. Criar instâncias de engines TTS compatíveis com o sistema operacional atual.

import { EngineDescriptor, TTSEngine } from "../types";

export class TTSEngineRegistry {
  private descriptors = new Map<string, EngineDescriptor>();

  register(descriptor: EngineDescriptor): void {
    this.descriptors.set(descriptor.id, descriptor);
  }

  list(): EngineDescriptor[] {
    return Array.from(this.descriptors.values());
  }

  create(engineId: string): TTSEngine | null {
    const descriptor = this.descriptors.get(engineId);
    if (!descriptor) return null;
    if (descriptor.supportedOS !== "all" && !descriptor.supportedOS.includes(process.platform)) return null;
    return descriptor.factory();
  }
}
