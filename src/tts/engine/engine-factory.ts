// Responsabilidades do Script
//
// 1. Instanciar o motor TTS correto com base no identificador da engine ativa.
// 2. Desacoplar o main.ts da criação direta de classes de motor específicas.
// 3. Fornecer a raiz da instalação do Piper para o motor (fonte canônica de localização de vozes).

import { TTSEngine } from "../types";
import { PiperEngine, PiperEngineOptions } from "./piper-engine";
import { KokoroEngine, KokoroEngineOptions } from "./kokoro-engine";
import { VoiceLogger } from "../../logger";

export interface EngineFactoryOptions {
  ttsEngine: 'piper' | 'kokoro';
  piperPath: string;
  piperInstallRoot: string;
  selectedVoice: string;
  selectedKokoroVoice: string;
  basePath?: string;
  logger: VoiceLogger;
}

export class TTSEngineFactory {
  static create(options: EngineFactoryOptions): TTSEngine {
    if (options.ttsEngine === 'kokoro') {
      const kokoroOptions: KokoroEngineOptions = {
        kokoroPath: options.piperPath,
        selectedVoice: options.selectedKokoroVoice,
        basePath: options.basePath,
        logger: options.logger,
      };
      return new KokoroEngine(kokoroOptions);
    }

    const piperOptions: PiperEngineOptions = {
      piperPath: options.piperPath,
      piperInstallRoot: options.piperInstallRoot,
      selectedVoice: options.selectedVoice,
      basePath: options.basePath,
      logger: options.logger,
    };
    return new PiperEngine(piperOptions);
  }
}