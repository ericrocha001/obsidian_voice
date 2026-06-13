"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/locales/en.json
var require_en = __commonJS({
  "src/locales/en.json"(exports2, module2) {
    module2.exports = {
      settings: {
        language: {
          title: "Language",
          description: "Controls the language used by Obsidian Voice.",
          auto: "Auto (System)",
          pt: "Portugu\xEAs",
          en: "English",
          es: "Espa\xF1ol"
        },
        piper_path: {
          title: "Piper executable path",
          description: "Absolute path to the Piper binary (example: C:\\piper\\piper.exe). ONNX models will be detected automatically in the same folder.",
          not_file: "The provided path is not a file.",
          missing: "The provided executable does not exist on disk."
        },
        voice_model: {
          title: "Default voice",
          loading: "Searching for .onnx models...",
          found: ".onnx models found in the Piper executable folder.",
          select: "- select a model -",
          none: "No .onnx models found"
        },
        highlight_color: {
          title: "Highlight color",
          description: "Color of the visual highlight applied to the paragraph being narrated.",
          green: "Green (Default)",
          yellow: "Classic Yellow",
          blue: "Focus Blue",
          purple: "Zen Purple",
          orange: "Autumn Amber"
        },
        teleprompter: {
          title: "Automatic scroll (Teleprompter)",
          description: "When enabled, the editor scrolls automatically to follow the paragraph being narrated. Disable it to navigate manually without player interference."
        },
        errors: {
          prefix: "Error: {{error}}",
          unknown_directory: "Unknown error while reading the directory."
        }
      },
      widget: {
        aria: {
          expand_player: "Expand player",
          minimize_player: "Minimize player",
          play_pause: "Play / Pause",
          stop_narration: "Stop narration",
          chapters: "Chapters",
          tools: "Tools"
        },
        status: {
          waiting: "Waiting for narration...",
          playing: "Narrating note...",
          paused: "Paused"
        },
        tools: {
          summary_mode: "Summary Mode",
          summary_mode_tooltip: "Summary Mode: When enabled, the player will read only highlights (==text==) from this note.",
          teleprompter_mode: "Teleprompter Mode",
          teleprompter_mode_tooltip: "Teleprompter Mode: When enabled, the editor scrolls automatically with the narrated paragraph.",
          settings: "Settings..."
        }
      },
      commands: {
        test_piper: "Test TTS Engine (Piper)",
        narrate_current_note: "Narrate Current Note (Obsidian Voice)",
        toggle_play_pause: "Toggle Play/Pause (Obsidian Voice)",
        stop_narration: "Stop Narration (Obsidian Voice)",
        toggle_highlights_only: "Obsidian Voice: Toggle highlight reading (Audio Summary)",
        play_from_selection: "Play/Narrate text from current selection",
        ribbon_narrate: "Narrate note (Obsidian Voice)"
      },
      notices: {
        summary_mode: "Audio Summary Mode: {{state}}",
        teleprompter_mode: "Teleprompter Mode: {{state}}",
        enabled: "Enabled",
        disabled: "Disabled",
        narration_stopped: "Narration stopped.",
        no_active_note: "No active note found.",
        empty_note: "This note has no content to narrate.",
        restarting: "Restarting...",
        starting_narration: "Starting note narration...",
        missing_configuration: "Obsidian Voice: Configure the Piper path and voice in the plugin settings.",
        piper_or_model_missing: "Obsidian Voice: Piper executable or ONNX model not found at the specified path.",
        narration_finished: "Narration complete!",
        narration_error: "Narration error: {{error}}",
        generating_audio: "Generating audio...",
        audio_generated: "Audio generated successfully!",
        audio_generation_error: "Error generating audio: {{error}}",
        model_scan_error: "Obsidian Voice: {{error}}"
      },
      errors: {
        missing_translation: "Missing translation: {{key}} ({{language}})"
      },
      logs: {}
    };
  }
});

// src/locales/es.json
var require_es = __commonJS({
  "src/locales/es.json"(exports2, module2) {
    module2.exports = {
      settings: {
        language: {
          title: "Idioma",
          description: "Controla el idioma usado por Obsidian Voice.",
          auto: "Autom\xE1tico (Sistema)",
          pt: "Portugu\xEAs",
          en: "English",
          es: "Espa\xF1ol"
        },
        piper_path: {
          title: "Ruta del ejecutable de Piper",
          description: "Ruta absoluta al binario de Piper (ejemplo: C:\\piper\\piper.exe). Los modelos .onnx se detectar\xE1n autom\xE1ticamente en la misma carpeta.",
          not_file: "La ruta proporcionada no es un archivo.",
          missing: "El ejecutable proporcionado no existe en el disco."
        },
        voice_model: {
          title: "Voz predeterminada",
          loading: "Buscando modelos .onnx...",
          found: "Modelos .onnx encontrados en la carpeta del ejecutable de Piper.",
          select: "- selecciona un modelo -",
          none: "No se encontraron modelos .onnx"
        },
        highlight_color: {
          title: "Color de resaltado",
          description: "Color del resaltado visual aplicado al p\xE1rrafo que se est\xE1 narrando.",
          green: "Verde (Predeterminado)",
          yellow: "Amarillo cl\xE1sico",
          blue: "Azul enfoque",
          purple: "P\xFArpura zen",
          orange: "\xC1mbar oto\xF1al"
        },
        teleprompter: {
          title: "Desplazamiento autom\xE1tico (Teleprompter)",
          description: "Cuando est\xE1 activado, el editor se desplaza autom\xE1ticamente para seguir el p\xE1rrafo que se est\xE1 narrando. Desact\xEDvalo para navegar manualmente sin interferencia del reproductor."
        },
        errors: {
          prefix: "Error: {{error}}",
          unknown_directory: "Error desconocido al leer el directorio."
        }
      },
      widget: {
        aria: {
          expand_player: "Expandir reproductor",
          minimize_player: "Minimizar reproductor",
          play_pause: "Reproducir / Pausar",
          stop_narration: "Detener narraci\xF3n",
          chapters: "Cap\xEDtulos",
          tools: "Herramientas"
        },
        status: {
          waiting: "Esperando narraci\xF3n...",
          playing: "Narrando nota...",
          paused: "Pausado"
        },
        tools: {
          summary_mode: "Modo resumen",
          summary_mode_tooltip: "Modo resumen: Cuando est\xE1 activado, el reproductor leer\xE1 solo los resaltados (==texto==) de esta nota.",
          teleprompter_mode: "Modo Teleprompter",
          teleprompter_mode_tooltip: "Modo Teleprompter: Cuando est\xE1 activado, el editor se desplaza autom\xE1ticamente con el p\xE1rrafo narrado.",
          settings: "Configuraci\xF3n..."
        }
      },
      commands: {
        test_piper: "Probar motor TTS (Piper)",
        narrate_current_note: "Narrar nota actual (Obsidian Voice)",
        toggle_play_pause: "Alternar Reproducir/Pausar (Obsidian Voice)",
        stop_narration: "Detener narraci\xF3n (Obsidian Voice)",
        toggle_highlights_only: "Obsidian Voice: Alternar lectura de resaltados (Resumen de audio)",
        play_from_selection: "Reproducir/Narrar texto de la selecci\xF3n actual",
        ribbon_narrate: "Narrar nota (Obsidian Voice)"
      },
      notices: {
        summary_mode: "Modo resumen de audio: {{state}}",
        teleprompter_mode: "Modo Teleprompter: {{state}}",
        enabled: "Activado",
        disabled: "Desactivado",
        narration_stopped: "Narraci\xF3n detenida.",
        no_active_note: "No se encontr\xF3 ninguna nota activa.",
        empty_note: "La nota no tiene contenido para narrar.",
        restarting: "Reiniciando...",
        starting_narration: "Iniciando narraci\xF3n de la nota...",
        missing_configuration: "Obsidian Voice: Configura la ruta de Piper y la voz en la configuraci\xF3n del plugin.",
        piper_or_model_missing: "Obsidian Voice: Ejecutable de Piper o modelo ONNX no encontrado en la ruta especificada.",
        narration_finished: "Narraci\xF3n completada.",
        narration_error: "Error en la narraci\xF3n: {{error}}",
        generating_audio: "Generando audio...",
        audio_generated: "Audio generado correctamente.",
        audio_generation_error: "Error al generar audio: {{error}}",
        model_scan_error: "Obsidian Voice: {{error}}"
      },
      errors: {
        missing_translation: "Traducci\xF3n faltante: {{key}} ({{language}})"
      },
      logs: {}
    };
  }
});

// src/locales/pt.json
var require_pt = __commonJS({
  "src/locales/pt.json"(exports2, module2) {
    module2.exports = {
      settings: {
        language: {
          title: "Idioma",
          description: "Controla o idioma usado pelo Obsidian Voice.",
          auto: "Autom\xE1tico (Sistema)",
          pt: "Portugu\xEAs",
          en: "English",
          es: "Espa\xF1ol"
        },
        piper_path: {
          title: "Caminho do execut\xE1vel do Piper",
          description: "Caminho absoluto para o bin\xE1rio do Piper (ex: C:\\piper\\piper.exe). Os modelos .onnx ser\xE3o detectados automaticamente no mesmo diret\xF3rio.",
          not_file: "O caminho fornecido n\xE3o \xE9 um arquivo.",
          missing: "O execut\xE1vel fornecido n\xE3o existe no disco."
        },
        voice_model: {
          title: "Voz padr\xE3o",
          loading: "Buscando modelos .onnx...",
          found: "Modelos .onnx encontrados no diret\xF3rio do execut\xE1vel do Piper.",
          select: "- selecione um modelo -",
          none: "Nenhum .onnx encontrado"
        },
        highlight_color: {
          title: "Cor de destaque",
          description: "Cor do realce visual aplicado ao par\xE1grafo sendo narrado.",
          green: "Verde (Padr\xE3o)",
          yellow: "Amarelo Classic",
          blue: "Azul Foco",
          purple: "P\xFArpura Zen",
          orange: "\xC2mbar Outono"
        },
        teleprompter: {
          title: "Scroll autom\xE1tico (Teleprompter)",
          description: "Quando ativado, o editor rola automaticamente para acompanhar o par\xE1grafo sendo narrado. Desative para navegar manualmente sem interfer\xEAncia do player."
        },
        errors: {
          prefix: "Erro: {{error}}",
          unknown_directory: "Erro desconhecido ao ler o diret\xF3rio."
        }
      },
      widget: {
        aria: {
          expand_player: "Expandir player",
          minimize_player: "Minimizar player",
          play_pause: "Play / Pausar",
          stop_narration: "Parar narra\xE7\xE3o",
          chapters: "Cap\xEDtulos",
          tools: "Ferramentas"
        },
        status: {
          waiting: "Aguardando narra\xE7\xE3o...",
          playing: "Narrando nota...",
          paused: "Pausado"
        },
        tools: {
          summary_mode: "Modo Resumo",
          summary_mode_tooltip: "Modo Resumo: Quando ativado, o player ler\xE1 apenas os destaques (==texto==) desta nota.",
          teleprompter_mode: "Modo Teleprompter",
          teleprompter_mode_tooltip: "Modo Teleprompter: Quando ativado, o editor rola automaticamente acompanhando o par\xE1grafo narrado.",
          settings: "Configura\xE7\xF5es..."
        }
      },
      commands: {
        test_piper: "Testar Motor TTS (Piper)",
        narrate_current_note: "Narrar Nota Atual (Obsidian Voice)",
        toggle_play_pause: "Alternar Play/Pause (Obsidian Voice)",
        stop_narration: "Parar Narra\xE7\xE3o (Obsidian Voice)",
        toggle_highlights_only: "Obsidian Voice: Alternar leitura de destaques (Audio-Resumo)",
        play_from_selection: "Play/Narrate text from current selection",
        ribbon_narrate: "Narrar nota (Obsidian Voice)"
      },
      notices: {
        summary_mode: "Modo Audio-Resumo: {{state}}",
        teleprompter_mode: "Modo Teleprompter: {{state}}",
        enabled: "Ativado",
        disabled: "Desativado",
        narration_stopped: "Narra\xE7\xE3o interrompida.",
        no_active_note: "Nenhuma nota ativa encontrada.",
        empty_note: "A nota n\xE3o possui conte\xFAdo para narrar.",
        restarting: "Recome\xE7ando...",
        starting_narration: "Iniciando narra\xE7\xE3o da nota...",
        missing_configuration: "Obsidian Voice: Configure o caminho do Piper e a voz nas configura\xE7\xF5es do plugin.",
        piper_or_model_missing: "Obsidian Voice: Execut\xE1vel do Piper ou Modelo ONNX n\xE3o encontrado no caminho especificado.",
        narration_finished: "Narra\xE7\xE3o conclu\xEDda!",
        narration_error: "Erro na narra\xE7\xE3o: {{error}}",
        generating_audio: "Gerando \xE1udio...",
        audio_generated: "\xC1udio gerado com sucesso!",
        audio_generation_error: "Erro ao gerar \xE1udio: {{error}}",
        model_scan_error: "Obsidian Voice: {{error}}"
      },
      errors: {
        missing_translation: "Tradu\xE7\xE3o ausente: {{key}} ({{language}})"
      },
      logs: {}
    };
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsidianVoicePlugin
});
module.exports = __toCommonJS(main_exports);
var import_child_process = require("child_process");
var fs4 = __toESM(require("fs"));
var path3 = __toESM(require("path"));
var os = __toESM(require("os"));
var import_obsidian3 = require("obsidian");

// src/audio-player.ts
var fs = __toESM(require("fs"));
var ObsidianAudioPlayer = class {
  constructor(vault) {
    this.audio = null;
    this.currentChunk = null;
    this.vault = vault;
  }
  playFile(filePath, filename, onEnded) {
    this.stop();
    this.currentChunk = filename;
    this.audio = new Audio(filePath);
    this.audio.onended = () => {
      if (this.currentChunk) {
        this.cleanupChunk(this.currentChunk);
        this.currentChunk = null;
      }
      onEnded();
    };
    this.audio.play();
  }
  /** Retorna true se há um chunk de áudio ativo (tocando ou pausado). */
  isActive() {
    return this.audio !== null;
  }
  toggle() {
    if (!this.audio) return;
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
  /** Aplica velocidade de reprodução ao chunk ativo sem interromper o áudio. */
  setPlaybackRate(rate) {
    if (this.audio) this.audio.playbackRate = rate;
  }
  stop() {
    if (!this.audio) return;
    this.audio.pause();
    this.audio.src = "";
    this.audio = null;
    if (this.currentChunk) {
      this.cleanupChunk(this.currentChunk);
      this.currentChunk = null;
    }
  }
  async cleanupChunk(filename) {
    try {
      if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
        console.log("[Obsidian Voice] Arquivo tempor\xE1rio removido:", filename);
      }
    } catch (e) {
      console.warn("[Obsidian Voice] N\xE3o foi poss\xEDvel remover o chunk:", filename, e);
    }
  }
};

// src/queue.ts
var ObsidianVoiceQueue = class {
  constructor() {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;
    this.MAX_CHUNK_LENGTH = 500;
    /** Quando true, a fila é populada apenas com os destaques ==texto== da nota. */
    this.readOnlyHighlights = false;
  }
  startQueue(rawText) {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;
    if (this.readOnlyHighlights) {
      this.buildHighlightsQueue(rawText);
      this.buildChapters(rawText);
      return;
    }
    const rawLines = rawText.split(/\r?\n/);
    let inFrontmatter = false;
    let inCodeBlock = false;
    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      const trimmed = line.trim();
      if (i === 0 && trimmed === "---") {
        inFrontmatter = true;
        continue;
      }
      if (inFrontmatter) {
        if (trimmed === "---") {
          inFrontmatter = false;
        }
        continue;
      }
      if (trimmed.startsWith("```")) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) {
        continue;
      }
      const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const title = headingMatch[2].trim();
        this.chapters.push({
          title,
          chunkIndex: this.chunks.length,
          level
        });
      }
      const cleanLine = this.cleanLineMarkdown(line);
      if (!cleanLine) {
        continue;
      }
      if (cleanLine.length <= this.MAX_CHUNK_LENGTH) {
        this.chunks.push({
          index: this.chunks.length,
          text: cleanLine,
          startLine: i,
          endLine: i
        });
      } else {
        const subChunks = this.splitParagraph(cleanLine, this.MAX_CHUNK_LENGTH);
        for (const sub of subChunks) {
          this.chunks.push({
            index: this.chunks.length,
            text: sub,
            startLine: i,
            endLine: i
          });
        }
      }
    }
  }
  /**
   * Popula a fila exclusivamente com os trechos destacados (==texto==) da nota.
   * As tags == são removidas antes do envio ao TTS.
   */
  buildHighlightsQueue(rawText) {
    const regex = /==(.*?)==/g;
    const rawLines = rawText.split(/\r?\n/);
    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      let match;
      regex.lastIndex = 0;
      while ((match = regex.exec(line)) !== null) {
        const text = match[1].trim();
        if (!text) continue;
        const cleanText = this.cleanLineMarkdown(text);
        if (!cleanText) continue;
        this.chunks.push({
          index: this.chunks.length,
          text: cleanText,
          startLine: i,
          endLine: i
        });
      }
    }
  }
  /**
   * Extrai capítulos (H1-H3) do texto bruto e os associa ao primeiro chunk
   * que começa na linha do heading ou imediatamente após ela.
   * Funciona corretamente em ambos os modos (normal e readOnlyHighlights).
   */
  buildChapters(rawText) {
    const rawLines = rawText.split(/\r?\n/);
    let inFrontmatter = false;
    let inCodeBlock = false;
    for (let i = 0; i < rawLines.length; i++) {
      const trimmed = rawLines[i].trim();
      if (i === 0 && trimmed === "---") {
        inFrontmatter = true;
        continue;
      }
      if (inFrontmatter) {
        if (trimmed === "---") inFrontmatter = false;
        continue;
      }
      if (trimmed.startsWith("```")) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) continue;
      const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)/);
      if (!headingMatch) continue;
      const level = headingMatch[1].length;
      const title = headingMatch[2].trim();
      const chunkIndex = this.nextChunkAfterLine(i);
      this.chapters.push({ title, chunkIndex, level });
    }
  }
  /**
   * Retorna o índice do primeiro chunk com startLine >= targetLine.
   * Se nenhum chunk estiver à frente, retorna o índice do último chunk.
   */
  nextChunkAfterLine(targetLine) {
    for (let i = 0; i < this.chunks.length; i++) {
      if (this.chunks[i].startLine >= targetLine) return this.chunks[i].index;
    }
    return this.chunks.length > 0 ? this.chunks[this.chunks.length - 1].index : 0;
  }
  getNextChunk() {
    if (!this.hasMore()) return null;
    return this.chunks[this.currentIndex++];
  }
  hasMore() {
    return this.currentIndex < this.chunks.length;
  }
  reset() {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;
  }
  getChapters() {
    return this.chapters;
  }
  setCurrentIndex(index) {
    if (index >= 0 && index <= this.chunks.length) {
      this.currentIndex = index;
    }
  }
  getChunkIndexByLine(lineNumber) {
    if (this.chunks.length === 0) return 0;
    for (let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i];
      if (lineNumber >= chunk.startLine && lineNumber <= chunk.endLine) {
        return chunk.index;
      }
    }
    let closestIndex = 0;
    let minDiff = Infinity;
    for (let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i];
      const diff = Math.min(
        Math.abs(lineNumber - chunk.startLine),
        Math.abs(lineNumber - chunk.endLine)
      );
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = chunk.index;
      }
    }
    return closestIndex;
  }
  findChunkIndexByLineText(lineText) {
    if (!lineText || !lineText.trim()) return 0;
    const cleanedLine = this.cleanLineMarkdown(lineText).toLowerCase();
    if (!cleanedLine) return 0;
    const index = this.chunks.findIndex((chunk) => {
      const chunkText = chunk.text.toLowerCase();
      return chunkText.includes(cleanedLine) || cleanedLine.includes(chunkText);
    });
    return index !== -1 ? index : 0;
  }
  /**
   * Limpa marcações markdown e formatações de uma linha individual.
   */
  cleanLineMarkdown(line) {
    let clean = line.replace(/`([^`]+)`/g, "$1").replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/==(.*?)==/g, "$1").replace(/==/g, "").replace(/(\*\*|__)(.*?)\1/g, "$2").replace(/(\*|_)(.*?)\1/g, "$2").replace(/[*_]/g, "").replace(/^#+\s+/, "").replace(/^\s*[-*+]\s+/, "").replace(/^\s*\d+\.\s+/, "").replace(/(^|\s)#(?![0-9a-fA-F]{3,6}\b)([^\s#]+)/g, "$1").replace(/[""]/g, '"').replace(/['']/g, "'").replace(/—/g, ",").replace(/–/g, ",").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{1F1E6}-\u{1F1FF}]/gu, "");
    return clean.trim();
  }
  /**
   * Divide recursivamente um parágrafo longo em sub-blocos no ponto de pontuação mais próximo.
   */
  splitParagraph(text, maxLength) {
    if (text.length <= maxLength) {
      return [text];
    }
    let splitIndex = -1;
    const punctuations = [".", ";", "?", "!"];
    for (const punct of punctuations) {
      const idx = text.lastIndexOf(punct, maxLength - 1);
      if (idx > splitIndex) {
        splitIndex = idx;
      }
    }
    if (splitIndex !== -1) {
      const part12 = text.substring(0, splitIndex + 1).trim();
      const part22 = text.substring(splitIndex + 1).trim();
      if (part12 && part22) {
        return [part12, ...this.splitParagraph(part22, maxLength)];
      }
    }
    const spaceIdx = text.lastIndexOf(" ", maxLength - 1);
    if (spaceIdx !== -1) {
      const part12 = text.substring(0, spaceIdx).trim();
      const part22 = text.substring(spaceIdx + 1).trim();
      if (part12 && part22) {
        return [part12, ...this.splitParagraph(part22, maxLength)];
      }
    }
    const part1 = text.substring(0, maxLength).trim();
    const part2 = text.substring(maxLength).trim();
    return [part1, ...this.splitParagraph(part2, maxLength)];
  }
};

// src/player-widget.ts
var import_obsidian = require("obsidian");

// src/i18n.ts
var en = require_en();
var es = require_es();
var pt = require_pt();
var fallbackLanguage = "en";
var supportedLanguages = ["pt", "en", "es"];
var dictionaries = {
  en,
  pt,
  es
};
var appRef = null;
var configuredLanguage = "auto";
var activeLanguage = fallbackLanguage;
var listeners = /* @__PURE__ */ new Set();
var cache = /* @__PURE__ */ new Map();
var warnedMissingKeys = /* @__PURE__ */ new Set();
function initializeI18n(app, language) {
  appRef = app;
  configuredLanguage = normalizeLanguageSetting(language);
  activeLanguage = resolveActiveLanguage(configuredLanguage);
  cache.clear();
}
function t(key, vars) {
  const cacheKey = `${activeLanguage}:${key}`;
  let template = cache.get(cacheKey);
  if (!template) {
    template = resolveTranslation(key);
    if (typeof template !== "string") return key;
    cache.set(cacheKey, template);
  }
  return interpolate(template, vars);
}
function setLanguage(language) {
  const nextConfiguredLanguage = normalizeLanguageSetting(language);
  const nextActiveLanguage = resolveActiveLanguage(nextConfiguredLanguage);
  const changed = nextConfiguredLanguage !== configuredLanguage || nextActiveLanguage !== activeLanguage;
  configuredLanguage = nextConfiguredLanguage;
  activeLanguage = nextActiveLanguage;
  if (!changed) return;
  cache.clear();
  warnedMissingKeys.clear();
  for (const listener of listeners) {
    listener(activeLanguage, configuredLanguage);
  }
}
function onLanguageChanged(callback) {
  listeners.add(callback);
  return () => offLanguageChanged(callback);
}
function offLanguageChanged(callback) {
  listeners.delete(callback);
}
function normalizeLanguageSetting(language) {
  return language === "pt" || language === "en" || language === "es" ? language : "auto";
}
function resolveActiveLanguage(language) {
  if (language !== "auto") return language;
  const locale = getObsidianLocale().toLowerCase();
  const [baseLanguage] = locale.split("-");
  return isSupportedLanguage(baseLanguage) ? baseLanguage : fallbackLanguage;
}
function getObsidianLocale() {
  var _a, _b;
  const appWithLocale = appRef;
  const appLocale = (_a = appWithLocale == null ? void 0 : appWithLocale.getLocale) == null ? void 0 : _a.call(appWithLocale);
  if (appLocale) return appLocale;
  const navigatorLocale = (_b = globalThis.navigator) == null ? void 0 : _b.language;
  return navigatorLocale || fallbackLanguage;
}
function isSupportedLanguage(language) {
  return supportedLanguages.includes(language);
}
function resolveTranslation(key) {
  const translated = lookup(dictionaries[activeLanguage], key);
  if (typeof translated === "string") return translated;
  const fallback = lookup(dictionaries[fallbackLanguage], key);
  if (typeof fallback === "string") {
    warnMissingTranslation(key);
    return fallback;
  }
  warnMissingTranslation(key);
  return key;
}
function lookup(dictionary, key) {
  return key.split(".").reduce((current, part) => {
    if (!current || typeof current === "string") return void 0;
    return current[part];
  }, dictionary);
}
function interpolate(template, vars) {
  if (typeof template !== "string") return "";
  if (!vars) return template;
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_match, name) => {
    const value = vars[name];
    return value === null || value === void 0 ? "" : String(value);
  });
}
function warnMissingTranslation(key) {
  const warningKey = `${activeLanguage}:${key}`;
  if (warnedMissingKeys.has(warningKey)) return;
  warnedMissingKeys.add(warningKey);
  const missingTranslationTemplate = lookup(dictionaries[fallbackLanguage], "errors.missing_translation");
  console.warn(
    interpolate(missingTranslationTemplate || "Missing translation: {{key}} ({{language}})", {
      key,
      language: activeLanguage
    })
  );
}

// src/player-widget.ts
var SPEED_MIN = 1;
var SPEED_MAX = 2;
var SPEED_STEP = 0.1;
var SPEED_DEFAULT = 1;
var STYLE_ID = "obsidian-voice-styles";
function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes ov-wave-1 {
      0%   { transform: scale(1);    opacity: 0.7; }
      100% { transform: scale(1.9);  opacity: 0; }
    }
    @keyframes ov-wave-2 {
      0%   { transform: scale(1);    opacity: 0.5; }
      100% { transform: scale(2.5);  opacity: 0; }
    }
    @keyframes ov-icon-breathe {
      0%, 100% { transform: scale(1);    filter: drop-shadow(0 0 4px var(--text-success)); }
      50%       { transform: scale(1.18); filter: drop-shadow(0 0 10px var(--text-success)); }
    }
    .ov-ring {
      position: absolute; inset: 0;
      border-radius: 50%;
      border: 2px solid var(--text-success);
      opacity: 0;
      pointer-events: none;
    }
    .ov-ring-1.is-playing { animation: ov-wave-1 1.4s ease-out infinite; }
    .ov-ring-2.is-playing { animation: ov-wave-2 1.4s ease-out 0.4s infinite; }
    .ov-headphone-icon.is-playing svg {
      animation: ov-icon-breathe 1.4s ease-in-out infinite;
    }
    /* Posicionador fixo no canto inferior direito do widget */
    #obsidian-voice-widget {
      position:   fixed;
      bottom:     50px;
      right:      20px;
      z-index:    var(--layer-menu);
    }
    /* Container principal do widget */
    .ov-widget-container {
      position:   relative;
      display:    flex;
      align-items: center;
      overflow:   visible;
      box-sizing: border-box;
      /* Transi\xE7\xE3o apenas sobre border-radius para a anima\xE7\xE3o de forma */
      transition: border-radius 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    /* \xCDcone circular (headphone) \u2014 sempre compat\xEDvel com temas claro e escuro */
    .ov-headphone-icon {
      position:        relative;
      z-index:         2;
      width:           40px;
      height:          40px;
      flex-shrink:     0;
      display:         flex;
      align-items:     center;
      justify-content: center;
      background:      var(--background-secondary-alt);
      border:          1px solid var(--background-modifier-border);
      border-radius:   50% !important;
      box-shadow:      var(--shadow-l);
      cursor:          pointer;
      transition:      border-radius 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                       border-right-color 0.1s ease,
                       cursor 0.1s ease;
    }
    /* Painel de controles: usa max-width + opacity para n\xE3o quebrar overflow:visible */
    .ov-controls-panel {
      position:    relative;
      z-index:     1;
      margin-left: -20px;
      display:     flex;
      align-items: center;
      gap:         6px;
      font-family: var(--font-interface);
      font-size:   var(--font-ui-small);
      padding:     6px 12px 6px 25px;
      box-sizing:  border-box;
      /* Anima max-width para expandir/recolher sem afetar o overflow do pai */
      max-width:   0;
      opacity:     0;
      overflow:    hidden;
      pointer-events: none;
      background:  var(--background-secondary);
      border:      1px solid var(--background-modifier-border);
      border-left: none;
      border-radius: 0 24px 24px 0;
      box-shadow:  var(--shadow-l);
      white-space: nowrap;
      transition: max-width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                  opacity  0.2s ease 0.05s;
    }
    /* Estado expandido: painel vis\xEDvel */
    .ov-widget-container.is-expanded .ov-controls-panel {
      max-width:      500px;
      opacity:        1;
      overflow:       visible;
      pointer-events: auto;
    }
  `;
  document.head.appendChild(style);
}
var ObsidianVoiceWidget = class {
  constructor(onToggle, onStop, getChapters, onChapterClick, onResumoToggle, openSettings, onTeleprompterToggle, onSpeedChange) {
    this.widgetEl = null;
    this.miniIconEl = null;
    // Círculo do miniplayer
    this.ring1El = null;
    this.ring2El = null;
    this.controlsEl = null;
    // Área de controles expandida
    this.statusTextEl = null;
    this.toggleBtn = null;
    this.collapseBtn = null;
    this.stopBtn = null;
    this.chaptersBtn = null;
    this.toolsBtn = null;
    this.indicatorEl = null;
    this.chaptersDropEl = null;
    this.toolsDropEl = null;
    this.resumoToggleEl = null;
    this.teleprompterToggleEl = null;
    this.speedValue = SPEED_DEFAULT;
    this.isMinimized = true;
    // Começa minimizado
    this.resumoAtivo = false;
    this.teleprompterAtivo = true;
    // Ativado por padrão (espelha settings.enableTeleprompterMode)
    this.lastState = "aguardando";
    this.unsubscribeLanguageChanged = null;
    this.closeChaptersOnOutsideClick = (evt) => {
      if (this.chaptersDropEl && this.widgetEl && !this.widgetEl.contains(evt.target)) {
        this.closeChaptersDropdown();
      }
    };
    // ── Menu de Ferramentas ──────────────────────────────────
    this.closeOnEscape = (evt) => {
      if (evt.key === "Escape") {
        this.closeChaptersDropdown();
        this.closeToolsMenu();
      }
    };
    this.closeToolsOnOutsideClick = (evt) => {
      if (this.toolsDropEl && this.widgetEl && !this.widgetEl.contains(evt.target)) {
        this.closeToolsMenu();
      }
    };
    this.onToggle = onToggle;
    this.onStop = onStop;
    this.getChapters = getChapters;
    this.onChapterClick = onChapterClick;
    this.onResumoToggle = onResumoToggle;
    this.openSettings = openSettings;
    this.onTeleprompterToggle = onTeleprompterToggle;
    this.onSpeedChange = onSpeedChange;
    this.unsubscribeLanguageChanged = onLanguageChanged(() => this.refreshTexts());
  }
  getSpeed() {
    return this.speedValue;
  }
  /** Inicializa o widget permanente na tela (sempre minimizado ao criar). */
  show(state, container) {
    if (!this.widgetEl) {
      this.build(container);
    }
    this.applyState(state);
  }
  /** Remove o widget do DOM (chamado apenas no onunload). */
  hide() {
    this.closeChaptersDropdown();
    this.closeToolsMenu();
    if (this.widgetEl) {
      this.widgetEl.remove();
      this.widgetEl = null;
      this.miniIconEl = null;
      this.ring1El = null;
      this.ring2El = null;
      this.controlsEl = null;
      this.statusTextEl = null;
      this.toggleBtn = null;
      this.collapseBtn = null;
      this.stopBtn = null;
      this.chaptersBtn = null;
      this.toolsBtn = null;
      this.indicatorEl = null;
      this.resumoToggleEl = null;
    }
    if (this.unsubscribeLanguageChanged) {
      this.unsubscribeLanguageChanged();
      this.unsubscribeLanguageChanged = null;
    }
    const styleEl = document.getElementById(STYLE_ID);
    if (styleEl) styleEl.remove();
  }
  /** Sincroniza o toggle de Modo Resumo quando alterado externamente. */
  setResumoAtivo(active) {
    this.resumoAtivo = active;
    if (this.resumoToggleEl) this.resumoToggleEl.checked = active;
  }
  /** Sincroniza o toggle de Modo Teleprompter quando alterado externamente. */
  setTeleprompterAtivo(active) {
    this.teleprompterAtivo = active;
    if (this.teleprompterToggleEl) this.teleprompterToggleEl.checked = active;
  }
  // ── Construção do DOM ────────────────────────────────────
  build(container) {
    injectStyles();
    this.widgetEl = container.createDiv({ attr: { id: "obsidian-voice-widget" }, cls: "ov-widget-container" });
    this.widgetEl.classList.add(this.isMinimized ? "is-minimized" : "is-expanded");
    const miniWrapper = this.widgetEl.createDiv();
    Object.assign(miniWrapper.style, {
      position: "relative",
      width: "40px",
      height: "40px",
      flexShrink: "0"
    });
    this.ring1El = miniWrapper.createDiv({ cls: "ov-ring ov-ring-1" });
    this.ring2El = miniWrapper.createDiv({ cls: "ov-ring ov-ring-2" });
    this.miniIconEl = miniWrapper.createDiv({ cls: "clickable-icon ov-headphone-icon" });
    (0, import_obsidian.setIcon)(this.miniIconEl, "headphones");
    this.miniIconEl.setAttribute("aria-label", t("widget.aria.expand_player"));
    this.miniIconEl.addEventListener("click", () => {
      if (this.isMinimized) this.expand();
    });
    this.controlsEl = this.widgetEl.createDiv({ cls: "ov-controls-panel" });
    this.collapseBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.collapseBtn.setAttribute("aria-label", t("widget.aria.minimize_player"));
    (0, import_obsidian.setIcon)(this.collapseBtn, "chevron-right");
    this.collapseBtn.addEventListener("click", () => this.minimize());
    this.addSep(this.controlsEl);
    this.indicatorEl = this.controlsEl.createSpan();
    Object.assign(this.indicatorEl.style, {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      display: "inline-block",
      flexShrink: "0",
      background: "var(--text-faint)",
      transition: "background-color 0.2s ease, box-shadow 0.2s ease"
    });
    this.statusTextEl = this.controlsEl.createSpan();
    Object.assign(this.statusTextEl.style, {
      fontWeight: "500",
      minWidth: "110px"
    });
    this.statusTextEl.textContent = t("widget.status.waiting");
    this.toggleBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.toggleBtn.setAttribute("aria-label", t("widget.aria.play_pause"));
    (0, import_obsidian.setIcon)(this.toggleBtn, "play");
    this.toggleBtn.addEventListener("click", () => this.onToggle());
    this.stopBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.stopBtn.setAttribute("aria-label", t("widget.aria.stop_narration"));
    (0, import_obsidian.setIcon)(this.stopBtn, "square");
    this.stopBtn.addEventListener("click", () => this.onStop());
    this.chaptersBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.chaptersBtn.setAttribute("aria-label", t("widget.aria.chapters"));
    (0, import_obsidian.setIcon)(this.chaptersBtn, "list");
    this.chaptersBtn.addEventListener("click", (evt) => {
      evt.stopPropagation();
      this.closeToolsMenu();
      this.toggleChaptersDropdown();
    });
    this.addSep(this.controlsEl);
    const speedWrapper = this.controlsEl.createDiv();
    Object.assign(speedWrapper.style, { display: "flex", alignItems: "center", gap: "6px" });
    const slider = speedWrapper.createEl("input", { cls: "slider" });
    slider.type = "range";
    slider.min = String(SPEED_MIN);
    slider.max = String(SPEED_MAX);
    slider.step = String(SPEED_STEP);
    slider.value = String(this.speedValue);
    slider.style.width = "72px";
    const speedLabel = speedWrapper.createSpan();
    speedLabel.textContent = `${this.speedValue.toFixed(1)}x`;
    Object.assign(speedLabel.style, { minWidth: "30px", fontWeight: "600", textAlign: "right" });
    slider.addEventListener("input", () => {
      this.speedValue = parseFloat(slider.value);
      speedLabel.textContent = `${this.speedValue.toFixed(1)}x`;
      this.onSpeedChange(this.speedValue);
    });
    this.addSep(this.controlsEl);
    this.toolsBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.toolsBtn.setAttribute("aria-label", t("widget.aria.tools"));
    (0, import_obsidian.setIcon)(this.toolsBtn, "settings");
    this.toolsBtn.addEventListener("click", (evt) => {
      evt.stopPropagation();
      this.closeChaptersDropdown();
      this.toggleToolsMenu();
    });
    this.applyLayoutMode();
  }
  // ── Minimizar / Expandir ─────────────────────────────────
  minimize() {
    if (!this.widgetEl || !this.controlsEl || !this.miniIconEl) return;
    this.isMinimized = true;
    this.closeChaptersDropdown();
    this.closeToolsMenu();
    this.applyLayoutMode();
  }
  expand() {
    if (!this.widgetEl || !this.controlsEl) return;
    this.isMinimized = false;
    this.applyLayoutMode();
  }
  /** Aplica o layout correto de acordo com isMinimized. */
  applyLayoutMode() {
    if (!this.widgetEl || !this.miniIconEl || !this.controlsEl) return;
    if (this.isMinimized) {
      this.widgetEl.classList.remove("is-expanded");
      this.widgetEl.classList.add("is-minimized");
      this.miniIconEl.setAttribute("aria-label", t("widget.aria.expand_player"));
    } else {
      this.widgetEl.classList.remove("is-minimized");
      this.widgetEl.classList.add("is-expanded");
      this.miniIconEl.setAttribute("aria-label", "");
    }
  }
  // ── Dropdown de Capítulos ────────────────────────────────
  toggleChaptersDropdown() {
    if (this.chaptersDropEl) {
      this.closeChaptersDropdown();
      return;
    }
    if (!this.widgetEl) return;
    const chapters = this.getChapters();
    if (chapters.length === 0) return;
    this.chaptersDropEl = this.widgetEl.createDiv({ attr: { id: "obsidian-voice-chapters-dropdown" } });
    Object.assign(this.chaptersDropEl.style, {
      position: "absolute",
      right: "0",
      marginBottom: "8px",
      width: "260px",
      maxHeight: "180px",
      overflowY: "auto",
      background: "var(--background-secondary-alt)",
      border: "1px solid var(--background-modifier-border)",
      borderRadius: "8px",
      boxShadow: "var(--shadow-l)",
      padding: "8px 6px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      zIndex: "9999",
      pointerEvents: "auto"
    });
    const widgetRect = this.widgetEl.getBoundingClientRect();
    if (widgetRect.top < 200) {
      Object.assign(this.chaptersDropEl.style, { bottom: "auto", top: "100%", marginBottom: "0", marginTop: "8px" });
    } else {
      Object.assign(this.chaptersDropEl.style, { bottom: "100%", top: "auto", marginTop: "0" });
    }
    for (const chapter of chapters) {
      const itemEl = this.chaptersDropEl.createDiv();
      itemEl.setText(chapter.title);
      Object.assign(itemEl.style, {
        padding: "8px 12px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "var(--font-ui-small)",
        whiteSpace: "normal",
        wordBreak: "break-word",
        lineHeight: "1.4",
        display: "block",
        transition: "background-color 0.1s ease"
      });
      if (chapter.level === 2) itemEl.style.paddingLeft = "20px";
      else if (chapter.level === 3) itemEl.style.paddingLeft = "32px";
      itemEl.addEventListener("mouseenter", () => {
        itemEl.style.background = "var(--background-modifier-hover)";
      });
      itemEl.addEventListener("mouseleave", () => {
        itemEl.style.background = "transparent";
      });
      itemEl.addEventListener("click", (evt) => {
        evt.stopPropagation();
        this.onChapterClick(chapter.chunkIndex);
        this.closeChaptersDropdown();
      });
    }
    document.addEventListener("click", this.closeChaptersOnOutsideClick);
    document.addEventListener("keydown", this.closeOnEscape);
  }
  closeChaptersDropdown() {
    if (this.chaptersDropEl) {
      this.chaptersDropEl.remove();
      this.chaptersDropEl = null;
    }
    document.removeEventListener("click", this.closeChaptersOnOutsideClick);
    document.removeEventListener("keydown", this.closeOnEscape);
  }
  toggleToolsMenu() {
    if (this.toolsDropEl) {
      this.closeToolsMenu();
      return;
    }
    if (!this.widgetEl) return;
    this.toolsDropEl = this.widgetEl.createDiv({ attr: { id: "obsidian-voice-tools-menu" } });
    Object.assign(this.toolsDropEl.style, {
      position: "absolute",
      right: "0",
      marginBottom: "8px",
      width: "260px",
      background: "var(--background-secondary-alt)",
      border: "1px solid var(--background-modifier-border)",
      borderRadius: "8px",
      boxShadow: "var(--shadow-l)",
      padding: "10px 12px",
      zIndex: "9999",
      pointerEvents: "auto"
    });
    const widgetRect = this.widgetEl.getBoundingClientRect();
    if (widgetRect.top < 200) {
      Object.assign(this.toolsDropEl.style, { bottom: "auto", top: "100%", marginBottom: "0", marginTop: "8px" });
    } else {
      Object.assign(this.toolsDropEl.style, { bottom: "100%", top: "auto", marginTop: "0" });
    }
    const addToggleRow = (labelText, tooltip, inputId, checked, onChange) => {
      const row = this.toolsDropEl.createDiv();
      Object.assign(row.style, { display: "flex", alignItems: "center", gap: "8px" });
      const labelWrapper = row.createDiv();
      Object.assign(labelWrapper.style, { display: "flex", alignItems: "center", gap: "4px", flex: "1", minWidth: "0" });
      const label = labelWrapper.createSpan();
      label.textContent = labelText;
      label.style.fontWeight = "500";
      const infoIcon = labelWrapper.createDiv({ cls: "clickable-icon" });
      infoIcon.style.opacity = "0.6";
      infoIcon.style.flexShrink = "0";
      (0, import_obsidian.setIcon)(infoIcon, "info");
      infoIcon.setAttribute("aria-label", tooltip);
      infoIcon.setAttribute("data-tooltip-position", "top");
      const toggleEl = row.createEl("input");
      toggleEl.type = "checkbox";
      toggleEl.id = inputId;
      toggleEl.checked = checked;
      Object.assign(toggleEl.style, {
        width: "36px",
        height: "20px",
        cursor: "pointer",
        flexShrink: "0",
        accentColor: "var(--interactive-accent)"
      });
      toggleEl.addEventListener("change", () => onChange(toggleEl.checked));
      return toggleEl;
    };
    this.resumoToggleEl = addToggleRow(
      t("widget.tools.summary_mode"),
      t("widget.tools.summary_mode_tooltip"),
      "obsidian-voice-resumo-toggle",
      this.resumoAtivo,
      (v) => {
        this.resumoAtivo = v;
        this.onResumoToggle(v);
      }
    );
    const sep1 = this.toolsDropEl.createDiv();
    sep1.style.cssText = "height:1px; background:var(--background-modifier-border); margin:8px 0;";
    this.teleprompterToggleEl = addToggleRow(
      t("widget.tools.teleprompter_mode"),
      t("widget.tools.teleprompter_mode_tooltip"),
      "obsidian-voice-teleprompter-toggle",
      this.teleprompterAtivo,
      (v) => {
        this.teleprompterAtivo = v;
        this.onTeleprompterToggle(v);
      }
    );
    const sep2 = this.toolsDropEl.createDiv();
    sep2.style.cssText = "height:1px; background:var(--background-modifier-border); margin:8px 0;";
    const settingsItem = this.toolsDropEl.createDiv();
    settingsItem.setText(t("widget.tools.settings"));
    Object.assign(settingsItem.style, {
      padding: "6px 4px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "var(--font-ui-small)",
      fontWeight: "500"
    });
    settingsItem.addEventListener("mouseenter", () => {
      settingsItem.style.background = "var(--background-modifier-hover)";
    });
    settingsItem.addEventListener("mouseleave", () => {
      settingsItem.style.background = "transparent";
    });
    settingsItem.addEventListener("click", (evt) => {
      evt.stopPropagation();
      this.closeToolsMenu();
      this.openSettings();
    });
    document.addEventListener("click", this.closeToolsOnOutsideClick);
    document.addEventListener("keydown", this.closeOnEscape);
  }
  closeToolsMenu() {
    if (this.toolsDropEl) {
      this.toolsDropEl.remove();
      this.toolsDropEl = null;
      this.resumoToggleEl = null;
      this.teleprompterToggleEl = null;
    }
    document.removeEventListener("click", this.closeToolsOnOutsideClick);
    document.removeEventListener("keydown", this.closeOnEscape);
  }
  // ── Atualização de Estado ────────────────────────────────
  applyState(state) {
    this.lastState = state;
    const isTocando = state === "tocando";
    const isActive = state !== "aguardando";
    if (this.ring1El && this.ring2El) {
      this.ring1El.classList.toggle("is-playing", isTocando);
      this.ring2El.classList.toggle("is-playing", isTocando);
    }
    if (this.miniIconEl) {
      this.miniIconEl.classList.toggle("is-playing", isTocando);
    }
    if (!this.statusTextEl || !this.toggleBtn || !this.indicatorEl) return;
    if (!isActive) {
      this.statusTextEl.textContent = t("widget.status.waiting");
      (0, import_obsidian.setIcon)(this.toggleBtn, "play");
      Object.assign(this.indicatorEl.style, {
        background: "var(--text-faint)",
        boxShadow: "none"
      });
      return;
    }
    this.statusTextEl.textContent = isTocando ? t("widget.status.playing") : t("widget.status.paused");
    (0, import_obsidian.setIcon)(this.toggleBtn, isTocando ? "pause" : "play");
    Object.assign(this.indicatorEl.style, {
      background: isTocando ? "var(--text-success)" : "var(--text-warning)",
      boxShadow: isTocando ? "0 0 6px var(--text-success)" : "none"
    });
  }
  // ── Utilitários ──────────────────────────────────────────
  addSep(container) {
    const sep = container.createSpan();
    sep.style.cssText = "width:1px; height:16px; background:var(--background-modifier-border); flex-shrink:0;";
  }
  refreshTexts() {
    if (!this.widgetEl) return;
    if (this.collapseBtn) this.collapseBtn.setAttribute("aria-label", t("widget.aria.minimize_player"));
    if (this.toggleBtn) this.toggleBtn.setAttribute("aria-label", t("widget.aria.play_pause"));
    if (this.stopBtn) this.stopBtn.setAttribute("aria-label", t("widget.aria.stop_narration"));
    if (this.chaptersBtn) this.chaptersBtn.setAttribute("aria-label", t("widget.aria.chapters"));
    if (this.toolsBtn) this.toolsBtn.setAttribute("aria-label", t("widget.aria.tools"));
    this.applyLayoutMode();
    this.applyState(this.lastState);
    if (this.toolsDropEl) {
      this.closeToolsMenu();
      this.toggleToolsMenu();
    }
  }
};

// src/settings.ts
var fs2 = __toESM(require("fs"));
var path = __toESM(require("path"));
var import_obsidian2 = require("obsidian");
var DEFAULT_SETTINGS = {
  piperPath: "",
  selectedVoice: "",
  highlightColor: "green",
  enableTeleprompterMode: true,
  language: "auto"
};
async function listarModelos(piperPath) {
  if (!piperPath) return { modelos: [] };
  try {
    const isAbsolute3 = path.isAbsolute(piperPath);
    let dir = "";
    if (isAbsolute3) {
      try {
        const stats = await fs2.promises.stat(piperPath);
        if (stats.isFile()) {
          dir = path.dirname(piperPath);
        } else {
          return { modelos: [], erro: t("settings.piper_path.not_file") };
        }
      } catch (e) {
        return { modelos: [], erro: t("settings.piper_path.missing") };
      }
    } else {
      return { modelos: [] };
    }
    if (!dir) return { modelos: [] };
    const arquivos = await fs2.promises.readdir(dir);
    const arquivosOnnx = [];
    for (const f of arquivos) {
      if (f.endsWith(".onnx")) {
        const filePath = path.join(dir, f);
        try {
          const stats = await fs2.promises.stat(filePath);
          if (stats.isFile()) {
            arquivosOnnx.push(f);
          }
        } catch (e) {
        }
      }
    }
    const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
    arquivosOnnx.sort(collator.compare);
    return { modelos: arquivosOnnx };
  } catch (error) {
    return { modelos: [], erro: error.message || t("settings.errors.unknown_directory") };
  }
}
var ObsidianVoiceSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.dropdownContainer = null;
    this.debounceTimer = null;
    this.languageChangeHandler = () => this.display();
    this.plugin = plugin;
    onLanguageChanged(this.languageChangeHandler);
    this.plugin.register(() => offLanguageChanged(this.languageChangeHandler));
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian2.Setting(containerEl).setName(t("settings.language.title")).setDesc(t("settings.language.description")).addDropdown((drop) => {
      drop.addOption("auto", t("settings.language.auto"));
      drop.addOption("pt", t("settings.language.pt"));
      drop.addOption("en", t("settings.language.en"));
      drop.addOption("es", t("settings.language.es"));
      drop.setValue(this.plugin.settings.language || "auto");
      drop.onChange(async (value) => {
        this.plugin.settings.language = value;
        await this.plugin.saveSettings();
        setLanguage(value);
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("settings.piper_path.title")).setDesc(t("settings.piper_path.description")).addText((text) => {
      text.setPlaceholder("C:\\piper\\piper.exe").setValue(this.plugin.settings.piperPath).onChange((value) => {
        const rawValue = value.trim();
        this.plugin.settings.piperPath = rawValue;
        this.plugin.saveSettings();
        if (this.debounceTimer) clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
          this.reconstruirDropdown(rawValue);
        }, 500);
      });
    });
    this.dropdownContainer = containerEl.createDiv();
    this.reconstruirDropdown(this.plugin.settings.piperPath);
    new import_obsidian2.Setting(containerEl).setName(t("settings.highlight_color.title")).setDesc(t("settings.highlight_color.description")).addDropdown((drop) => {
      drop.addOption("green", t("settings.highlight_color.green"));
      drop.addOption("yellow", t("settings.highlight_color.yellow"));
      drop.addOption("blue", t("settings.highlight_color.blue"));
      drop.addOption("purple", t("settings.highlight_color.purple"));
      drop.addOption("orange", t("settings.highlight_color.orange"));
      drop.setValue(this.plugin.settings.highlightColor || "green");
      drop.onChange(async (value) => {
        this.plugin.settings.highlightColor = value;
        await this.plugin.saveSettings();
        this.plugin.updateHighlightVariables();
      });
    });
    new import_obsidian2.Setting(containerEl).setName(t("settings.teleprompter.title")).setDesc(t("settings.teleprompter.description")).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.enableTeleprompterMode).onChange(async (value) => {
        this.plugin.settings.enableTeleprompterMode = value;
        await this.plugin.saveSettings();
      });
    });
  }
  // Reconstrói o container inteiro do Dropdown
  async reconstruirDropdown(piperPath) {
    if (!this.dropdownContainer) return;
    this.dropdownContainer.empty();
    const setting = new import_obsidian2.Setting(this.dropdownContainer).setName(t("settings.voice_model.title")).setDesc(t("settings.voice_model.loading"));
    const resultado = await listarModelos(piperPath);
    if (resultado.erro) {
      setting.setDesc(t("settings.errors.prefix", { error: resultado.erro }));
      new import_obsidian2.Notice(t("notices.model_scan_error", { error: resultado.erro }));
    } else {
      setting.setDesc(t("settings.voice_model.found"));
    }
    setting.addDropdown((drop) => {
      this.preencherDropdown(drop, resultado.modelos);
      drop.onChange(async (value) => {
        this.plugin.settings.selectedVoice = value;
        await this.plugin.saveSettings();
      });
    });
  }
  // Preenche o dropdown com os .onnx detectados
  preencherDropdown(drop, modelos) {
    drop.addOption("", modelos.length ? t("settings.voice_model.select") : t("settings.voice_model.none"));
    for (const modelo of modelos) {
      drop.addOption(modelo, modelo);
    }
    const valorAtual = this.plugin.settings.selectedVoice;
    if (modelos.includes(valorAtual)) {
      drop.setValue(valorAtual);
    } else {
      drop.setValue("");
    }
  }
};

// src/logger.ts
var fs3 = __toESM(require("fs"));
var path2 = __toESM(require("path"));
var VoiceLogger = class {
  constructor(vaultPath) {
    this.logPath = path2.resolve(vaultPath, "voice_debug.log");
  }
  writeLog(level, message) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const logLine = `[${timestamp}] [${level}] ${message}
`;
    try {
      fs3.appendFileSync(this.logPath, logLine, "utf-8");
    } catch (e) {
      console.error("[Obsidian Voice] Falha ao gravar log:", e);
    }
  }
  logTentativa(texto, comando) {
    const trecho = texto.length > 60 ? texto.substring(0, 60) + "..." : texto;
    this.writeLog("INFO", `Tentativa de execu\xE7\xE3o - Comando: ${comando} | Texto: "${trecho}"`);
  }
  logError(message) {
    this.writeLog("ERROR", `Erro do processo: ${message}`);
  }
  logExit(code) {
    this.writeLog("INFO", `Processo finalizado com c\xF3digo: ${code}`);
  }
  logDebug(message) {
    this.writeLog("DEBUG", message);
  }
};

// src/editor-highlighter.ts
var import_state = require("@codemirror/state");
var import_view = require("@codemirror/view");
var moduleLogger = null;
var highlightDiagnostics = {
  createCount: 0,
  updateCount: 0,
  effectCount: 0
};
function logHighlightDiagnostic(message, payload) {
  let serializedPayload = "";
  if (payload !== void 0) {
    try {
      serializedPayload = ` ${JSON.stringify(payload, null, 2)}`;
    } catch (error) {
      serializedPayload = ` [payload n\xE3o serializ\xE1vel: ${error instanceof Error ? error.message : String(error)}]`;
    }
  }
  moduleLogger == null ? void 0 : moduleLogger.logDebug(`[Diagnostico Highlight] ${message}${serializedPayload}`);
  if (payload === void 0) {
    console.log(`[Obsidian Voice Highlight Diagnostic] ${message}`);
  } else {
    console.log(`[Obsidian Voice Highlight Diagnostic] ${message}`, payload);
  }
}
function describeEditorStateExtensions(state) {
  var _a;
  const stateAny = state;
  const config = stateAny == null ? void 0 : stateAny.config;
  if (!config) {
    return {
      available: false,
      reason: "state.config n\xE3o est\xE1 acess\xEDvel"
    };
  }
  const fieldAddress = (_a = config.address) == null ? void 0 : _a[highlightField.id];
  const knownFieldIds = config.address ? Object.keys(config.address).filter((key) => config.address[key] != null) : [];
  return {
    available: true,
    highlightFieldId: highlightField.id,
    highlightFieldAddress: fieldAddress != null ? fieldAddress : null,
    highlightFieldPresentInConfig: fieldAddress != null,
    knownStateFieldIds: knownFieldIds,
    facetCount: Array.isArray(config.facets) ? config.facets.length : void 0,
    staticValuesCount: Array.isArray(config.staticValues) ? config.staticValues.length : void 0,
    dynamicSlotsCount: Array.isArray(config.dynamicSlots) ? config.dynamicSlots.length : void 0
  };
}
var setHighlightEffect = import_state.StateEffect.define();
var highlightField = import_state.StateField.define({
  create() {
    highlightDiagnostics.createCount += 1;
    logHighlightDiagnostic("highlightField.create() executado.", {
      createCount: highlightDiagnostics.createCount,
      updateCount: highlightDiagnostics.updateCount,
      effectCount: highlightDiagnostics.effectCount
    });
    return import_view.Decoration.none;
  },
  update(decorations, tr) {
    var _a, _b;
    highlightDiagnostics.updateCount += 1;
    logHighlightDiagnostic("highlightField.update() executado.", {
      createCount: highlightDiagnostics.createCount,
      updateCount: highlightDiagnostics.updateCount,
      effectCount: highlightDiagnostics.effectCount,
      effectsInTransaction: tr.effects.length,
      docChanged: tr.docChanged,
      selection: (_b = (_a = tr.state.selection) == null ? void 0 : _a.toJSON) == null ? void 0 : _b.call(_a)
    });
    decorations = decorations.map(tr.changes);
    if (tr.effects.length > 0) {
      moduleLogger == null ? void 0 : moduleLogger.logDebug(`[Field] update chamado. tr.effects.length = ${tr.effects.length}`);
      console.log("[Obsidian Voice Field] update chamado. Efeitos no tr:", tr.effects.length);
    }
    for (const effect of tr.effects) {
      if (effect.is(setHighlightEffect)) {
        highlightDiagnostics.effectCount += 1;
        logHighlightDiagnostic("setHighlightEffect chegou ao highlightField.update().", {
          effectValue: effect.value,
          createCount: highlightDiagnostics.createCount,
          updateCount: highlightDiagnostics.updateCount,
          effectCount: highlightDiagnostics.effectCount
        });
        moduleLogger == null ? void 0 : moduleLogger.logDebug(`[Field] setHighlightEffect recebido com valor: ${JSON.stringify(effect.value)}`);
        console.log("[Obsidian Voice Field] setHighlightEffect recebido no update:", effect.value);
        if (effect.value) {
          const { from, to } = effect.value;
          const deco = import_view.Decoration.mark({
            attributes: { class: "obsidian-voice-highlight" }
          });
          return import_view.Decoration.set([deco.range(from, to)]);
        } else {
          return import_view.Decoration.none;
        }
      }
    }
    return decorations;
  },
  provide: (field) => import_view.EditorView.decorations.from(field)
});
var EditorHighlighter = class {
  constructor() {
    this.lastSourceIndex = 0;
    this.logger = null;
  }
  setLogger(logger) {
    this.logger = logger;
    moduleLogger = logger;
  }
  getExtension() {
    return highlightField;
  }
  clearHighlight(editor) {
    const view = editor.cm;
    if (view) {
      view.dispatch({
        effects: setHighlightEffect.of(null)
      });
    }
    this.lastSourceIndex = 0;
  }
  highlightParagraph(editor, paragraphText, scrollEnabled = true) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    const briefText = paragraphText.substring(0, 40) + "...";
    (_a = this.logger) == null ? void 0 : _a.logDebug(`[Highlighter] highlightParagraph chamado para: "${briefText}"`);
    console.log("[Obsidian Voice Highlighter] highlightParagraph chamado para texto:", briefText);
    const view = editor.cm;
    if (!view) {
      (_b = this.logger) == null ? void 0 : _b.logDebug("[Highlighter] EditorView (cm) n\xE3o encontrado no editor.");
      console.warn("[Obsidian Voice Highlighter] EditorView (cm) n\xE3o encontrado no editor.");
      return;
    }
    const docText = view.state.doc.toString();
    (_c = this.logger) == null ? void 0 : _c.logDebug(`[Highlighter] Comprimento do documento: ${docText.length}`);
    console.log("[Obsidian Voice Highlighter] Comprimento do docText:", docText.length);
    const originalToAlphanum = [];
    for (let i = 0; i < docText.length; i++) {
      const char = docText[i];
      if (/^\p{L}|\p{N}$/u.test(char)) {
        originalToAlphanum.push({ char: char.toLowerCase(), origIdx: i });
      }
    }
    const sourceStr = originalToAlphanum.map((x) => x.char).join("");
    (_d = this.logger) == null ? void 0 : _d.logDebug(`[Highlighter] Comprimento da string normalizada do documento: ${sourceStr.length}`);
    console.log("[Obsidian Voice Highlighter] Comprimento da sourceStr normalizada:", sourceStr.length);
    const cleanTarget = [];
    for (let i = 0; i < paragraphText.length; i++) {
      const char = paragraphText[i];
      if (/^\p{L}|\p{N}$/u.test(char)) {
        cleanTarget.push(char.toLowerCase());
      }
    }
    const targetStr = cleanTarget.join("");
    (_e = this.logger) == null ? void 0 : _e.logDebug(`[Highlighter] Comprimento da string normalizada do par\xE1grafo: ${targetStr.length}`);
    console.log("[Obsidian Voice Highlighter] Comprimento da targetStr normalizada:", targetStr.length);
    if (!targetStr) {
      (_f = this.logger) == null ? void 0 : _f.logDebug("[Highlighter] targetStr normalizada est\xE1 vazia.");
      console.warn("[Obsidian Voice Highlighter] targetStr normalizada est\xE1 vazia.");
      return;
    }
    (_g = this.logger) == null ? void 0 : _g.logDebug(`[Highlighter] Procurando a partir de lastSourceIndex: ${this.lastSourceIndex}`);
    console.log("[Obsidian Voice Highlighter] Buscando a partir do \xEDndice:", this.lastSourceIndex);
    let matchIndex = sourceStr.indexOf(targetStr, this.lastSourceIndex);
    if (matchIndex === -1) {
      (_h = this.logger) == null ? void 0 : _h.logDebug("[Highlighter] Par\xE1grafo n\xE3o encontrado ap\xF3s lastSourceIndex. Buscando do in\xEDcio...");
      console.log("[Obsidian Voice Highlighter] Par\xE1grafo n\xE3o encontrado a partir do lastSourceIndex. Tentando do in\xEDcio...");
      matchIndex = sourceStr.indexOf(targetStr, 0);
    }
    if (matchIndex !== -1) {
      this.lastSourceIndex = matchIndex + targetStr.length;
      const from = originalToAlphanum[matchIndex].origIdx;
      const to = originalToAlphanum[matchIndex + targetStr.length - 1].origIdx + 1;
      const foundTextSample = docText.substring(from, to).substring(0, 40) + "...";
      (_i = this.logger) == null ? void 0 : _i.logDebug(`[Highlighter] Encontrado! Range original: [${from}, ${to}]. Texto correspondente: "${foundTextSample}"`);
      console.log(`[Obsidian Voice Highlighter] Par\xE1grafo encontrado! Range original: [${from}, ${to}]. Texto correspondente: "${foundTextSample}"`);
      const dispatchDiagnostics = {
        viewExists: !!view,
        stateExists: !!(view == null ? void 0 : view.state),
        createCount: highlightDiagnostics.createCount,
        updateCount: highlightDiagnostics.updateCount,
        effectCount: highlightDiagnostics.effectCount
      };
      try {
        const currentFieldValue = (_j = view.state) == null ? void 0 : _j.field(highlightField, false);
        dispatchDiagnostics.highlightFieldPresentInDispatchView = currentFieldValue !== void 0;
        dispatchDiagnostics.highlightFieldValueSummary = currentFieldValue ? {
          constructorName: (_k = currentFieldValue.constructor) == null ? void 0 : _k.name,
          isDecorationNone: currentFieldValue === import_view.Decoration.none
        } : currentFieldValue;
      } catch (error) {
        dispatchDiagnostics.highlightFieldReadError = error instanceof Error ? error.message : String(error);
      }
      dispatchDiagnostics.currentEditorStateExtensions = describeEditorStateExtensions(view.state);
      logHighlightDiagnostic("Relatorio antes de view.dispatch(setHighlightEffect).", dispatchDiagnostics);
      view.dispatch({
        effects: setHighlightEffect.of({ from, to })
      });
      (_l = this.logger) == null ? void 0 : _l.logDebug("[Highlighter] Efeito setHighlightEffect despachado.");
      console.log("[Obsidian Voice Highlighter] Efeito setHighlightEffect despachado.");
      if (scrollEnabled) {
        const rect = view.coordsAtPos(from);
        if (rect && view.scrollDOM) {
          const editorRect = view.scrollDOM.getBoundingClientRect();
          const targetTop = rect.top - editorRect.top + view.scrollDOM.scrollTop;
          const height = rect.bottom - rect.top;
          const finalScrollTop = targetTop - editorRect.height / 2 + height / 2;
          view.scrollDOM.scrollTo({
            top: finalScrollTop,
            behavior: "smooth"
          });
        } else {
          view.dispatch({
            effects: import_view.EditorView.scrollIntoView(from, { y: "center" })
          });
        }
      }
    } else {
      (_m = this.logger) == null ? void 0 : _m.logDebug(`[Highlighter] Par\xE1grafo n\xE3o p\xF4de ser localizado no documento. Buscado: "${targetStr.substring(0, 30)}..."`);
      console.warn("[Obsidian Voice Highlighter] Par\xE1grafo n\xE3o p\xF4de ser localizado no documento.");
    }
  }
};

// src/main.ts
var ObsidianVoicePlugin = class extends import_obsidian3.Plugin {
  constructor() {
    super(...arguments);
    this.queue = new ObsidianVoiceQueue();
    this.playerState = "aguardando";
    this.nextChunkPromise = null;
    this.piperProcess = null;
    this.currentParagraphText = "";
    this.activeEditor = null;
    this.lastNarratedPath = null;
    // Rastreia a nota narrada por último
    // ── Controle de Scroll Manual ─────────────────────────────
    this.isUserScrolling = false;
    this.userScrollTimeout = null;
    this.scrollListenerEl = null;
    // ── Controle de Scroll Manual ────────────────────────────
    this.onUserScrollActivity = () => {
      this.isUserScrolling = true;
      if (this.userScrollTimeout) clearTimeout(this.userScrollTimeout);
      this.userScrollTimeout = setTimeout(() => {
        this.isUserScrolling = false;
        this.userScrollTimeout = null;
      }, 1500);
    };
  }
  async onload() {
    console.log("[Obsidian Voice] Plugin carregado.");
    await this.loadSettings();
    initializeI18n(this.app, this.settings.language);
    this.updateHighlightVariables();
    this.highlighter = new EditorHighlighter();
    this.registerEditorExtension([highlightField]);
    this.audioPlayer = new ObsidianAudioPlayer(this.app.vault);
    let basePath = "";
    if (this.app.vault.adapter instanceof import_obsidian3.FileSystemAdapter) {
      basePath = this.app.vault.adapter.getBasePath();
    }
    this.logger = new VoiceLogger(basePath || process.cwd());
    this.highlighter.setLogger(this.logger);
    this.addRibbonIcon("headphones", t("commands.ribbon_narrate"), () => this.narrarNotaAtual());
    this.widget = new ObsidianVoiceWidget(
      () => this.togglePlayPause(),
      async () => this.pararNarracao(),
      () => this.queue.getChapters(),
      (chunkIndex) => this.jumpToChapter(chunkIndex),
      (active) => this.onResumoToggle(active),
      () => this.openSettingsTab(),
      (active) => this.onTeleprompterToggle(active),
      (speed) => this.onSpeedChange(speed)
    );
    this.widget.setTeleprompterAtivo(this.settings.enableTeleprompterMode);
    this.widget.show("aguardando", activeDocument.body);
    this.registerEvent(
      this.app.workspace.on("file-open", async (file) => {
        if (!file || this.lastNarratedPath && this.lastNarratedPath !== file.path) {
          await this.pararNarracaoSilenciosamente();
        }
      })
    );
    this.addSettingTab(new ObsidianVoiceSettingTab(this.app, this));
    this.addCommand({
      id: "testar-motor-tts-piper",
      name: t("commands.test_piper"),
      callback: () => this.runPiperTest()
    });
    this.addCommand({
      id: "narrar-nota-atual",
      name: t("commands.narrate_current_note"),
      callback: () => this.narrarNotaAtual()
    });
    this.addCommand({
      id: "alternar-play-pause",
      name: t("commands.toggle_play_pause"),
      callback: () => this.togglePlayPause()
    });
    this.addCommand({
      id: "parar-narracao",
      name: t("commands.stop_narration"),
      callback: async () => this.pararNarracao()
    });
    this.addCommand({
      id: "toggle-highlights-only",
      name: t("commands.toggle_highlights_only"),
      callback: () => {
        this.queue.readOnlyHighlights = !this.queue.readOnlyHighlights;
        const estado = this.queue.readOnlyHighlights ? t("notices.enabled") : t("notices.disabled");
        new import_obsidian3.Notice(t("notices.summary_mode", { state: estado }));
        this.widget.setResumoAtivo(this.queue.readOnlyHighlights);
        if (this.playerState === "tocando" || this.playerState === "pausado") {
          this.pararNarracao().then(() => this.narrarNotaAtual());
        }
      }
    });
    this.addCommand({
      id: "play-from-selection",
      name: t("commands.play_from_selection"),
      hotkeys: [],
      editorCallback: async (editor, view) => {
        const cursor = editor.getCursor();
        const currentLineText = editor.getLine(cursor.line);
        if (this.playerState === "tocando" || this.playerState === "pausado") {
          let targetIndex = this.queue.getChunkIndexByLine(cursor.line);
          if (targetIndex === 0 && cursor.line !== 0) {
            targetIndex = this.queue.findChunkIndexByLineText(currentLineText);
          }
          await this.jumpToChapter(targetIndex);
        } else {
          const valido = await this.validarConfiguracoes();
          if (!valido) return;
          const fullText = editor.getValue();
          this.activeEditor = editor;
          this.queue.startQueue(fullText);
          let targetIndex = this.queue.getChunkIndexByLine(cursor.line);
          if (targetIndex === 0 && cursor.line !== 0) {
            targetIndex = this.queue.findChunkIndexByLineText(currentLineText);
          }
          await this.jumpToChapter(targetIndex);
        }
      }
    });
    this.registerDomEvent(document, "click", (evt) => {
      if (!this.settings.enableTeleprompterMode) return;
      if (this.playerState !== "tocando") {
        return;
      }
      const target = evt.target;
      if (target && target.closest("#obsidian-voice-widget")) {
        return;
      }
      const activeView = this.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
      if (!activeView) return;
      const editor = activeView.editor;
      const view = editor.cm;
      if (!view) return;
      const pos = view.posAtCoords({ x: evt.clientX, y: evt.clientY });
      if (pos === null) return;
      try {
        const lineObj = view.state.doc.lineAt(pos);
        const lineNumber = lineObj.number - 1;
        this.jumpToLine(lineNumber);
      } catch (e) {
      }
    });
  }
  async loadSettings() {
    const data = await this.loadData();
    if (data && "enableChapterNavigation" in data) {
      data.enableTeleprompterMode = data.enableChapterNavigation;
      delete data.enableChapterNavigation;
      this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
      if (!this.settings.language) this.settings.language = "auto";
      await this.saveSettings();
    } else {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
      if (!this.settings.language) this.settings.language = "auto";
    }
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  updateHighlightVariables() {
    var _a;
    const isDark = document.body.classList.contains("theme-dark");
    const colorMap = {
      green: isDark ? "rgba(40, 160, 70, 0.4)" : "#cbeec9",
      yellow: isDark ? "rgba(215, 165, 40, 0.35)" : "#fff2cc",
      blue: isDark ? "rgba(45, 115, 210, 0.4)" : "#d0e1fd",
      purple: isDark ? "rgba(145, 70, 190, 0.4)" : "#ebd6fa",
      orange: isDark ? "rgba(210, 105, 30, 0.35)" : "#ffe0b2"
    };
    const selectedColor = (_a = colorMap[this.settings.highlightColor]) != null ? _a : colorMap.green;
    document.documentElement.style.setProperty("--ov-highlight-color", selectedColor);
  }
  openSettingsTab() {
    this.app.setting.open();
    this.app.setting.openTabById(this.manifest.id);
  }
  async onunload() {
    this.audioPlayer.stop();
    this.queue.reset();
    if (this.piperProcess) {
      this.piperProcess.kill();
      this.piperProcess = null;
    }
    if (this.userScrollTimeout) {
      clearTimeout(this.userScrollTimeout);
      this.userScrollTimeout = null;
    }
    this.unregisterScrollListeners();
    await this.cleanupPrefetchedChunk();
    this.widget.hide();
    this.activeEditor = this.getActiveEditor();
    if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
    this.activeEditor = null;
    console.log("[Obsidian Voice] Plugin descarregado.");
  }
  // ── Estado do Player ─────────────────────────────────────
  updatePlayerState(state) {
    this.playerState = state;
    this.widget.show(state, activeDocument.body);
  }
  async pararNarracao() {
    await this.pararNarracaoSilenciosamente();
    new import_obsidian3.Notice(t("notices.narration_stopped"));
    console.log("[Obsidian Voice] Narra\xE7\xE3o interrompida pelo usu\xE1rio.");
  }
  async pararNarracaoSilenciosamente() {
    this.queue.reset();
    this.audioPlayer.stop();
    if (this.piperProcess) {
      this.piperProcess.kill();
      this.piperProcess = null;
    }
    await this.cleanupPrefetchedChunk();
    this.unregisterScrollListeners();
    this.updatePlayerState("aguardando");
    this.activeEditor = this.getActiveEditor();
    if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
    this.activeEditor = null;
  }
  /** Callback do toggle de Modo Resumo no menu de ferramentas do widget. */
  onResumoToggle(active) {
    this.queue.readOnlyHighlights = active;
    const estado = active ? t("notices.enabled") : t("notices.disabled");
    new import_obsidian3.Notice(t("notices.summary_mode", { state: estado }));
    if (this.playerState === "tocando") {
      this.pararNarracao().then(() => this.narrarNotaAtual());
    } else if (this.playerState === "pausado") {
      const activeFile = this.app.workspace.getActiveFile();
      if (activeFile) {
        const editor = this.getActiveEditor();
        const line = editor ? editor.getCursor().line : 0;
        this.app.vault.cachedRead(activeFile).then((text) => {
          this.queue.startQueue(text);
          const targetIndex = this.queue.getChunkIndexByLine(line);
          this.queue.setCurrentIndex(targetIndex);
        });
      }
    }
  }
  /** Callback do toggle do Modo Teleprompter no menu de ferramentas do widget. */
  async onTeleprompterToggle(active) {
    this.settings.enableTeleprompterMode = active;
    await this.saveSettings();
    const estado = active ? t("notices.enabled") : t("notices.disabled");
    new import_obsidian3.Notice(t("notices.teleprompter_mode", { state: estado }));
  }
  /** Callback do slider de velocidade: aplica imediatamente no chunk em reprodução. */
  onSpeedChange(speed) {
    this.audioPlayer.setPlaybackRate(speed);
  }
  togglePlayPause() {
    if (this.playerState === "aguardando") {
      this.narrarNotaAtual();
      return;
    }
    const next = this.playerState === "tocando" ? "pausado" : "tocando";
    if (next === "pausado") {
      this.audioPlayer.toggle();
      this.updatePlayerState("pausado");
      this.activeEditor = this.getActiveEditor();
      if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
    } else {
      if (this.audioPlayer.isActive()) {
        this.audioPlayer.toggle();
        this.updatePlayerState("tocando");
        this.activeEditor = this.getActiveEditor();
        if (this.activeEditor) {
          this.highlighter.highlightParagraph(
            this.activeEditor,
            this.currentParagraphText,
            !this.isUserScrolling
          );
        }
      } else {
        this.updatePlayerState("tocando");
        if (!this.nextChunkPromise) {
          this.nextChunkPromise = this.prefetchNextChunk();
        }
        this.playNextParagraph();
      }
    }
  }
  // ── Narração Principal ───────────────────────────────────
  async narrarNotaAtual() {
    const activeFile = this.app.workspace.getActiveFile();
    if (!(activeFile instanceof import_obsidian3.TFile)) {
      new import_obsidian3.Notice(t("notices.no_active_note"));
      return;
    }
    this.activeEditor = this.getActiveEditor();
    if (!this.activeEditor) {
      this.logger.logDebug("[Main] narrarNotaAtual: nenhuma leaf com o arquivo ativo encontrada.");
      console.warn("[Obsidian Voice] Nenhuma leaf com o arquivo ativo encontrada \u2014 highlight desativado.");
    }
    const conteudo = await this.app.vault.read(activeFile);
    const textoLimpo = this.cleanMarkdown(conteudo);
    if (!textoLimpo) {
      new import_obsidian3.Notice(t("notices.empty_note"));
      return;
    }
    const valido = await this.validarConfiguracoes();
    if (!valido) return;
    this.queue.startQueue(conteudo);
    this.updatePlayerState("tocando");
    this.registerScrollListeners();
    const mesmaNote = this.lastNarratedPath === activeFile.path;
    new import_obsidian3.Notice(mesmaNote ? t("notices.restarting") : t("notices.starting_narration"));
    this.lastNarratedPath = activeFile.path;
    console.log(`[Obsidian Voice] Narrando: ${activeFile.name}`);
    this.nextChunkPromise = this.prefetchNextChunk();
    this.playNextParagraph();
  }
  cleanMarkdown(text) {
    return text.replace(/^---[\s\S]*?---\n?/m, "").replace(/```[\s\S]*?```/g, "").replace(/(?<![#\S])#[^\s#][^\s]*/g, "").replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1").trim();
  }
  // ── Validação ────────────────────────────────────────────
  async validarConfiguracoes() {
    const { piperPath, selectedVoice } = this.settings;
    if (!piperPath || !selectedVoice) {
      new import_obsidian3.Notice(t("notices.missing_configuration"));
      return false;
    }
    const isPiperCommand = !piperPath.includes("/") && !piperPath.includes("\\");
    const resolvedModel = this.resolveModelPath();
    const piperExiste = isPiperCommand || fs4.existsSync(piperPath);
    const modelExiste = !resolvedModel || fs4.existsSync(resolvedModel);
    if (!piperExiste || !modelExiste) {
      new import_obsidian3.Notice(t("notices.piper_or_model_missing"));
      return false;
    }
    return true;
  }
  resolveModelPath() {
    const { piperPath, selectedVoice } = this.settings;
    if (!selectedVoice || !piperPath) return "";
    const isPiperCommand = !piperPath.includes("/") && !piperPath.includes("\\");
    let modelDir = isPiperCommand ? "" : path3.dirname(piperPath);
    if (modelDir && !path3.isAbsolute(modelDir) && this.app.vault.adapter instanceof import_obsidian3.FileSystemAdapter) {
      const basePath = this.app.vault.adapter.getBasePath();
      modelDir = path3.resolve(basePath, modelDir);
    }
    return modelDir ? path3.join(modelDir, selectedVoice) : selectedVoice;
  }
  // ── Pipeline de Áudio com Pre-fetching ───────────────────
  async playNextParagraph() {
    if (this.playerState === "pausado") return;
    if (!this.nextChunkPromise) {
      this.nextChunkPromise = this.prefetchNextChunk();
    }
    const currentPromise = this.nextChunkPromise;
    this.nextChunkPromise = null;
    const chunk = await currentPromise;
    if (chunk === null) {
      this.queue.reset();
      this.updatePlayerState("aguardando");
      this.activeEditor = this.getActiveEditor();
      if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
      this.activeEditor = null;
      new import_obsidian3.Notice(t("notices.narration_finished"));
      console.log("[Obsidian Voice] Fila encerrada.");
      return;
    }
    if (chunk.error) {
      this.queue.reset();
      this.updatePlayerState("aguardando");
      this.activeEditor = this.getActiveEditor();
      if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
      this.activeEditor = null;
      new import_obsidian3.Notice(t("notices.narration_error", { error: chunk.error }));
      console.error("[Obsidian Voice] Erro no chunk:", chunk.error);
      try {
        if (fs4.existsSync(chunk.absolutePath)) fs4.unlinkSync(chunk.absolutePath);
      } catch (_) {
      }
      return;
    }
    if (this.playerState === "pausado") {
      this.nextChunkPromise = Promise.resolve(chunk);
      return;
    }
    this.nextChunkPromise = this.prefetchNextChunk();
    this.currentParagraphText = chunk.text;
    this.activeEditor = this.getActiveEditor();
    if (this.activeEditor) {
      const scrollEnabled = this.settings.enableTeleprompterMode && !this.isUserScrolling;
      this.highlighter.highlightParagraph(this.activeEditor, chunk.text, scrollEnabled);
    } else {
      this.logger.logDebug(`[Main] playNextParagraph: activeEditor \xE9 null, highlight ignorado para: "${chunk.text.substring(0, 40)}"`);
      console.warn("[Obsidian Voice] activeEditor \xE9 null \u2014 highlight ignorado.");
    }
    console.log(`[Obsidian Voice] Reproduzindo chunk: ${chunk.resourcePath}`);
    this.audioPlayer.playFile(chunk.resourcePath, chunk.absolutePath, () => {
      this.playNextParagraph();
    });
  }
  async jumpToLine(lineNumber) {
    console.log(`[Obsidian Voice] Pulando para a linha: ${lineNumber}`);
    this.audioPlayer.stop();
    await this.cleanupPrefetchedChunk();
    const targetIndex = this.queue.getChunkIndexByLine(lineNumber);
    this.queue.setCurrentIndex(targetIndex);
    this.updatePlayerState("tocando");
    this.nextChunkPromise = this.prefetchNextChunk();
    this.playNextParagraph();
  }
  async jumpToChapter(chunkIndex) {
    console.log(`[Obsidian Voice] Pulando para o cap\xEDtulo no chunk index: ${chunkIndex}`);
    this.audioPlayer.stop();
    await this.cleanupPrefetchedChunk();
    this.queue.setCurrentIndex(chunkIndex);
    this.updatePlayerState("tocando");
    this.nextChunkPromise = this.prefetchNextChunk();
    this.playNextParagraph();
  }
  prefetchNextChunk() {
    const chunk = this.queue.getNextChunk();
    if (chunk === null) return Promise.resolve(null);
    const cacheDir = path3.join(os.tmpdir(), "ObsidianVoiceCache");
    if (!fs4.existsSync(cacheDir)) fs4.mkdirSync(cacheDir, { recursive: true });
    const chunkFilename = `voice_chunk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.wav`;
    const absoluteChunkPath = path3.join(cacheDir, chunkFilename);
    const speed = this.widget.getSpeed();
    return new Promise((resolve3) => {
      this.runPiper(chunk.text, absoluteChunkPath, speed, {
        onSuccess: () => {
          const resourcePath = this.toResourcePath(absoluteChunkPath);
          resolve3({ resourcePath, absolutePath: absoluteChunkPath, filename: chunkFilename, text: chunk.text });
        },
        onError: (msg) => {
          console.error("[Obsidian Voice] Erro ao pr\xE9-gerar chunk:", msg);
          resolve3({ resourcePath: "", absolutePath: absoluteChunkPath, filename: chunkFilename, text: chunk.text, error: msg });
        }
      });
    });
  }
  toResourcePath(absolutePath) {
    if (this.app.vault.adapter instanceof import_obsidian3.FileSystemAdapter) {
      const basePath = this.app.vault.adapter.getBasePath();
      const relativePath = path3.relative(basePath, absolutePath);
      return this.app.vault.adapter.getResourcePath(relativePath);
    }
    return `app://local/${absolutePath.replace(/\\/g, "/").replace(/^([A-Za-z]):/, "$1%3A")}`;
  }
  async cleanupPrefetchedChunk() {
    if (!this.nextChunkPromise) return;
    const chunk = await this.nextChunkPromise;
    this.nextChunkPromise = null;
    if (chunk == null ? void 0 : chunk.absolutePath) {
      try {
        if (fs4.existsSync(chunk.absolutePath)) {
          fs4.unlinkSync(chunk.absolutePath);
          console.log("[Obsidian Voice] Chunk pr\xE9-gerado removido:", chunk.absolutePath);
        }
      } catch (e) {
        console.warn("[Obsidian Voice] N\xE3o foi poss\xEDvel remover o chunk pr\xE9-gerado:", e);
      }
    }
  }
  // ── Motor Piper ──────────────────────────────────────────
  runPiperTest() {
    const texto = "Teste de \xE1udio do Obsidian Voice";
    new import_obsidian3.Notice(t("notices.generating_audio"));
    const cacheDir = path3.join(os.tmpdir(), "ObsidianVoiceCache");
    if (!fs4.existsSync(cacheDir)) fs4.mkdirSync(cacheDir, { recursive: true });
    const testFile = path3.join(cacheDir, "teste.wav");
    this.runPiper(texto, testFile, 1, {
      onSuccess: () => {
        new import_obsidian3.Notice(t("notices.audio_generated"));
        try {
          if (fs4.existsSync(testFile)) fs4.unlinkSync(testFile);
        } catch (_) {
        }
      },
      onError: (msg) => new import_obsidian3.Notice(t("notices.audio_generation_error", { error: msg }))
    });
  }
  runPiper(texto, outputFile, speed, callbacks) {
    const { piperPath } = this.settings;
    const resolvedModel = this.resolveModelPath();
    const isPiperCommand = !piperPath.includes("/") && !piperPath.includes("\\");
    let resolvedPiper = piperPath;
    let basePath = "";
    if (this.app.vault.adapter instanceof import_obsidian3.FileSystemAdapter) {
      basePath = this.app.vault.adapter.getBasePath();
      if (!isPiperCommand && !path3.isAbsolute(piperPath)) {
        resolvedPiper = path3.resolve(basePath, piperPath);
      }
    }
    const lengthScale = (1 / speed).toFixed(4);
    const comando = `"${resolvedPiper}" --model "${resolvedModel}" --length_scale ${lengthScale} --output_file "${outputFile}"`;
    const options = basePath ? { cwd: basePath } : {};
    this.logger.logTentativa(texto, comando);
    const child = (0, import_child_process.exec)(comando, options, (erro, _stdout, stderr) => {
      this.piperProcess = null;
      if (erro) {
        this.logger.logError(stderr || erro.message);
        this.logger.logExit(erro.code || 1);
        callbacks.onError(erro.message);
        return;
      }
      this.logger.logExit(0);
      callbacks.onSuccess();
    });
    this.piperProcess = child;
    if (child.stdin) {
      child.stdin.on("error", (e) => this.logger.logError(`Erro no stdin do Piper: ${e.message}`));
      child.stdin.write(texto, "utf-8");
      child.stdin.end();
    }
  }
  getActiveEditor() {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) return null;
    let editor = null;
    this.app.workspace.iterateAllLeaves((leaf) => {
      var _a;
      if (leaf.view instanceof import_obsidian3.MarkdownView && ((_a = leaf.view.file) == null ? void 0 : _a.path) === activeFile.path) {
        editor = leaf.view.editor;
      }
    });
    return editor;
  }
  registerScrollListeners() {
    var _a;
    this.unregisterScrollListeners();
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
    const containerEl = (_a = activeView == null ? void 0 : activeView.containerEl) != null ? _a : null;
    if (!containerEl) return;
    this.scrollListenerEl = containerEl;
    const KEYS = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown"]);
    containerEl.addEventListener("wheel", this.onUserScrollActivity, { passive: true });
    containerEl.addEventListener("touchmove", this.onUserScrollActivity, { passive: true });
    containerEl.addEventListener("keydown", (evt) => {
      if (KEYS.has(evt.key)) this.onUserScrollActivity();
    });
  }
  unregisterScrollListeners() {
    if (!this.scrollListenerEl) return;
    this.scrollListenerEl.removeEventListener("wheel", this.onUserScrollActivity);
    this.scrollListenerEl.removeEventListener("touchmove", this.onUserScrollActivity);
    this.scrollListenerEl = null;
    this.isUserScrolling = false;
  }
};
//# sourceMappingURL=main.js.map