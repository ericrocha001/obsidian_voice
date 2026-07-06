/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Instanciar o motor TTS correto com base no identificador da engine ativa.
2. Desacoplar o main.ts da criação direta de classes de motor específicas.
3. Fornecer a raiz da instalação do Piper para o motor (fonte canônica de localização de vozes).

Mapa de Relacionamentos do Script

1. piper-engine.ts
   - Tipo: Dependência Direta
   - Relação: Instancia PiperEngine quando a engine ativa é "piper".
   - Criticidade: Alta

2. kokoro-engine.ts
   - Tipo: Dependência Direta
   - Relação: Instancia KokoroEngine quando a engine ativa é "kokoro".
   - Criticidade: Alta

3. main.ts
   - Tipo: Dependência Inversa
   - Relação: Consome TTSEngineFactory.create() para obter a engine correta.
   - Criticidade: Alta

Invariantes do Script

1. A engine retornada deve sempre implementar a interface TTSEngine.
2. Nunca deve instanciar uma engine não suportada.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import { TTSEngine } from "../types";
import { PiperEngine, PiperEngineOptions } from "./piper-engine";
import { KokoroEngine, KokoroEngineOptions } from "./kokoro-engine";

export interface EngineFactoryOptions {
  ttsEngine: 'piper' | 'kokoro';
  piperPath: string;
  piperInstallRoot: string;
  selectedVoice: string;
  selectedKokoroVoice: string;
  basePath?: string;
}

export class TTSEngineFactory {
  static create(options: EngineFactoryOptions): TTSEngine {
    if (options.ttsEngine === 'kokoro') {
      const kokoroOptions: KokoroEngineOptions = {
        kokoroPath: options.piperPath,
        selectedVoice: options.selectedKokoroVoice,
        basePath: options.basePath,
      };
      return new KokoroEngine(kokoroOptions);
    }

    const piperOptions: PiperEngineOptions = {
      piperPath: options.piperPath,
      piperInstallRoot: options.piperInstallRoot,
      selectedVoice: options.selectedVoice,
      basePath: options.basePath,
    };
    return new PiperEngine(piperOptions);
  }
}