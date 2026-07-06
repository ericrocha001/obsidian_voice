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
        marketplace: {
          coming_soon: "Coming soon"
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
          settings: "Settings...",
          voice_engine: "Voice Engine"
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
        model_scan_error: "Obsidian Voice: {{error}}",
        engine_change_delayed: "Engine change will apply on the next narration.",
        engine_changed: "Voice engine changed to {{engine}}.",
        voice_activated: "Voice activated: {{voice}}",
        voice_removed: "Voice {{voice}} removed successfully."
      },
      confirmations: {
        remove_voice: "Are you sure you want to remove the voice {{voice}}? This will free up {{size}} MB of disk space.",
        remove_piper: "Are you sure you want to remove Piper? This will also remove all installed voices."
      },
      buttons: {
        remove: "Remove",
        removing: "Removing..."
      },
      errors: {
        missing_translation: "Missing translation: {{key}} ({{language}})",
        resource_guard: {
          insufficient_disk: "Insufficient disk space. Required: {{required}} bytes, available: {{available}} bytes.",
          incompatible_arch: "Incompatible processor architecture: {{arch}}. Supported architectures: {{supported}}.",
          incompatible_os: "Unsupported operating system: {{os}}.",
          manifest_signature_failed: "Manifest security signature verification failed. The file may have been tampered with.",
          disk_check_timeout: "Disk space check timed out. Please try again."
        },
        remove_voice_failed: "Failed to remove voice {{voice}}: {{error}}"
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
        marketplace: {
          coming_soon: "Pr\xF3ximamente"
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
          settings: "Configuraci\xF3n...",
          voice_engine: "Motor de Voz"
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
        model_scan_error: "Obsidian Voice: {{error}}",
        engine_change_delayed: "El cambio de motor se aplicar\xE1 en la pr\xF3xima narraci\xF3n.",
        engine_changed: "Motor de voz cambiado a {{engine}}.",
        voice_activated: "Voz activada: {{voice}}",
        voice_removed: "Voz {{voice}} eliminada con \xE9xito."
      },
      confirmations: {
        remove_voice: "\xBFEst\xE1s seguro de que deseas eliminar la voz {{voice}}? Esto liberar\xE1 {{size}} MB de espacio en disco.",
        remove_piper: "\xBFEst\xE1s seguro de que deseas eliminar Piper? Esto tambi\xE9n eliminar\xE1 todas las voces instaladas."
      },
      buttons: {
        remove: "Eliminar",
        removing: "Eliminando..."
      },
      errors: {
        missing_translation: "Traducci\xF3n faltante: {{key}} ({{language}})",
        resource_guard: {
          insufficient_disk: "Espacio en disco insuficiente. Requerido: {{required}} bytes, disponible: {{available}} bytes.",
          incompatible_arch: "Arquitectura de procesador incompatible: {{arch}}. Arquitecturas compatibles: {{supported}}.",
          incompatible_os: "Sistema operativo no compatible: {{os}}.",
          manifest_signature_failed: "Fall\xF3 la verificaci\xF3n de firma de seguridad del manifiesto. El archivo puede haber sido alterado.",
          disk_check_timeout: "La verificaci\xF3n de espacio en disco super\xF3 el tiempo l\xEDmite. Int\xE9ntelo de nuevo."
        },
        remove_voice_failed: "Error al eliminar la voz {{voice}}: {{error}}"
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
        marketplace: {
          coming_soon: "Em breve"
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
          settings: "Configura\xE7\xF5es...",
          voice_engine: "Motor de Voz"
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
        model_scan_error: "Obsidian Voice: {{error}}",
        engine_change_delayed: "A troca de motor ser\xE1 aplicada na pr\xF3xima narra\xE7\xE3o.",
        engine_changed: "Motor de voz alterado para {{engine}}.",
        voice_activated: "Voz ativada: {{voice}}",
        voice_removed: "Voz {{voice}} removida com sucesso."
      },
      confirmations: {
        remove_voice: "Tem certeza que deseja remover a voz {{voice}}? Isso liberar\xE1 {{size}} MB de espa\xE7o em disco.",
        remove_piper: "Tem certeza que deseja remover o Piper? Isso tamb\xE9m remover\xE1 todas as vozes instaladas."
      },
      buttons: {
        remove: "Remover",
        removing: "Removendo..."
      },
      errors: {
        missing_translation: "Tradu\xE7\xE3o ausente: {{key}} ({{language}})",
        resource_guard: {
          insufficient_disk: "Espa\xE7o em disco insuficiente. Necess\xE1rio: {{required}} bytes, dispon\xEDvel: {{available}} bytes.",
          incompatible_arch: "Arquitetura de processador incompat\xEDvel: {{arch}}. Arquiteturas suportadas: {{supported}}.",
          incompatible_os: "Sistema operacional n\xE3o suportado: {{os}}.",
          manifest_signature_failed: "Falha na verifica\xE7\xE3o de assinatura de seguran\xE7a do manifesto. O arquivo pode ter sido adulterado.",
          disk_check_timeout: "Verifica\xE7\xE3o de espa\xE7o em disco excedeu o tempo limite. Tente novamente."
        },
        remove_voice_failed: "Falha ao remover voz {{voice}}: {{error}}"
      },
      logs: {}
    };
  }
});

// node_modules/events-universal/default.js
var require_default = __commonJS({
  "node_modules/events-universal/default.js"(exports2, module2) {
    "use strict";
    module2.exports = require("events");
  }
});

// node_modules/fast-fifo/fixed-size.js
var require_fixed_size = __commonJS({
  "node_modules/fast-fifo/fixed-size.js"(exports2, module2) {
    "use strict";
    module2.exports = class FixedFIFO {
      constructor(hwm) {
        if (!(hwm > 0) || (hwm - 1 & hwm) !== 0) throw new Error("Max size for a FixedFIFO should be a power of two");
        this.buffer = new Array(hwm);
        this.mask = hwm - 1;
        this.top = 0;
        this.btm = 0;
        this.next = null;
      }
      clear() {
        this.top = this.btm = 0;
        this.next = null;
        this.buffer.fill(void 0);
      }
      push(data) {
        if (this.buffer[this.top] !== void 0) return false;
        this.buffer[this.top] = data;
        this.top = this.top + 1 & this.mask;
        return true;
      }
      shift() {
        const last = this.buffer[this.btm];
        if (last === void 0) return void 0;
        this.buffer[this.btm] = void 0;
        this.btm = this.btm + 1 & this.mask;
        return last;
      }
      peek() {
        return this.buffer[this.btm];
      }
      isEmpty() {
        return this.buffer[this.btm] === void 0;
      }
    };
  }
});

// node_modules/fast-fifo/index.js
var require_fast_fifo = __commonJS({
  "node_modules/fast-fifo/index.js"(exports2, module2) {
    "use strict";
    var FixedFIFO = require_fixed_size();
    module2.exports = class FastFIFO {
      constructor(hwm) {
        this.hwm = hwm || 16;
        this.head = new FixedFIFO(this.hwm);
        this.tail = this.head;
        this.length = 0;
      }
      clear() {
        this.head = this.tail;
        this.head.clear();
        this.length = 0;
      }
      push(val) {
        this.length++;
        if (!this.head.push(val)) {
          const prev = this.head;
          this.head = prev.next = new FixedFIFO(2 * this.head.buffer.length);
          this.head.push(val);
        }
      }
      shift() {
        if (this.length !== 0) this.length--;
        const val = this.tail.shift();
        if (val === void 0 && this.tail.next) {
          const next = this.tail.next;
          this.tail.next = null;
          this.tail = next;
          return this.tail.shift();
        }
        return val;
      }
      peek() {
        const val = this.tail.peek();
        if (val === void 0 && this.tail.next) return this.tail.next.peek();
        return val;
      }
      isEmpty() {
        return this.length === 0;
      }
    };
  }
});

// node_modules/b4a/index.js
var require_b4a = __commonJS({
  "node_modules/b4a/index.js"(exports2, module2) {
    "use strict";
    function isBuffer(value) {
      return Buffer.isBuffer(value) || value instanceof Uint8Array;
    }
    function isEncoding(encoding) {
      return Buffer.isEncoding(encoding);
    }
    function alloc(size, fill2, encoding) {
      return Buffer.alloc(size, fill2, encoding);
    }
    function allocUnsafe(size) {
      return Buffer.allocUnsafe(size);
    }
    function allocUnsafeSlow(size) {
      return Buffer.allocUnsafeSlow(size);
    }
    function byteLength(string, encoding) {
      return Buffer.byteLength(string, encoding);
    }
    function compare(a, b) {
      return Buffer.compare(a, b);
    }
    function concat(buffers, totalLength) {
      return Buffer.concat(buffers, totalLength);
    }
    function copy(source, target, targetStart, start, end) {
      return toBuffer(source).copy(target, targetStart, start, end);
    }
    function equals(a, b) {
      return toBuffer(a).equals(b);
    }
    function fill(buffer, value, offset, end, encoding) {
      return toBuffer(buffer).fill(value, offset, end, encoding);
    }
    function from(value, encodingOrOffset, length) {
      return Buffer.from(value, encodingOrOffset, length);
    }
    function includes(buffer, value, byteOffset, encoding) {
      return toBuffer(buffer).includes(value, byteOffset, encoding);
    }
    function indexOf(buffer, value, byfeOffset, encoding) {
      return toBuffer(buffer).indexOf(value, byfeOffset, encoding);
    }
    function lastIndexOf(buffer, value, byteOffset, encoding) {
      return toBuffer(buffer).lastIndexOf(value, byteOffset, encoding);
    }
    function swap16(buffer) {
      return toBuffer(buffer).swap16();
    }
    function swap32(buffer) {
      return toBuffer(buffer).swap32();
    }
    function swap64(buffer) {
      return toBuffer(buffer).swap64();
    }
    function toBuffer(buffer) {
      if (Buffer.isBuffer(buffer)) return buffer;
      return Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    function toString(buffer, encoding, start, end) {
      return toBuffer(buffer).toString(encoding, start, end);
    }
    function write(buffer, string, offset, length, encoding) {
      return toBuffer(buffer).write(string, offset, length, encoding);
    }
    function readDoubleBE(buffer, offset) {
      return toBuffer(buffer).readDoubleBE(offset);
    }
    function readDoubleLE(buffer, offset) {
      return toBuffer(buffer).readDoubleLE(offset);
    }
    function readFloatBE(buffer, offset) {
      return toBuffer(buffer).readFloatBE(offset);
    }
    function readFloatLE(buffer, offset) {
      return toBuffer(buffer).readFloatLE(offset);
    }
    function readInt32BE(buffer, offset) {
      return toBuffer(buffer).readInt32BE(offset);
    }
    function readInt32LE(buffer, offset) {
      return toBuffer(buffer).readInt32LE(offset);
    }
    function readUInt32BE(buffer, offset) {
      return toBuffer(buffer).readUInt32BE(offset);
    }
    function readUInt32LE(buffer, offset) {
      return toBuffer(buffer).readUInt32LE(offset);
    }
    function writeDoubleBE(buffer, value, offset) {
      return toBuffer(buffer).writeDoubleBE(value, offset);
    }
    function writeDoubleLE(buffer, value, offset) {
      return toBuffer(buffer).writeDoubleLE(value, offset);
    }
    function writeFloatBE(buffer, value, offset) {
      return toBuffer(buffer).writeFloatBE(value, offset);
    }
    function writeFloatLE(buffer, value, offset) {
      return toBuffer(buffer).writeFloatLE(value, offset);
    }
    function writeInt32BE(buffer, value, offset) {
      return toBuffer(buffer).writeInt32BE(value, offset);
    }
    function writeInt32LE(buffer, value, offset) {
      return toBuffer(buffer).writeInt32LE(value, offset);
    }
    function writeUInt32BE(buffer, value, offset) {
      return toBuffer(buffer).writeUInt32BE(value, offset);
    }
    function writeUInt32LE(buffer, value, offset) {
      return toBuffer(buffer).writeUInt32LE(value, offset);
    }
    module2.exports = {
      isBuffer,
      isEncoding,
      alloc,
      allocUnsafe,
      allocUnsafeSlow,
      byteLength,
      compare,
      concat,
      copy,
      equals,
      fill,
      from,
      includes,
      indexOf,
      lastIndexOf,
      swap16,
      swap32,
      swap64,
      toBuffer,
      toString,
      write,
      readDoubleBE,
      readDoubleLE,
      readFloatBE,
      readFloatLE,
      readInt32BE,
      readInt32LE,
      readUInt32BE,
      readUInt32LE,
      writeDoubleBE,
      writeDoubleLE,
      writeFloatBE,
      writeFloatLE,
      writeInt32BE,
      writeInt32LE,
      writeUInt32BE,
      writeUInt32LE
    };
  }
});

// node_modules/text-decoder/lib/pass-through-decoder.js
var require_pass_through_decoder = __commonJS({
  "node_modules/text-decoder/lib/pass-through-decoder.js"(exports2, module2) {
    "use strict";
    var b4a = require_b4a();
    module2.exports = class PassThroughDecoder {
      constructor(encoding) {
        this.encoding = encoding;
      }
      get remaining() {
        return 0;
      }
      decode(data) {
        return b4a.toString(data, this.encoding);
      }
      flush() {
        return "";
      }
    };
  }
});

// node_modules/text-decoder/lib/utf8-decoder.js
var require_utf8_decoder = __commonJS({
  "node_modules/text-decoder/lib/utf8-decoder.js"(exports2, module2) {
    "use strict";
    var b4a = require_b4a();
    module2.exports = class UTF8Decoder {
      constructor() {
        this._reset();
      }
      get remaining() {
        return this.bytesSeen;
      }
      decode(data) {
        if (data.byteLength === 0) return "";
        if (this.bytesNeeded === 0 && trailingIncomplete(data, 0) === 0) {
          this.bytesSeen = trailingBytesSeen(data);
          return b4a.toString(data, "utf8");
        }
        let result = "";
        let start = 0;
        if (this.bytesNeeded > 0) {
          while (start < data.byteLength) {
            const byte = data[start];
            if (byte < this.lowerBoundary || byte > this.upperBoundary) {
              result += "\uFFFD";
              this._reset();
              break;
            }
            this.lowerBoundary = 128;
            this.upperBoundary = 191;
            this.codePoint = this.codePoint << 6 | byte & 63;
            this.bytesSeen++;
            start++;
            if (this.bytesSeen === this.bytesNeeded) {
              result += String.fromCodePoint(this.codePoint);
              this._reset();
              break;
            }
          }
          if (this.bytesNeeded > 0) return result;
        }
        const trailing = trailingIncomplete(data, start);
        const end = data.byteLength - trailing;
        if (end > start) result += b4a.toString(data, "utf8", start, end);
        for (let i = end; i < data.byteLength; i++) {
          const byte = data[i];
          if (this.bytesNeeded === 0) {
            if (byte <= 127) {
              this.bytesSeen = 0;
              result += String.fromCharCode(byte);
            } else if (byte >= 194 && byte <= 223) {
              this.bytesNeeded = 2;
              this.bytesSeen = 1;
              this.codePoint = byte & 31;
            } else if (byte >= 224 && byte <= 239) {
              if (byte === 224) this.lowerBoundary = 160;
              else if (byte === 237) this.upperBoundary = 159;
              this.bytesNeeded = 3;
              this.bytesSeen = 1;
              this.codePoint = byte & 15;
            } else if (byte >= 240 && byte <= 244) {
              if (byte === 240) this.lowerBoundary = 144;
              else if (byte === 244) this.upperBoundary = 143;
              this.bytesNeeded = 4;
              this.bytesSeen = 1;
              this.codePoint = byte & 7;
            } else {
              this.bytesSeen = 1;
              result += "\uFFFD";
            }
            continue;
          }
          if (byte < this.lowerBoundary || byte > this.upperBoundary) {
            result += "\uFFFD";
            i--;
            this._reset();
            continue;
          }
          this.lowerBoundary = 128;
          this.upperBoundary = 191;
          this.codePoint = this.codePoint << 6 | byte & 63;
          this.bytesSeen++;
          if (this.bytesSeen === this.bytesNeeded) {
            result += String.fromCodePoint(this.codePoint);
            this._reset();
          }
        }
        return result;
      }
      flush() {
        const result = this.bytesNeeded > 0 ? "\uFFFD" : "";
        this._reset();
        return result;
      }
      _reset() {
        this.codePoint = 0;
        this.bytesNeeded = 0;
        this.bytesSeen = 0;
        this.lowerBoundary = 128;
        this.upperBoundary = 191;
      }
    };
    function trailingIncomplete(data, start) {
      const len = data.byteLength;
      if (len <= start) return 0;
      const limit = Math.max(start, len - 4);
      let i = len - 1;
      while (i > limit && (data[i] & 192) === 128) i--;
      if (i < start) return 0;
      const byte = data[i];
      let needed;
      if (byte <= 127) return 0;
      if (byte >= 194 && byte <= 223) needed = 2;
      else if (byte >= 224 && byte <= 239) needed = 3;
      else if (byte >= 240 && byte <= 244) needed = 4;
      else return 0;
      const available = len - i;
      return available < needed ? available : 0;
    }
    function trailingBytesSeen(data) {
      const len = data.byteLength;
      if (len === 0) return 0;
      const last = data[len - 1];
      if (last <= 127) return 0;
      if ((last & 192) !== 128) return 1;
      const limit = Math.max(0, len - 4);
      let i = len - 2;
      while (i >= limit && (data[i] & 192) === 128) i--;
      if (i < 0) return 1;
      const first = data[i];
      let needed;
      if (first >= 194 && first <= 223) needed = 2;
      else if (first >= 224 && first <= 239) needed = 3;
      else if (first >= 240 && first <= 244) needed = 4;
      else return 1;
      if (len - i !== needed) return 1;
      if (needed >= 3) {
        const second = data[i + 1];
        if (first === 224 && second < 160) return 1;
        if (first === 237 && second > 159) return 1;
        if (first === 240 && second < 144) return 1;
        if (first === 244 && second > 143) return 1;
      }
      return 0;
    }
  }
});

// node_modules/text-decoder/index.js
var require_text_decoder = __commonJS({
  "node_modules/text-decoder/index.js"(exports2, module2) {
    "use strict";
    var PassThroughDecoder = require_pass_through_decoder();
    var UTF8Decoder = require_utf8_decoder();
    module2.exports = class TextDecoder {
      constructor(encoding = "utf8") {
        this.encoding = normalizeEncoding(encoding);
        switch (this.encoding) {
          case "utf8":
            this.decoder = new UTF8Decoder();
            break;
          case "utf16le":
          case "base64":
            throw new Error("Unsupported encoding: " + this.encoding);
          default:
            this.decoder = new PassThroughDecoder(this.encoding);
        }
      }
      get remaining() {
        return this.decoder.remaining;
      }
      push(data) {
        if (typeof data === "string") return data;
        return this.decoder.decode(data);
      }
      // For Node.js compatibility
      write(data) {
        return this.push(data);
      }
      end(data) {
        let result = "";
        if (data) result = this.push(data);
        result += this.decoder.flush();
        return result;
      }
    };
    function normalizeEncoding(encoding) {
      encoding = encoding.toLowerCase();
      switch (encoding) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return encoding;
        default:
          throw new Error("Unknown encoding: " + encoding);
      }
    }
  }
});

// node_modules/streamx/lib/errors.js
var require_errors = __commonJS({
  "node_modules/streamx/lib/errors.js"(exports2, module2) {
    "use strict";
    module2.exports = class StreamError extends Error {
      constructor(msg, code, fn = StreamError) {
        super(msg);
        this.code = code;
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, fn);
        }
      }
      static isStreamDestroyed(err) {
        return err && err.code === "STREAM_DESTROYED";
      }
      static isPrematureClose(err) {
        return err && err.code === "PREMATURE_CLOSE";
      }
      static isAborted(err) {
        return err && err.code === "ABORTED";
      }
      static isBadArgument(err) {
        return err && err.code === "BAD_ARGUMENT";
      }
      get name() {
        return "StreamError";
      }
      static STREAM_DESTROYED() {
        return new StreamError("Stream was destroyed", "STREAM_DESTROYED", StreamError.STREAM_DESTROYED);
      }
      static PREMATURE_CLOSE(msg = "Premature close") {
        return new StreamError(msg, "PREMATURE_CLOSE", StreamError.PREMATURE_CLOSE);
      }
      static ABORTED() {
        return new StreamError("Stream aborted", "ABORTED", StreamError.ABORTED);
      }
      static BAD_ARGUMENT(msg = "Bad argument") {
        return new StreamError(msg, "BAD_ARGUMENT", StreamError.BAD_ARGUMENT);
      }
    };
  }
});

// node_modules/streamx/index.js
var require_streamx = __commonJS({
  "node_modules/streamx/index.js"(exports2, module2) {
    "use strict";
    var { EventEmitter: EventEmitter2 } = require_default();
    var FIFO = require_fast_fifo();
    var TextDecoder = require_text_decoder();
    var StreamError = require_errors();
    var qmt = typeof queueMicrotask === "undefined" ? (fn) => global.process.nextTick(fn) : queueMicrotask;
    var MAX = (1 << 29) - 1;
    var OPENING = 1;
    var PREDESTROYING = 2;
    var DESTROYING = 4;
    var DESTROYED = 8;
    var NOT_OPENING = MAX ^ OPENING;
    var NOT_PREDESTROYING = MAX ^ PREDESTROYING;
    var READ_ACTIVE = 1 << 4;
    var READ_UPDATING = 2 << 4;
    var READ_PRIMARY = 4 << 4;
    var READ_QUEUED = 8 << 4;
    var READ_RESUMED = 16 << 4;
    var READ_PIPE_DRAINED = 32 << 4;
    var READ_ENDING = 64 << 4;
    var READ_EMIT_DATA = 128 << 4;
    var READ_EMIT_READABLE = 256 << 4;
    var READ_EMITTED_READABLE = 512 << 4;
    var READ_DONE = 1024 << 4;
    var READ_NEXT_TICK = 2048 << 4;
    var READ_NEEDS_PUSH = 4096 << 4;
    var READ_READ_AHEAD = 8192 << 4;
    var READ_FLOWING = READ_RESUMED | READ_PIPE_DRAINED;
    var READ_ACTIVE_AND_NEEDS_PUSH = READ_ACTIVE | READ_NEEDS_PUSH;
    var READ_PRIMARY_AND_ACTIVE = READ_PRIMARY | READ_ACTIVE;
    var READ_EMIT_READABLE_AND_QUEUED = READ_EMIT_READABLE | READ_QUEUED;
    var READ_RESUMED_READ_AHEAD = READ_RESUMED | READ_READ_AHEAD;
    var READ_NOT_ACTIVE = MAX ^ READ_ACTIVE;
    var READ_NON_PRIMARY = MAX ^ READ_PRIMARY;
    var READ_NON_PRIMARY_AND_PUSHED = MAX ^ (READ_PRIMARY | READ_NEEDS_PUSH);
    var READ_PUSHED = MAX ^ READ_NEEDS_PUSH;
    var READ_PAUSED = MAX ^ READ_RESUMED;
    var READ_NOT_QUEUED = MAX ^ (READ_QUEUED | READ_EMITTED_READABLE);
    var READ_NOT_ENDING = MAX ^ READ_ENDING;
    var READ_PIPE_NOT_DRAINED = MAX ^ READ_FLOWING;
    var READ_NOT_NEXT_TICK = MAX ^ READ_NEXT_TICK;
    var READ_NOT_UPDATING = MAX ^ READ_UPDATING;
    var READ_NO_READ_AHEAD = MAX ^ READ_READ_AHEAD;
    var READ_PAUSED_NO_READ_AHEAD = MAX ^ READ_RESUMED_READ_AHEAD;
    var WRITE_ACTIVE = 1 << 18;
    var WRITE_UPDATING = 2 << 18;
    var WRITE_PRIMARY = 4 << 18;
    var WRITE_QUEUED = 8 << 18;
    var WRITE_UNDRAINED = 16 << 18;
    var WRITE_DONE = 32 << 18;
    var WRITE_EMIT_DRAIN = 64 << 18;
    var WRITE_NEXT_TICK = 128 << 18;
    var WRITE_WRITING = 256 << 18;
    var WRITE_FINISHING = 512 << 18;
    var WRITE_CORKED = 1024 << 18;
    var WRITE_NOT_ACTIVE = MAX ^ (WRITE_ACTIVE | WRITE_WRITING);
    var WRITE_NON_PRIMARY = MAX ^ WRITE_PRIMARY;
    var WRITE_NOT_FINISHING = MAX ^ (WRITE_ACTIVE | WRITE_FINISHING);
    var WRITE_DRAINED = MAX ^ WRITE_UNDRAINED;
    var WRITE_NOT_QUEUED = MAX ^ WRITE_QUEUED;
    var WRITE_NOT_NEXT_TICK = MAX ^ WRITE_NEXT_TICK;
    var WRITE_NOT_UPDATING = MAX ^ WRITE_UPDATING;
    var WRITE_NOT_CORKED = MAX ^ WRITE_CORKED;
    var ACTIVE = READ_ACTIVE | WRITE_ACTIVE;
    var NOT_ACTIVE = MAX ^ ACTIVE;
    var DONE = READ_DONE | WRITE_DONE;
    var DESTROY_STATUS = DESTROYING | DESTROYED | PREDESTROYING;
    var OPEN_STATUS = DESTROY_STATUS | OPENING;
    var AUTO_DESTROY = DESTROY_STATUS | DONE;
    var NON_PRIMARY = WRITE_NON_PRIMARY & READ_NON_PRIMARY;
    var ACTIVE_OR_TICKING = WRITE_NEXT_TICK | READ_NEXT_TICK;
    var TICKING = ACTIVE_OR_TICKING & NOT_ACTIVE;
    var IS_OPENING = OPEN_STATUS | TICKING;
    var READ_PRIMARY_STATUS = OPEN_STATUS | READ_ENDING | READ_DONE;
    var READ_STATUS = OPEN_STATUS | READ_DONE | READ_QUEUED;
    var READ_ENDING_STATUS = OPEN_STATUS | READ_ENDING | READ_QUEUED;
    var READ_READABLE_STATUS = OPEN_STATUS | READ_EMIT_READABLE | READ_QUEUED | READ_EMITTED_READABLE;
    var SHOULD_NOT_READ = OPEN_STATUS | READ_ACTIVE | READ_ENDING | READ_DONE | READ_NEEDS_PUSH | READ_READ_AHEAD;
    var READ_BACKPRESSURE_STATUS = DESTROY_STATUS | READ_ENDING | READ_DONE;
    var READ_UPDATE_SYNC_STATUS = READ_UPDATING | OPEN_STATUS | READ_NEXT_TICK | READ_PRIMARY;
    var READ_NEXT_TICK_OR_OPENING = READ_NEXT_TICK | OPENING;
    var WRITE_PRIMARY_STATUS = OPEN_STATUS | WRITE_FINISHING | WRITE_DONE;
    var WRITE_QUEUED_AND_UNDRAINED = WRITE_QUEUED | WRITE_UNDRAINED;
    var WRITE_QUEUED_AND_ACTIVE = WRITE_QUEUED | WRITE_ACTIVE;
    var WRITE_DRAIN_STATUS = WRITE_QUEUED | WRITE_UNDRAINED | OPEN_STATUS | WRITE_ACTIVE;
    var WRITE_STATUS = OPEN_STATUS | WRITE_ACTIVE | WRITE_QUEUED | WRITE_CORKED;
    var WRITE_PRIMARY_AND_ACTIVE = WRITE_PRIMARY | WRITE_ACTIVE;
    var WRITE_ACTIVE_AND_WRITING = WRITE_ACTIVE | WRITE_WRITING;
    var WRITE_FINISHING_STATUS = OPEN_STATUS | WRITE_FINISHING | WRITE_QUEUED_AND_ACTIVE | WRITE_DONE;
    var WRITE_BACKPRESSURE_STATUS = WRITE_UNDRAINED | DESTROY_STATUS | WRITE_FINISHING | WRITE_DONE;
    var WRITE_UPDATE_SYNC_STATUS = WRITE_UPDATING | OPEN_STATUS | WRITE_NEXT_TICK | WRITE_PRIMARY;
    var WRITE_DROP_DATA = WRITE_FINISHING | WRITE_DONE | DESTROY_STATUS;
    var asyncIterator = Symbol.asyncIterator || /* @__PURE__ */ Symbol("asyncIterator");
    var WritableState = class {
      constructor(stream, { highWaterMark = 16384, map = null, mapWritable, byteLength, byteLengthWritable } = {}) {
        this.stream = stream;
        this.queue = new FIFO();
        this.highWaterMark = highWaterMark;
        this.buffered = 0;
        this.error = null;
        this.pipeline = null;
        this.drains = null;
        this.byteLength = byteLengthWritable || byteLength || defaultByteLength;
        this.map = mapWritable || map;
        this.afterWrite = afterWrite.bind(this);
        this.afterUpdateNextTick = updateWriteNT.bind(this);
      }
      get ending() {
        return (this.stream._duplexState & WRITE_FINISHING) !== 0;
      }
      get ended() {
        return (this.stream._duplexState & WRITE_DONE) !== 0;
      }
      push(data) {
        if ((this.stream._duplexState & WRITE_DROP_DATA) !== 0) return false;
        if (this.map !== null) data = this.map(data);
        this.buffered += this.byteLength(data);
        this.queue.push(data);
        if (this.buffered < this.highWaterMark) {
          this.stream._duplexState |= WRITE_QUEUED;
          return true;
        }
        this.stream._duplexState |= WRITE_QUEUED_AND_UNDRAINED;
        return false;
      }
      shift() {
        const data = this.queue.shift();
        this.buffered -= this.byteLength(data);
        if (this.buffered === 0) this.stream._duplexState &= WRITE_NOT_QUEUED;
        return data;
      }
      end(data) {
        if (typeof data === "function") {
          this.stream.once("finish", data);
        } else if (data !== void 0 && data !== null) {
          this.push(data);
        }
        this.stream._duplexState = (this.stream._duplexState | WRITE_FINISHING) & WRITE_NON_PRIMARY;
      }
      autoBatch(data, cb) {
        const buffer = [];
        const stream = this.stream;
        buffer.push(data);
        while ((stream._duplexState & WRITE_STATUS) === WRITE_QUEUED_AND_ACTIVE) {
          buffer.push(stream._writableState.shift());
        }
        if ((stream._duplexState & OPEN_STATUS) !== 0) return cb(null);
        stream._writev(buffer, cb);
      }
      update() {
        const stream = this.stream;
        stream._duplexState |= WRITE_UPDATING;
        do {
          while ((stream._duplexState & WRITE_STATUS) === WRITE_QUEUED) {
            const data = this.shift();
            stream._duplexState |= WRITE_ACTIVE_AND_WRITING;
            stream._write(data, this.afterWrite);
          }
          if ((stream._duplexState & WRITE_PRIMARY_AND_ACTIVE) === 0) this.updateNonPrimary();
        } while (this.continueUpdate() === true);
        stream._duplexState &= WRITE_NOT_UPDATING;
      }
      updateNonPrimary() {
        const stream = this.stream;
        if ((stream._duplexState & WRITE_FINISHING_STATUS) === WRITE_FINISHING) {
          stream._duplexState = stream._duplexState | WRITE_ACTIVE;
          stream._final(afterFinal.bind(this));
          return;
        }
        if ((stream._duplexState & DESTROY_STATUS) === DESTROYING) {
          if ((stream._duplexState & ACTIVE_OR_TICKING) === 0) {
            stream._duplexState |= ACTIVE;
            stream._destroy(afterDestroy.bind(this));
          }
          return;
        }
        if ((stream._duplexState & IS_OPENING) === OPENING) {
          stream._duplexState = (stream._duplexState | ACTIVE) & NOT_OPENING;
          stream._open(afterOpen.bind(this));
        }
      }
      continueUpdate() {
        if ((this.stream._duplexState & WRITE_NEXT_TICK) === 0) return false;
        this.stream._duplexState &= WRITE_NOT_NEXT_TICK;
        return true;
      }
      updateCallback() {
        if ((this.stream._duplexState & WRITE_UPDATE_SYNC_STATUS) === WRITE_PRIMARY) {
          this.update();
        } else {
          this.updateNextTick();
        }
      }
      updateNextTick() {
        if ((this.stream._duplexState & WRITE_NEXT_TICK) !== 0) return;
        this.stream._duplexState |= WRITE_NEXT_TICK;
        if ((this.stream._duplexState & WRITE_UPDATING) === 0) qmt(this.afterUpdateNextTick);
      }
    };
    var ReadableState = class {
      constructor(stream, { highWaterMark = 16384, map = null, mapReadable, byteLength, byteLengthReadable } = {}) {
        this.stream = stream;
        this.queue = new FIFO();
        this.highWaterMark = highWaterMark === 0 ? 1 : highWaterMark;
        this.buffered = 0;
        this.readAhead = highWaterMark > 0;
        this.error = null;
        this.pipeline = null;
        this.byteLength = byteLengthReadable || byteLength || defaultByteLength;
        this.map = mapReadable || map;
        this.pipeTo = null;
        this.afterRead = afterRead.bind(this);
        this.afterUpdateNextTick = updateReadNT.bind(this);
      }
      get ending() {
        return (this.stream._duplexState & READ_ENDING) !== 0;
      }
      get ended() {
        return (this.stream._duplexState & READ_DONE) !== 0;
      }
      pipe(pipeTo, cb) {
        if (this.pipeTo !== null) throw StreamError.BAD_ARGUMENT("Can only pipe to one destination");
        if (typeof cb !== "function") cb = null;
        this.stream._duplexState |= READ_PIPE_DRAINED;
        this.pipeTo = pipeTo;
        this.pipeline = new Pipeline(this.stream, pipeTo, cb);
        if (cb) this.stream.on("error", noop);
        if (isStreamx(pipeTo)) {
          pipeTo._writableState.pipeline = this.pipeline;
          if (cb) pipeTo.on("error", noop);
          pipeTo.on("finish", this.pipeline.finished.bind(this.pipeline));
        } else {
          const onerror = this.pipeline.done.bind(this.pipeline, pipeTo);
          const onclose = this.pipeline.done.bind(this.pipeline, pipeTo, null);
          pipeTo.on("error", onerror);
          pipeTo.on("close", onclose);
          pipeTo.on("finish", this.pipeline.finished.bind(this.pipeline));
        }
        pipeTo.on("drain", afterDrain.bind(this));
        this.stream.emit("piping", pipeTo);
        pipeTo.emit("pipe", this.stream);
      }
      push(data) {
        const stream = this.stream;
        if (data === null) {
          this.highWaterMark = 0;
          stream._duplexState = (stream._duplexState | READ_ENDING) & READ_NON_PRIMARY_AND_PUSHED;
          return false;
        }
        if (this.map !== null) {
          data = this.map(data);
          if (data === null) {
            stream._duplexState &= READ_PUSHED;
            return this.buffered < this.highWaterMark;
          }
        }
        this.buffered += this.byteLength(data);
        this.queue.push(data);
        stream._duplexState = (stream._duplexState | READ_QUEUED) & READ_PUSHED;
        return this.buffered < this.highWaterMark;
      }
      shift() {
        const data = this.queue.shift();
        this.buffered -= this.byteLength(data);
        if (this.buffered === 0) {
          this.stream._duplexState &= READ_NOT_QUEUED;
        }
        return data;
      }
      unshift(data) {
        const pending = [this.map !== null ? this.map(data) : data];
        while (this.buffered > 0) pending.push(this.shift());
        for (let i = 0; i < pending.length - 1; i++) {
          const data2 = pending[i];
          this.buffered += this.byteLength(data2);
          this.queue.push(data2);
        }
        this.push(pending[pending.length - 1]);
      }
      read() {
        const stream = this.stream;
        if ((stream._duplexState & READ_STATUS) === READ_QUEUED) {
          const data = this.shift();
          if (this.pipeTo !== null && this.pipeTo.write(data) === false) {
            stream._duplexState &= READ_PIPE_NOT_DRAINED;
          }
          if ((stream._duplexState & READ_EMIT_DATA) !== 0) {
            stream.emit("data", data);
          }
          return data;
        }
        if (this.readAhead === false) {
          stream._duplexState |= READ_READ_AHEAD;
          this.updateNextTick();
        }
        return null;
      }
      drain() {
        const stream = this.stream;
        while ((stream._duplexState & READ_STATUS) === READ_QUEUED && (stream._duplexState & READ_FLOWING) !== 0) {
          const data = this.shift();
          if (this.pipeTo !== null && this.pipeTo.write(data) === false) {
            stream._duplexState &= READ_PIPE_NOT_DRAINED;
          }
          if ((stream._duplexState & READ_EMIT_DATA) !== 0) {
            stream.emit("data", data);
          }
        }
      }
      update() {
        const stream = this.stream;
        stream._duplexState |= READ_UPDATING;
        do {
          this.drain();
          while (this.buffered < this.highWaterMark && (stream._duplexState & SHOULD_NOT_READ) === READ_READ_AHEAD) {
            stream._duplexState |= READ_ACTIVE_AND_NEEDS_PUSH;
            stream._read(this.afterRead);
            this.drain();
          }
          if ((stream._duplexState & READ_READABLE_STATUS) === READ_EMIT_READABLE_AND_QUEUED) {
            stream._duplexState |= READ_EMITTED_READABLE;
            stream.emit("readable");
          }
          if ((stream._duplexState & READ_PRIMARY_AND_ACTIVE) === 0) {
            this.updateNonPrimary();
          }
        } while (this.continueUpdate() === true);
        stream._duplexState &= READ_NOT_UPDATING;
      }
      updateNonPrimary() {
        const stream = this.stream;
        if ((stream._duplexState & READ_ENDING_STATUS) === READ_ENDING) {
          stream._duplexState = (stream._duplexState | READ_DONE) & READ_NOT_ENDING;
          stream.emit("end");
          if ((stream._duplexState & AUTO_DESTROY) === DONE) {
            stream._duplexState |= DESTROYING;
          }
          if (this.pipeTo !== null) {
            this.pipeTo.end();
          }
        }
        if ((stream._duplexState & DESTROY_STATUS) === DESTROYING) {
          if ((stream._duplexState & ACTIVE_OR_TICKING) === 0) {
            stream._duplexState |= ACTIVE;
            stream._destroy(afterDestroy.bind(this));
          }
          return;
        }
        if ((stream._duplexState & IS_OPENING) === OPENING) {
          stream._duplexState = (stream._duplexState | ACTIVE) & NOT_OPENING;
          stream._open(afterOpen.bind(this));
        }
      }
      continueUpdate() {
        if ((this.stream._duplexState & READ_NEXT_TICK) === 0) return false;
        this.stream._duplexState &= READ_NOT_NEXT_TICK;
        return true;
      }
      updateCallback() {
        if ((this.stream._duplexState & READ_UPDATE_SYNC_STATUS) === READ_PRIMARY) {
          this.update();
        } else {
          this.updateNextTick();
        }
      }
      updateNextTickIfOpen() {
        if ((this.stream._duplexState & READ_NEXT_TICK_OR_OPENING) !== 0) return;
        this.stream._duplexState |= READ_NEXT_TICK;
        if ((this.stream._duplexState & READ_UPDATING) === 0) qmt(this.afterUpdateNextTick);
      }
      updateNextTick() {
        if ((this.stream._duplexState & READ_NEXT_TICK) !== 0) return;
        this.stream._duplexState |= READ_NEXT_TICK;
        if ((this.stream._duplexState & READ_UPDATING) === 0) qmt(this.afterUpdateNextTick);
      }
    };
    var TransformState = class {
      constructor(stream) {
        this.data = null;
        this.afterTransform = afterTransform.bind(stream);
        this.afterFinal = null;
      }
    };
    var Pipeline = class {
      constructor(src, dst, cb) {
        this.from = src;
        this.to = dst;
        this.afterPipe = cb;
        this.error = null;
        this.pipeToFinished = false;
      }
      finished() {
        this.pipeToFinished = true;
      }
      done(stream, err) {
        if (err) this.error = err;
        if (stream === this.to) {
          this.to = null;
          if (this.from !== null) {
            if ((this.from._duplexState & READ_DONE) === 0 || !this.pipeToFinished) {
              this.from.destroy(this.error || StreamError.PREMATURE_CLOSE("Writable stream closed"));
            }
            return;
          }
        }
        if (stream === this.from) {
          this.from = null;
          if (this.to !== null) {
            if ((stream._duplexState & READ_DONE) === 0) {
              this.to.destroy(this.error || StreamError.PREMATURE_CLOSE("Readable stream closed"));
            }
            return;
          }
        }
        if (this.afterPipe !== null) this.afterPipe(this.error);
        this.to = this.from = this.afterPipe = null;
      }
    };
    function afterDrain() {
      this.stream._duplexState |= READ_PIPE_DRAINED;
      this.updateCallback();
    }
    function afterFinal(err) {
      const stream = this.stream;
      if (err) stream.destroy(err);
      if ((stream._duplexState & DESTROY_STATUS) === 0) {
        stream._duplexState |= WRITE_DONE;
        stream.emit("finish");
      }
      if ((stream._duplexState & AUTO_DESTROY) === DONE) {
        stream._duplexState |= DESTROYING;
      }
      stream._duplexState &= WRITE_NOT_FINISHING;
      if ((stream._duplexState & WRITE_UPDATING) === 0) {
        this.update();
      } else {
        this.updateNextTick();
      }
    }
    function afterDestroy(err) {
      const stream = this.stream;
      if (!err && !StreamError.isStreamDestroyed(this.error)) err = this.error;
      if (err) stream.emit("error", err);
      stream._duplexState |= DESTROYED;
      stream.emit("close");
      const rs = stream._readableState;
      const ws = stream._writableState;
      if (rs !== null && rs.pipeline !== null) {
        rs.pipeline.done(stream, err);
      }
      if (ws !== null) {
        while (ws.drains !== null && ws.drains.length > 0) {
          ws.drains.shift().resolve(false);
        }
        if (ws.pipeline !== null) {
          ws.pipeline.done(stream, err);
        }
      }
    }
    function afterWrite(err) {
      const stream = this.stream;
      if (err) stream.destroy(err);
      stream._duplexState &= WRITE_NOT_ACTIVE;
      if (this.drains !== null) tickDrains(this.drains);
      if ((stream._duplexState & WRITE_DRAIN_STATUS) === WRITE_UNDRAINED) {
        stream._duplexState &= WRITE_DRAINED;
        if ((stream._duplexState & WRITE_EMIT_DRAIN) === WRITE_EMIT_DRAIN) {
          stream.emit("drain");
        }
      }
      this.updateCallback();
    }
    function afterRead(err) {
      if (err) this.stream.destroy(err);
      this.stream._duplexState &= READ_NOT_ACTIVE;
      if (this.readAhead === false && (this.stream._duplexState & READ_RESUMED) === 0) {
        this.stream._duplexState &= READ_NO_READ_AHEAD;
      }
      this.updateCallback();
    }
    function updateReadNT() {
      if ((this.stream._duplexState & READ_UPDATING) === 0) {
        this.stream._duplexState &= READ_NOT_NEXT_TICK;
        this.update();
      }
    }
    function updateWriteNT() {
      if ((this.stream._duplexState & WRITE_UPDATING) === 0) {
        this.stream._duplexState &= WRITE_NOT_NEXT_TICK;
        this.update();
      }
    }
    function tickDrains(drains) {
      for (let i = 0; i < drains.length; i++) {
        if (--drains[i].writes === 0) {
          drains.shift().resolve(true);
          i--;
        }
      }
    }
    function afterOpen(err) {
      const stream = this.stream;
      if (err) stream.destroy(err);
      if ((stream._duplexState & DESTROYING) === 0) {
        if ((stream._duplexState & READ_PRIMARY_STATUS) === 0) {
          stream._duplexState |= READ_PRIMARY;
        }
        if ((stream._duplexState & WRITE_PRIMARY_STATUS) === 0) {
          stream._duplexState |= WRITE_PRIMARY;
        }
        stream.emit("open");
      }
      stream._duplexState &= NOT_ACTIVE;
      if (stream._writableState !== null) {
        stream._writableState.updateCallback();
      }
      if (stream._readableState !== null) {
        stream._readableState.updateCallback();
      }
    }
    function afterTransform(err, data) {
      if (data !== void 0 && data !== null) this.push(data);
      this._writableState.afterWrite(err);
    }
    function newListener(name) {
      if (this._readableState !== null) {
        if (name === "data") {
          this._duplexState |= READ_EMIT_DATA | READ_RESUMED_READ_AHEAD;
          this._readableState.updateNextTick();
        }
        if (name === "readable") {
          this._duplexState |= READ_EMIT_READABLE;
          this._readableState.updateNextTick();
        }
      }
      if (this._writableState !== null) {
        if (name === "drain") {
          this._duplexState |= WRITE_EMIT_DRAIN;
          this._writableState.updateNextTick();
        }
      }
    }
    var Stream = class extends EventEmitter2 {
      constructor(opts) {
        super();
        this._duplexState = 0;
        this._readableState = null;
        this._writableState = null;
        if (opts) {
          if (opts.open) this._open = opts.open;
          if (opts.destroy) this._destroy = opts.destroy;
          if (opts.predestroy) this._predestroy = opts.predestroy;
          if (opts.signal) opts.signal.addEventListener("abort", abort.bind(this));
        }
        this.on("newListener", newListener);
      }
      _open(cb) {
        cb(null);
      }
      _destroy(cb) {
        cb(null);
      }
      _predestroy() {
      }
      get readable() {
        return this._readableState !== null ? true : void 0;
      }
      get writable() {
        return this._writableState !== null ? true : void 0;
      }
      get destroyed() {
        return (this._duplexState & DESTROYED) !== 0;
      }
      get destroying() {
        return (this._duplexState & DESTROY_STATUS) !== 0;
      }
      destroy(err) {
        if ((this._duplexState & DESTROY_STATUS) === 0) {
          if (!err) err = StreamError.STREAM_DESTROYED();
          this._duplexState = (this._duplexState | DESTROYING) & NON_PRIMARY;
          if (this._readableState !== null) {
            this._readableState.highWaterMark = 0;
            this._readableState.error = err;
          }
          if (this._writableState !== null) {
            this._writableState.highWaterMark = 0;
            this._writableState.error = err;
          }
          this._duplexState |= PREDESTROYING;
          this._predestroy();
          this._duplexState &= NOT_PREDESTROYING;
          if (this._readableState !== null) {
            this._readableState.updateNextTick();
          }
          if (this._writableState !== null) {
            this._writableState.updateNextTick();
          }
        }
      }
    };
    var Readable = class _Readable extends Stream {
      constructor(opts) {
        super(opts);
        this._duplexState |= OPENING | WRITE_DONE | READ_READ_AHEAD;
        this._readableState = new ReadableState(this, opts);
        if (opts) {
          if (this._readableState.readAhead === false) this._duplexState &= READ_NO_READ_AHEAD;
          if (opts.read) this._read = opts.read;
          if (opts.eagerOpen) this._readableState.updateNextTick();
          if (opts.encoding) this.setEncoding(opts.encoding);
        }
      }
      static deferred(fn, opts) {
        const out = new PassThrough(opts);
        fn().then((src) => {
          if (src === null) return out.end();
          if (out.destroying) return;
          pipeline(src, out, noop);
        }).catch((err) => out.destroy(err));
        return out;
      }
      setEncoding(encoding) {
        const dec = new TextDecoder(encoding);
        const map = this._readableState.map || echo;
        this._readableState.map = mapOrSkip;
        return this;
        function mapOrSkip(data) {
          const next = dec.push(data);
          return next === "" && (data.byteLength !== 0 || dec.remaining > 0) ? null : map(next);
        }
      }
      _read(cb) {
        cb(null);
      }
      pipe(dest, cb) {
        this._readableState.updateNextTick();
        this._readableState.pipe(dest, cb);
        return dest;
      }
      read() {
        this._readableState.updateNextTick();
        return this._readableState.read();
      }
      push(data) {
        this._readableState.updateNextTickIfOpen();
        return this._readableState.push(data);
      }
      unshift(data) {
        this._readableState.updateNextTickIfOpen();
        return this._readableState.unshift(data);
      }
      resume() {
        this._duplexState |= READ_RESUMED_READ_AHEAD;
        this._readableState.updateNextTick();
        return this;
      }
      pause() {
        this._duplexState &= this._readableState.readAhead === false ? READ_PAUSED_NO_READ_AHEAD : READ_PAUSED;
        return this;
      }
      static _fromAsyncIterator(ite, opts) {
        let destroy;
        const rs = new _Readable({
          ...opts,
          read(cb) {
            ite.next().then(push).then(cb.bind(null, null)).catch(cb);
          },
          predestroy() {
            destroy = ite.return();
          },
          destroy(cb) {
            if (!destroy) return cb(null);
            destroy.then(cb.bind(null, null)).catch(cb);
          }
        });
        return rs;
        function push(data) {
          if (data.done) rs.push(null);
          else rs.push(data.value);
        }
      }
      static from(data, opts) {
        if (isReadStreamx(data)) return data;
        if (data[asyncIterator]) return this._fromAsyncIterator(data[asyncIterator](), opts);
        if (!Array.isArray(data)) data = data === void 0 ? [] : [data];
        let i = 0;
        return new _Readable({
          ...opts,
          read(cb) {
            this.push(i === data.length ? null : data[i++]);
            cb(null);
          }
        });
      }
      static isBackpressured(rs) {
        return (rs._duplexState & READ_BACKPRESSURE_STATUS) !== 0 || rs._readableState.buffered >= rs._readableState.highWaterMark;
      }
      static isPaused(rs) {
        return (rs._duplexState & READ_RESUMED) === 0;
      }
      [asyncIterator]() {
        const stream = this;
        let error = null;
        let promiseResolve = null;
        let promiseReject = null;
        this.on("error", (err) => {
          error = err;
        });
        this.on("readable", onreadable);
        this.on("close", onclose);
        return {
          [asyncIterator]() {
            return this;
          },
          next() {
            return new Promise(function(resolve4, reject) {
              promiseResolve = resolve4;
              promiseReject = reject;
              const data = stream.read();
              if (data !== null) ondata(data);
              else if ((stream._duplexState & DESTROYED) !== 0) ondata(null);
            });
          },
          return() {
            return destroy(null);
          },
          throw(err) {
            return destroy(err);
          }
        };
        function onreadable() {
          if (promiseResolve !== null) ondata(stream.read());
        }
        function onclose() {
          if (promiseResolve !== null) ondata(null);
        }
        function ondata(data) {
          if (promiseReject === null) return;
          if (error) {
            promiseReject(error);
          } else if (data === null && (stream._duplexState & READ_DONE) === 0) {
            promiseReject(StreamError.STREAM_DESTROYED());
          } else {
            promiseResolve({ value: data, done: data === null });
          }
          promiseReject = promiseResolve = null;
        }
        function destroy(err) {
          stream.destroy(err);
          return new Promise((resolve4, reject) => {
            if (stream._duplexState & DESTROYED) return resolve4({ value: void 0, done: true });
            stream.once("close", function() {
              if (err) reject(err);
              else resolve4({ value: void 0, done: true });
            });
          });
        }
      }
    };
    var Writable = class extends Stream {
      constructor(opts) {
        super(opts);
        this._duplexState |= OPENING | READ_DONE;
        this._writableState = new WritableState(this, opts);
        if (opts) {
          if (opts.writev) this._writev = opts.writev;
          if (opts.write) this._write = opts.write;
          if (opts.final) this._final = opts.final;
          if (opts.eagerOpen) this._writableState.updateNextTick();
        }
      }
      cork() {
        this._duplexState |= WRITE_CORKED;
      }
      uncork() {
        this._duplexState &= WRITE_NOT_CORKED;
        this._writableState.updateNextTick();
      }
      _writev(batch, cb) {
        cb(null);
      }
      _write(data, cb) {
        this._writableState.autoBatch(data, cb);
      }
      _final(cb) {
        cb(null);
      }
      static isBackpressured(ws) {
        return (ws._duplexState & WRITE_BACKPRESSURE_STATUS) !== 0;
      }
      static drained(ws) {
        if (ws.destroyed) return Promise.resolve(false);
        const state = ws._writableState;
        const pending = isWritev(ws) ? Math.min(1, state.queue.length) : state.queue.length;
        const writes = pending + (ws._duplexState & WRITE_WRITING ? 1 : 0);
        if (writes === 0) return Promise.resolve(true);
        if (state.drains === null) state.drains = [];
        return new Promise((resolve4) => {
          state.drains.push({ writes, resolve: resolve4 });
        });
      }
      write(data) {
        this._writableState.updateNextTick();
        return this._writableState.push(data);
      }
      end(data) {
        this._writableState.updateNextTick();
        this._writableState.end(data);
        return this;
      }
    };
    var Duplex = class extends Readable {
      // and Writable
      constructor(opts) {
        super(opts);
        this._duplexState = OPENING | this._duplexState & READ_READ_AHEAD;
        this._writableState = new WritableState(this, opts);
        if (opts) {
          if (opts.writev) this._writev = opts.writev;
          if (opts.write) this._write = opts.write;
          if (opts.final) this._final = opts.final;
        }
      }
      cork() {
        this._duplexState |= WRITE_CORKED;
      }
      uncork() {
        this._duplexState &= WRITE_NOT_CORKED;
        this._writableState.updateNextTick();
      }
      _writev(batch, cb) {
        cb(null);
      }
      _write(data, cb) {
        this._writableState.autoBatch(data, cb);
      }
      _final(cb) {
        cb(null);
      }
      write(data) {
        this._writableState.updateNextTick();
        return this._writableState.push(data);
      }
      end(data) {
        this._writableState.updateNextTick();
        this._writableState.end(data);
        return this;
      }
    };
    var Transform = class extends Duplex {
      constructor(opts) {
        super(opts);
        this._transformState = new TransformState(this);
        if (opts) {
          if (opts.transform) this._transform = opts.transform;
          if (opts.flush) this._flush = opts.flush;
        }
      }
      _write(data, cb) {
        if (this._readableState.buffered >= this._readableState.highWaterMark) {
          this._transformState.data = data;
        } else {
          this._transform(data, this._transformState.afterTransform);
        }
      }
      _read(cb) {
        if (this._transformState.data !== null) {
          const data = this._transformState.data;
          this._transformState.data = null;
          cb(null);
          this._transform(data, this._transformState.afterTransform);
        } else {
          cb(null);
        }
      }
      destroy(err) {
        super.destroy(err);
        if (this._transformState.data !== null) {
          this._transformState.data = null;
          this._transformState.afterTransform();
        }
      }
      _transform(data, cb) {
        cb(null, data);
      }
      _flush(cb) {
        cb(null);
      }
      _final(cb) {
        this._transformState.afterFinal = cb;
        this._flush(transformAfterFlush.bind(this));
      }
    };
    var PassThrough = class extends Transform {
    };
    function transformAfterFlush(err, data) {
      const cb = this._transformState.afterFinal;
      if (err) return cb(err);
      if (data !== null && data !== void 0) this.push(data);
      this.push(null);
      cb(null);
    }
    function pipelinePromise(...streams) {
      return new Promise((resolve4, reject) => {
        return pipeline(...streams, (err) => {
          if (err) return reject(err);
          resolve4();
        });
      });
    }
    function pipeline(stream, ...streams) {
      const all = Array.isArray(stream) ? [...stream, ...streams] : [stream, ...streams];
      const done = all.length && typeof all[all.length - 1] === "function" ? all.pop() : null;
      if (all.length < 2) throw StreamError.BAD_ARGUMENT("Pipeline requires at least 2 streams");
      let src = all[0];
      let dest = null;
      let error = null;
      for (let i = 1; i < all.length; i++) {
        dest = all[i];
        if (isStreamx(src)) {
          src.pipe(dest, onerror);
        } else {
          errorHandle(src, true, i > 1, onerror);
          src.pipe(dest);
        }
        src = dest;
      }
      if (done) {
        let fin = false;
        const autoDestroy = isStreamx(dest) || !!(dest._writableState && dest._writableState.autoDestroy);
        dest.on("error", (err) => {
          if (error === null) error = err;
        });
        dest.on("finish", () => {
          fin = true;
          if (!autoDestroy) done(error);
        });
        if (autoDestroy) {
          dest.on("close", () => done(error || (fin ? null : StreamError.PREMATURE_CLOSE())));
        }
      }
      return dest;
      function errorHandle(s, rd, wr, onerror2) {
        s.on("error", onerror2);
        s.on("close", onclose);
        function onclose() {
          if (rd && s._readableState && !s._readableState.ended) {
            return onerror2(StreamError.PREMATURE_CLOSE());
          }
          if (wr && s._writableState && !s._writableState.ended) {
            return onerror2(StreamError.PREMATURE_CLOSE());
          }
        }
      }
      function onerror(err) {
        if (!err || error) return;
        error = err;
        for (const s of all) {
          s.destroy(err);
        }
      }
    }
    function echo(s) {
      return s;
    }
    function isStream(stream) {
      return !!stream._readableState || !!stream._writableState;
    }
    function isStreamx(stream) {
      return typeof stream._duplexState === "number" && isStream(stream);
    }
    function isEnding(stream) {
      return !!stream._readableState && stream._readableState.ending;
    }
    function isEnded(stream) {
      return !!stream._readableState && stream._readableState.ended;
    }
    function isFinishing(stream) {
      return !!stream._writableState && stream._writableState.ending;
    }
    function isFinished(stream) {
      return !!stream._writableState && stream._writableState.ended;
    }
    function getStreamError(stream, opts = {}) {
      const err = stream._readableState && stream._readableState.error || stream._writableState && stream._writableState.error;
      return !opts.all && StreamError.isStreamDestroyed(err) ? null : err;
    }
    function isReadStreamx(stream) {
      return isStreamx(stream) && stream.readable;
    }
    function isDisturbed(stream) {
      return (stream._duplexState & OPENING) !== OPENING || (stream._duplexState & DESTROYING) === DESTROYING || (stream._duplexState & ACTIVE_OR_TICKING) !== 0;
    }
    function isTypedArray(data) {
      return typeof data === "object" && data !== null && typeof data.byteLength === "number";
    }
    function defaultByteLength(data) {
      return isTypedArray(data) ? data.byteLength : 1024;
    }
    function noop() {
    }
    function abort() {
      this.destroy(StreamError.ABORTED());
    }
    function isWritev(s) {
      return s._writev !== Writable.prototype._writev && s._writev !== Duplex.prototype._writev;
    }
    module2.exports = {
      pipeline,
      pipelinePromise,
      isStream,
      isStreamx,
      isEnding,
      isEnded,
      isFinishing,
      isFinished,
      isDisturbed,
      getStreamError,
      Stream,
      Writable,
      Readable,
      Duplex,
      Transform,
      // Export PassThrough for compatibility with Node.js core's stream module
      PassThrough
    };
  }
});

// node_modules/tar-stream/headers.js
var require_headers = __commonJS({
  "node_modules/tar-stream/headers.js"(exports2) {
    "use strict";
    var b4a = require_b4a();
    var ZEROS = "0000000000000000000";
    var SEVENS = "7777777777777777777";
    var ZERO_OFFSET = "0".charCodeAt(0);
    var USTAR_MAGIC = b4a.from([117, 115, 116, 97, 114, 0]);
    var USTAR_VER = b4a.from([ZERO_OFFSET, ZERO_OFFSET]);
    var GNU_MAGIC = b4a.from([117, 115, 116, 97, 114, 32]);
    var GNU_VER = b4a.from([32, 0]);
    var MASK = 4095;
    var MAGIC_OFFSET = 257;
    var VERSION_OFFSET = 263;
    exports2.decodeLongPath = function decodeLongPath(buf, encoding) {
      return decodeStr(buf, 0, buf.length, encoding);
    };
    exports2.encodePax = function encodePax(opts) {
      let result = "";
      if (opts.name) result += addLength(" path=" + opts.name + "\n");
      if (opts.linkname) result += addLength(" linkpath=" + opts.linkname + "\n");
      const pax = opts.pax;
      if (pax) {
        for (const key in pax) {
          result += addLength(" " + key + "=" + pax[key] + "\n");
        }
      }
      return b4a.from(result);
    };
    exports2.decodePax = function decodePax(buf) {
      const result = {};
      while (buf.length) {
        let i = 0;
        while (i < buf.length && buf[i] !== 32) i++;
        const len = parseInt(b4a.toString(buf.subarray(0, i)), 10);
        if (!len) return result;
        const b = b4a.toString(buf.subarray(i + 1, len - 1));
        const keyIndex = b.indexOf("=");
        if (keyIndex === -1) return result;
        result[b.slice(0, keyIndex)] = b.slice(keyIndex + 1);
        buf = buf.subarray(len);
      }
      return result;
    };
    exports2.encode = function encode(opts) {
      const buf = b4a.alloc(512);
      let name = opts.name;
      let prefix = "";
      if (opts.typeflag === 5 && name[name.length - 1] !== "/") name += "/";
      if (b4a.byteLength(name) !== name.length) return null;
      while (b4a.byteLength(name) > 100) {
        const i = name.indexOf("/");
        if (i === -1) return null;
        prefix += prefix ? "/" + name.slice(0, i) : name.slice(0, i);
        name = name.slice(i + 1);
      }
      if (b4a.byteLength(name) > 100 || b4a.byteLength(prefix) > 155) return null;
      if (opts.linkname && b4a.byteLength(opts.linkname) > 100) return null;
      b4a.write(buf, name);
      b4a.write(buf, encodeOct(opts.mode & MASK, 6), 100);
      b4a.write(buf, encodeOct(opts.uid, 6), 108);
      b4a.write(buf, encodeOct(opts.gid, 6), 116);
      encodeSize(opts.size, buf, 124);
      b4a.write(buf, encodeOct(opts.mtime.getTime() / 1e3 | 0, 11), 136);
      buf[156] = ZERO_OFFSET + toTypeflag(opts.type);
      if (opts.linkname) b4a.write(buf, opts.linkname, 157);
      b4a.copy(USTAR_MAGIC, buf, MAGIC_OFFSET);
      b4a.copy(USTAR_VER, buf, VERSION_OFFSET);
      if (opts.uname) b4a.write(buf, opts.uname, 265);
      if (opts.gname) b4a.write(buf, opts.gname, 297);
      b4a.write(buf, encodeOct(opts.devmajor || 0, 6), 329);
      b4a.write(buf, encodeOct(opts.devminor || 0, 6), 337);
      if (prefix) b4a.write(buf, prefix, 345);
      b4a.write(buf, encodeOct(cksum(buf), 6), 148);
      return buf;
    };
    exports2.decode = function decode(buf, filenameEncoding, allowUnknownFormat) {
      let typeflag = buf[156] === 0 ? 0 : buf[156] - ZERO_OFFSET;
      let name = decodeStr(buf, 0, 100, filenameEncoding);
      const mode = decodeOct(buf, 100, 8);
      const uid = decodeOct(buf, 108, 8);
      const gid = decodeOct(buf, 116, 8);
      const size = decodeOct(buf, 124, 12);
      const mtime = decodeOct(buf, 136, 12);
      const type = toType(typeflag);
      const linkname = buf[157] === 0 ? null : decodeStr(buf, 157, 100, filenameEncoding);
      const uname = decodeStr(buf, 265, 32);
      const gname = decodeStr(buf, 297, 32);
      const devmajor = decodeOct(buf, 329, 8);
      const devminor = decodeOct(buf, 337, 8);
      const c = cksum(buf);
      if (c === 8 * 32) return null;
      if (c !== decodeOct(buf, 148, 8)) throw new Error("Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?");
      if (isUSTAR(buf)) {
        if (buf[345]) name = decodeStr(buf, 345, 155, filenameEncoding) + "/" + name;
      } else if (isGNU(buf)) {
      } else {
        if (!allowUnknownFormat) {
          throw new Error("Invalid tar header: unknown format.");
        }
      }
      if (typeflag === 0 && name && name[name.length - 1] === "/") typeflag = 5;
      return {
        name,
        mode,
        uid,
        gid,
        size,
        byteOffset: 0,
        mtime: new Date(1e3 * mtime),
        type,
        linkname,
        uname,
        gname,
        devmajor,
        devminor,
        pax: null
      };
    };
    function isUSTAR(buf) {
      return b4a.equals(USTAR_MAGIC, buf.subarray(MAGIC_OFFSET, MAGIC_OFFSET + 6));
    }
    function isGNU(buf) {
      return b4a.equals(GNU_MAGIC, buf.subarray(MAGIC_OFFSET, MAGIC_OFFSET + 6)) && b4a.equals(GNU_VER, buf.subarray(VERSION_OFFSET, VERSION_OFFSET + 2));
    }
    function clamp(index, len, defaultValue) {
      if (typeof index !== "number") return defaultValue;
      index = ~~index;
      if (index >= len) return len;
      if (index >= 0) return index;
      index += len;
      if (index >= 0) return index;
      return 0;
    }
    function toType(flag) {
      switch (flag) {
        case 0:
          return "file";
        case 1:
          return "link";
        case 2:
          return "symlink";
        case 3:
          return "character-device";
        case 4:
          return "block-device";
        case 5:
          return "directory";
        case 6:
          return "fifo";
        case 7:
          return "contiguous-file";
        case 72:
          return "pax-header";
        case 55:
          return "pax-global-header";
        case 27:
          return "gnu-long-link-path";
        case 28:
        case 30:
          return "gnu-long-path";
      }
      return null;
    }
    function toTypeflag(flag) {
      switch (flag) {
        case "file":
          return 0;
        case "link":
          return 1;
        case "symlink":
          return 2;
        case "character-device":
          return 3;
        case "block-device":
          return 4;
        case "directory":
          return 5;
        case "fifo":
          return 6;
        case "contiguous-file":
          return 7;
        case "pax-header":
          return 72;
      }
      return 0;
    }
    function indexOf(block, num, offset, end) {
      for (; offset < end; offset++) {
        if (block[offset] === num) return offset;
      }
      return end;
    }
    function cksum(block) {
      let sum = 8 * 32;
      for (let i = 0; i < 148; i++) sum += block[i];
      for (let j = 156; j < 512; j++) sum += block[j];
      return sum;
    }
    function encodeOct(val, n) {
      val = val.toString(8);
      if (val.length > n) return SEVENS.slice(0, n) + " ";
      return ZEROS.slice(0, n - val.length) + val + " ";
    }
    function encodeSizeBin(num, buf, off) {
      buf[off] = 128;
      for (let i = 11; i > 0; i--) {
        buf[off + i] = num & 255;
        num = Math.floor(num / 256);
      }
    }
    function encodeSize(num, buf, off) {
      if (num.toString(8).length > 11) {
        encodeSizeBin(num, buf, off);
      } else {
        b4a.write(buf, encodeOct(num, 11), off);
      }
    }
    function parse256(buf) {
      let positive;
      if (buf[0] === 128) positive = true;
      else if (buf[0] === 255) positive = false;
      else return null;
      const tuple = [];
      let i;
      for (i = buf.length - 1; i > 0; i--) {
        const byte = buf[i];
        if (positive) tuple.push(byte);
        else tuple.push(255 - byte);
      }
      let sum = 0;
      const l = tuple.length;
      for (i = 0; i < l; i++) {
        sum += tuple[i] * Math.pow(256, i);
      }
      return positive ? sum : -1 * sum;
    }
    function decodeOct(val, offset, length) {
      val = val.subarray(offset, offset + length);
      offset = 0;
      if (val[offset] & 128) {
        return parse256(val);
      } else {
        while (offset < val.length && val[offset] === 32) offset++;
        const end = clamp(indexOf(val, 32, offset, val.length), val.length, val.length);
        while (offset < end && val[offset] === 0) offset++;
        if (end === offset) return 0;
        return parseInt(b4a.toString(val.subarray(offset, end)), 8);
      }
    }
    function decodeStr(val, offset, length, encoding) {
      return b4a.toString(val.subarray(offset, indexOf(val, 0, offset, offset + length)), encoding);
    }
    function addLength(str) {
      const len = b4a.byteLength(str);
      let digits = Math.floor(Math.log(len) / Math.log(10)) + 1;
      if (len + digits >= Math.pow(10, digits)) digits++;
      return len + digits + str;
    }
  }
});

// node_modules/tar-stream/extract.js
var require_extract = __commonJS({
  "node_modules/tar-stream/extract.js"(exports2, module2) {
    "use strict";
    var { Writable, Readable, getStreamError } = require_streamx();
    var FIFO = require_fast_fifo();
    var b4a = require_b4a();
    var headers = require_headers();
    var EMPTY = b4a.alloc(0);
    var MAX_HEADER_SIZE = 4 * 1024 * 1024;
    var BufferList = class {
      constructor() {
        this.buffered = 0;
        this.shifted = 0;
        this.queue = new FIFO();
        this._offset = 0;
      }
      push(buffer) {
        this.buffered += buffer.byteLength;
        this.queue.push(buffer);
      }
      shiftFirst(size) {
        return this.buffered === 0 ? null : this._next(size);
      }
      shift(size) {
        if (size > this.buffered) return null;
        if (size === 0) return EMPTY;
        let chunk = this._next(size);
        if (size === chunk.byteLength) return chunk;
        const chunks = [chunk];
        while ((size -= chunk.byteLength) > 0) {
          chunk = this._next(size);
          chunks.push(chunk);
        }
        return b4a.concat(chunks);
      }
      _next(size) {
        const buf = this.queue.peek();
        const rem = buf.byteLength - this._offset;
        if (size >= rem) {
          const sub = this._offset ? buf.subarray(this._offset, buf.byteLength) : buf;
          this.queue.shift();
          this._offset = 0;
          this.buffered -= rem;
          this.shifted += rem;
          return sub;
        }
        this.buffered -= size;
        this.shifted += size;
        return buf.subarray(this._offset, this._offset += size);
      }
    };
    var Source = class extends Readable {
      constructor(self, header, offset) {
        super();
        this.header = header;
        this.offset = offset;
        this._parent = self;
      }
      _read(cb) {
        if (this.header.size === 0) {
          this.push(null);
        }
        if (this._parent._stream === this) {
          this._parent._update();
        }
        cb(null);
      }
      _predestroy() {
        this._parent.destroy(getStreamError(this));
      }
      _detach() {
        if (this._parent._stream === this) {
          this._parent._stream = null;
          this._parent._missing = overflow(this.header.size);
          this._parent._update();
        }
      }
      _destroy(cb) {
        this._detach();
        cb(null);
      }
    };
    var Extract = class extends Writable {
      constructor(opts) {
        super(opts);
        if (!opts) opts = {};
        this._buffer = new BufferList();
        this._offset = 0;
        this._header = null;
        this._stream = null;
        this._missing = 0;
        this._longHeader = false;
        this._callback = noop;
        this._locked = false;
        this._finished = false;
        this._pax = null;
        this._paxGlobal = null;
        this._gnuLongPath = null;
        this._gnuLongLinkPath = null;
        this._filenameEncoding = opts.filenameEncoding || "utf-8";
        this._allowUnknownFormat = !!opts.allowUnknownFormat;
        this._unlockBound = this._unlock.bind(this);
      }
      _unlock(err) {
        this._locked = false;
        if (err) {
          this.destroy(err);
          this._continueWrite(err);
          return;
        }
        this._update();
      }
      _consumeHeader() {
        if (this._locked) return false;
        this._offset = this._buffer.shifted;
        try {
          this._header = headers.decode(this._buffer.shift(512), this._filenameEncoding, this._allowUnknownFormat);
        } catch (err) {
          this._continueWrite(err);
          return false;
        }
        if (!this._header) return true;
        this._header.byteOffset = this._buffer.shifted;
        switch (this._header.type) {
          case "gnu-long-path":
          case "gnu-long-link-path":
          case "pax-global-header":
          case "pax-header":
            this._longHeader = true;
            this._missing = this._header.size;
            if (this._missing > MAX_HEADER_SIZE) {
              this._continueWrite(new Error("Header exceeds max size"));
              return false;
            }
            return true;
        }
        this._locked = true;
        this._applyLongHeaders();
        if (!(this._header.size >= 0)) {
          this._continueWrite(new Error("Invalid header"));
          return false;
        }
        if (this._header.size === 0 || this._header.type === "directory") {
          this.emit("entry", this._header, this._createStream(), this._unlockBound);
          return true;
        }
        this._stream = this._createStream();
        this._missing = this._header.size;
        this.emit("entry", this._header, this._stream, this._unlockBound);
        return true;
      }
      _applyLongHeaders() {
        if (this._gnuLongPath) {
          this._header.name = this._gnuLongPath;
          this._gnuLongPath = null;
        }
        if (this._gnuLongLinkPath) {
          this._header.linkname = this._gnuLongLinkPath;
          this._gnuLongLinkPath = null;
        }
        if (this._pax) {
          if (this._pax.path) this._header.name = this._pax.path;
          if (this._pax.linkpath) this._header.linkname = this._pax.linkpath;
          if (this._pax.size) this._header.size = parseInt(this._pax.size, 10);
          this._header.pax = this._pax;
          this._pax = null;
        }
      }
      _decodeLongHeader(buf) {
        switch (this._header.type) {
          case "gnu-long-path":
            this._gnuLongPath = headers.decodeLongPath(buf, this._filenameEncoding);
            break;
          case "gnu-long-link-path":
            this._gnuLongLinkPath = headers.decodeLongPath(buf, this._filenameEncoding);
            break;
          case "pax-global-header":
            this._paxGlobal = headers.decodePax(buf);
            break;
          case "pax-header":
            this._pax = this._paxGlobal === null ? headers.decodePax(buf) : Object.assign({}, this._paxGlobal, headers.decodePax(buf));
            break;
        }
      }
      _consumeLongHeader() {
        this._longHeader = false;
        this._missing = overflow(this._header.size);
        const buf = this._buffer.shift(this._header.size);
        try {
          this._decodeLongHeader(buf);
        } catch (err) {
          this._continueWrite(err);
          return false;
        }
        return true;
      }
      _consumeStream() {
        const buf = this._buffer.shiftFirst(this._missing);
        if (buf === null) return false;
        this._missing -= buf.byteLength;
        const drained = this._stream.push(buf);
        if (this._missing === 0) {
          this._stream.push(null);
          if (drained) this._stream._detach();
          return drained && this._locked === false;
        }
        return drained;
      }
      _createStream() {
        return new Source(this, this._header, this._offset);
      }
      _update() {
        while (this._buffer.buffered > 0 && !this.destroying) {
          if (this._missing > 0) {
            if (this._stream !== null) {
              if (this._consumeStream() === false) return;
              continue;
            }
            if (this._longHeader === true) {
              if (this._missing > this._buffer.buffered) break;
              if (this._consumeLongHeader() === false) return false;
              continue;
            }
            const ignore = this._buffer.shiftFirst(this._missing);
            if (ignore !== null) this._missing -= ignore.byteLength;
            continue;
          }
          if (this._buffer.buffered < 512) break;
          if (this._stream !== null || this._consumeHeader() === false) return;
        }
        this._continueWrite(null);
      }
      _continueWrite(err) {
        const cb = this._callback;
        this._callback = noop;
        cb(err);
      }
      _write(data, cb) {
        this._callback = cb;
        this._buffer.push(data);
        this._update();
      }
      _final(cb) {
        this._finished = this._missing === 0 && this._buffer.buffered === 0;
        cb(this._finished ? null : new Error("Unexpected end of data"));
      }
      _predestroy() {
        this._continueWrite(null);
      }
      _destroy(cb) {
        if (this._stream) this._stream.destroy(getStreamError(this));
        cb(null);
      }
      [Symbol.asyncIterator]() {
        let error = null;
        let promiseResolve = null;
        let promiseReject = null;
        let entryStream = null;
        let entryCallback = null;
        const extract2 = this;
        this.on("entry", onentry);
        this.on("error", (err) => {
          error = err;
        });
        this.on("close", onclose);
        return {
          [Symbol.asyncIterator]() {
            return this;
          },
          next() {
            return new Promise(onnext);
          },
          return() {
            return destroy(null);
          },
          throw(err) {
            return destroy(err);
          }
        };
        function consumeCallback(err) {
          if (!entryCallback) return;
          const cb = entryCallback;
          entryCallback = null;
          cb(err);
        }
        function onnext(resolve4, reject) {
          if (error) {
            return reject(error);
          }
          if (entryStream) {
            resolve4({ value: entryStream, done: false });
            entryStream = null;
            return;
          }
          promiseResolve = resolve4;
          promiseReject = reject;
          consumeCallback(null);
          if (extract2._finished && promiseResolve) {
            promiseResolve({ value: void 0, done: true });
            promiseResolve = promiseReject = null;
          }
        }
        function onentry(header, stream, callback) {
          entryCallback = callback;
          stream.on("error", noop);
          if (promiseResolve) {
            promiseResolve({ value: stream, done: false });
            promiseResolve = promiseReject = null;
          } else {
            entryStream = stream;
          }
        }
        function onclose() {
          consumeCallback(error);
          if (!promiseResolve) return;
          if (error) promiseReject(error);
          else promiseResolve({ value: void 0, done: true });
          promiseResolve = promiseReject = null;
        }
        function destroy(err) {
          extract2.destroy(err);
          consumeCallback(err);
          return new Promise((resolve4, reject) => {
            if (extract2.destroyed) return resolve4({ value: void 0, done: true });
            extract2.once("close", function() {
              if (err) reject(err);
              else resolve4({ value: void 0, done: true });
            });
          });
        }
      }
    };
    module2.exports = function extract2(opts) {
      return new Extract(opts);
    };
    function noop() {
    }
    function overflow(size) {
      size &= 511;
      return size && 512 - size;
    }
  }
});

// node_modules/tar-stream/constants.js
var require_constants = __commonJS({
  "node_modules/tar-stream/constants.js"(exports2, module2) {
    "use strict";
    var constants = {
      // just for envs without fs
      S_IFMT: 61440,
      S_IFDIR: 16384,
      S_IFCHR: 8192,
      S_IFBLK: 24576,
      S_IFIFO: 4096,
      S_IFLNK: 40960
    };
    try {
      module2.exports = require("fs").constants || constants;
    } catch (e) {
      module2.exports = constants;
    }
  }
});

// node_modules/tar-stream/pack.js
var require_pack = __commonJS({
  "node_modules/tar-stream/pack.js"(exports2, module2) {
    "use strict";
    var { Readable, Writable, getStreamError } = require_streamx();
    var b4a = require_b4a();
    var constants = require_constants();
    var headers = require_headers();
    var DMODE = 493;
    var FMODE = 420;
    var END_OF_TAR = b4a.alloc(1024);
    var Sink = class extends Writable {
      constructor(pack, header, callback) {
        super({ mapWritable, eagerOpen: true });
        this.written = 0;
        this.header = header;
        this._callback = callback;
        this._linkname = null;
        this._isLinkname = header.type === "symlink" && !header.linkname;
        this._isVoid = header.type !== "file" && header.type !== "contiguous-file";
        this._finished = false;
        this._pack = pack;
        this._openCallback = null;
        if (this._pack._stream === null) this._pack._stream = this;
        else this._pack._pending.push(this);
      }
      _open(cb) {
        this._openCallback = cb;
        if (this._pack._stream === this) this._continueOpen();
      }
      _continuePack(err) {
        if (this._callback === null) return;
        const callback = this._callback;
        this._callback = null;
        callback(err);
      }
      _continueOpen() {
        if (this._pack._stream === null) this._pack._stream = this;
        const cb = this._openCallback;
        this._openCallback = null;
        if (cb === null) return;
        if (this._pack.destroying) return cb(new Error("pack stream destroyed"));
        if (this._pack._finalized) return cb(new Error("pack stream is already finalized"));
        this._pack._stream = this;
        if (!this._isLinkname) {
          this._pack._encode(this.header);
        }
        if (this._isVoid) {
          this._finish();
          this._continuePack(null);
        }
        cb(null);
      }
      _write(data, cb) {
        if (this._isLinkname) {
          this._linkname = this._linkname ? b4a.concat([this._linkname, data]) : data;
          return cb(null);
        }
        if (this._isVoid) {
          if (data.byteLength > 0) {
            return cb(new Error("No body allowed for this entry"));
          }
          return cb();
        }
        this.written += data.byteLength;
        if (this._pack.push(data)) return cb();
        this._pack._drain = cb;
      }
      _finish() {
        if (this._finished) return;
        this._finished = true;
        if (this._isLinkname) {
          this.header.linkname = this._linkname ? b4a.toString(this._linkname, "utf-8") : "";
          this._pack._encode(this.header);
        }
        overflow(this._pack, this.header.size);
        this._pack._done(this);
      }
      _final(cb) {
        if (this.written !== this.header.size) {
          return cb(new Error("Size mismatch"));
        }
        this._finish();
        cb(null);
      }
      _getError() {
        return getStreamError(this) || new Error("tar entry destroyed");
      }
      _predestroy() {
        this._pack.destroy(this._getError());
      }
      _destroy(cb) {
        this._pack._done(this);
        this._continuePack(this._finished ? null : this._getError());
        cb();
      }
    };
    var Pack = class extends Readable {
      constructor(opts) {
        super(opts);
        this._drain = noop;
        this._finalized = false;
        this._finalizing = false;
        this._pending = [];
        this._stream = null;
      }
      entry(header, buffer, callback) {
        if (this._finalized || this.destroying) throw new Error("already finalized or destroyed");
        if (typeof buffer === "function") {
          callback = buffer;
          buffer = null;
        }
        if (!callback) callback = noop;
        if (!header.size || header.type === "symlink") header.size = 0;
        if (!header.type) header.type = modeToType(header.mode);
        if (!header.mode) header.mode = header.type === "directory" ? DMODE : FMODE;
        if (!header.uid) header.uid = 0;
        if (!header.gid) header.gid = 0;
        if (!header.mtime) header.mtime = /* @__PURE__ */ new Date();
        if (typeof buffer === "string") buffer = b4a.from(buffer);
        const sink = new Sink(this, header, callback);
        if (b4a.isBuffer(buffer)) {
          header.size = buffer.byteLength;
          sink.write(buffer);
          sink.end();
          return sink;
        }
        if (sink._isVoid) {
          return sink;
        }
        return sink;
      }
      finalize() {
        if (this._stream || this._pending.length > 0) {
          this._finalizing = true;
          return;
        }
        if (this._finalized) return;
        this._finalized = true;
        this.push(END_OF_TAR);
        this.push(null);
      }
      _done(stream) {
        if (stream !== this._stream) return;
        this._stream = null;
        if (this._finalizing) this.finalize();
        if (this._pending.length) this._pending.shift()._continueOpen();
      }
      _encode(header) {
        if (!header.pax) {
          const buf = headers.encode(header);
          if (buf) {
            this.push(buf);
            return;
          }
        }
        this._encodePax(header);
      }
      _encodePax(header) {
        const paxHeader = headers.encodePax({
          name: header.name,
          linkname: header.linkname,
          pax: header.pax
        });
        const newHeader = {
          name: "PaxHeader",
          mode: header.mode,
          uid: header.uid,
          gid: header.gid,
          size: paxHeader.byteLength,
          mtime: header.mtime,
          type: "pax-header",
          linkname: header.linkname && "PaxHeader",
          uname: header.uname,
          gname: header.gname,
          devmajor: header.devmajor,
          devminor: header.devminor
        };
        this.push(headers.encode(newHeader));
        this.push(paxHeader);
        overflow(this, paxHeader.byteLength);
        newHeader.size = header.size;
        newHeader.type = header.type;
        this.push(headers.encode(newHeader));
      }
      _doDrain() {
        const drain = this._drain;
        this._drain = noop;
        drain();
      }
      _predestroy() {
        const err = getStreamError(this);
        if (this._stream) this._stream.destroy(err);
        while (this._pending.length) {
          const stream = this._pending.shift();
          stream.destroy(err);
          stream._continueOpen();
        }
        this._doDrain();
      }
      _read(cb) {
        this._doDrain();
        cb();
      }
    };
    module2.exports = function pack(opts) {
      return new Pack(opts);
    };
    function modeToType(mode) {
      switch (mode & constants.S_IFMT) {
        case constants.S_IFBLK:
          return "block-device";
        case constants.S_IFCHR:
          return "character-device";
        case constants.S_IFDIR:
          return "directory";
        case constants.S_IFIFO:
          return "fifo";
        case constants.S_IFLNK:
          return "symlink";
      }
      return "file";
    }
    function noop() {
    }
    function overflow(self, size) {
      size &= 511;
      if (size) self.push(END_OF_TAR.subarray(0, 512 - size));
    }
    function mapWritable(buf) {
      return b4a.isBuffer(buf) ? buf : b4a.from(buf);
    }
  }
});

// node_modules/tar-stream/index.js
var require_tar_stream = __commonJS({
  "node_modules/tar-stream/index.js"(exports2) {
    "use strict";
    exports2.extract = require_extract();
    exports2.pack = require_pack();
  }
});

// node_modules/adm-zip/util/constants.js
var require_constants2 = __commonJS({
  "node_modules/adm-zip/util/constants.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /* The local file header */
      LOCHDR: 30,
      // LOC header size
      LOCSIG: 67324752,
      // "PK\003\004"
      LOCVER: 4,
      // version needed to extract
      LOCFLG: 6,
      // general purpose bit flag
      LOCHOW: 8,
      // compression method
      LOCTIM: 10,
      // modification time (2 bytes time, 2 bytes date)
      LOCCRC: 14,
      // uncompressed file crc-32 value
      LOCSIZ: 18,
      // compressed size
      LOCLEN: 22,
      // uncompressed size
      LOCNAM: 26,
      // filename length
      LOCEXT: 28,
      // extra field length
      /* The Data descriptor */
      EXTSIG: 134695760,
      // "PK\007\008"
      EXTHDR: 16,
      // EXT header size
      EXTCRC: 4,
      // uncompressed file crc-32 value
      EXTSIZ: 8,
      // compressed size
      EXTLEN: 12,
      // uncompressed size
      /* The central directory file header */
      CENHDR: 46,
      // CEN header size
      CENSIG: 33639248,
      // "PK\001\002"
      CENVEM: 4,
      // version made by
      CENVER: 6,
      // version needed to extract
      CENFLG: 8,
      // encrypt, decrypt flags
      CENHOW: 10,
      // compression method
      CENTIM: 12,
      // modification time (2 bytes time, 2 bytes date)
      CENCRC: 16,
      // uncompressed file crc-32 value
      CENSIZ: 20,
      // compressed size
      CENLEN: 24,
      // uncompressed size
      CENNAM: 28,
      // filename length
      CENEXT: 30,
      // extra field length
      CENCOM: 32,
      // file comment length
      CENDSK: 34,
      // volume number start
      CENATT: 36,
      // internal file attributes
      CENATX: 38,
      // external file attributes (host system dependent)
      CENOFF: 42,
      // LOC header offset
      /* The entries in the end of central directory */
      ENDHDR: 22,
      // END header size
      ENDSIG: 101010256,
      // "PK\005\006"
      ENDSUB: 8,
      // number of entries on this disk
      ENDTOT: 10,
      // total number of entries
      ENDSIZ: 12,
      // central directory size in bytes
      ENDOFF: 16,
      // offset of first CEN header
      ENDCOM: 20,
      // zip file comment length
      END64HDR: 20,
      // zip64 END header size
      END64SIG: 117853008,
      // zip64 Locator signature, "PK\006\007"
      END64START: 4,
      // number of the disk with the start of the zip64
      END64OFF: 8,
      // relative offset of the zip64 end of central directory
      END64NUMDISKS: 16,
      // total number of disks
      ZIP64SIG: 101075792,
      // zip64 signature, "PK\006\006"
      ZIP64HDR: 56,
      // zip64 record minimum size
      ZIP64LEAD: 12,
      // leading bytes at the start of the record, not counted by the value stored in ZIP64SIZE
      ZIP64SIZE: 4,
      // zip64 size of the central directory record
      ZIP64VEM: 12,
      // zip64 version made by
      ZIP64VER: 14,
      // zip64 version needed to extract
      ZIP64DSK: 16,
      // zip64 number of this disk
      ZIP64DSKDIR: 20,
      // number of the disk with the start of the record directory
      ZIP64SUB: 24,
      // number of entries on this disk
      ZIP64TOT: 32,
      // total number of entries
      ZIP64SIZB: 40,
      // zip64 central directory size in bytes
      ZIP64OFF: 48,
      // offset of start of central directory with respect to the starting disk number
      ZIP64EXTRA: 56,
      // extensible data sector
      /* Compression methods */
      STORED: 0,
      // no compression
      SHRUNK: 1,
      // shrunk
      REDUCED1: 2,
      // reduced with compression factor 1
      REDUCED2: 3,
      // reduced with compression factor 2
      REDUCED3: 4,
      // reduced with compression factor 3
      REDUCED4: 5,
      // reduced with compression factor 4
      IMPLODED: 6,
      // imploded
      // 7 reserved for Tokenizing compression algorithm
      DEFLATED: 8,
      // deflated
      ENHANCED_DEFLATED: 9,
      // enhanced deflated
      PKWARE: 10,
      // PKWare DCL imploded
      // 11 reserved by PKWARE
      BZIP2: 12,
      //  compressed using BZIP2
      // 13 reserved by PKWARE
      LZMA: 14,
      // LZMA
      // 15-17 reserved by PKWARE
      IBM_TERSE: 18,
      // compressed using IBM TERSE
      IBM_LZ77: 19,
      // IBM LZ77 z
      AES_ENCRYPT: 99,
      // WinZIP AES encryption method
      /* General purpose bit flag */
      // values can obtained with expression 2**bitnr
      FLG_ENC: 1,
      // Bit 0: encrypted file
      FLG_COMP1: 2,
      // Bit 1, compression option
      FLG_COMP2: 4,
      // Bit 2, compression option
      FLG_DESC: 8,
      // Bit 3, data descriptor
      FLG_ENH: 16,
      // Bit 4, enhanced deflating
      FLG_PATCH: 32,
      // Bit 5, indicates that the file is compressed patched data.
      FLG_STR: 64,
      // Bit 6, strong encryption (patented)
      // Bits 7-10: Currently unused.
      FLG_EFS: 2048,
      // Bit 11: Language encoding flag (EFS)
      // Bit 12: Reserved by PKWARE for enhanced compression.
      // Bit 13: encrypted the Central Directory (patented).
      // Bits 14-15: Reserved by PKWARE.
      FLG_MSK: 4096,
      // mask header values
      /* Load type */
      FILE: 2,
      BUFFER: 1,
      NONE: 0,
      /* 4.5 Extensible data fields */
      EF_ID: 0,
      EF_SIZE: 2,
      /* Header IDs */
      ID_ZIP64: 1,
      ID_AVINFO: 7,
      ID_PFS: 8,
      ID_OS2: 9,
      ID_NTFS: 10,
      ID_OPENVMS: 12,
      ID_UNIX: 13,
      ID_FORK: 14,
      ID_PATCH: 15,
      ID_X509_PKCS7: 20,
      ID_X509_CERTID_F: 21,
      ID_X509_CERTID_C: 22,
      ID_STRONGENC: 23,
      ID_RECORD_MGT: 24,
      ID_X509_PKCS7_RL: 25,
      ID_IBM1: 101,
      ID_IBM2: 102,
      ID_POSZIP: 18064,
      EF_ZIP64_OR_32: 4294967295,
      EF_ZIP64_OR_16: 65535,
      EF_ZIP64_SUNCOMP: 0,
      EF_ZIP64_SCOMP: 8,
      EF_ZIP64_RHO: 16,
      EF_ZIP64_DSN: 24
    };
  }
});

// node_modules/adm-zip/util/errors.js
var require_errors2 = __commonJS({
  "node_modules/adm-zip/util/errors.js"(exports2) {
    "use strict";
    var errors = {
      /* Header error messages */
      INVALID_LOC: "Invalid LOC header (bad signature)",
      INVALID_CEN: "Invalid CEN header (bad signature)",
      INVALID_END: "Invalid END header (bad signature)",
      /* Descriptor */
      DESCRIPTOR_NOT_EXIST: "No descriptor present",
      DESCRIPTOR_UNKNOWN: "Unknown descriptor format",
      DESCRIPTOR_FAULTY: "Descriptor data is malformed",
      /* ZipEntry error messages*/
      NO_DATA: "Nothing to decompress",
      BAD_CRC: "CRC32 checksum failed {0}",
      FILE_IN_THE_WAY: "There is a file in the way: {0}",
      UNKNOWN_METHOD: "Invalid/unsupported compression method",
      /* Inflater error messages */
      AVAIL_DATA: "inflate::Available inflate data did not terminate",
      INVALID_DISTANCE: "inflate::Invalid literal/length or distance code in fixed or dynamic block",
      TO_MANY_CODES: "inflate::Dynamic block code description: too many length or distance codes",
      INVALID_REPEAT_LEN: "inflate::Dynamic block code description: repeat more than specified lengths",
      INVALID_REPEAT_FIRST: "inflate::Dynamic block code description: repeat lengths with no first length",
      INCOMPLETE_CODES: "inflate::Dynamic block code description: code lengths codes incomplete",
      INVALID_DYN_DISTANCE: "inflate::Dynamic block code description: invalid distance code lengths",
      INVALID_CODES_LEN: "inflate::Dynamic block code description: invalid literal/length code lengths",
      INVALID_STORE_BLOCK: "inflate::Stored block length did not match one's complement",
      INVALID_BLOCK_TYPE: "inflate::Invalid block type (type == 3)",
      /* ADM-ZIP error messages */
      CANT_EXTRACT_FILE: "Could not extract the file",
      CANT_OVERRIDE: "Target file already exists",
      DISK_ENTRY_TOO_LARGE: "Number of disk entries is too large",
      NO_ZIP: "No zip file was loaded",
      NO_ENTRY: "Entry doesn't exist",
      DIRECTORY_CONTENT_ERROR: "A directory cannot have content",
      FILE_NOT_FOUND: 'File not found: "{0}"',
      NOT_IMPLEMENTED: "Not implemented",
      INVALID_FILENAME: "Invalid filename",
      INVALID_FORMAT: "Invalid or unsupported zip format. No END header found",
      INVALID_PASS_PARAM: "Incompatible password parameter",
      WRONG_PASSWORD: "Wrong Password",
      /* ADM-ZIP */
      COMMENT_TOO_LONG: "Comment is too long",
      // Comment can be max 65535 bytes long (NOTE: some non-US characters may take more space)
      EXTRA_FIELD_PARSE_ERROR: "Extra field parsing error"
    };
    function E(message) {
      return function(...args) {
        if (args.length) {
          message = message.replace(/\{(\d)\}/g, (_, n) => args[n] || "");
        }
        return new Error("ADM-ZIP: " + message);
      };
    }
    for (const msg of Object.keys(errors)) {
      exports2[msg] = E(errors[msg]);
    }
  }
});

// node_modules/adm-zip/util/utils.js
var require_utils = __commonJS({
  "node_modules/adm-zip/util/utils.js"(exports2, module2) {
    "use strict";
    var fsystem = require("fs");
    var pth = require("path");
    var Constants = require_constants2();
    var Errors = require_errors2();
    var isWin = typeof process === "object" && "win32" === process.platform;
    var is_Obj = (obj) => typeof obj === "object" && obj !== null;
    var crcTable = new Uint32Array(256).map((t2, c) => {
      for (let k = 0; k < 8; k++) {
        if ((c & 1) !== 0) {
          c = 3988292384 ^ c >>> 1;
        } else {
          c >>>= 1;
        }
      }
      return c >>> 0;
    });
    function Utils(opts) {
      this.sep = pth.sep;
      this.fs = fsystem;
      if (is_Obj(opts)) {
        if (is_Obj(opts.fs) && typeof opts.fs.statSync === "function") {
          this.fs = opts.fs;
        }
      }
    }
    module2.exports = Utils;
    Utils.prototype.makeDir = function(folder) {
      const self = this;
      function mkdirSync3(fpath) {
        let resolvedPath = fpath.split(self.sep)[0];
        fpath.split(self.sep).forEach(function(name) {
          if (!name || name.substr(-1, 1) === ":") return;
          resolvedPath += self.sep + name;
          var stat;
          try {
            stat = self.fs.statSync(resolvedPath);
          } catch (e) {
            if (e.message && e.message.startsWith("ENOENT")) {
              self.fs.mkdirSync(resolvedPath);
            } else {
              throw e;
            }
          }
          if (stat && stat.isFile()) throw Errors.FILE_IN_THE_WAY(`"${resolvedPath}"`);
        });
      }
      mkdirSync3(folder);
    };
    Utils.prototype.writeFileTo = function(path11, content, overwrite, attr) {
      const self = this;
      if (self.fs.existsSync(path11)) {
        if (!overwrite) return false;
        var stat = self.fs.statSync(path11);
        if (stat.isDirectory()) {
          return false;
        }
      }
      var folder = pth.dirname(path11);
      if (!self.fs.existsSync(folder)) {
        self.makeDir(folder);
      }
      var fd;
      try {
        fd = self.fs.openSync(path11, "w", 438);
      } catch (e) {
        self.fs.chmodSync(path11, 438);
        fd = self.fs.openSync(path11, "w", 438);
      }
      if (fd) {
        try {
          self.fs.writeSync(fd, content, 0, content.length, 0);
        } finally {
          self.fs.closeSync(fd);
        }
      }
      self.fs.chmodSync(path11, attr || 438);
      return true;
    };
    Utils.prototype.writeFileToAsync = function(path11, content, overwrite, attr, callback) {
      if (typeof attr === "function") {
        callback = attr;
        attr = void 0;
      }
      const self = this;
      self.fs.exists(path11, function(exist) {
        if (exist && !overwrite) return callback(false);
        self.fs.stat(path11, function(err, stat) {
          if (exist && stat.isDirectory()) {
            return callback(false);
          }
          var folder = pth.dirname(path11);
          self.fs.exists(folder, function(exists) {
            if (!exists) self.makeDir(folder);
            self.fs.open(path11, "w", 438, function(err2, fd) {
              if (err2) {
                self.fs.chmod(path11, 438, function() {
                  self.fs.open(path11, "w", 438, function(err3, fd2) {
                    self.fs.write(fd2, content, 0, content.length, 0, function() {
                      self.fs.close(fd2, function() {
                        self.fs.chmod(path11, attr || 438, function() {
                          callback(true);
                        });
                      });
                    });
                  });
                });
              } else if (fd) {
                self.fs.write(fd, content, 0, content.length, 0, function() {
                  self.fs.close(fd, function() {
                    self.fs.chmod(path11, attr || 438, function() {
                      callback(true);
                    });
                  });
                });
              } else {
                self.fs.chmod(path11, attr || 438, function() {
                  callback(true);
                });
              }
            });
          });
        });
      });
    };
    Utils.prototype.findFiles = function(path11) {
      const self = this;
      function findSync(dir, pattern, recursive) {
        if (typeof pattern === "boolean") {
          recursive = pattern;
          pattern = void 0;
        }
        let files = [];
        self.fs.readdirSync(dir).forEach(function(file) {
          const path12 = pth.join(dir, file);
          const stat = self.fs.statSync(path12);
          if (!pattern || pattern.test(path12)) {
            files.push(pth.normalize(path12) + (stat.isDirectory() ? self.sep : ""));
          }
          if (stat.isDirectory() && recursive) files = files.concat(findSync(path12, pattern, recursive));
        });
        return files;
      }
      return findSync(path11, void 0, true);
    };
    Utils.prototype.findFilesAsync = function(dir, cb) {
      const self = this;
      let results = [];
      self.fs.readdir(dir, function(err, list) {
        if (err) return cb(err);
        let list_length = list.length;
        if (!list_length) return cb(null, results);
        list.forEach(function(file) {
          file = pth.join(dir, file);
          self.fs.stat(file, function(err2, stat) {
            if (err2) return cb(err2);
            if (stat) {
              results.push(pth.normalize(file) + (stat.isDirectory() ? self.sep : ""));
              if (stat.isDirectory()) {
                self.findFilesAsync(file, function(err3, res) {
                  if (err3) return cb(err3);
                  results = results.concat(res);
                  if (!--list_length) cb(null, results);
                });
              } else {
                if (!--list_length) cb(null, results);
              }
            }
          });
        });
      });
    };
    Utils.prototype.getAttributes = function() {
    };
    Utils.prototype.setAttributes = function() {
    };
    Utils.crc32update = function(crc, byte) {
      return crcTable[(crc ^ byte) & 255] ^ crc >>> 8;
    };
    Utils.crc32 = function(buf) {
      if (typeof buf === "string") {
        buf = Buffer.from(buf, "utf8");
      }
      let len = buf.length;
      let crc = ~0;
      for (let off = 0; off < len; ) crc = Utils.crc32update(crc, buf[off++]);
      return ~crc >>> 0;
    };
    Utils.methodToString = function(method) {
      switch (method) {
        case Constants.STORED:
          return "STORED (" + method + ")";
        case Constants.DEFLATED:
          return "DEFLATED (" + method + ")";
        default:
          return "UNSUPPORTED (" + method + ")";
      }
    };
    Utils.canonical = function(path11) {
      if (!path11) return "";
      const safeSuffix = pth.posix.normalize("/" + path11.split("\\").join("/"));
      return pth.join(".", safeSuffix);
    };
    Utils.zipnamefix = function(path11) {
      if (!path11) return "";
      const safeSuffix = pth.posix.normalize("/" + path11.split("\\").join("/"));
      return pth.posix.join(".", safeSuffix);
    };
    Utils.findLast = function(arr, callback) {
      if (!Array.isArray(arr)) throw new TypeError("arr is not array");
      const len = arr.length >>> 0;
      for (let i = len - 1; i >= 0; i--) {
        if (callback(arr[i], i, arr)) {
          return arr[i];
        }
      }
      return void 0;
    };
    Utils.sanitize = function(prefix, name) {
      prefix = pth.resolve(pth.normalize(prefix));
      var parts = name.split("/");
      for (var i = 0, l = parts.length; i < l; i++) {
        var path11 = pth.normalize(pth.join(prefix, parts.slice(i, l).join(pth.sep)));
        if (path11.indexOf(prefix) === 0) {
          return path11;
        }
      }
      return pth.normalize(pth.join(prefix, pth.basename(name)));
    };
    Utils.toBuffer = function toBuffer(input, encoder) {
      if (Buffer.isBuffer(input)) {
        return input;
      } else if (input instanceof Uint8Array) {
        return Buffer.from(input);
      } else {
        return typeof input === "string" ? encoder(input) : Buffer.alloc(0);
      }
    };
    Utils.readBigUInt64LE = function(buffer, index) {
      const lo = buffer.readUInt32LE(index);
      const hi = buffer.readUInt32LE(index + 4);
      return hi * 4294967296 + lo;
    };
    Utils.fromDOS2Date = function(val) {
      return new Date((val >> 25 & 127) + 1980, Math.max((val >> 21 & 15) - 1, 0), Math.max(val >> 16 & 31, 1), val >> 11 & 31, val >> 5 & 63, (val & 31) << 1);
    };
    Utils.fromDate2DOS = function(val) {
      let date = 0;
      let time = 0;
      if (val.getFullYear() > 1979) {
        date = (val.getFullYear() - 1980 & 127) << 9 | val.getMonth() + 1 << 5 | val.getDate();
        time = val.getHours() << 11 | val.getMinutes() << 5 | val.getSeconds() >> 1;
      }
      return date << 16 | time;
    };
    Utils.isWin = isWin;
    Utils.crcTable = crcTable;
  }
});

// node_modules/adm-zip/util/fattr.js
var require_fattr = __commonJS({
  "node_modules/adm-zip/util/fattr.js"(exports2, module2) {
    "use strict";
    var pth = require("path");
    module2.exports = function(path11, { fs: fs13 }) {
      var _path = path11 || "", _obj = newAttr(), _stat = null;
      function newAttr() {
        return {
          directory: false,
          readonly: false,
          hidden: false,
          executable: false,
          mtime: 0,
          atime: 0
        };
      }
      if (_path && fs13.existsSync(_path)) {
        _stat = fs13.statSync(_path);
        _obj.directory = _stat.isDirectory();
        _obj.mtime = _stat.mtime;
        _obj.atime = _stat.atime;
        _obj.executable = (73 & _stat.mode) !== 0;
        _obj.readonly = (128 & _stat.mode) === 0;
        _obj.hidden = pth.basename(_path)[0] === ".";
      } else {
        console.warn("Invalid path: " + _path);
      }
      return {
        get directory() {
          return _obj.directory;
        },
        get readOnly() {
          return _obj.readonly;
        },
        get hidden() {
          return _obj.hidden;
        },
        get mtime() {
          return _obj.mtime;
        },
        get atime() {
          return _obj.atime;
        },
        get executable() {
          return _obj.executable;
        },
        decodeAttributes: function() {
        },
        encodeAttributes: function() {
        },
        toJSON: function() {
          return {
            path: _path,
            isDirectory: _obj.directory,
            isReadOnly: _obj.readonly,
            isHidden: _obj.hidden,
            isExecutable: _obj.executable,
            mTime: _obj.mtime,
            aTime: _obj.atime
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/util/decoder.js
var require_decoder = __commonJS({
  "node_modules/adm-zip/util/decoder.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      efs: true,
      encode: (data) => Buffer.from(data, "utf8"),
      decode: (data) => data.toString("utf8")
    };
  }
});

// node_modules/adm-zip/util/index.js
var require_util = __commonJS({
  "node_modules/adm-zip/util/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_utils();
    module2.exports.Constants = require_constants2();
    module2.exports.Errors = require_errors2();
    module2.exports.FileAttr = require_fattr();
    module2.exports.decoder = require_decoder();
  }
});

// node_modules/adm-zip/headers/entryHeader.js
var require_entryHeader = __commonJS({
  "node_modules/adm-zip/headers/entryHeader.js"(exports2, module2) {
    "use strict";
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _verMade = 20, _version = 10, _flags = 0, _method = 0, _time = 0, _crc = 0, _compressedSize = 0, _size = 0, _fnameLen = 0, _extraLen = 0, _comLen = 0, _diskStart = 0, _inattr = 0, _attr = 0, _offset = 0;
      _verMade |= Utils.isWin ? 2560 : 768;
      _flags |= Constants.FLG_EFS;
      const _localHeader = {
        extraLen: 0
      };
      const uint32 = (val) => Math.max(0, val) >>> 0;
      const uint16 = (val) => Math.max(0, val) & 65535;
      const uint8 = (val) => Math.max(0, val) & 255;
      _time = Utils.fromDate2DOS(/* @__PURE__ */ new Date());
      return {
        get made() {
          return _verMade;
        },
        set made(val) {
          _verMade = val;
        },
        get version() {
          return _version;
        },
        set version(val) {
          _version = val;
        },
        get flags() {
          return _flags;
        },
        set flags(val) {
          _flags = val;
        },
        get flags_efs() {
          return (_flags & Constants.FLG_EFS) > 0;
        },
        set flags_efs(val) {
          if (val) {
            _flags |= Constants.FLG_EFS;
          } else {
            _flags &= ~Constants.FLG_EFS;
          }
        },
        get flags_desc() {
          return (_flags & Constants.FLG_DESC) > 0;
        },
        set flags_desc(val) {
          if (val) {
            _flags |= Constants.FLG_DESC;
          } else {
            _flags &= ~Constants.FLG_DESC;
          }
        },
        get method() {
          return _method;
        },
        set method(val) {
          switch (val) {
            case Constants.STORED:
              this.version = 10;
            case Constants.DEFLATED:
            default:
              this.version = 20;
          }
          _method = val;
        },
        get time() {
          return Utils.fromDOS2Date(this.timeval);
        },
        set time(val) {
          val = new Date(val);
          this.timeval = Utils.fromDate2DOS(val);
        },
        get timeval() {
          return _time;
        },
        set timeval(val) {
          _time = uint32(val);
        },
        get timeHighByte() {
          return uint8(_time >>> 8);
        },
        get crc() {
          return _crc;
        },
        set crc(val) {
          _crc = uint32(val);
        },
        get compressedSize() {
          return _compressedSize;
        },
        set compressedSize(val) {
          _compressedSize = uint32(val);
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = uint32(val);
        },
        get fileNameLength() {
          return _fnameLen;
        },
        set fileNameLength(val) {
          _fnameLen = val;
        },
        get extraLength() {
          return _extraLen;
        },
        set extraLength(val) {
          _extraLen = val;
        },
        get extraLocalLength() {
          return _localHeader.extraLen;
        },
        set extraLocalLength(val) {
          _localHeader.extraLen = val;
        },
        get commentLength() {
          return _comLen;
        },
        set commentLength(val) {
          _comLen = val;
        },
        get diskNumStart() {
          return _diskStart;
        },
        set diskNumStart(val) {
          _diskStart = uint32(val);
        },
        get inAttr() {
          return _inattr;
        },
        set inAttr(val) {
          _inattr = uint32(val);
        },
        get attr() {
          return _attr;
        },
        set attr(val) {
          _attr = uint32(val);
        },
        // get Unix file permissions
        get fileAttr() {
          return (_attr || 0) >> 16 & 4095;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = uint32(val);
        },
        get encrypted() {
          return (_flags & Constants.FLG_ENC) === Constants.FLG_ENC;
        },
        get centralHeaderSize() {
          return Constants.CENHDR + _fnameLen + _extraLen + _comLen;
        },
        get realDataOffset() {
          return _offset + Constants.LOCHDR + _localHeader.fnameLen + _localHeader.extraLen;
        },
        get localHeader() {
          return _localHeader;
        },
        loadLocalHeaderFromBinary: function(input) {
          var data = input.slice(_offset, _offset + Constants.LOCHDR);
          if (data.readUInt32LE(0) !== Constants.LOCSIG) {
            throw Utils.Errors.INVALID_LOC();
          }
          _localHeader.version = data.readUInt16LE(Constants.LOCVER);
          _localHeader.flags = data.readUInt16LE(Constants.LOCFLG);
          _localHeader.flags_desc = (_localHeader.flags & Constants.FLG_DESC) > 0;
          _localHeader.method = data.readUInt16LE(Constants.LOCHOW);
          _localHeader.time = data.readUInt32LE(Constants.LOCTIM);
          _localHeader.crc = data.readUInt32LE(Constants.LOCCRC);
          _localHeader.compressedSize = data.readUInt32LE(Constants.LOCSIZ);
          _localHeader.size = data.readUInt32LE(Constants.LOCLEN);
          _localHeader.fnameLen = data.readUInt16LE(Constants.LOCNAM);
          _localHeader.extraLen = data.readUInt16LE(Constants.LOCEXT);
          const extraStart = _offset + Constants.LOCHDR + _localHeader.fnameLen;
          const extraEnd = extraStart + _localHeader.extraLen;
          return input.slice(extraStart, extraEnd);
        },
        loadFromBinary: function(data) {
          if (data.length !== Constants.CENHDR || data.readUInt32LE(0) !== Constants.CENSIG) {
            throw Utils.Errors.INVALID_CEN();
          }
          _verMade = data.readUInt16LE(Constants.CENVEM);
          _version = data.readUInt16LE(Constants.CENVER);
          _flags = data.readUInt16LE(Constants.CENFLG);
          _method = data.readUInt16LE(Constants.CENHOW);
          _time = data.readUInt32LE(Constants.CENTIM);
          _crc = data.readUInt32LE(Constants.CENCRC);
          _compressedSize = data.readUInt32LE(Constants.CENSIZ);
          _size = data.readUInt32LE(Constants.CENLEN);
          _fnameLen = data.readUInt16LE(Constants.CENNAM);
          _extraLen = data.readUInt16LE(Constants.CENEXT);
          _comLen = data.readUInt16LE(Constants.CENCOM);
          _diskStart = data.readUInt16LE(Constants.CENDSK);
          _inattr = data.readUInt16LE(Constants.CENATT);
          _attr = data.readUInt32LE(Constants.CENATX);
          _offset = data.readUInt32LE(Constants.CENOFF);
        },
        localHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.LOCHDR);
          data.writeUInt32LE(Constants.LOCSIG, 0);
          data.writeUInt16LE(_version, Constants.LOCVER);
          data.writeUInt16LE(_flags, Constants.LOCFLG);
          data.writeUInt16LE(_method, Constants.LOCHOW);
          data.writeUInt32LE(_time, Constants.LOCTIM);
          data.writeUInt32LE(_crc, Constants.LOCCRC);
          data.writeUInt32LE(_compressedSize, Constants.LOCSIZ);
          data.writeUInt32LE(_size, Constants.LOCLEN);
          data.writeUInt16LE(_fnameLen, Constants.LOCNAM);
          data.writeUInt16LE(_localHeader.extraLen, Constants.LOCEXT);
          return data;
        },
        centralHeaderToBinary: function() {
          var data = Buffer.alloc(Constants.CENHDR + _fnameLen + _extraLen + _comLen);
          data.writeUInt32LE(Constants.CENSIG, 0);
          data.writeUInt16LE(_verMade, Constants.CENVEM);
          data.writeUInt16LE(_version, Constants.CENVER);
          data.writeUInt16LE(_flags, Constants.CENFLG);
          data.writeUInt16LE(_method, Constants.CENHOW);
          data.writeUInt32LE(_time, Constants.CENTIM);
          data.writeUInt32LE(_crc, Constants.CENCRC);
          data.writeUInt32LE(_compressedSize, Constants.CENSIZ);
          data.writeUInt32LE(_size, Constants.CENLEN);
          data.writeUInt16LE(_fnameLen, Constants.CENNAM);
          data.writeUInt16LE(_extraLen, Constants.CENEXT);
          data.writeUInt16LE(_comLen, Constants.CENCOM);
          data.writeUInt16LE(_diskStart, Constants.CENDSK);
          data.writeUInt16LE(_inattr, Constants.CENATT);
          data.writeUInt32LE(_attr, Constants.CENATX);
          data.writeUInt32LE(_offset, Constants.CENOFF);
          return data;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return nr + " bytes";
          };
          return {
            made: _verMade,
            version: _version,
            flags: _flags,
            method: Utils.methodToString(_method),
            time: this.time,
            crc: "0x" + _crc.toString(16).toUpperCase(),
            compressedSize: bytes(_compressedSize),
            size: bytes(_size),
            fileNameLength: bytes(_fnameLen),
            extraLength: bytes(_extraLen),
            commentLength: bytes(_comLen),
            diskNumStart: _diskStart,
            inAttr: _inattr,
            attr: _attr,
            offset: _offset,
            centralHeaderSize: bytes(Constants.CENHDR + _fnameLen + _extraLen + _comLen)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/mainHeader.js
var require_mainHeader = __commonJS({
  "node_modules/adm-zip/headers/mainHeader.js"(exports2, module2) {
    "use strict";
    var Utils = require_util();
    var Constants = Utils.Constants;
    module2.exports = function() {
      var _volumeEntries = 0, _totalEntries = 0, _size = 0, _offset = 0, _commentLength = 0;
      return {
        get diskEntries() {
          return _volumeEntries;
        },
        set diskEntries(val) {
          _volumeEntries = _totalEntries = val;
        },
        get totalEntries() {
          return _totalEntries;
        },
        set totalEntries(val) {
          _totalEntries = _volumeEntries = val;
        },
        get size() {
          return _size;
        },
        set size(val) {
          _size = val;
        },
        get offset() {
          return _offset;
        },
        set offset(val) {
          _offset = val;
        },
        get commentLength() {
          return _commentLength;
        },
        set commentLength(val) {
          _commentLength = val;
        },
        get mainHeaderSize() {
          return Constants.ENDHDR + _commentLength;
        },
        loadFromBinary: function(data) {
          if ((data.length !== Constants.ENDHDR || data.readUInt32LE(0) !== Constants.ENDSIG) && (data.length < Constants.ZIP64HDR || data.readUInt32LE(0) !== Constants.ZIP64SIG)) {
            throw Utils.Errors.INVALID_END();
          }
          if (data.readUInt32LE(0) === Constants.ENDSIG) {
            _volumeEntries = data.readUInt16LE(Constants.ENDSUB);
            _totalEntries = data.readUInt16LE(Constants.ENDTOT);
            _size = data.readUInt32LE(Constants.ENDSIZ);
            _offset = data.readUInt32LE(Constants.ENDOFF);
            _commentLength = data.readUInt16LE(Constants.ENDCOM);
          } else {
            _volumeEntries = Utils.readBigUInt64LE(data, Constants.ZIP64SUB);
            _totalEntries = Utils.readBigUInt64LE(data, Constants.ZIP64TOT);
            _size = Utils.readBigUInt64LE(data, Constants.ZIP64SIZE);
            _offset = Utils.readBigUInt64LE(data, Constants.ZIP64OFF);
            _commentLength = 0;
          }
        },
        toBinary: function() {
          var b = Buffer.alloc(Constants.ENDHDR + _commentLength);
          b.writeUInt32LE(Constants.ENDSIG, 0);
          b.writeUInt32LE(0, 4);
          b.writeUInt16LE(_volumeEntries, Constants.ENDSUB);
          b.writeUInt16LE(_totalEntries, Constants.ENDTOT);
          b.writeUInt32LE(_size, Constants.ENDSIZ);
          b.writeUInt32LE(_offset, Constants.ENDOFF);
          b.writeUInt16LE(_commentLength, Constants.ENDCOM);
          b.fill(" ", Constants.ENDHDR);
          return b;
        },
        toJSON: function() {
          const offset = function(nr, len) {
            let offs = nr.toString(16).toUpperCase();
            while (offs.length < len) offs = "0" + offs;
            return "0x" + offs;
          };
          return {
            diskEntries: _volumeEntries,
            totalEntries: _totalEntries,
            size: _size + " bytes",
            offset: offset(_offset, 4),
            commentLength: _commentLength
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/headers/index.js
var require_headers2 = __commonJS({
  "node_modules/adm-zip/headers/index.js"(exports2) {
    "use strict";
    exports2.EntryHeader = require_entryHeader();
    exports2.MainHeader = require_mainHeader();
  }
});

// node_modules/adm-zip/methods/deflater.js
var require_deflater = __commonJS({
  "node_modules/adm-zip/methods/deflater.js"(exports2, module2) {
    "use strict";
    module2.exports = function(inbuf) {
      var zlib2 = require("zlib");
      var opts = { chunkSize: (parseInt(inbuf.length / 1024) + 1) * 1024 };
      return {
        deflate: function() {
          return zlib2.deflateRawSync(inbuf, opts);
        },
        deflateAsync: function(callback) {
          var tmp = zlib2.createDeflateRaw(opts), parts = [], total = 0;
          tmp.on("data", function(data) {
            parts.push(data);
            total += data.length;
          });
          tmp.on("end", function() {
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/inflater.js
var require_inflater = __commonJS({
  "node_modules/adm-zip/methods/inflater.js"(exports2, module2) {
    "use strict";
    var version = +(process.versions ? process.versions.node : "").split(".")[0] || 0;
    module2.exports = function(inbuf, expectedLength) {
      var zlib2 = require("zlib");
      const option = version >= 15 && expectedLength > 0 ? { maxOutputLength: expectedLength } : {};
      return {
        inflate: function() {
          return zlib2.inflateRawSync(inbuf, option);
        },
        inflateAsync: function(callback) {
          var tmp = zlib2.createInflateRaw(option), parts = [], total = 0;
          tmp.on("data", function(data) {
            parts.push(data);
            total += data.length;
          });
          tmp.on("end", function() {
            var buf = Buffer.alloc(total), written = 0;
            buf.fill(0);
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              part.copy(buf, written);
              written += part.length;
            }
            callback && callback(buf);
          });
          tmp.end(inbuf);
        }
      };
    };
  }
});

// node_modules/adm-zip/methods/zipcrypto.js
var require_zipcrypto = __commonJS({
  "node_modules/adm-zip/methods/zipcrypto.js"(exports2, module2) {
    "use strict";
    var { randomFillSync } = require("crypto");
    var Errors = require_errors2();
    var crctable = new Uint32Array(256).map((t2, crc) => {
      for (let j = 0; j < 8; j++) {
        if (0 !== (crc & 1)) {
          crc = crc >>> 1 ^ 3988292384;
        } else {
          crc >>>= 1;
        }
      }
      return crc >>> 0;
    });
    var uMul = (a, b) => Math.imul(a, b) >>> 0;
    var crc32update = (pCrc32, bval) => {
      return crctable[(pCrc32 ^ bval) & 255] ^ pCrc32 >>> 8;
    };
    var genSalt = () => {
      if ("function" === typeof randomFillSync) {
        return randomFillSync(Buffer.alloc(12));
      } else {
        return genSalt.node();
      }
    };
    genSalt.node = () => {
      const salt = Buffer.alloc(12);
      const len = salt.length;
      for (let i = 0; i < len; i++) salt[i] = Math.random() * 256 & 255;
      return salt;
    };
    var config = {
      genSalt
    };
    function Initkeys(pw) {
      const pass = Buffer.isBuffer(pw) ? pw : Buffer.from(pw);
      this.keys = new Uint32Array([305419896, 591751049, 878082192]);
      for (let i = 0; i < pass.length; i++) {
        this.updateKeys(pass[i]);
      }
    }
    Initkeys.prototype.updateKeys = function(byteValue) {
      const keys = this.keys;
      keys[0] = crc32update(keys[0], byteValue);
      keys[1] += keys[0] & 255;
      keys[1] = uMul(keys[1], 134775813) + 1;
      keys[2] = crc32update(keys[2], keys[1] >>> 24);
      return byteValue;
    };
    Initkeys.prototype.next = function() {
      const k = (this.keys[2] | 2) >>> 0;
      return uMul(k, k ^ 1) >> 8 & 255;
    };
    function make_decrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data) {
        const result = Buffer.alloc(data.length);
        let pos = 0;
        for (let c of data) {
          result[pos++] = keys.updateKeys(c ^ keys.next());
        }
        return result;
      };
    }
    function make_encrypter(pwd) {
      const keys = new Initkeys(pwd);
      return function(data, result, pos = 0) {
        if (!result) result = Buffer.alloc(data.length);
        for (let c of data) {
          const k = keys.next();
          result[pos++] = c ^ k;
          keys.updateKeys(c);
        }
        return result;
      };
    }
    function decrypt(data, header, pwd) {
      if (!data || !Buffer.isBuffer(data) || data.length < 12) {
        return Buffer.alloc(0);
      }
      const decrypter = make_decrypter(pwd);
      const salt = decrypter(data.slice(0, 12));
      const verifyByte = (header.flags & 8) === 8 ? header.timeHighByte : header.crc >>> 24;
      if (salt[11] !== verifyByte) {
        throw Errors.WRONG_PASSWORD();
      }
      return decrypter(data.slice(12));
    }
    function _salter(data) {
      if (Buffer.isBuffer(data) && data.length >= 12) {
        config.genSalt = function() {
          return data.slice(0, 12);
        };
      } else if (data === "node") {
        config.genSalt = genSalt.node;
      } else {
        config.genSalt = genSalt;
      }
    }
    function encrypt(data, header, pwd, oldlike = false) {
      if (data == null) data = Buffer.alloc(0);
      if (!Buffer.isBuffer(data)) data = Buffer.from(data.toString());
      const encrypter = make_encrypter(pwd);
      const salt = config.genSalt();
      salt[11] = header.crc >>> 24 & 255;
      if (oldlike) salt[10] = header.crc >>> 16 & 255;
      const result = Buffer.alloc(data.length + 12);
      encrypter(salt, result);
      return encrypter(data, result, 12);
    }
    module2.exports = { decrypt, encrypt, _salter };
  }
});

// node_modules/adm-zip/methods/index.js
var require_methods = __commonJS({
  "node_modules/adm-zip/methods/index.js"(exports2) {
    "use strict";
    exports2.Deflater = require_deflater();
    exports2.Inflater = require_inflater();
    exports2.ZipCrypto = require_zipcrypto();
  }
});

// node_modules/adm-zip/zipEntry.js
var require_zipEntry = __commonJS({
  "node_modules/adm-zip/zipEntry.js"(exports2, module2) {
    "use strict";
    var Utils = require_util();
    var Headers = require_headers2();
    var Constants = Utils.Constants;
    var Methods = require_methods();
    module2.exports = function(options, input) {
      var _centralHeader = new Headers.EntryHeader(), _entryName = Buffer.alloc(0), _comment = Buffer.alloc(0), _isDirectory = false, uncompressedData = null, _extra = Buffer.alloc(0), _extralocal = Buffer.alloc(0), _efs = true;
      const opts = options;
      const decoder = typeof opts.decoder === "object" ? opts.decoder : Utils.decoder;
      _efs = decoder.hasOwnProperty("efs") ? decoder.efs : false;
      function getCompressedDataFromZip() {
        if (!input || !(input instanceof Uint8Array)) {
          return Buffer.alloc(0);
        }
        _extralocal = _centralHeader.loadLocalHeaderFromBinary(input);
        return input.slice(_centralHeader.realDataOffset, _centralHeader.realDataOffset + _centralHeader.compressedSize);
      }
      function crc32OK(data) {
        if (!_centralHeader.flags_desc && !_centralHeader.localHeader.flags_desc) {
          if (Utils.crc32(data) !== _centralHeader.localHeader.crc) {
            return false;
          }
        } else {
          const descriptor = {};
          const dataEndOffset = _centralHeader.realDataOffset + _centralHeader.compressedSize;
          if (input.readUInt32LE(dataEndOffset) == Constants.LOCSIG || input.readUInt32LE(dataEndOffset) == Constants.CENSIG) {
            throw Utils.Errors.DESCRIPTOR_NOT_EXIST();
          }
          if (input.readUInt32LE(dataEndOffset) == Constants.EXTSIG) {
            descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC);
            descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ);
            descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN);
          } else if (input.readUInt16LE(dataEndOffset + 12) === 19280) {
            descriptor.crc = input.readUInt32LE(dataEndOffset + Constants.EXTCRC - 4);
            descriptor.compressedSize = input.readUInt32LE(dataEndOffset + Constants.EXTSIZ - 4);
            descriptor.size = input.readUInt32LE(dataEndOffset + Constants.EXTLEN - 4);
          } else {
            throw Utils.Errors.DESCRIPTOR_UNKNOWN();
          }
          if (descriptor.compressedSize !== _centralHeader.compressedSize || descriptor.size !== _centralHeader.size || descriptor.crc !== _centralHeader.crc) {
            throw Utils.Errors.DESCRIPTOR_FAULTY();
          }
          if (Utils.crc32(data) !== descriptor.crc) {
            return false;
          }
        }
        return true;
      }
      function decompress(async, callback, pass) {
        if (typeof callback === "undefined" && typeof async === "string") {
          pass = async;
          async = void 0;
        }
        if (_isDirectory) {
          if (async && callback) {
            callback(Buffer.alloc(0), Utils.Errors.DIRECTORY_CONTENT_ERROR());
          }
          return Buffer.alloc(0);
        }
        var compressedData = getCompressedDataFromZip();
        if (compressedData.length === 0) {
          if (async && callback) callback(compressedData);
          return compressedData;
        }
        if (_centralHeader.encrypted) {
          if ("string" !== typeof pass && !Buffer.isBuffer(pass)) {
            throw Utils.Errors.INVALID_PASS_PARAM();
          }
          compressedData = Methods.ZipCrypto.decrypt(compressedData, _centralHeader, pass);
        }
        var data = Buffer.alloc(_centralHeader.size);
        switch (_centralHeader.method) {
          case Utils.Constants.STORED:
            compressedData.copy(data);
            if (!crc32OK(data)) {
              if (async && callback) callback(data, Utils.Errors.BAD_CRC());
              throw Utils.Errors.BAD_CRC();
            } else {
              if (async && callback) callback(data);
              return data;
            }
          case Utils.Constants.DEFLATED:
            var inflater = new Methods.Inflater(compressedData, _centralHeader.size);
            if (!async) {
              const result = inflater.inflate(data);
              result.copy(data, 0);
              if (!crc32OK(data)) {
                throw Utils.Errors.BAD_CRC(`"${decoder.decode(_entryName)}"`);
              }
              return data;
            } else {
              inflater.inflateAsync(function(result) {
                result.copy(result, 0);
                if (callback) {
                  if (!crc32OK(result)) {
                    callback(result, Utils.Errors.BAD_CRC());
                  } else {
                    callback(result);
                  }
                }
              });
            }
            break;
          default:
            if (async && callback) callback(Buffer.alloc(0), Utils.Errors.UNKNOWN_METHOD());
            throw Utils.Errors.UNKNOWN_METHOD();
        }
      }
      function compress(async, callback) {
        if ((!uncompressedData || !uncompressedData.length) && Buffer.isBuffer(input)) {
          if (async && callback) callback(getCompressedDataFromZip());
          return getCompressedDataFromZip();
        }
        if (uncompressedData.length && !_isDirectory) {
          var compressedData;
          switch (_centralHeader.method) {
            case Utils.Constants.STORED:
              _centralHeader.compressedSize = _centralHeader.size;
              compressedData = Buffer.alloc(uncompressedData.length);
              uncompressedData.copy(compressedData);
              if (async && callback) callback(compressedData);
              return compressedData;
            default:
            case Utils.Constants.DEFLATED:
              var deflater = new Methods.Deflater(uncompressedData);
              if (!async) {
                var deflated = deflater.deflate();
                _centralHeader.compressedSize = deflated.length;
                return deflated;
              } else {
                deflater.deflateAsync(function(data) {
                  compressedData = Buffer.alloc(data.length);
                  _centralHeader.compressedSize = data.length;
                  data.copy(compressedData);
                  callback && callback(compressedData);
                });
              }
              deflater = null;
              break;
          }
        } else if (async && callback) {
          callback(Buffer.alloc(0));
        } else {
          return Buffer.alloc(0);
        }
      }
      function readUInt64LE(buffer, offset) {
        return Utils.readBigUInt64LE(buffer, offset);
      }
      function parseExtra(data) {
        try {
          var offset = 0;
          var signature, size, part;
          while (offset + 4 < data.length) {
            signature = data.readUInt16LE(offset);
            offset += 2;
            size = data.readUInt16LE(offset);
            offset += 2;
            part = data.slice(offset, offset + size);
            offset += size;
            if (Constants.ID_ZIP64 === signature) {
              parseZip64ExtendedInformation(part);
            }
          }
        } catch (error) {
          throw Utils.Errors.EXTRA_FIELD_PARSE_ERROR();
        }
      }
      function parseZip64ExtendedInformation(data) {
        var size, compressedSize, offset, diskNumStart;
        if (data.length >= Constants.EF_ZIP64_SCOMP) {
          size = readUInt64LE(data, Constants.EF_ZIP64_SUNCOMP);
          if (_centralHeader.size === Constants.EF_ZIP64_OR_32) {
            _centralHeader.size = size;
          }
        }
        if (data.length >= Constants.EF_ZIP64_RHO) {
          compressedSize = readUInt64LE(data, Constants.EF_ZIP64_SCOMP);
          if (_centralHeader.compressedSize === Constants.EF_ZIP64_OR_32) {
            _centralHeader.compressedSize = compressedSize;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN) {
          offset = readUInt64LE(data, Constants.EF_ZIP64_RHO);
          if (_centralHeader.offset === Constants.EF_ZIP64_OR_32) {
            _centralHeader.offset = offset;
          }
        }
        if (data.length >= Constants.EF_ZIP64_DSN + 4) {
          diskNumStart = data.readUInt32LE(Constants.EF_ZIP64_DSN);
          if (_centralHeader.diskNumStart === Constants.EF_ZIP64_OR_16) {
            _centralHeader.diskNumStart = diskNumStart;
          }
        }
      }
      return {
        get entryName() {
          return decoder.decode(_entryName);
        },
        get rawEntryName() {
          return _entryName;
        },
        set entryName(val) {
          _entryName = Utils.toBuffer(val, decoder.encode);
          var lastChar = _entryName[_entryName.length - 1];
          _isDirectory = lastChar === 47 || lastChar === 92;
          _centralHeader.fileNameLength = _entryName.length;
        },
        get efs() {
          if (typeof _efs === "function") {
            return _efs(this.entryName);
          } else {
            return _efs;
          }
        },
        get extra() {
          return _extra;
        },
        set extra(val) {
          _extra = val;
          _centralHeader.extraLength = val.length;
          parseExtra(val);
        },
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          _centralHeader.commentLength = _comment.length;
          if (_comment.length > 65535) throw Utils.Errors.COMMENT_TOO_LONG();
        },
        get name() {
          var n = decoder.decode(_entryName);
          return _isDirectory ? n.substr(n.length - 1).split("/").pop() : n.split("/").pop();
        },
        get isDirectory() {
          return _isDirectory;
        },
        getCompressedData: function() {
          return compress(false, null);
        },
        getCompressedDataAsync: function(callback) {
          compress(true, callback);
        },
        setData: function(value) {
          uncompressedData = Utils.toBuffer(value, Utils.decoder.encode);
          if (!_isDirectory && uncompressedData.length) {
            _centralHeader.size = uncompressedData.length;
            _centralHeader.method = Utils.Constants.DEFLATED;
            _centralHeader.crc = Utils.crc32(value);
            _centralHeader.changed = true;
          } else {
            _centralHeader.method = Utils.Constants.STORED;
          }
        },
        getData: function(pass) {
          if (_centralHeader.changed) {
            return uncompressedData;
          } else {
            return decompress(false, null, pass);
          }
        },
        getDataAsync: function(callback, pass) {
          if (_centralHeader.changed) {
            callback(uncompressedData);
          } else {
            decompress(true, callback, pass);
          }
        },
        set attr(attr) {
          _centralHeader.attr = attr;
        },
        get attr() {
          return _centralHeader.attr;
        },
        set header(data) {
          _centralHeader.loadFromBinary(data);
        },
        get header() {
          return _centralHeader;
        },
        packCentralHeader: function() {
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLength = _extra.length;
          var header = _centralHeader.centralHeaderToBinary();
          var addpos = Utils.Constants.CENHDR;
          _entryName.copy(header, addpos);
          addpos += _entryName.length;
          _extra.copy(header, addpos);
          addpos += _centralHeader.extraLength;
          _comment.copy(header, addpos);
          return header;
        },
        packLocalHeader: function() {
          let addpos = 0;
          _centralHeader.flags_efs = this.efs;
          _centralHeader.extraLocalLength = _extralocal.length;
          const localHeaderBuf = _centralHeader.localHeaderToBinary();
          const localHeader = Buffer.alloc(localHeaderBuf.length + _entryName.length + _centralHeader.extraLocalLength);
          localHeaderBuf.copy(localHeader, addpos);
          addpos += localHeaderBuf.length;
          _entryName.copy(localHeader, addpos);
          addpos += _entryName.length;
          _extralocal.copy(localHeader, addpos);
          addpos += _extralocal.length;
          return localHeader;
        },
        toJSON: function() {
          const bytes = function(nr) {
            return "<" + (nr && nr.length + " bytes buffer" || "null") + ">";
          };
          return {
            entryName: this.entryName,
            name: this.name,
            comment: this.comment,
            isDirectory: this.isDirectory,
            header: _centralHeader.toJSON(),
            compressedData: bytes(input),
            data: bytes(uncompressedData)
          };
        },
        toString: function() {
          return JSON.stringify(this.toJSON(), null, "	");
        }
      };
    };
  }
});

// node_modules/adm-zip/zipFile.js
var require_zipFile = __commonJS({
  "node_modules/adm-zip/zipFile.js"(exports2, module2) {
    "use strict";
    var ZipEntry = require_zipEntry();
    var Headers = require_headers2();
    var Utils = require_util();
    module2.exports = function(inBuffer, options) {
      var entryList = [], entryTable = {}, _comment = Buffer.alloc(0), mainHeader = new Headers.MainHeader(), loadedEntries = false;
      var password = null;
      const temporary = /* @__PURE__ */ new Set();
      const opts = options;
      const { noSort, decoder } = opts;
      if (inBuffer) {
        readMainHeader(opts.readEntries);
      } else {
        loadedEntries = true;
      }
      function makeTemporaryFolders() {
        const foldersList = /* @__PURE__ */ new Set();
        for (const elem of Object.keys(entryTable)) {
          const elements = elem.split("/");
          elements.pop();
          if (!elements.length) continue;
          for (let i = 0; i < elements.length; i++) {
            const sub = elements.slice(0, i + 1).join("/") + "/";
            foldersList.add(sub);
          }
        }
        for (const elem of foldersList) {
          if (!(elem in entryTable)) {
            const tempfolder = new ZipEntry(opts);
            tempfolder.entryName = elem;
            tempfolder.attr = 16;
            tempfolder.temporary = true;
            entryList.push(tempfolder);
            entryTable[tempfolder.entryName] = tempfolder;
            temporary.add(tempfolder);
          }
        }
      }
      function readEntries() {
        loadedEntries = true;
        entryTable = {};
        if (mainHeader.diskEntries > (inBuffer.length - mainHeader.offset) / Utils.Constants.CENHDR) {
          throw Utils.Errors.DISK_ENTRY_TOO_LARGE();
        }
        entryList = new Array(mainHeader.diskEntries);
        var index = mainHeader.offset;
        for (var i = 0; i < entryList.length; i++) {
          var tmp = index, entry = new ZipEntry(opts, inBuffer);
          entry.header = inBuffer.slice(tmp, tmp += Utils.Constants.CENHDR);
          entry.entryName = inBuffer.slice(tmp, tmp += entry.header.fileNameLength);
          if (entry.header.extraLength) {
            entry.extra = inBuffer.slice(tmp, tmp += entry.header.extraLength);
          }
          if (entry.header.commentLength) entry.comment = inBuffer.slice(tmp, tmp + entry.header.commentLength);
          index += entry.header.centralHeaderSize;
          entryList[i] = entry;
          entryTable[entry.entryName] = entry;
        }
        temporary.clear();
        makeTemporaryFolders();
      }
      function readMainHeader(readNow) {
        var i = inBuffer.length - Utils.Constants.ENDHDR, max = Math.max(0, i - 65535), n = max, endStart = inBuffer.length, endOffset = -1, commentEnd = 0;
        const trailingSpace = typeof opts.trailingSpace === "boolean" ? opts.trailingSpace : false;
        if (trailingSpace) max = 0;
        for (i; i >= n; i--) {
          if (inBuffer[i] !== 80) continue;
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ENDSIG) {
            endOffset = i;
            commentEnd = i;
            endStart = i + Utils.Constants.ENDHDR;
            n = i - Utils.Constants.END64HDR;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.END64SIG) {
            n = max;
            continue;
          }
          if (inBuffer.readUInt32LE(i) === Utils.Constants.ZIP64SIG) {
            endOffset = i;
            endStart = i + Utils.readBigUInt64LE(inBuffer, i + Utils.Constants.ZIP64SIZE) + Utils.Constants.ZIP64LEAD;
            break;
          }
        }
        if (endOffset == -1) throw Utils.Errors.INVALID_FORMAT();
        mainHeader.loadFromBinary(inBuffer.slice(endOffset, endStart));
        if (mainHeader.commentLength) {
          _comment = inBuffer.slice(commentEnd + Utils.Constants.ENDHDR);
        }
        if (readNow) readEntries();
      }
      function sortEntries() {
        if (entryList.length > 1 && !noSort) {
          entryList.sort((a, b) => a.entryName.toLowerCase().localeCompare(b.entryName.toLowerCase()));
        }
      }
      return {
        /**
         * Returns an array of ZipEntry objects existent in the current opened archive
         * @return Array
         */
        get entries() {
          if (!loadedEntries) {
            readEntries();
          }
          return entryList.filter((e) => !temporary.has(e));
        },
        /**
         * Archive comment
         * @return {String}
         */
        get comment() {
          return decoder.decode(_comment);
        },
        set comment(val) {
          _comment = Utils.toBuffer(val, decoder.encode);
          mainHeader.commentLength = _comment.length;
        },
        getEntryCount: function() {
          if (!loadedEntries) {
            return mainHeader.diskEntries;
          }
          return entryList.length;
        },
        forEach: function(callback) {
          this.entries.forEach(callback);
        },
        /**
         * Returns a reference to the entry with the given name or null if entry is inexistent
         *
         * @param entryName
         * @return ZipEntry
         */
        getEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          return entryTable[entryName] || null;
        },
        /**
         * Adds the given entry to the entry list
         *
         * @param entry
         */
        setEntry: function(entry) {
          if (!loadedEntries) {
            readEntries();
          }
          entryList.push(entry);
          entryTable[entry.entryName] = entry;
          mainHeader.totalEntries = entryList.length;
        },
        /**
         * Removes the file with the given name from the entry list.
         *
         * If the entry is a directory, then all nested files and directories will be removed
         * @param entryName
         * @returns {void}
         */
        deleteFile: function(entryName, withsubfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const list = this.getEntryChildren(entry, withsubfolders).map((child) => child.entryName);
          list.forEach(this.deleteEntry);
        },
        /**
         * Removes the entry with the given name from the entry list.
         *
         * @param {string} entryName
         * @returns {void}
         */
        deleteEntry: function(entryName) {
          if (!loadedEntries) {
            readEntries();
          }
          const entry = entryTable[entryName];
          const index = entryList.indexOf(entry);
          if (index >= 0) {
            entryList.splice(index, 1);
            delete entryTable[entryName];
            mainHeader.totalEntries = entryList.length;
          }
        },
        /**
         *  Iterates and returns all nested files and directories of the given entry
         *
         * @param entry
         * @return Array
         */
        getEntryChildren: function(entry, subfolders = true) {
          if (!loadedEntries) {
            readEntries();
          }
          if (typeof entry === "object") {
            if (entry.isDirectory && subfolders) {
              const list = [];
              const name = entry.entryName;
              for (const zipEntry of entryList) {
                if (zipEntry.entryName.startsWith(name)) {
                  list.push(zipEntry);
                }
              }
              return list;
            } else {
              return [entry];
            }
          }
          return [];
        },
        /**
         *  How many child elements entry has
         *
         * @param {ZipEntry} entry
         * @return {integer}
         */
        getChildCount: function(entry) {
          if (entry && entry.isDirectory) {
            const list = this.getEntryChildren(entry);
            return list.includes(entry) ? list.length - 1 : list.length;
          }
          return 0;
        },
        /**
         * Returns the zip file
         *
         * @return Buffer
         */
        compressToBuffer: function() {
          if (!loadedEntries) {
            readEntries();
          }
          sortEntries();
          const dataBlock = [];
          const headerBlocks = [];
          let totalSize = 0;
          let dindex = 0;
          mainHeader.size = 0;
          mainHeader.offset = 0;
          let totalEntries = 0;
          for (const entry of this.entries) {
            const compressedData = entry.getCompressedData();
            entry.header.offset = dindex;
            const localHeader = entry.packLocalHeader();
            const dataLength = localHeader.length + compressedData.length;
            dindex += dataLength;
            dataBlock.push(localHeader);
            dataBlock.push(compressedData);
            const centralHeader = entry.packCentralHeader();
            headerBlocks.push(centralHeader);
            mainHeader.size += centralHeader.length;
            totalSize += dataLength + centralHeader.length;
            totalEntries++;
          }
          totalSize += mainHeader.mainHeaderSize;
          mainHeader.offset = dindex;
          mainHeader.totalEntries = totalEntries;
          dindex = 0;
          const outBuffer = Buffer.alloc(totalSize);
          for (const content of dataBlock) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          for (const content of headerBlocks) {
            content.copy(outBuffer, dindex);
            dindex += content.length;
          }
          const mh = mainHeader.toBinary();
          if (_comment) {
            _comment.copy(mh, Utils.Constants.ENDHDR);
          }
          mh.copy(outBuffer, dindex);
          inBuffer = outBuffer;
          loadedEntries = false;
          return outBuffer;
        },
        toAsyncBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          try {
            if (!loadedEntries) {
              readEntries();
            }
            sortEntries();
            const dataBlock = [];
            const centralHeaders = [];
            let totalSize = 0;
            let dindex = 0;
            let totalEntries = 0;
            mainHeader.size = 0;
            mainHeader.offset = 0;
            const compress2Buffer = function(entryLists) {
              if (entryLists.length > 0) {
                const entry = entryLists.shift();
                const name = entry.entryName + entry.extra.toString();
                if (onItemStart) onItemStart(name);
                entry.getCompressedDataAsync(function(compressedData) {
                  if (onItemEnd) onItemEnd(name);
                  entry.header.offset = dindex;
                  const localHeader = entry.packLocalHeader();
                  const dataLength = localHeader.length + compressedData.length;
                  dindex += dataLength;
                  dataBlock.push(localHeader);
                  dataBlock.push(compressedData);
                  const centalHeader = entry.packCentralHeader();
                  centralHeaders.push(centalHeader);
                  mainHeader.size += centalHeader.length;
                  totalSize += dataLength + centalHeader.length;
                  totalEntries++;
                  compress2Buffer(entryLists);
                });
              } else {
                totalSize += mainHeader.mainHeaderSize;
                mainHeader.offset = dindex;
                mainHeader.totalEntries = totalEntries;
                dindex = 0;
                const outBuffer = Buffer.alloc(totalSize);
                dataBlock.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                centralHeaders.forEach(function(content) {
                  content.copy(outBuffer, dindex);
                  dindex += content.length;
                });
                const mh = mainHeader.toBinary();
                if (_comment) {
                  _comment.copy(mh, Utils.Constants.ENDHDR);
                }
                mh.copy(outBuffer, dindex);
                inBuffer = outBuffer;
                loadedEntries = false;
                onSuccess(outBuffer);
              }
            };
            compress2Buffer(Array.from(this.entries));
          } catch (e) {
            onFail(e);
          }
        }
      };
    };
  }
});

// node_modules/adm-zip/adm-zip.js
var require_adm_zip = __commonJS({
  "node_modules/adm-zip/adm-zip.js"(exports2, module2) {
    "use strict";
    var Utils = require_util();
    var pth = require("path");
    var ZipEntry = require_zipEntry();
    var ZipFile = require_zipFile();
    var get_Bool = (...val) => Utils.findLast(val, (c) => typeof c === "boolean");
    var get_Str = (...val) => Utils.findLast(val, (c) => typeof c === "string");
    var get_Fun = (...val) => Utils.findLast(val, (c) => typeof c === "function");
    var defaultOptions = {
      // option "noSort" : if true it disables files sorting
      noSort: false,
      // read entries during load (initial loading may be slower)
      readEntries: false,
      // default method is none
      method: Utils.Constants.NONE,
      // file system
      fs: null
    };
    module2.exports = function(input, options) {
      let inBuffer = null;
      const opts = Object.assign(/* @__PURE__ */ Object.create(null), defaultOptions);
      if (input && "object" === typeof input) {
        if (!(input instanceof Uint8Array)) {
          Object.assign(opts, input);
          input = opts.input ? opts.input : void 0;
          if (opts.input) delete opts.input;
        }
        if (Buffer.isBuffer(input)) {
          inBuffer = input;
          opts.method = Utils.Constants.BUFFER;
          input = void 0;
        }
      }
      Object.assign(opts, options);
      const filetools = new Utils(opts);
      if (typeof opts.decoder !== "object" || typeof opts.decoder.encode !== "function" || typeof opts.decoder.decode !== "function") {
        opts.decoder = Utils.decoder;
      }
      if (input && "string" === typeof input) {
        if (filetools.fs.existsSync(input)) {
          opts.method = Utils.Constants.FILE;
          opts.filename = input;
          inBuffer = filetools.fs.readFileSync(input);
        } else {
          throw Utils.Errors.INVALID_FILENAME();
        }
      }
      const _zip = new ZipFile(inBuffer, opts);
      const { canonical, sanitize, zipnamefix } = Utils;
      function getEntry(entry) {
        if (entry && _zip) {
          var item;
          if (typeof entry === "string") item = _zip.getEntry(pth.posix.normalize(entry));
          if (typeof entry === "object" && typeof entry.entryName !== "undefined" && typeof entry.header !== "undefined") item = _zip.getEntry(entry.entryName);
          if (item) {
            return item;
          }
        }
        return null;
      }
      function fixPath(zipPath) {
        const { join: join9, normalize: normalize2, sep: sep2 } = pth.posix;
        return join9(pth.isAbsolute(zipPath) ? "/" : ".", normalize2(sep2 + zipPath.split("\\").join(sep2) + sep2));
      }
      function filenameFilter(filterfn) {
        if (filterfn instanceof RegExp) {
          return /* @__PURE__ */ (function(rx) {
            return function(filename) {
              return rx.test(filename);
            };
          })(filterfn);
        } else if ("function" !== typeof filterfn) {
          return () => true;
        }
        return filterfn;
      }
      const relativePath = (local, entry) => {
        let lastChar = entry.slice(-1);
        lastChar = lastChar === filetools.sep ? filetools.sep : "";
        return pth.relative(local, entry) + lastChar;
      };
      return {
        /**
         * Extracts the given entry from the archive and returns the content as a Buffer object
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {Buffer|string} [pass] - password
         * @return Buffer or Null in case of error
         */
        readFile: function(entry, pass) {
          var item = getEntry(entry);
          return item && item.getData(pass) || null;
        },
        /**
         * Returns how many child elements has on entry (directories) on files it is always 0
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @returns {integer}
         */
        childCount: function(entry) {
          const item = getEntry(entry);
          if (item) {
            return _zip.getChildCount(item);
          }
        },
        /**
         * Asynchronous readFile
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         *
         * @return Buffer or Null in case of error
         */
        readFileAsync: function(entry, callback) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(callback);
          } else {
            callback(null, "getEntry failed for:" + entry);
          }
        },
        /**
         * Extracts the given entry from the archive and returns the content as plain text in the given encoding
         * @param {ZipEntry|string} entry - ZipEntry object or String with the full path of the entry
         * @param {string} encoding - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsText: function(entry, encoding) {
          var item = getEntry(entry);
          if (item) {
            var data = item.getData();
            if (data && data.length) {
              return data.toString(encoding || "utf8");
            }
          }
          return "";
        },
        /**
         * Asynchronous readAsText
         * @param {ZipEntry|string} entry ZipEntry object or String with the full path of the entry
         * @param {callback} callback
         * @param {string} [encoding] - Optional. If no encoding is specified utf8 is used
         *
         * @return String
         */
        readAsTextAsync: function(entry, callback, encoding) {
          var item = getEntry(entry);
          if (item) {
            item.getDataAsync(function(data, err) {
              if (err) {
                callback(data, err);
                return;
              }
              if (data && data.length) {
                callback(data.toString(encoding || "utf8"));
              } else {
                callback("");
              }
            });
          } else {
            callback("");
          }
        },
        /**
         * Remove the entry from the file or the entry and all it's nested directories and files if the given entry is a directory
         *
         * @param {ZipEntry|string} entry
         * @returns {void}
         */
        deleteFile: function(entry, withsubfolders = true) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteFile(item.entryName, withsubfolders);
          }
        },
        /**
         * Remove the entry from the file or directory without affecting any nested entries
         *
         * @param {ZipEntry|string} entry
         * @returns {void}
         */
        deleteEntry: function(entry) {
          var item = getEntry(entry);
          if (item) {
            _zip.deleteEntry(item.entryName);
          }
        },
        /**
         * Adds a comment to the zip. The zip must be rewritten after adding the comment.
         *
         * @param {string} comment
         */
        addZipComment: function(comment) {
          _zip.comment = comment;
        },
        /**
         * Returns the zip comment
         *
         * @return String
         */
        getZipComment: function() {
          return _zip.comment || "";
        },
        /**
         * Adds a comment to a specified zipEntry. The zip must be rewritten after adding the comment
         * The comment cannot exceed 65535 characters in length
         *
         * @param {ZipEntry} entry
         * @param {string} comment
         */
        addZipEntryComment: function(entry, comment) {
          var item = getEntry(entry);
          if (item) {
            item.comment = comment;
          }
        },
        /**
         * Returns the comment of the specified entry
         *
         * @param {ZipEntry} entry
         * @return String
         */
        getZipEntryComment: function(entry) {
          var item = getEntry(entry);
          if (item) {
            return item.comment || "";
          }
          return "";
        },
        /**
         * Updates the content of an existing entry inside the archive. The zip must be rewritten after updating the content
         *
         * @param {ZipEntry} entry
         * @param {Buffer} content
         */
        updateFile: function(entry, content) {
          var item = getEntry(entry);
          if (item) {
            item.setData(content);
          }
        },
        /**
         * Adds a file from the disk to the archive
         *
         * @param {string} localPath File to add to zip
         * @param {string} [zipPath] Optional path inside the zip
         * @param {string} [zipName] Optional name for the file
         * @param {string} [comment] Optional file comment
         */
        addLocalFile: function(localPath2, zipPath, zipName, comment) {
          if (filetools.fs.existsSync(localPath2)) {
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath2));
            zipPath += zipName ? zipName : p;
            const _attr = filetools.fs.statSync(localPath2);
            const data = _attr.isFile() ? filetools.fs.readFileSync(localPath2) : Buffer.alloc(0);
            if (_attr.isDirectory()) zipPath += filetools.sep;
            this.addFile(zipPath, data, comment, _attr);
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath2);
          }
        },
        /**
         * Callback for showing if everything was done.
         *
         * @callback doneCallback
         * @param {Error} err - Error object
         * @param {boolean} done - was request fully completed
         */
        /**
         * Adds a file from the disk to the archive
         *
         * @param {(object|string)} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the file.
         * @param {string} [options.comment] - Optional file comment.
         * @param {string} [options.zipPath] - Optional path inside the zip
         * @param {string} [options.zipName] - Optional name for the file
         * @param {doneCallback} callback - The callback that handles the response.
         */
        addLocalFileAsync: function(options2, callback) {
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          const localPath2 = pth.resolve(options2.localPath);
          const { comment } = options2;
          let { zipPath, zipName } = options2;
          const self = this;
          filetools.fs.stat(localPath2, function(err, stats) {
            if (err) return callback(err, false);
            zipPath = zipPath ? fixPath(zipPath) : "";
            const p = pth.win32.basename(pth.win32.normalize(localPath2));
            zipPath += zipName ? zipName : p;
            if (stats.isFile()) {
              filetools.fs.readFile(localPath2, function(err2, data) {
                if (err2) return callback(err2, false);
                self.addFile(zipPath, data, comment, stats);
                return setImmediate(callback, void 0, true);
              });
            } else if (stats.isDirectory()) {
              zipPath += filetools.sep;
              self.addFile(zipPath, Buffer.alloc(0), comment, stats);
              return setImmediate(callback, void 0, true);
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - local path to the folder
         * @param {string} [zipPath] - optional path inside zip
         * @param {(RegExp|function)} [filter] - optional RegExp or Function if files match will be included.
         */
        addLocalFolder: function(localPath2, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath2 = pth.normalize(localPath2);
          if (filetools.fs.existsSync(localPath2)) {
            const items = filetools.findFiles(localPath2);
            const self = this;
            if (items.length) {
              for (const filepath of items) {
                const p = pth.join(zipPath, relativePath(localPath2, filepath));
                if (filter(p)) {
                  self.addLocalFile(filepath, pth.dirname(p));
                }
              }
            }
          } else {
            throw Utils.Errors.FILE_NOT_FOUND(localPath2);
          }
        },
        /**
         * Asynchronous addLocalFolder
         * @param {string} localPath
         * @param {callback} callback
         * @param {string} [zipPath] optional path inside zip
         * @param {RegExp|function} [filter] optional RegExp or Function if files match will
         *               be included.
         */
        addLocalFolderAsync: function(localPath2, callback, zipPath, filter) {
          filter = filenameFilter(filter);
          zipPath = zipPath ? fixPath(zipPath) : "";
          localPath2 = pth.normalize(localPath2);
          var self = this;
          filetools.fs.open(localPath2, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(void 0, Utils.Errors.FILE_NOT_FOUND(localPath2));
            } else if (err) {
              callback(void 0, err);
            } else {
              var items = filetools.findFiles(localPath2);
              var i = -1;
              var next = function() {
                i += 1;
                if (i < items.length) {
                  var filepath = items[i];
                  var p = relativePath(localPath2, filepath).split("\\").join("/");
                  p = p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
                  if (filter(p)) {
                    filetools.fs.stat(filepath, function(er0, stats) {
                      if (er0) callback(void 0, er0);
                      if (stats.isFile()) {
                        filetools.fs.readFile(filepath, function(er1, data) {
                          if (er1) {
                            callback(void 0, er1);
                          } else {
                            self.addFile(zipPath + p, data, "", stats);
                            next();
                          }
                        });
                      } else {
                        self.addFile(zipPath + p + "/", Buffer.alloc(0), "", stats);
                        next();
                      }
                    });
                  } else {
                    process.nextTick(() => {
                      next();
                    });
                  }
                } else {
                  callback(true, void 0);
                }
              };
              next();
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {object | string} options - options object, if it is string it us used as localPath.
         * @param {string} options.localPath - Local path to the folder.
         * @param {string} [options.zipPath] - optional path inside zip.
         * @param {RegExp|function} [options.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [options.namefix] - optional function to help fix filename
         * @param {doneCallback} callback - The callback that handles the response.
         *
         */
        addLocalFolderAsync2: function(options2, callback) {
          const self = this;
          options2 = typeof options2 === "object" ? options2 : { localPath: options2 };
          localPath = pth.resolve(fixPath(options2.localPath));
          let { zipPath, filter, namefix } = options2;
          if (filter instanceof RegExp) {
            filter = /* @__PURE__ */ (function(rx) {
              return function(filename) {
                return rx.test(filename);
              };
            })(filter);
          } else if ("function" !== typeof filter) {
            filter = function() {
              return true;
            };
          }
          zipPath = zipPath ? fixPath(zipPath) : "";
          if (namefix == "latin1") {
            namefix = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
          }
          if (typeof namefix !== "function") namefix = (str) => str;
          const relPathFix = (entry) => pth.join(zipPath, namefix(relativePath(localPath, entry)));
          const fileNameFix = (entry) => pth.win32.basename(pth.win32.normalize(namefix(entry)));
          filetools.fs.open(localPath, "r", function(err) {
            if (err && err.code === "ENOENT") {
              callback(void 0, Utils.Errors.FILE_NOT_FOUND(localPath));
            } else if (err) {
              callback(void 0, err);
            } else {
              filetools.findFilesAsync(localPath, function(err2, fileEntries) {
                if (err2) return callback(err2);
                fileEntries = fileEntries.filter((dir) => filter(relPathFix(dir)));
                if (!fileEntries.length) callback(void 0, false);
                setImmediate(
                  fileEntries.reverse().reduce(function(next, entry) {
                    return function(err3, done) {
                      if (err3 || done === false) return setImmediate(next, err3, false);
                      self.addLocalFileAsync(
                        {
                          localPath: entry,
                          zipPath: pth.dirname(relPathFix(entry)),
                          zipName: fileNameFix(entry)
                        },
                        next
                      );
                    };
                  }, callback)
                );
              });
            }
          });
        },
        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param {string} localPath - path where files will be extracted
         * @param {object} props - optional properties
         * @param {string} [props.zipPath] - optional path inside zip
         * @param {RegExp|function} [props.filter] - optional RegExp or Function if files match will be included.
         * @param {function|string} [props.namefix] - optional function to help fix filename
         */
        addLocalFolderPromise: function(localPath2, props) {
          return new Promise((resolve4, reject) => {
            this.addLocalFolderAsync2(Object.assign({ localPath: localPath2 }, props), (err, done) => {
              if (err) reject(err);
              if (done) resolve4(this);
            });
          });
        },
        /**
         * Allows you to create a entry (file or directory) in the zip file.
         * If you want to create a directory the entryName must end in / and a null buffer should be provided.
         * Comment and attributes are optional
         *
         * @param {string} entryName
         * @param {Buffer | string} content - file content as buffer or utf8 coded string
         * @param {string} [comment] - file comment
         * @param {number | object} [attr] - number as unix file permissions, object as filesystem Stats object
         */
        addFile: function(entryName, content, comment, attr) {
          entryName = zipnamefix(entryName);
          let entry = getEntry(entryName);
          const update = entry != null;
          if (!update) {
            entry = new ZipEntry(opts);
            entry.entryName = entryName;
          }
          entry.comment = comment || "";
          const isStat = "object" === typeof attr && attr instanceof filetools.fs.Stats;
          if (isStat) {
            entry.header.time = attr.mtime;
          }
          var fileattr = entry.isDirectory ? 16 : 0;
          let unix = entry.isDirectory ? 16384 : 32768;
          if (isStat) {
            unix |= 4095 & attr.mode;
          } else if ("number" === typeof attr) {
            unix |= 4095 & attr;
          } else {
            unix |= entry.isDirectory ? 493 : 420;
          }
          fileattr = (fileattr | unix << 16) >>> 0;
          entry.attr = fileattr;
          entry.setData(content);
          if (!update) _zip.setEntry(entry);
          return entry;
        },
        /**
         * Returns an array of ZipEntry objects representing the files and folders inside the archive
         *
         * @param {string} [password]
         * @returns Array
         */
        getEntries: function(password) {
          _zip.password = password;
          return _zip ? _zip.entries : [];
        },
        /**
         * Returns a ZipEntry object representing the file or folder specified by ``name``.
         *
         * @param {string} name
         * @return ZipEntry
         */
        getEntry: function(name) {
          return getEntry(name);
        },
        getEntryCount: function() {
          return _zip.getEntryCount();
        },
        forEach: function(callback) {
          return _zip.forEach(callback);
        },
        /**
         * Extracts the given entry to the given targetPath
         * If the entry is a directory inside the archive, the entire directory and it's subdirectories will be extracted
         *
         * @param {string|ZipEntry} entry - ZipEntry object or String with the full path of the entry
         * @param {string} targetPath - Target folder where to write the file
         * @param {boolean} [maintainEntryPath=true] - If maintainEntryPath is true and the entry is inside a folder, the entry folder will be created in targetPath as well. Default is TRUE
         * @param {boolean} [overwrite=false] - If the file already exists at the target path, the file will be overwriten if this is true.
         * @param {boolean} [keepOriginalPermission=false] - The file will be set as the permission from the entry if this is true.
         * @param {string} [outFileName] - String If set will override the filename of the extracted file (Only works if the entry is a file)
         *
         * @return Boolean
         */
        extractEntryTo: function(entry, targetPath, maintainEntryPath, overwrite, keepOriginalPermission, outFileName) {
          overwrite = get_Bool(false, overwrite);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          maintainEntryPath = get_Bool(true, maintainEntryPath);
          outFileName = get_Str(keepOriginalPermission, outFileName);
          var item = getEntry(entry);
          if (!item) {
            throw Utils.Errors.NO_ENTRY();
          }
          var entryName = canonical(item.entryName);
          var target = sanitize(targetPath, outFileName && !item.isDirectory ? outFileName : maintainEntryPath ? entryName : pth.basename(entryName));
          if (item.isDirectory) {
            var children = _zip.getEntryChildren(item);
            children.forEach(function(child) {
              if (child.isDirectory) return;
              var content2 = child.getData();
              if (!content2) {
                throw Utils.Errors.CANT_EXTRACT_FILE();
              }
              var name = canonical(child.entryName);
              var childName = sanitize(targetPath, maintainEntryPath ? name : pth.basename(name));
              const fileAttr2 = keepOriginalPermission ? child.header.fileAttr : void 0;
              filetools.writeFileTo(childName, content2, overwrite, fileAttr2);
            });
            return true;
          }
          var content = item.getData(_zip.password);
          if (!content) throw Utils.Errors.CANT_EXTRACT_FILE();
          if (filetools.fs.existsSync(target) && !overwrite) {
            throw Utils.Errors.CANT_OVERRIDE();
          }
          const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
          filetools.writeFileTo(target, content, overwrite, fileAttr);
          return true;
        },
        /**
         * Test the archive
         * @param {string} [pass]
         */
        test: function(pass) {
          if (!_zip) {
            return false;
          }
          for (var entry in _zip.entries) {
            try {
              if (entry.isDirectory) {
                continue;
              }
              var content = _zip.entries[entry].getData(pass);
              if (!content) {
                return false;
              }
            } catch (err) {
              return false;
            }
          }
          return true;
        },
        /**
         * Extracts the entire archive to the given location
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {string|Buffer} [pass] password
         */
        extractAllTo: function(targetPath, overwrite, keepOriginalPermission, pass) {
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          pass = get_Str(keepOriginalPermission, pass);
          overwrite = get_Bool(false, overwrite);
          if (!_zip) throw Utils.Errors.NO_ZIP();
          _zip.entries.forEach(function(entry) {
            var entryName = sanitize(targetPath, canonical(entry.entryName));
            if (entry.isDirectory) {
              filetools.makeDir(entryName);
              return;
            }
            var content = entry.getData(pass);
            if (!content) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
            const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            filetools.writeFileTo(entryName, content, overwrite, fileAttr);
            try {
              filetools.fs.utimesSync(entryName, entry.header.time, entry.header.time);
            } catch (err) {
              throw Utils.Errors.CANT_EXTRACT_FILE();
            }
          });
        },
        /**
         * Asynchronous extractAllTo
         *
         * @param {string} targetPath Target location
         * @param {boolean} [overwrite=false] If the file already exists at the target path, the file will be overwriten if this is true.
         *                  Default is FALSE
         * @param {boolean} [keepOriginalPermission=false] The file will be set as the permission from the entry if this is true.
         *                  Default is FALSE
         * @param {function} callback The callback will be executed when all entries are extracted successfully or any error is thrown.
         */
        extractAllToAsync: function(targetPath, overwrite, keepOriginalPermission, callback) {
          callback = get_Fun(overwrite, keepOriginalPermission, callback);
          keepOriginalPermission = get_Bool(false, keepOriginalPermission);
          overwrite = get_Bool(false, overwrite);
          if (!callback) {
            return new Promise((resolve4, reject) => {
              this.extractAllToAsync(targetPath, overwrite, keepOriginalPermission, function(err) {
                if (err) {
                  reject(err);
                } else {
                  resolve4(this);
                }
              });
            });
          }
          if (!_zip) {
            callback(Utils.Errors.NO_ZIP());
            return;
          }
          targetPath = pth.resolve(targetPath);
          const getPath = (entry) => sanitize(targetPath, pth.normalize(canonical(entry.entryName)));
          const getError = (msg, file) => new Error(msg + ': "' + file + '"');
          const dirEntries = [];
          const fileEntries = [];
          _zip.entries.forEach((e) => {
            if (e.isDirectory) {
              dirEntries.push(e);
            } else {
              fileEntries.push(e);
            }
          });
          for (const entry of dirEntries) {
            const dirPath = getPath(entry);
            const dirAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            try {
              filetools.makeDir(dirPath);
              if (dirAttr) filetools.fs.chmodSync(dirPath, dirAttr);
              filetools.fs.utimesSync(dirPath, entry.header.time, entry.header.time);
            } catch (er) {
              callback(getError("Unable to create folder", dirPath));
            }
          }
          fileEntries.reverse().reduce(function(next, entry) {
            return function(err) {
              if (err) {
                next(err);
              } else {
                const entryName = pth.normalize(canonical(entry.entryName));
                const filePath = sanitize(targetPath, entryName);
                entry.getDataAsync(function(content, err_1) {
                  if (err_1) {
                    next(err_1);
                  } else if (!content) {
                    next(Utils.Errors.CANT_EXTRACT_FILE());
                  } else {
                    const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
                    filetools.writeFileToAsync(filePath, content, overwrite, fileAttr, function(succ) {
                      if (!succ) {
                        next(getError("Unable to write file", filePath));
                      }
                      filetools.fs.utimes(filePath, entry.header.time, entry.header.time, function(err_2) {
                        if (err_2) {
                          next(getError("Unable to set times", filePath));
                        } else {
                          next();
                        }
                      });
                    });
                  }
                });
              }
            };
          }, callback)();
        },
        /**
         * Writes the newly created zip file to disk at the specified location or if a zip was opened and no ``targetFileName`` is provided, it will overwrite the opened zip
         *
         * @param {string} targetFileName
         * @param {function} callback
         */
        writeZip: function(targetFileName, callback) {
          if (arguments.length === 1) {
            if (typeof targetFileName === "function") {
              callback = targetFileName;
              targetFileName = "";
            }
          }
          if (!targetFileName && opts.filename) {
            targetFileName = opts.filename;
          }
          if (!targetFileName) return;
          var zipData = _zip.compressToBuffer();
          if (zipData) {
            var ok = filetools.writeFileTo(targetFileName, zipData, true);
            if (typeof callback === "function") callback(!ok ? new Error("failed") : null, "");
          }
        },
        /**
                 *
                 * @param {string} targetFileName
                 * @param {object} [props]
                 * @param {boolean} [props.overwrite=true] If the file already exists at the target path, the file will be overwriten if this is true.
                 * @param {boolean} [props.perm] The file will be set as the permission from the entry if this is true.
        
                 * @returns {Promise<void>}
                 */
        writeZipPromise: function(targetFileName, props) {
          const { overwrite, perm } = Object.assign({ overwrite: true }, props);
          return new Promise((resolve4, reject) => {
            if (!targetFileName && opts.filename) targetFileName = opts.filename;
            if (!targetFileName) reject("ADM-ZIP: ZIP File Name Missing");
            this.toBufferPromise().then((zipData) => {
              const ret = (done) => done ? resolve4(done) : reject("ADM-ZIP: Wasn't able to write zip file");
              filetools.writeFileToAsync(targetFileName, zipData, overwrite, perm, ret);
            }, reject);
          });
        },
        /**
         * @returns {Promise<Buffer>} A promise to the Buffer.
         */
        toBufferPromise: function() {
          return new Promise((resolve4, reject) => {
            _zip.toAsyncBuffer(resolve4, reject);
          });
        },
        /**
         * Returns the content of the entire zip file as a Buffer object
         *
         * @prop {function} [onSuccess]
         * @prop {function} [onFail]
         * @prop {function} [onItemStart]
         * @prop {function} [onItemEnd]
         * @returns {Buffer}
         */
        toBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
          if (typeof onSuccess === "function") {
            _zip.toAsyncBuffer(onSuccess, onFail, onItemStart, onItemEnd);
            return null;
          }
          return _zip.compressToBuffer();
        }
      };
    };
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsidianVoicePlugin
});
module.exports = __toCommonJS(main_exports);
var fs12 = __toESM(require("fs"));
var os3 = __toESM(require("os"));
var path10 = __toESM(require("path"));
var import_obsidian6 = require("obsidian");

// src/audio-player.ts
var fs = __toESM(require("fs"));
var ObsidianAudioPlayer = class {
  constructor(vault, initialRate = 1) {
    this.audio = null;
    this.currentChunk = null;
    this.playbackRate = 1;
    this.vault = vault;
    this.playbackRate = initialRate;
  }
  playFile(filePath, filename, onEnded) {
    this.stop();
    this.currentChunk = filename;
    this.audio = new Audio(filePath);
    this.audio.playbackRate = this.playbackRate;
    const reapplyRate = () => {
      if (this.audio) this.audio.playbackRate = this.playbackRate;
    };
    this.audio.addEventListener("canplay", reapplyRate);
    this.audio.onended = () => {
      var _a;
      (_a = this.audio) == null ? void 0 : _a.removeEventListener("canplay", reapplyRate);
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
      this.audio.playbackRate = this.playbackRate;
    } else {
      this.audio.pause();
    }
  }
  /** Aplica velocidade de reprodução ao chunk ativo e persiste para próximas instâncias.
   *  Evita atualizações redundantes no hardware de áudio quando o valor não mudou. */
  setPlaybackRate(rate) {
    if (Math.abs(this.playbackRate - rate) < 1e-3) return;
    this.playbackRate = rate;
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
      await fs.promises.unlink(filename);
      console.log("[Obsidian Voice] Arquivo tempor\xE1rio removido:", filename);
    } catch (e) {
      if ((e == null ? void 0 : e.code) !== "ENOENT") {
        console.warn("[Obsidian Voice] N\xE3o foi poss\xEDvel remover o chunk:", filename, e);
      }
    }
  }
};

// src/utils/markdown.ts
function stripFrontmatter(text) {
  const result = detectAndStripFrontmatter(text);
  return result ? result.strippedText : text;
}
function detectAndStripFrontmatter(text) {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) return null;
  const isCrLf = text.startsWith("---\r\n");
  const endMark = isCrLf ? "\r\n---\r\n" : "\n---\n";
  const endMarkAlt = isCrLf ? "\r\n---" : "\n---";
  let endIndex = text.indexOf(endMark, 4);
  let matchLength = 0;
  let lineCount = 2;
  if (endIndex !== -1) {
    matchLength = endIndex + endMark.length;
  } else {
    endIndex = text.indexOf(endMarkAlt, 4);
    if (endIndex !== -1) {
      matchLength = endIndex + endMarkAlt.length;
    }
  }
  if (endIndex !== -1) {
    const frontmatter = text.slice(0, matchLength);
    const newlineMatches = frontmatter.match(/\n/g);
    lineCount = newlineMatches ? newlineMatches.length : 2;
    return {
      strippedText: text.slice(matchLength),
      lineCount
    };
  }
  return null;
}

// src/queue.ts
var ObsidianVoiceQueue = class {
  constructor() {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;
    this.MAX_CHUNK_LENGTH = 500;
    this.frontmatterLineOffset = 0;
    /** Quando true, a fila é populada apenas com os destaques ==texto== da nota. */
    this.readOnlyHighlights = false;
    // Índice reverso para busca de chunks por texto.
    // Limitações:
    // - Texto é normalizado (lowercase, sem espaços extras) antes da indexação
    // - A busca exata é O(n) no pior caso devido à normalização adicional
    this.chunkIndex = /* @__PURE__ */ new Map();
  }
  startQueue(rawText) {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;
    this.frontmatterLineOffset = 0;
    this.chunkIndex.clear();
    const frontmatterResult = detectAndStripFrontmatter(rawText);
    this.frontmatterLineOffset = frontmatterResult ? frontmatterResult.lineCount : 0;
    const textWithoutFrontmatter = frontmatterResult ? frontmatterResult.strippedText : rawText;
    const chapterText = this.readOnlyHighlights ? rawText : textWithoutFrontmatter;
    if (this.readOnlyHighlights) {
      this.buildHighlightsQueue(rawText);
      this.buildChapters(chapterText);
      return;
    }
    const rawLines = textWithoutFrontmatter.split(/\r?\n/);
    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      const trimmed = line.trim();
      const cleanLine = this.cleanLineMarkdown(line);
      if (!cleanLine) {
        continue;
      }
      if (cleanLine.length <= this.MAX_CHUNK_LENGTH) {
        const chunkIndex = this.chunks.length;
        this.chunks.push({
          index: chunkIndex,
          text: cleanLine,
          startLine: i,
          endLine: i
        });
        const normalized = this.normalizeForIndex(cleanLine, chunkIndex);
        this.chunkIndex.set(normalized, chunkIndex);
      } else {
        const subChunks = this.splitParagraph(cleanLine, this.MAX_CHUNK_LENGTH);
        for (const sub of subChunks) {
          const chunkIndex = this.chunks.length;
          this.chunks.push({
            index: chunkIndex,
            text: sub,
            startLine: i,
            endLine: i
          });
          const normalized = this.normalizeForIndex(sub, chunkIndex);
          this.chunkIndex.set(normalized, chunkIndex);
        }
      }
    }
    this.buildChapters(chapterText);
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
        const chunkIndex = this.chunks.length;
        this.chunks.push({
          index: chunkIndex,
          text: cleanText,
          startLine: i,
          endLine: i
        });
        const normalized = this.normalizeForIndex(cleanText, chunkIndex);
        this.chunkIndex.set(normalized, chunkIndex);
      }
    }
  }
  /**
   * Extrai capítulos (H1-H3) do texto bruto, ignorando frontmatter e blocos de código.
   * Usada nos dois modos (normal e readOnlyHighlights) para garantir alinhamento do índice.
   * Suporta headings com indentação (até 3 espaços segundo CommonMark spec).
   */
  buildChapters(sourceText) {
    const lines = sourceText.split(/\r?\n/);
    let inCodeBlock = false;
    for (let i = 0; i < lines.length; i++) {
      if (i < this.frontmatterLineOffset) continue;
      const line = lines[i];
      const trimmed = line.trim();
      if (trimmed.startsWith("```")) {
        inCodeBlock = !inCodeBlock;
      }
      if (inCodeBlock) continue;
      const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
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
  /**
   * Normaliza texto para uso como chave de busca no índice reverso.
   * Inclui o índice do chunk para garantir unicidade.
   * Usa apenas os primeiros 100 caracteres para evitar chaves muito longas.
   */
  normalizeForIndex(text, chunkIndex) {
    const normalized = text.toLowerCase().replace(/\s+/g, " ").trim().substring(0, 100);
    return `${chunkIndex}:${normalized}`;
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
    this.frontmatterLineOffset = 0;
    this.chunkIndex.clear();
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
    const adjustedLineNumber = Math.max(0, lineNumber - this.frontmatterLineOffset);
    for (let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i];
      if (adjustedLineNumber >= chunk.startLine && adjustedLineNumber <= chunk.endLine) {
        return chunk.index;
      }
    }
    let closestIndex = 0;
    let minDiff = Infinity;
    for (let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i];
      const diff = Math.min(
        Math.abs(adjustedLineNumber - chunk.startLine),
        Math.abs(adjustedLineNumber - chunk.endLine)
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
    const cleanedLine = this.cleanLineMarkdown(lineText);
    if (!cleanedLine) return 0;
    const normalized = cleanedLine.toLowerCase().replace(/\s+/g, " ").trim().substring(0, 100);
    for (const [key, index] of this.chunkIndex.entries()) {
      const keyText = key.substring(key.indexOf(":") + 1);
      if (keyText === normalized) {
        return index;
      }
    }
    return 0;
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
var SPEED_MIN = 0.5;
var SPEED_MAX = 3;
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
  constructor(onToggle, onStop, getChapters, onChapterClick, onResumoToggle, openSettings, onTeleprompterToggle, onSpeedChange, getInstalledEngines, onEngineChange, getActiveEngineId) {
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
    this.speedSliderEl = null;
    this.speedLabelEl = null;
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
    this.getInstalledEngines = getInstalledEngines;
    this.onEngineChange = onEngineChange;
    this.getActiveEngineId = getActiveEngineId;
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
      this.speedSliderEl = null;
      this.speedLabelEl = null;
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
  /** Define o valor da velocidade no slider externamente (ex: na inicialização com valor salvo). */
  setSpeed(speed) {
    this.speedValue = speed;
    if (this.speedSliderEl) this.speedSliderEl.value = String(speed);
    if (this.speedLabelEl) this.speedLabelEl.textContent = `${speed.toFixed(1)}x`;
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
    this.speedSliderEl = slider;
    const speedLabel = speedWrapper.createSpan();
    speedLabel.textContent = `${this.speedValue.toFixed(1)}x`;
    Object.assign(speedLabel.style, { minWidth: "30px", fontWeight: "600", textAlign: "right" });
    this.speedLabelEl = speedLabel;
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
    const engineRow = this.toolsDropEl.createDiv();
    Object.assign(engineRow.style, { display: "flex", alignItems: "center", gap: "8px" });
    const engineLabel = engineRow.createSpan();
    engineLabel.textContent = t("widget.tools.voice_engine");
    engineLabel.style.fontWeight = "500";
    engineLabel.style.flex = "1";
    const engineSelect = engineRow.createEl("select");
    Object.assign(engineSelect.style, {
      width: "120px",
      fontSize: "var(--font-ui-small)",
      padding: "2px 4px",
      background: "var(--background-primary)",
      border: "1px solid var(--background-modifier-border)",
      borderRadius: "4px",
      color: "var(--text-normal)",
      cursor: "pointer",
      flexShrink: "0"
    });
    const engines = this.getInstalledEngines();
    for (const engine of engines) {
      const option = engineSelect.createEl("option");
      option.value = engine.id;
      option.textContent = engine.name;
      if (!engine.installed) {
        option.disabled = true;
        option.textContent += " (n\xE3o instalado)";
      }
    }
    engineSelect.value = this.getActiveEngineId();
    engineSelect.addEventListener("change", () => {
      const value = engineSelect.value;
      this.onEngineChange(value);
    });
    const sep3 = this.toolsDropEl.createDiv();
    sep3.style.cssText = "height:1px; background:var(--background-modifier-border); margin:8px 0;";
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
    const sep2 = container.createSpan();
    sep2.style.cssText = "width:1px; height:16px; background:var(--background-modifier-border); flex-shrink:0;";
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
var import_obsidian2 = require("obsidian");

// src/services/model/model-catalog.ts
var MODEL_CATALOG = {
  piper: {
    id: "piper",
    displayName: "Piper",
    description: "Motor TTS local r\xE1pido e leve. Ideal para narra\xE7\xE3o di\xE1ria com baixo consumo de recursos.",
    estimatedRamMB: 256,
    estimatedDiskMB: 200,
    tags: ["r\xE1pido", "leve", "local"]
  },
  kokoro: {
    id: "kokoro",
    displayName: "Kokoro",
    description: "Motor TTS com vozes naturais e qualidade premium. Consume mais recursos, mas entrega \xE1udio mais realista.",
    estimatedRamMB: 1024,
    estimatedDiskMB: 2e3,
    tags: ["qualidade", "premium", "vozes naturais"]
  }
};
function getModelCatalog() {
  return MODEL_CATALOG;
}
function getModelEntry(id) {
  return MODEL_CATALOG[id];
}

// src/settings.ts
var path = __toESM(require("path"));
var fs2 = __toESM(require("fs"));
var fsp = __toESM(require("fs/promises"));
var DEFAULT_SETTINGS = {
  piperPath: "",
  selectedVoice: "",
  highlightColor: "green",
  enableTeleprompterMode: true,
  language: "auto",
  models: {},
  ttsEngine: "piper",
  selectedKokoroVoice: "af_bella",
  playbackSpeed: 1
};
var STATE_LABELS = {
  ["NOT_INSTALLED" /* NOT_INSTALLED */]: "Aguardando",
  ["FETCHING_MANIFEST" /* FETCHING_MANIFEST */]: "Obtendo informa\xE7\xF5es do modelo...",
  ["DOWNLOADING" /* DOWNLOADING */]: "Baixando...",
  ["VERIFYING" /* VERIFYING */]: "Verificando integridade...",
  ["EXTRACTING" /* EXTRACTING */]: "Extraindo...",
  ["VALIDATING_RUNTIME" /* VALIDATING_RUNTIME */]: "Validando motor de s\xEDntese...",
  ["INSTALLING" /* INSTALLING */]: "Instalando...",
  ["INSTALLED" /* INSTALLED */]: "Instalado",
  ["FAILED" /* FAILED */]: "Falha na instala\xE7\xE3o",
  ["REMOVING" /* REMOVING */]: "Removendo...",
  ["UPDATING" /* UPDATING */]: "Atualizando...",
  ["ROLLBACK" /* ROLLBACK */]: "Revertendo..."
};
var QUALITY_COLORS = {
  low: "#e03131",
  medium: "#f59f00",
  high: "#2f9e44"
};
var QUALITY_LABELS = {
  low: "Low",
  medium: "Medium",
  high: "High"
};
var ObsidianVoiceSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.languageChangeHandler = () => this.display();
    this.progressRefs = /* @__PURE__ */ new Map();
    this.lastSelectedVoiceLang = "";
    this.plugin = plugin;
    onLanguageChanged(this.languageChangeHandler);
    this.plugin.register(() => offLanguageChanged(this.languageChangeHandler));
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    this.progressRefs.clear();
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
    this.renderPiperSettingsSection(containerEl);
    this.renderVoiceSection(containerEl);
    this.renderKokoroSettingsSection(containerEl);
  }
  renderKokoroSettingsSection(containerEl) {
    containerEl.createEl("h3", { text: "Configura\xE7\xF5es do Kokoro" });
    containerEl.createEl("p", {
      text: "Motor TTS com vozes naturais e qualidade premium. Em breve.",
      cls: "ov-marketplace-description"
    });
    const kokoroSection = containerEl.createDiv({ cls: "ov-kokoro-settings" });
    const kokoroCardContainer = kokoroSection.createDiv({ cls: "ov-cards-container" });
    const kokoroCatalog = getModelCatalog()["kokoro"];
    if (kokoroCatalog) {
      const installed = this.plugin.modelManager.isInstalled("kokoro");
      const installing = this.plugin.modelManager.isInstalling("kokoro");
      this.renderCard(kokoroCardContainer, "kokoro", kokoroCatalog, installed, installing);
    }
  }
  async renderPiperSettingsSection(containerEl) {
    const isPiperInstalled = this.plugin.modelManager.isInstalled("piper");
    containerEl.createEl("h3", { text: "Configura\xE7\xF5es do Piper" });
    containerEl.createEl("p", {
      text: "Configure o motor de voz Piper. O execut\xE1vel \xE9 instalado automaticamente fora do Vault.",
      cls: "ov-marketplace-description"
    });
    const piperSection = containerEl.createDiv({ cls: "ov-piper-settings" });
    const statusRow = piperSection.createDiv({ cls: "ov-setting-row" });
    statusRow.createSpan({
      text: "Status: ",
      cls: "ov-setting-label"
    });
    statusRow.createSpan({
      text: isPiperInstalled ? "Instalado" : "N\xE3o instalado",
      cls: `ov-setting-value ${isPiperInstalled ? "ov-status-installed" : "ov-status-not-installed"}`
    });
    if (isPiperInstalled) {
      const piperPath = this.plugin.modelManager.resolveBinaryPath("piper");
      const pathRow = piperSection.createDiv({ cls: "ov-setting-row" });
      pathRow.createSpan({
        text: "Caminho: ",
        cls: "ov-setting-label"
      });
      pathRow.createSpan({
        text: piperPath || "N\xE3o encontrado",
        cls: "ov-setting-value ov-path-value"
      });
    }
    new import_obsidian2.Setting(piperSection).setName("Caminho manual do Piper (opcional)").setDesc("Informe o caminho completo do execut\xE1vel piper.exe. O plugin validar\xE1 se o arquivo existe e registrar\xE1 a instala\xE7\xE3o.").addText((text) => {
      text.setPlaceholder("Ex: C:\\piper\\piper.exe").setValue(this.plugin.settings.piperPath || "").onChange(async (value) => {
        const piperPath = (value || "").trim();
        this.plugin.settings.piperPath = piperPath;
        if (!piperPath) {
          if (this.plugin.settings.models.piper) {
            delete this.plugin.settings.models.piper;
          }
          await this.plugin.saveSettings();
          this.display();
          return;
        }
        const isValid = fs2.existsSync(piperPath) && fs2.statSync(piperPath).isFile();
        if (isValid) {
          this.plugin.settings.models.piper = {
            id: "piper",
            activeVersion: "manual",
            installedRootPath: path.dirname(piperPath),
            executablePath: piperPath,
            installedAt: Date.now()
          };
          await this.plugin.saveSettings();
          new import_obsidian2.Notice("Piper detectado e registrado automaticamente.");
          this.display();
        } else {
          await this.plugin.saveSettings();
          this.display();
        }
      });
    });
    if (!isPiperInstalled) {
      const verifyBtn = piperSection.createEl("button", {
        cls: "ov-card-btn ov-btn-install",
        text: "Verificar Caminho"
      });
      verifyBtn.addEventListener("click", async () => {
        await this.verifyManualPiperPath();
      });
    }
    const piperCardContainer = piperSection.createDiv({ cls: "ov-cards-container" });
    const piperCatalog = getModelCatalog()["piper"];
    if (piperCatalog) {
      const installed = this.plugin.modelManager.isInstalled("piper");
      const installing = this.plugin.modelManager.isInstalling("piper");
      this.renderCard(piperCardContainer, "piper", piperCatalog, installed, installing);
    }
  }
  // BUGFIX: Validar caminho manual do Piper e sincronizar metadata para refletir instalação na UI
  async verifyManualPiperPath() {
    const piperPath = (this.plugin.settings.piperPath || "").trim();
    if (!piperPath) {
      new import_obsidian2.Notice("Informe o caminho do execut\xE1vel piper.exe.");
      return;
    }
    try {
      if (!fs2.existsSync(piperPath) || !fs2.statSync(piperPath).isFile()) {
        throw new Error("Caminho inv\xE1lido");
      }
      this.plugin.settings.models.piper = {
        id: "piper",
        activeVersion: "manual",
        installedRootPath: path.dirname(piperPath),
        executablePath: piperPath,
        installedAt: Date.now()
      };
      await this.plugin.saveSettings();
      new import_obsidian2.Notice("Piper detectado e registrado com sucesso.");
      this.display();
    } catch (e) {
      new import_obsidian2.Notice("O caminho informado n\xE3o aponta para um execut\xE1vel v\xE1lido.");
    }
  }
  renderCard(container, id, entry, installed, installing) {
    const isComingSoon = id === "kokoro";
    const card = container.createDiv({ cls: `ov-card ${isComingSoon ? "ov-card-coming-soon" : ""}` });
    const header = card.createDiv({ cls: "ov-card-header" });
    header.createSpan({ cls: "ov-card-name", text: entry.displayName });
    const badge = header.createSpan({
      cls: `ov-card-badge ${installed ? "ov-badge-installed" : "ov-badge-available"}`,
      text: installed ? "Instalado" : "Dispon\xEDvel para Download"
    });
    card.createEl("p", { cls: "ov-card-description", text: entry.description });
    const tagsRow = card.createDiv({ cls: "ov-card-tags" });
    for (const tag of entry.tags) {
      tagsRow.createSpan({ cls: "ov-card-tag", text: tag });
    }
    const resources = card.createDiv({ cls: "ov-card-resources" });
    resources.createSpan({ text: `RAM estimada: ${entry.estimatedRamMB} MB` });
    resources.createSpan({ text: `Disco estimado: ${entry.estimatedDiskMB} MB` });
    const progressContainer = card.createDiv({ cls: "ov-progress-container" });
    const progressText = progressContainer.createSpan({ cls: "ov-progress-text" });
    const progressBar = progressContainer.createEl("progress", {
      cls: "ov-progress-bar",
      attr: { max: "100", value: "0" }
    });
    progressContainer.style.display = "none";
    this.progressRefs.set(id, { container: progressContainer, progress: progressBar, text: progressText });
    if (installing) {
      progressContainer.style.display = "flex";
      progressText.textContent = "Instala\xE7\xE3o em andamento...";
    }
    const actionBtn = card.createEl("button", {
      cls: `ov-card-btn ${installed ? "ov-btn-remove" : "ov-btn-install"}`,
      text: installed ? "Remover" : isComingSoon ? t("settings.marketplace.coming_soon") : "Instalar"
    });
    if (isComingSoon || installing) {
      actionBtn.disabled = true;
      if (isComingSoon) {
        actionBtn.textContent = t("settings.marketplace.coming_soon");
      } else if (installing) {
        actionBtn.textContent = "Instalando...";
      }
    }
    actionBtn.addEventListener("click", () => {
      if (installed) {
        this.handleRemove(id, entry.displayName, actionBtn, progressContainer, progressText);
      } else {
        this.handleInstall(id, entry.displayName, actionBtn, progressContainer, progressText, progressBar);
      }
    });
  }
  handleInstall(id, displayName, btn, progressContainer, progressText, progressBar) {
    btn.disabled = true;
    btn.textContent = "Instalando...";
    progressContainer.style.display = "flex";
    progressText.textContent = "Iniciando...";
    (async () => {
      try {
        await this.plugin.modelManager.install(
          id,
          (state) => {
            progressText.textContent = STATE_LABELS[state] || state;
          },
          (percent) => {
            progressBar.value = percent;
          }
        );
        this.display();
      } catch (err) {
        new import_obsidian2.Notice(`Erro na instala\xE7\xE3o: ${(err == null ? void 0 : err.message) || String(err)}`);
        progressContainer.style.display = "none";
        btn.disabled = false;
        btn.textContent = "Instalar";
        this.display();
      }
    })();
  }
  async renderVoiceSection(containerEl) {
    const piperRoot = this.plugin.modelManager.getPiperRoot();
    if (!piperRoot) return;
    containerEl.createEl("h3", { text: t("settings.voice_model.title") });
    containerEl.createEl("p", {
      text: "Escolha uma voz para o motor Piper. O download \xE9 feito diretamente do cat\xE1logo oficial.",
      cls: "ov-marketplace-description"
    });
    const voicesSection = containerEl.createDiv({ cls: "ov-voices-section" });
    const langDrop = voicesSection.createEl("select", { cls: "ov-voice-dropdown" });
    const gridContainer = voicesSection.createDiv({ cls: "ov-voices-grid" });
    let voices = [];
    try {
      await this.plugin.modelManager.fetchPiperVoices((loading) => {
        if (loading) {
          new import_obsidian2.Notice("Carregando cat\xE1logo de vozes...");
        }
      });
      voices = this.plugin.modelManager.voicesCache || [];
    } catch (e) {
      new import_obsidian2.Notice("Falha ao carregar cat\xE1logo de vozes.");
      return;
    }
    const langs = Array.from(new Set(voices.map((v) => v.language.code))).sort();
    langDrop.length = 0;
    for (const code of langs) {
      const opt = document.createElement("option");
      opt.value = code;
      opt.textContent = code;
      langDrop.add(opt);
    }
    const currentLang = this.lastSelectedVoiceLang || (this.plugin.settings.selectedVoice ? this.plugin.settings.selectedVoice.split("-")[0] || "" : "");
    if (currentLang && langs.includes(currentLang)) langDrop.value = currentLang;
    const selectedVoice = this.plugin.settings.selectedVoice || "";
    const renderGrid = () => {
      gridContainer.empty();
      const lang = langDrop.value;
      const filtered = voices.filter((v) => v.language.code === lang);
      for (const voice of filtered) {
        this.renderVoiceCard(gridContainer, voice, piperRoot, selectedVoice);
      }
    };
    langDrop.addEventListener("change", () => {
      this.lastSelectedVoiceLang = langDrop.value;
      renderGrid();
    });
    renderGrid();
  }
  renderVoiceCard(container, voice, piperDir, selectedVoice) {
    const isActive = voice.key === selectedVoice;
    const isInstalled = this.isVoiceInstalled(voice, piperDir);
    const card = container.createDiv({
      cls: `ov-voice-card ${isActive ? "is-active" : ""}`
    });
    const header = card.createDiv({ cls: "ov-voice-card-header" });
    header.createSpan({ cls: "ov-voice-card-name", text: voice.name });
    if (isActive) {
      header.createSpan({
        cls: "ov-voice-active-badge",
        text: "\u2713 Ativa"
      });
    }
    const qualityBadge = header.createSpan({
      cls: "ov-voice-card-badge",
      text: QUALITY_LABELS[voice.quality] || voice.quality
    });
    qualityBadge.style.color = QUALITY_COLORS[voice.quality] || "#888";
    const totalBytes = this.calculateVoiceSize(voice);
    const totalMB = totalBytes > 0 ? (totalBytes / (1024 * 1024)).toFixed(1) : "?";
    const infoRow = card.createDiv({ cls: "ov-voice-card-info" });
    infoRow.createSpan({ text: `${totalMB} MB` });
    const statusEl = card.createDiv({
      cls: `ov-voice-card-status ${isInstalled ? "ov-voice-status-installed" : "ov-voice-status-available"}`,
      text: isInstalled ? "Baixada" : "Dispon\xEDvel"
    });
    const progressContainer = card.createDiv({ cls: "ov-voice-progress-container" });
    progressContainer.style.display = "none";
    const progressText = progressContainer.createSpan({ cls: "ov-voice-progress-text" });
    const progressBar = progressContainer.createEl("progress", {
      cls: "ov-voice-progress-bar",
      attr: { max: "100", value: "0" }
    });
    if (isInstalled) {
      const removeBtn = card.createEl("button", {
        cls: "ov-voice-action-btn ov-btn-remove",
        text: t("buttons.remove")
      });
      removeBtn.addEventListener("click", async () => {
        await this.handleVoiceRemoval(voice, piperDir, removeBtn);
      });
    } else {
      const downloadBtn = card.createEl("button", {
        cls: "ov-voice-action-btn ov-btn-install",
        text: "Baixar Voz"
      });
      downloadBtn.addEventListener("click", async () => {
        await this.handleVoiceDownload(voice, downloadBtn, progressContainer, progressText, progressBar);
      });
    }
    if (isInstalled) {
      card.classList.add("is-clickable");
      card.addEventListener("click", () => {
        this.activateVoice(voice.key);
      });
    }
  }
  async handleVoiceDownload(voice, btn, progressContainer, progressText, progressBar) {
    const piperRoot = this.plugin.modelManager.getPiperRoot();
    if (!piperRoot) {
      new import_obsidian2.Notice("Piper n\xE3o est\xE1 instalado.");
      return;
    }
    if (this.isVoiceInstalled(voice, piperRoot)) {
      await this.activateVoice(voice.key);
      return;
    }
    btn.disabled = true;
    btn.textContent = "Baixando...";
    progressContainer.style.display = "flex";
    progressText.textContent = "Iniciando download...";
    progressBar.value = 0;
    try {
      await this.plugin.modelManager.installVoice(voice, (percent) => {
        progressBar.value = percent;
        progressText.textContent = `Baixando... ${percent}%`;
      });
      this.plugin.settings.selectedVoice = voice.key;
      await this.plugin.saveSettings();
      new import_obsidian2.Notice(t("notices.voice_activated", { voice: voice.key }));
      this.display();
    } catch (err) {
      new import_obsidian2.Notice(`Falha ao baixar voz: ${(err == null ? void 0 : err.message) || String(err)}`);
      btn.disabled = false;
      btn.textContent = "Baixar Voz";
      progressContainer.style.display = "none";
      progressBar.value = 0;
    }
  }
  async activateVoice(voiceKey) {
    if (!voiceKey) {
      console.warn("[Settings] Tentativa de ativar voz vazia");
      return;
    }
    this.plugin.settings.selectedVoice = voiceKey;
    await this.plugin.saveSettings();
    this.display();
    new import_obsidian2.Notice(t("notices.voice_activated", { voice: voiceKey }));
  }
  async handleVoiceRemoval(voice, piperDir, btn) {
    if (!piperDir) {
      new import_obsidian2.Notice("Diret\xF3rio do Piper n\xE3o configurado.");
      return;
    }
    const totalBytes = this.calculateVoiceSize(voice);
    const totalMB = totalBytes > 0 ? (totalBytes / (1024 * 1024)).toFixed(1) : "?";
    const confirmed = confirm(
      t("confirmations.remove_voice", { voice: voice.name, size: totalMB })
    );
    if (!confirmed) return;
    btn.disabled = true;
    btn.textContent = t("buttons.removing");
    try {
      const voiceSubDir = path.join(piperDir, voice.key);
      if (!fs2.existsSync(voiceSubDir)) {
        throw new Error(`Subpasta da voz n\xE3o encontrada: ${voiceSubDir}`);
      }
      await fsp.rm(voiceSubDir, { recursive: true, force: true });
      console.log(`[Settings] Subpasta removida recursivamente: ${voiceSubDir}`);
      if (this.plugin.settings.selectedVoice === voice.key) {
        this.plugin.settings.selectedVoice = "";
        await this.plugin.saveSettings();
      }
      new import_obsidian2.Notice(t("notices.voice_removed", { voice: voice.name }));
      this.display();
    } catch (err) {
      new import_obsidian2.Notice(
        t("errors.remove_voice_failed", {
          voice: voice.name,
          error: (err == null ? void 0 : err.message) || String(err)
        })
      );
      this.display();
      btn.disabled = false;
      btn.textContent = t("buttons.remove");
    }
  }
  calculateVoiceSize(voice) {
    let total = 0;
    for (const meta of Object.values(voice.files)) {
      total += meta.size_bytes;
    }
    return total;
  }
  isVoiceInstalled(voice, piperDir) {
    if (!piperDir) return false;
    const voiceSubDir = path.join(piperDir, voice.key);
    if (!fs2.existsSync(voiceSubDir)) {
      return false;
    }
    const missingFiles = [];
    for (const rel of Object.keys(voice.files)) {
      const fileName = path.basename(rel);
      const filePath = path.join(voiceSubDir, fileName);
      try {
        if (!fs2.existsSync(filePath)) {
          missingFiles.push(fileName);
        }
      } catch (e) {
        missingFiles.push(fileName);
      }
    }
    if (missingFiles.length > 0) {
      console.log(`[Settings] Voz ${voice.key} n\xE3o instalada. Arquivos faltando: ${missingFiles.join(", ")}`);
      return false;
    }
    return true;
  }
  handleRemove(id, displayName, btn, progressContainer, progressText) {
    if (id === "piper") {
      const confirmed = confirm(t("confirmations.remove_piper"));
      if (!confirmed) return;
    }
    btn.disabled = true;
    btn.textContent = "Removendo...";
    progressContainer.style.display = "flex";
    progressText.textContent = "Removendo modelo...";
    this.plugin.modelManager.remove(id).then(() => {
      new import_obsidian2.Notice(`Modelo ${displayName} removido com sucesso.`);
      this.display();
    }).catch((err) => {
      new import_obsidian2.Notice(`Erro ao remover: ${err.message}`);
      this.display();
    });
  }
};

// src/editor-highlighter.ts
var import_state = require("@codemirror/state");
var import_view = require("@codemirror/view");
var isHighlighterActive = false;
var setHighlightEffect = import_state.StateEffect.define();
var highlightField = import_state.StateField.define({
  create() {
    return import_view.Decoration.none;
  },
  update(decorations, tr) {
    if (!isHighlighterActive) {
      return tr.docChanged ? decorations.map(tr.changes) : decorations;
    }
    const hasHighlightEffect = tr.effects.some((e) => e.is(setHighlightEffect));
    if (decorations.size === 0 && !hasHighlightEffect) {
      return import_view.Decoration.none;
    }
    decorations = decorations.map(tr.changes);
    for (const effect of tr.effects) {
      if (effect.is(setHighlightEffect)) {
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
    // Cache de normalização do documento
    this.cachedDocText = "";
    this.cachedOriginalToAlphanum = [];
    this.cachedSourceStr = "";
  }
  setActive(active) {
    isHighlighterActive = active;
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
    const view = editor.cm;
    if (!view) {
      console.warn("[Obsidian Voice Highlighter] EditorView (cm) n\xE3o encontrado no editor.");
      return;
    }
    const docText = view.state.doc.toString();
    if (docText !== this.cachedDocText) {
      const originalToAlphanum2 = [];
      for (let i = 0; i < docText.length; i++) {
        const char = docText[i];
        if (/^\p{L}|\p{N}$/u.test(char)) {
          originalToAlphanum2.push({ char: char.toLowerCase(), origIdx: i });
        }
      }
      this.cachedOriginalToAlphanum = originalToAlphanum2;
      this.cachedSourceStr = originalToAlphanum2.map((x) => x.char).join("");
      this.cachedDocText = docText;
    }
    const sourceStr = this.cachedSourceStr;
    const originalToAlphanum = this.cachedOriginalToAlphanum;
    const cleanTarget = [];
    for (let i = 0; i < paragraphText.length; i++) {
      const char = paragraphText[i];
      if (/^\p{L}|\p{N}$/u.test(char)) {
        cleanTarget.push(char.toLowerCase());
      }
    }
    const targetStr = cleanTarget.join("");
    if (!targetStr) {
      console.warn("[Obsidian Voice Highlighter] targetStr normalizada est\xE1 vazia.");
      return;
    }
    let matchIndex = sourceStr.indexOf(targetStr, this.lastSourceIndex);
    if (matchIndex === -1) {
      matchIndex = sourceStr.indexOf(targetStr, 0);
    }
    if (matchIndex !== -1) {
      this.lastSourceIndex = matchIndex + targetStr.length;
      const from = originalToAlphanum[matchIndex].origIdx;
      const to = originalToAlphanum[matchIndex + targetStr.length - 1].origIdx + 1;
      view.dispatch({
        effects: setHighlightEffect.of({ from, to })
      });
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
      console.warn("[Obsidian Voice Highlighter] Par\xE1grafo n\xE3o p\xF4de ser localizado no documento.");
    }
  }
};

// src/tts/pipeline-service.ts
var fs3 = __toESM(require("fs"));
var os = __toESM(require("os"));
var path2 = __toESM(require("path"));
var import_obsidian3 = require("obsidian");

// src/tts/circuit-breaker.ts
var CircuitBreaker = class {
  constructor(failureThreshold = 3, cooldownMs = 6e4) {
    this.failureThreshold = failureThreshold;
    this.cooldownMs = cooldownMs;
    this.failures = 0;
    this.openedAt = 0;
    this.state = "closed";
  }
  getState() {
    if (this.state === "open" && Date.now() - this.openedAt >= this.cooldownMs) {
      this.state = "half-open";
    }
    return this.state;
  }
  canExecute() {
    return this.getState() !== "open";
  }
  recordSuccess() {
    this.failures = 0;
    this.state = "closed";
    this.openedAt = 0;
  }
  recordFailure() {
    this.failures += 1;
    if (this.failures >= this.failureThreshold) {
      this.state = "open";
      this.openedAt = Date.now();
    }
  }
};

// src/tts/pipeline-service.ts
var TTSPipelineService = class {
  constructor(vault, queue, engine) {
    this.vault = vault;
    this.queue = queue;
    this.engine = engine;
    this.nextChunkPromise = null;
    this.session = null;
    this.breaker = new CircuitBreaker();
  }
  async validate() {
    return this.engine.validate();
  }
  async start() {
    await this.stop();
    this.session = this.engine.createSession();
    await this.session.warmup();
    this.nextChunkPromise = this.prefetchNextChunk();
  }
  async stop() {
    if (this.session) {
      this.session.abort();
      await this.session.dispose();
      this.session = null;
    }
    await this.cleanupPrefetchedChunk();
  }
  async getNextChunk() {
    if (!this.nextChunkPromise) this.nextChunkPromise = this.prefetchNextChunk();
    const currentPromise = this.nextChunkPromise;
    this.nextChunkPromise = null;
    return currentPromise;
  }
  async cancelCurrentGeneration() {
    if (this.session) {
      this.session.abort();
    }
    await this.cleanupPrefetchedChunk();
  }
  prefetch() {
    this.nextChunkPromise = this.prefetchNextChunk();
  }
  holdChunk(chunk) {
    this.nextChunkPromise = Promise.resolve(chunk);
  }
  async resetPrefetch() {
    await this.cleanupPrefetchedChunk();
  }
  async runTest(text, outputFile) {
    if (!this.session) this.session = this.engine.createSession();
    await this.session.warmup();
    return this.generate(text, outputFile);
  }
  async prefetchNextChunk() {
    const chunk = this.queue.getNextChunk();
    if (chunk === null) return null;
    const cacheDir = path2.join(os.tmpdir(), "ObsidianVoiceCache");
    await fs3.promises.mkdir(cacheDir, { recursive: true });
    const filename = `voice_chunk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.wav`;
    const absolutePath = path2.join(cacheDir, filename);
    try {
      const metadata = await this.generate(chunk.text, absolutePath);
      return { resourcePath: this.toResourcePath(absolutePath), absolutePath, filename, text: chunk.text, metadata };
    } catch (error) {
      const message = (error == null ? void 0 : error.message) || String(error);
      return { resourcePath: "", absolutePath, filename, text: chunk.text, error: message };
    }
  }
  async generate(text, outputFile) {
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
  toResourcePath(absolutePath) {
    if (this.vault.adapter instanceof import_obsidian3.FileSystemAdapter) {
      const basePath = this.vault.adapter.getBasePath();
      const relativePath = path2.relative(basePath, absolutePath);
      return this.vault.adapter.getResourcePath(relativePath);
    }
    return `app://local/${absolutePath.replace(/\\/g, "/").replace(/^([A-Za-z]):/, "$1%3A")}`;
  }
  async cleanupPrefetchedChunk() {
    if (!this.nextChunkPromise) return;
    const chunk = await this.nextChunkPromise;
    this.nextChunkPromise = null;
    if (chunk == null ? void 0 : chunk.absolutePath) {
      try {
        await fs3.promises.unlink(chunk.absolutePath);
      } catch (e) {
        if ((e == null ? void 0 : e.code) !== "ENOENT") {
          console.warn("[Obsidian Voice] N\xE3o foi poss\xEDvel remover o chunk prefetch:", chunk.absolutePath, e);
        }
      }
    }
  }
};

// src/tts/engine/piper-engine.ts
var fs4 = __toESM(require("fs"));
var path3 = __toESM(require("path"));

// src/tts/runtime/subprocess-runtime.ts
var import_child_process = require("child_process");
var SubprocessRuntime = class {
  constructor() {
    this.child = null;
  }
  run(request) {
    return new Promise((resolve4, reject) => {
      const child = (0, import_child_process.exec)(request.command, request.cwd ? { cwd: request.cwd } : {}, (error, _stdout, stderr) => {
        this.child = null;
        if (error) {
          reject(new Error(error.message));
          return;
        }
        resolve4();
      });
      this.child = child;
      if (child.stdin) {
        child.stdin.on("error", (e) => console.warn(`Erro no stdin do subprocesso TTS: ${e.message}`));
        child.stdin.write(request.input, "utf-8");
        child.stdin.end();
      }
    });
  }
  abort() {
    if (!this.child) return;
    this.child.kill();
    this.child = null;
  }
};

// src/tts/engine/piper-engine.ts
var PiperEngine = class {
  constructor(options) {
    this.options = options;
    this.id = "piper";
    this.name = "Piper";
    this.version = "1";
    this.health = { state: "degraded" };
  }
  getCapabilities() {
    return {
      outputModes: ["wav-file"],
      supportsRealtime: false,
      supportsVoiceSwitch: true,
      supportsSpeedControl: true
    };
  }
  getHealth() {
    return { ...this.health };
  }
  async validate() {
    const { piperPath, piperInstallRoot } = this.options;
    const resolvedModel = this.resolveModelPath();
    const isPiperCommand = this.isCommand(piperPath);
    const piperExists = !!piperPath && (isPiperCommand || fs4.existsSync(this.resolvePiperPath()));
    const modelExists = !!resolvedModel && fs4.existsSync(resolvedModel);
    if (!piperExists || !modelExists) {
      const error = "Piper executable or voice model is missing.";
      this.health = { state: "broken", lastValidation: Date.now(), lastError: error };
      return { ok: false, error };
    }
    this.health = { state: "healthy", lastValidation: Date.now() };
    return { ok: true };
  }
  createSession() {
    return new PiperEngineSession(this, new SubprocessRuntime());
  }
  buildCommand(outputFile) {
    const resolvedPiper = this.resolvePiperPath();
    const resolvedModel = this.resolveModelPath();
    return {
      command: `"${resolvedPiper}" --model "${resolvedModel}" --output_file "${outputFile}"`,
      cwd: this.options.basePath
    };
  }
  resolvePiperPath() {
    const { piperPath, basePath } = this.options;
    if (this.isCommand(piperPath) || path3.isAbsolute(piperPath) || !basePath) return piperPath;
    return path3.resolve(basePath, piperPath);
  }
  resolveModelPath() {
    const { piperInstallRoot, selectedVoice } = this.options;
    if (!selectedVoice || !piperInstallRoot) return "";
    const voiceFile = selectedVoice.endsWith(".onnx") ? selectedVoice : `${selectedVoice}.onnx`;
    const subfolderPath = path3.join(piperInstallRoot, selectedVoice, voiceFile);
    if (fs4.existsSync(subfolderPath)) return subfolderPath;
    const directPath = path3.join(piperInstallRoot, voiceFile);
    if (fs4.existsSync(directPath)) return directPath;
    let currentDir = piperInstallRoot;
    for (let i = 0; i < 3; i++) {
      const parentDir = path3.dirname(currentDir);
      if (parentDir === currentDir) break;
      const candidatePath = path3.join(parentDir, voiceFile);
      if (fs4.existsSync(candidatePath)) return candidatePath;
      currentDir = parentDir;
    }
    return subfolderPath;
  }
  isCommand(piperPath) {
    return !piperPath.includes("/") && !piperPath.includes("\\");
  }
};
var PiperEngineSession = class {
  constructor(engine, runtime) {
    this.engine = engine;
    this.runtime = runtime;
  }
  async warmup() {
  }
  async generate(request) {
    const startedAt = Date.now();
    const { command, cwd } = this.engine.buildCommand(request.outputFile);
    await this.runtime.run({ command, cwd, input: request.text });
    return {
      filePath: request.outputFile,
      generationMs: Date.now() - startedAt,
      engineId: this.engine.id,
      cached: false
    };
  }
  abort() {
    this.runtime.abort();
  }
  dispose() {
    this.abort();
  }
};

// src/tts/engine/kokoro-engine.ts
var fs5 = __toESM(require("fs"));
var path4 = __toESM(require("path"));
var KokoroEngine = class {
  constructor(options) {
    this.options = options;
    this.id = "kokoro";
    this.name = "Kokoro";
    this.version = "1";
    this.health = { state: "degraded" };
  }
  getCapabilities() {
    return {
      outputModes: ["wav-file"],
      supportsRealtime: false,
      supportsVoiceSwitch: true,
      supportsSpeedControl: true
    };
  }
  getHealth() {
    return { ...this.health };
  }
  async validate() {
    const { kokoroPath, selectedVoice } = this.options;
    const kokoroExists = !!kokoroPath && fs5.existsSync(this.resolveKokoroPath());
    let modelExists = false;
    if (selectedVoice) {
      const voicePath = this.resolveVoicePath(selectedVoice);
      modelExists = fs5.existsSync(voicePath);
    }
    if (!kokoroExists || !modelExists) {
      const error = "Kokoro executable or voice model is missing.";
      this.health = { state: "broken", lastValidation: Date.now(), lastError: error };
      return { ok: false, error };
    }
    this.health = { state: "healthy", lastValidation: Date.now() };
    return { ok: true };
  }
  createSession() {
    return new KokoroEngineSession(this, new SubprocessRuntime());
  }
  buildCommand(text, voice, outputFile) {
    const resolvedKokoro = this.resolveKokoroPath();
    return {
      command: `"${resolvedKokoro}" --text "${text}" --voice "${voice}" --output "${outputFile}"`,
      cwd: this.options.basePath
    };
  }
  resolveKokoroPath() {
    const { kokoroPath, basePath } = this.options;
    if (path4.isAbsolute(kokoroPath) || !basePath) return kokoroPath;
    return path4.resolve(basePath, kokoroPath);
  }
  resolveVoicePath(voice) {
    const { kokoroPath, basePath } = this.options;
    if (!voice || !kokoroPath) return "";
    const dir = path4.dirname(this.resolveKokoroPath());
    return path4.join(dir, "voices", voice);
  }
  getSelectedVoice() {
    return this.options.selectedVoice;
  }
};
var KokoroEngineSession = class {
  constructor(engine, runtime) {
    this.engine = engine;
    this.runtime = runtime;
  }
  async warmup() {
  }
  async generate(request) {
    const startedAt = Date.now();
    const { command, cwd } = this.engine.buildCommand(
      request.text,
      this.engine.getSelectedVoice(),
      request.outputFile
    );
    await this.runtime.run({ command, cwd, input: request.text });
    return {
      filePath: request.outputFile,
      generationMs: Date.now() - startedAt,
      engineId: this.engine.id,
      cached: false
    };
  }
  abort() {
    this.runtime.abort();
  }
  dispose() {
    this.abort();
  }
};

// src/tts/engine/engine-factory.ts
var TTSEngineFactory = class {
  static create(options) {
    if (options.ttsEngine === "kokoro") {
      const kokoroOptions = {
        kokoroPath: options.piperPath,
        selectedVoice: options.selectedKokoroVoice,
        basePath: options.basePath
      };
      return new KokoroEngine(kokoroOptions);
    }
    const piperOptions = {
      piperPath: options.piperPath,
      piperInstallRoot: options.piperInstallRoot,
      selectedVoice: options.selectedVoice,
      basePath: options.basePath
    };
    return new PiperEngine(piperOptions);
  }
};

// src/services/model/model-management-service.ts
var fs11 = __toESM(require("fs"));
var fsp3 = __toESM(require("fs/promises"));
var path9 = __toESM(require("path"));
var os2 = __toESM(require("os"));
var import_child_process3 = require("child_process");
var import_util = require("util");
var import_obsidian5 = require("obsidian");

// src/services/model/manifest-service.ts
var import_obsidian4 = require("obsidian");
var crypto = __toESM(require("crypto"));

// src/services/model/manifest-models.ts
var FALLBACK_MANIFEST = {
  version: "1.0.0",
  models: {
    piper: {
      platforms: {
        "windows-x64": {
          url: "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_windows_amd64.zip",
          sha256: "f3c58906402b24f3a96d92145f58acba6d86c9b5db896d207f78dc80811efcea"
        },
        "macos-arm64": {
          url: "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_macos_aarch64.tar.gz",
          sha256: "6b1eb03b3735946cb35216e063e7eebcc33a6bbf5dd96ec0217959bf1cdcb0cc"
        },
        "macos-x64": {
          url: "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_macos_x64.tar.gz",
          sha256: "ced85c0a3df13945b1e623b878a48fdc2854d5c485b4b67f62857cf551deaf8b"
        },
        "linux-x64": {
          url: "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_linux_x86_64.tar.gz",
          sha256: "a50cb45f355b7af1f6d758c1b360717877ba0a398cc8cbe6d2a7a3a26e225992"
        },
        "linux-arm64": {
          url: "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_linux_aarch64.tar.gz",
          sha256: "fea0fd2d87c54dbc7078d0f878289f404bd4d6eea6e7444a77835d1537ab88eb"
        }
      }
    },
    kokoro: {
      platforms: {
        "windows-x64": {
          url: "https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-windows-x64.zip",
          sha256: "0000000000000000000000000000000000000000000000000000000000000000"
        },
        "macos-arm64": {
          url: "https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-macos-arm64.zip",
          sha256: "0000000000000000000000000000000000000000000000000000000000000000"
        },
        "linux-x64": {
          url: "https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-linux-x64.zip",
          sha256: "0000000000000000000000000000000000000000000000000000000000000000"
        }
      }
    }
  }
};

// src/services/model/manifest-service.ts
var TEST_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0Z3VS5JJcds3xHn/ygWep4
PAtEsHnXMSBMzMfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGQQIDAQAB
-----END PUBLIC KEY-----`;
var SUPPORTED_PLATFORMS = [
  "windows-x64",
  "macos-arm64",
  "macos-x64",
  "linux-x64",
  "linux-arm64"
];
function isPlatformEntry(value) {
  if (typeof value !== "object" || value === null) return false;
  const obj = value;
  return typeof obj.url === "string" && typeof obj.sha256 === "string";
}
function isModelManifestEntry(value) {
  if (typeof value !== "object" || value === null) return false;
  const obj = value;
  if (typeof obj.platforms !== "object" || obj.platforms === null) return true;
  const platforms = obj.platforms;
  return SUPPORTED_PLATFORMS.every((p) => !(p in platforms) || isPlatformEntry(platforms[p]));
}
function isModelManifest(value) {
  if (typeof value !== "object" || value === null) return false;
  const obj = value;
  if (typeof obj.version !== "string") return false;
  if (typeof obj.models !== "object" || obj.models === null) return false;
  const models = obj.models;
  return Object.values(models).every((m) => isModelManifestEntry(m));
}
function verifySignature(content, signatureBase64) {
  try {
    const signature = Buffer.from(signatureBase64.trim(), "base64");
    return crypto.verify(
      "RSA-SHA256",
      Buffer.from(content, "utf-8"),
      TEST_PUBLIC_KEY,
      signature
    );
  } catch (err) {
    console.error("[ManifestService] Erro ao executar verifica\xE7\xE3o criptogr\xE1fica:", err);
    return false;
  }
}
var ManifestService = class {
  constructor(manifestUrl) {
    this.manifestUrl = manifestUrl;
  }
  async fetchManifest() {
    try {
      const sigUrl = this.manifestUrl.replace(/\.json$/, ".sig");
      const [manifestResponse, sigResponse] = await Promise.all([
        (0, import_obsidian4.requestUrl)({ url: this.manifestUrl, method: "GET", contentType: "application/json" }),
        (0, import_obsidian4.requestUrl)({ url: sigUrl, method: "GET" })
      ]);
      const rawText = manifestResponse.text;
      const signatureBase64 = sigResponse.text;
      if (!verifySignature(rawText, signatureBase64)) {
        console.error("[ManifestService] SEGURAN\xC7A: Assinatura do manifesto remoto inv\xE1lida. Abortando uso remoto. Usando fallback local.");
        return FALLBACK_MANIFEST;
      }
      const parsed = JSON.parse(rawText);
      if (!isModelManifest(parsed)) {
        console.warn("[ManifestService] Manifesto remoto com estrutura inv\xE1lida. Usando fallback local.");
        return FALLBACK_MANIFEST;
      }
      console.log("[ManifestService] Manifesto remoto verificado e obtido com sucesso.");
      return parsed;
    } catch (err) {
      console.warn("[ManifestService] Falha ao baixar manifesto remoto. Usando fallback local.", err);
      return FALLBACK_MANIFEST;
    }
  }
};

// src/services/model/resource-guard.ts
var import_child_process2 = require("child_process");
var fs6 = __toESM(require("fs"));
var TIMEOUT_MS = 3e3;
function execWithTimeout(command, cwd) {
  return new Promise((resolve4, reject) => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      controller.abort();
      reject(new Error(`Comando excedeu o timeout de ${TIMEOUT_MS}ms: ${command}`));
    }, TIMEOUT_MS);
    (0, import_child_process2.exec)(command, { cwd, signal: controller.signal }, (error, stdout) => {
      clearTimeout(timer);
      if (error) {
        reject(error);
        return;
      }
      resolve4(stdout.trim());
    });
  });
}
async function getDiskFreeBytes(vaultPath) {
  const safeCwd = await fs6.promises.access(vaultPath).then(() => vaultPath).catch(() => process.cwd()) || process.cwd();
  if (process.platform === "win32") {
    const output2 = await execWithTimeout(
      'powershell -Command "(Get-Item -Path .).PSDrive.Free"',
      safeCwd
    );
    const bytes = parseInt(output2, 10);
    if (isNaN(bytes)) throw new Error(`Sa\xEDda inesperada do PowerShell: "${output2}"`);
    return bytes;
  }
  const output = await execWithTimeout("df -k .", safeCwd);
  const lines = output.split("\n");
  const dataLine = lines[1];
  if (!dataLine) throw new Error(`Sa\xEDda inesperada do df: "${output}"`);
  const parts = dataLine.trim().split(/\s+/);
  const availableKb = parseInt(parts[3], 10);
  if (isNaN(availableKb)) throw new Error(`N\xE3o foi poss\xEDvel parsear espa\xE7o dispon\xEDvel: "${dataLine}"`);
  return availableKb * 1024;
}
var ResourceGuard = class {
  constructor(vaultPath) {
    this.vaultPath = vaultPath;
  }
  async checkDiskSpace(requiredBytes) {
    const freeBytes = await getDiskFreeBytes(this.vaultPath);
    console.log(`[ResourceGuard] Espa\xE7o livre: ${freeBytes} bytes | Necess\xE1rio: ${requiredBytes} bytes`);
    return freeBytes >= requiredBytes;
  }
  checkPlatformAndArch(supportedOS, supportedArch) {
    const osOk = supportedOS.includes(process.platform);
    const archOk = supportedArch.includes(process.arch);
    console.log(`[ResourceGuard] Plataforma: ${process.platform} (ok=${osOk}) | Arch: ${process.arch} (ok=${archOk})`);
    return osOk && archOk;
  }
  async validateEnvironment(modelId, requiredBytes) {
    const platformOk = this.checkPlatformAndArch(
      ["win32", "darwin", "linux"],
      ["x64", "arm64"]
    );
    if (!platformOk) {
      const msg = `Modelo "${modelId}": plataforma (${process.platform}/${process.arch}) n\xE3o suportada.`;
      console.error(`[ResourceGuard] ${msg}`);
      return { success: false, error: msg };
    }
    try {
      const diskOk = await this.checkDiskSpace(requiredBytes);
      if (!diskOk) {
        const msg = `Modelo "${modelId}": espa\xE7o em disco insuficiente. Necess\xE1rio: ${requiredBytes} bytes.`;
        console.error(`[ResourceGuard] ${msg}`);
        return { success: false, error: msg };
      }
    } catch (err) {
      const msg = `Modelo "${modelId}": falha na verifica\xE7\xE3o de disco \u2014 ${err instanceof Error ? err.message : String(err)}`;
      console.error(`[ResourceGuard] ${msg}`);
      return { success: false, error: msg };
    }
    console.log(`[ResourceGuard] Ambiente validado com sucesso para o modelo "${modelId}".`);
    return { success: true };
  }
};

// src/services/model/download-manager.ts
var https = __toESM(require("https"));
var http = __toESM(require("http"));
var fs7 = __toESM(require("fs"));
var crypto2 = __toESM(require("crypto"));
var path5 = __toESM(require("path"));
var import_events = require("events");
var MAX_REDIRECTS = 5;
var MAX_RETRIES = 3;
var BASE_RETRY_DELAY_MS = 1e3;
function sleep(ms) {
  return new Promise((resolve4) => setTimeout(resolve4, ms));
}
function getFileSize(filePath) {
  try {
    return fs7.statSync(filePath).size;
  } catch (e) {
    return 0;
  }
}
function isAbortError(err) {
  return err instanceof Error && err.name === "AbortError";
}
function resolveResponse(url, rangeStart, signal, redirectsLeft) {
  return new Promise((resolve4, reject) => {
    let settled = false;
    const parsed = new URL(url);
    const lib = parsed.protocol === "https:" ? https : http;
    const headers = {};
    if (rangeStart > 0) {
      headers["Range"] = `bytes=${rangeStart}-`;
    }
    const req = lib.get(
      {
        hostname: parsed.hostname,
        port: parsed.port || void 0,
        path: parsed.pathname + parsed.search,
        headers
      },
      (res) => {
        const { statusCode, headers: resHeaders } = res;
        const isRedirect = [301, 302, 307, 308].includes(statusCode);
        if (isRedirect && resHeaders.location) {
          res.resume();
          if (redirectsLeft <= 0) {
            reject(new Error("Limite m\xE1ximo de redirecionamentos HTTP atingido."));
            return;
          }
          const redirectUrl = new URL(resHeaders.location, url).href;
          resolveResponse(redirectUrl, rangeStart, signal, redirectsLeft - 1).then(resolve4).catch(reject);
          return;
        }
        resolve4(res);
      }
    );
    req.on("error", (err) => {
      if (!settled) reject(err);
    });
    if (signal) {
      const onAbort = () => {
        settled = true;
        req.destroy();
        const err = new Error("Download cancelado");
        err.name = "AbortError";
        reject(err);
      };
      signal.addEventListener("abort", onAbort, { once: true });
    }
  });
}
async function attemptDownload(url, partPath, signal, onProgress) {
  var _a;
  await fs7.promises.mkdir(path5.dirname(partPath), { recursive: true });
  const existingBytes = getFileSize(partPath);
  const response = await resolveResponse(url, existingBytes, signal, MAX_REDIRECTS);
  const { statusCode, headers } = response;
  const isResume = statusCode === 206 && existingBytes > 0;
  if (!isResume && existingBytes > 0) {
    await fs7.promises.unlink(partPath).catch(() => {
    });
  }
  const writeStream = fs7.createWriteStream(partPath, { flags: isResume ? "a" : "w" });
  const contentLength = parseInt((_a = headers["content-length"]) != null ? _a : "0", 10);
  const totalBytes = isResume ? existingBytes + contentLength : contentLength;
  let downloadedBytes = isResume ? existingBytes : 0;
  await new Promise((resolve4, reject) => {
    response.on("data", (chunk) => {
      downloadedBytes += chunk.length;
      const percent = totalBytes > 0 ? Math.round(downloadedBytes / totalBytes * 100) : 0;
      onProgress({ bytesDownloaded: downloadedBytes, bytesTotal: totalBytes, percent });
    });
    response.on("error", (err) => {
      writeStream.destroy();
      reject(err);
    });
    writeStream.on("error", reject);
    writeStream.on("finish", resolve4);
    response.pipe(writeStream);
  });
}
function computeSha256(filePath) {
  return new Promise((resolve4, reject) => {
    const hash = crypto2.createHash("sha256");
    const stream = fs7.createReadStream(filePath);
    stream.on("data", (chunk) => hash.update(Buffer.from(chunk)));
    stream.on("end", () => resolve4(hash.digest("hex")));
    stream.on("error", reject);
  });
}
function computeMd5(filePath) {
  return new Promise((resolve4, reject) => {
    const hash = crypto2.createHash("md5");
    const stream = fs7.createReadStream(filePath);
    stream.on("data", (chunk) => hash.update(Buffer.from(chunk)));
    stream.on("end", () => resolve4(hash.digest("hex")));
    stream.on("error", reject);
  });
}
var DownloadManager = class extends import_events.EventEmitter {
  async download(options) {
    const { url, destPath, expectedSha256, expectedMd5, signal, onProgress: optionsOnProgress } = options;
    const partPath = `${destPath}.part`;
    const onProgress = (progress) => {
      if (optionsOnProgress) {
        optionsOnProgress(progress);
      }
      this.emit("progress", progress);
    };
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        if (signal == null ? void 0 : signal.aborted) {
          const err = new Error("Download cancelado antes de iniciar");
          err.name = "AbortError";
          throw err;
        }
        await attemptDownload(url, partPath, signal, onProgress);
        break;
      } catch (err) {
        if (isAbortError(err)) throw err;
        if (attempt >= MAX_RETRIES - 1) throw err;
        const delay = BASE_RETRY_DELAY_MS * Math.pow(2, attempt);
        console.warn(
          `[DownloadManager] Tentativa ${attempt + 1}/${MAX_RETRIES} falhou. Retomando em ${delay}ms...`,
          err
        );
        await sleep(delay);
      }
    }
    if (expectedSha256) {
      console.log("[DownloadManager] Download conclu\xEDdo. Verificando integridade SHA-256...");
      const actualSha256 = await computeSha256(partPath);
      if (actualSha256 !== expectedSha256) {
        await fs7.promises.unlink(partPath).catch(() => {
        });
        throw new Error(
          `[DownloadManager] Falha de integridade SHA-256: esperado ${expectedSha256}, obtido ${actualSha256}. Arquivo corrompido removido.`
        );
      }
    }
    if (expectedMd5) {
      console.log("[DownloadManager] Download conclu\xEDdo. Verificando integridade MD5...");
      const actualMd5 = await computeMd5(partPath);
      if (actualMd5 !== expectedMd5) {
        await fs7.promises.unlink(partPath).catch(() => {
        });
        throw new Error(
          `[DownloadManager] Falha de integridade MD5: esperado ${expectedMd5}, obtido ${actualMd5}. Arquivo corrompido removido.`
        );
      }
    }
    await fs7.promises.rename(partPath, destPath);
    console.log(`[DownloadManager] Arquivo verificado e salvo em: ${destPath}`);
  }
};

// src/services/model/model-installer.ts
var fs10 = __toESM(require("fs"));
var fsp2 = __toESM(require("fs/promises"));
var path8 = __toESM(require("path"));

// src/services/model/archive-manager.ts
var path6 = __toESM(require("path"));
var fs8 = __toESM(require("fs"));
var zlib = __toESM(require("zlib"));
var tar = __toESM(require_tar_stream());
var AdmZip = require_adm_zip();
function isPathSafe(destFolder, filePathInArchive) {
  const resolved = path6.resolve(destFolder, filePathInArchive);
  const normalizedDest = path6.normalize(destFolder) + path6.sep;
  const normalizedResolved = path6.normalize(resolved);
  return normalizedResolved.startsWith(normalizedDest);
}
var ArchiveManager = class {
  async extract(archivePath, destFolder) {
    const ext = path6.extname(archivePath).toLowerCase();
    if (ext === ".zip") {
      await this.extractZip(archivePath, destFolder);
    } else if (ext === ".gz" || ext === ".tgz") {
      await this.extractTarGz(archivePath, destFolder);
    } else {
      throw new Error(`Formato de archive n\xE3o suportado: ${ext}`);
    }
  }
  async extractZip(archivePath, destFolder) {
    const zip = new AdmZip(archivePath);
    const entries = zip.getEntries();
    for (const entry of entries) {
      if (entry.isDirectory) continue;
      if (!isPathSafe(destFolder, entry.entryName)) {
        throw new Error("Zip Slip detectado: tentativa de escrita fora do diret\xF3rio destino.");
      }
      const targetPath = path6.resolve(destFolder, entry.entryName);
      fs8.mkdirSync(path6.dirname(targetPath), { recursive: true });
      fs8.writeFileSync(targetPath, entry.getData());
    }
  }
  async extractTarGz(archivePath, destFolder) {
    return new Promise((resolve4, reject) => {
      const extract2 = tar.extract();
      const errors = [];
      extract2.on("entry", (header, stream, next) => {
        if (header.type === "directory") {
          stream.resume();
          next();
          return;
        }
        const entryName = header.name;
        if (!isPathSafe(destFolder, entryName)) {
          stream.resume();
          errors.push(`Zip Slip detectado: ${entryName}`);
          next();
          return;
        }
        const targetPath = path6.resolve(destFolder, entryName);
        fs8.mkdirSync(path6.dirname(targetPath), { recursive: true });
        const writeStream = fs8.createWriteStream(targetPath);
        stream.pipe(writeStream);
        writeStream.on("finish", next);
        writeStream.on("error", (err) => {
          errors.push(err.message);
          next();
        });
      });
      extract2.on("finish", () => {
        if (errors.length > 0) {
          reject(new Error(errors.join("; ")));
        } else {
          resolve4();
        }
      });
      extract2.on("error", (err) => reject(err));
      fs8.createReadStream(archivePath).pipe(zlib.createGunzip()).pipe(extract2);
    });
  }
  isPathSafe(destFolder, filePathInArchive) {
    return isPathSafe(destFolder, filePathInArchive);
  }
};

// src/services/model/staging-manager.ts
var path7 = __toESM(require("path"));
var fs9 = __toESM(require("fs/promises"));
var StagingManager = class {
  constructor(stagingRoot) {
    this.stagingRoot = stagingRoot;
  }
  async prepareStaging(modelId) {
    const stagingDir = path7.join(this.stagingRoot, ".staging", `${modelId}-temp`);
    await fs9.mkdir(stagingDir, { recursive: true });
    const entries = await fs9.readdir(stagingDir);
    await Promise.all(
      entries.map(
        (entry) => fs9.rm(path7.join(stagingDir, entry), { recursive: true, force: true })
      )
    );
    return stagingDir;
  }
  async promoteStaging(stagingDir, destDir) {
    await fs9.rm(destDir, { recursive: true, force: true });
    await fs9.mkdir(path7.dirname(destDir), { recursive: true });
    await fs9.rename(stagingDir, destDir);
  }
  async cleanupStaging(stagingDir) {
    await fs9.rm(stagingDir, { recursive: true, force: true });
  }
};

// src/services/model/install-state-machine.ts
var VALID_TRANSITIONS = {
  ["NOT_INSTALLED" /* NOT_INSTALLED */]: [
    "FETCHING_MANIFEST" /* FETCHING_MANIFEST */
  ],
  ["FETCHING_MANIFEST" /* FETCHING_MANIFEST */]: [
    "DOWNLOADING" /* DOWNLOADING */,
    "FAILED" /* FAILED */
  ],
  ["DOWNLOADING" /* DOWNLOADING */]: [
    "VERIFYING" /* VERIFYING */,
    "FAILED" /* FAILED */
  ],
  ["VERIFYING" /* VERIFYING */]: [
    "EXTRACTING" /* EXTRACTING */,
    "FAILED" /* FAILED */
  ],
  ["EXTRACTING" /* EXTRACTING */]: [
    "VALIDATING_RUNTIME" /* VALIDATING_RUNTIME */,
    "FAILED" /* FAILED */
  ],
  ["VALIDATING_RUNTIME" /* VALIDATING_RUNTIME */]: [
    "INSTALLING" /* INSTALLING */,
    "FAILED" /* FAILED */
  ],
  ["INSTALLING" /* INSTALLING */]: [
    "INSTALLED" /* INSTALLED */,
    "FAILED" /* FAILED */
  ],
  ["INSTALLED" /* INSTALLED */]: [
    "UPDATING" /* UPDATING */,
    "REMOVING" /* REMOVING */
  ],
  ["FAILED" /* FAILED */]: [
    "FETCHING_MANIFEST" /* FETCHING_MANIFEST */,
    "REMOVING" /* REMOVING */
  ],
  ["REMOVING" /* REMOVING */]: [
    "NOT_INSTALLED" /* NOT_INSTALLED */,
    "FAILED" /* FAILED */
  ],
  ["UPDATING" /* UPDATING */]: [
    "DOWNLOADING" /* DOWNLOADING */,
    "FAILED" /* FAILED */
  ],
  ["ROLLBACK" /* ROLLBACK */]: [
    "INSTALLED" /* INSTALLED */,
    "FAILED" /* FAILED */
  ]
};
var InstallStateMachine = class {
  constructor(initialState = "NOT_INSTALLED" /* NOT_INSTALLED */) {
    this.currentState = initialState;
  }
  get state() {
    return this.currentState;
  }
  setOnStateChange(callback) {
    this.onStateChange = callback;
  }
  transitionTo(nextState) {
    var _a;
    const allowed = VALID_TRANSITIONS[this.currentState];
    if (!allowed || !allowed.includes(nextState)) {
      throw new Error(
        `Transi\xE7\xE3o inv\xE1lida: ${this.currentState} \u2192 ${nextState}`
      );
    }
    this.currentState = nextState;
    (_a = this.onStateChange) == null ? void 0 : _a.call(this, nextState);
  }
  isInstalling() {
    return this.currentState !== "NOT_INSTALLED" /* NOT_INSTALLED */ && this.currentState !== "INSTALLED" /* INSTALLED */ && this.currentState !== "FAILED" /* FAILED */;
  }
};

// src/services/model/model-installer.ts
async function findExecutableInDir(dir) {
  const candidates = process.platform === "win32" ? ["piper.exe", "piper"] : ["piper"];
  async function walk(currentDir) {
    try {
      const entries = await fsp2.readdir(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path8.join(currentDir, entry.name);
        if (entry.isDirectory()) {
          const found = await walk(fullPath);
          if (found) return found;
        } else if (candidates.includes(entry.name)) {
          return fullPath;
        }
      }
    } catch (e) {
    }
    return null;
  }
  return await walk(dir);
}
var ModelInstaller = class {
  constructor(stagingRoot, callbacks = {}, isInstalledFn) {
    this.machines = /* @__PURE__ */ new Map();
    this.archiveManager = new ArchiveManager();
    this.stagingManager = new StagingManager(stagingRoot);
    this.callbacks = callbacks;
    this.isInstalledFn = isInstalledFn;
  }
  getMachine(modelId) {
    var _a;
    let machine = this.machines.get(modelId);
    if (!machine) {
      const initialState = ((_a = this.isInstalledFn) == null ? void 0 : _a.call(this, modelId)) ? "INSTALLED" /* INSTALLED */ : "NOT_INSTALLED" /* NOT_INSTALLED */;
      machine = new InstallStateMachine(initialState);
      machine.setOnStateChange((state) => {
        var _a2, _b;
        return (_b = (_a2 = this.callbacks).onStateChange) == null ? void 0 : _b.call(_a2, modelId, state);
      });
      this.machines.set(modelId, machine);
    }
    return machine;
  }
  async install(modelId, archivePath, destDir, version) {
    var _a, _b;
    const machine = this.getMachine(modelId);
    try {
      machine.transitionTo("VERIFYING" /* VERIFYING */);
      machine.transitionTo("EXTRACTING" /* EXTRACTING */);
      const stagingDir = await this.stagingManager.prepareStaging(modelId);
      machine.transitionTo("VALIDATING_RUNTIME" /* VALIDATING_RUNTIME */);
      machine.transitionTo("INSTALLING" /* INSTALLING */);
      await this.archiveManager.extract(archivePath, stagingDir);
      await this.stagingManager.promoteStaging(stagingDir, destDir);
      const executablePath = await findExecutableInDir(destDir);
      if (!executablePath) {
        throw new Error(`Execut\xE1vel n\xE3o encontrado na raiz de instala\xE7\xE3o: ${destDir}`);
      }
      machine.transitionTo("INSTALLED" /* INSTALLED */);
      const metadata = {
        id: modelId,
        activeVersion: version,
        installedRootPath: destDir,
        executablePath,
        installedAt: Date.now()
      };
      (_b = (_a = this.callbacks).onInstalled) == null ? void 0 : _b.call(_a, modelId, metadata);
    } catch (err) {
      machine.transitionTo("FAILED" /* FAILED */);
      throw err;
    }
  }
  async remove(modelId, installRoot) {
    var _a, _b, _c, _d;
    const machine = this.getMachine(modelId);
    if (machine.isInstalling()) {
      throw new Error(`Remo\xE7\xE3o bloqueada: instala\xE7\xE3o em andamento para o modelo: ${modelId}`);
    }
    machine.transitionTo("REMOVING" /* REMOVING */);
    try {
      const rootExists = fs10.existsSync(installRoot);
      if (!rootExists) {
        machine.transitionTo("NOT_INSTALLED" /* NOT_INSTALLED */);
        (_b = (_a = this.callbacks).onRemoved) == null ? void 0 : _b.call(_a, modelId);
        return true;
      }
      await fsp2.rm(installRoot, { recursive: true, force: true });
      const stillExists = fs10.existsSync(installRoot);
      if (stillExists) {
        machine.transitionTo("FAILED" /* FAILED */);
        throw new Error(`Falha ao remover diret\xF3rio: ${installRoot}`);
      }
      machine.transitionTo("NOT_INSTALLED" /* NOT_INSTALLED */);
      (_d = (_c = this.callbacks).onRemoved) == null ? void 0 : _d.call(_c, modelId);
      return true;
    } catch (err) {
      machine.transitionTo("FAILED" /* FAILED */);
      throw err;
    }
  }
};

// src/services/model/model-management-service.ts
var MANIFEST_URL = "https://raw.githubusercontent.com/ericrocha001/obsidian_voice/main/manifest-models.json";
var execAsync = (0, import_util.promisify)(import_child_process3.exec);
var LegacyMigration = class {
  /**
   * Detecta se os metadados estão no formato legado (absolutePath como executável).
   */
  static needsMigration(metadata) {
    if (!metadata) return false;
    return !metadata.installedRootPath && !!metadata.absolutePath;
  }
  /**
   * Converte metadados legados para o novo formato canônico.
   * Retorna os metadados migrados ou null se não houver caminho legacy.
   */
  static migrate(metadata) {
    if (metadata.installedRootPath) {
      return metadata;
    }
    const legacyPath = metadata.absolutePath;
    if (!legacyPath) return null;
    const installRoot = path9.dirname(legacyPath);
    const migrated = {
      id: metadata.id,
      activeVersion: metadata.activeVersion,
      installedRootPath: installRoot,
      executablePath: legacyPath,
      installedAt: metadata.installedAt
    };
    return migrated;
  }
};
var ModelManagementService = class {
  constructor(basePath, settingsRef) {
    this.cachedManifest = null;
    this.voicesCache = null;
    this.basePath = basePath;
    this.settingsRef = settingsRef;
    const stagingRoot = path9.join(os2.tmpdir(), "obsidian-voice-staging");
    this.manifestService = new ManifestService(MANIFEST_URL);
    this.resourceGuard = new ResourceGuard(basePath);
    this.downloadManager = new DownloadManager();
    const callbacks = {
      onInstalled: (modelId, metadata) => {
        this.settingsRef.models[modelId] = metadata;
        this.settingsRef.saveSettings().catch(
          (err) => console.error("[ModelManagementService] Erro ao salvar metadados:", err)
        );
      },
      onRemoved: (modelId) => {
        delete this.settingsRef.models[modelId];
        this.settingsRef.saveSettings().catch(
          (err) => console.error("[ModelManagementService] Erro ao salvar remo\xE7\xE3o:", err)
        );
      }
    };
    this.installer = new ModelInstaller(stagingRoot, callbacks, this.isInstalled.bind(this));
  }
  getPiperInstallRoot() {
    if (process.platform === "win32") {
      return path9.join(os2.homedir(), "AppData", "Roaming", "obsidian-voice", "bin", "piper");
    } else if (process.platform === "darwin") {
      return path9.join(os2.homedir(), "Library", "Application Support", "obsidian-voice", "bin", "piper");
    } else {
      return path9.join(os2.homedir(), ".local", "share", "obsidian-voice", "bin", "piper");
    }
  }
  isInstalled(modelId) {
    const metadata = this.settingsRef.models[modelId];
    if (!metadata) return false;
    try {
      return fs11.existsSync(metadata.installedRootPath);
    } catch (e) {
      return false;
    }
  }
  resolveBinaryPath(modelId) {
    const metadata = this.settingsRef.models[modelId];
    if (!(metadata == null ? void 0 : metadata.executablePath)) return "";
    return metadata.executablePath;
  }
  getInstallRoot(modelId) {
    const metadata = this.settingsRef.models[modelId];
    return (metadata == null ? void 0 : metadata.installedRootPath) || "";
  }
  isInstalling(modelId) {
    return this.installer.getMachine(modelId).isInstalling();
  }
  async ensureManifest() {
    if (!this.cachedManifest) {
      this.cachedManifest = await this.manifestService.fetchManifest();
    }
    return this.cachedManifest;
  }
  async fetchPiperVoices(onLoading) {
    if (this.voicesCache) return;
    if (onLoading) onLoading(true);
    try {
      const url = "https://huggingface.co/rhasspy/piper-voices/resolve/main/voices.json";
      const res = await (0, import_obsidian5.requestUrl)({ url, method: "GET", contentType: "application/json" });
      const parsed = JSON.parse(res.text);
      this.voicesCache = Object.values(parsed).sort((a, b) => a.key.localeCompare(b.key));
    } finally {
      if (onLoading) onLoading(false);
    }
  }
  getPiperRoot() {
    const metadata = this.settingsRef.models.piper;
    if (!(metadata == null ? void 0 : metadata.executablePath)) return "";
    return path9.dirname(metadata.executablePath);
  }
  async install(modelId, onStateChange, onProgress) {
    const metadata = this.settingsRef.models[modelId];
    if (metadata && metadata.installedRootPath && !fs11.existsSync(metadata.installedRootPath)) {
      delete this.settingsRef.models[modelId];
      await this.settingsRef.saveSettings();
    }
    if (this.isInstalled(modelId) && !this.isInstalling(modelId)) {
      throw new Error(`Modelo "${modelId}" j\xE1 est\xE1 instalado.`);
    }
    const catalogEntry = getModelEntry(modelId);
    if (!catalogEntry) {
      throw new Error(`Modelo "${modelId}" n\xE3o encontrado no cat\xE1logo.`);
    }
    const machine = this.installer.getMachine(modelId);
    machine.setOnStateChange(() => {
    });
    machine.setOnStateChange(onStateChange);
    machine.transitionTo("FETCHING_MANIFEST" /* FETCHING_MANIFEST */);
    onStateChange("FETCHING_MANIFEST" /* FETCHING_MANIFEST */);
    const manifest = await this.ensureManifest();
    const modelEntry = manifest.models[modelId];
    if (!modelEntry) {
      machine.transitionTo("FAILED" /* FAILED */);
      throw new Error(`Modelo "${modelId}" n\xE3o encontrado no manifesto.`);
    }
    const platformKey = this.resolvePlatformKey();
    const platforms = modelEntry.platforms || {};
    const platformEntry = platforms[platformKey];
    if (!platformEntry) {
      machine.transitionTo("FAILED" /* FAILED */);
      throw new Error(`Plataforma "${platformKey}" n\xE3o suportada para o modelo "${modelId}".`);
    }
    const envCheck = await this.resourceGuard.validateEnvironment(
      modelId,
      catalogEntry.estimatedDiskMB * 1024 * 1024
    );
    if (!envCheck.success) {
      machine.transitionTo("FAILED" /* FAILED */);
      throw new Error(envCheck.error);
    }
    machine.transitionTo("DOWNLOADING" /* DOWNLOADING */);
    onStateChange("DOWNLOADING" /* DOWNLOADING */);
    const tmpDir = path9.join(os2.tmpdir(), "obsidian-voice-downloads");
    const archiveName = `${modelId}-${platformKey}.zip`;
    const archivePath = path9.join(tmpDir, archiveName);
    const onDownloadProgress = onProgress ? (progress) => onProgress(progress.percent) : null;
    if (onDownloadProgress) {
      this.downloadManager.on("progress", onDownloadProgress);
    }
    try {
      await this.downloadManager.download({
        url: platformEntry.url,
        destPath: archivePath,
        expectedSha256: platformEntry.sha256
      });
    } finally {
      if (onDownloadProgress) {
        this.downloadManager.off("progress", onDownloadProgress);
      }
    }
    const destDir = modelId === "piper" ? this.getPiperInstallRoot() : path9.join(this.basePath, ".obsidian", "plugins", "obsidian-voice", "bin", modelId);
    await this.installer.install(modelId, archivePath, destDir, manifest.version);
  }
  async installVoice(voice, onProgress) {
    const basePiperDir = this.getPiperRoot();
    if (!basePiperDir) {
      throw new Error("Piper n\xE3o est\xE1 instalado.");
    }
    const voiceSubDir = path9.join(basePiperDir, voice.key);
    await fsp3.mkdir(voiceSubDir, { recursive: true });
    const base = "https://huggingface.co/rhasspy/piper-voices/resolve/main/";
    const totalBytes = Object.values(voice.files).reduce((sum, meta) => sum + meta.size_bytes, 0);
    let downloadedBytes = 0;
    const tasks = [];
    for (const [rel, meta] of Object.entries(voice.files)) {
      const fileName = path9.basename(rel);
      const dest = path9.join(voiceSubDir, fileName);
      tasks.push({ url: base + rel, dest, md5: meta.md5_digest, sizeBytes: meta.size_bytes });
    }
    for (const task of tasks) {
      const onFileProgress = (progress) => {
        if (onProgress) {
          const currentTotal = downloadedBytes + progress.bytesDownloaded;
          const percent = Math.round(currentTotal / totalBytes * 100);
          onProgress(percent);
        }
      };
      await this.downloadManager.download({
        url: task.url,
        destPath: task.dest,
        expectedMd5: task.md5,
        onProgress: onFileProgress
      });
      downloadedBytes += task.sizeBytes;
    }
    if (onProgress) onProgress(100);
    console.log(`[ModelManagementService] Voz ${voice.key} instalada em: ${voiceSubDir}`);
  }
  async migrateLegacyMetadata() {
    const piperMetadata = this.settingsRef.models.piper;
    if (!LegacyMigration.needsMigration(piperMetadata)) {
      return false;
    }
    const migrated = LegacyMigration.migrate(piperMetadata);
    if (!migrated) return false;
    this.settingsRef.models.piper = migrated;
    await this.settingsRef.saveSettings();
    console.log("[ModelManagementService] Metadados legacy migrados para formato can\xF4nico.");
    return true;
  }
  async migratePiperFromVault() {
    const oldBinDir = path9.join(this.basePath, ".obsidian", "plugins", "obsidian-voice", "bin", "piper");
    const newBinDir = this.getPiperInstallRoot();
    if (!fs11.existsSync(oldBinDir)) return false;
    if (fs11.existsSync(newBinDir)) return false;
    await fsp3.mkdir(newBinDir, { recursive: true });
    const entries = await fsp3.readdir(oldBinDir, { withFileTypes: true });
    for (const entry of entries) {
      const src = path9.join(oldBinDir, entry.name);
      const dest = path9.join(newBinDir, entry.name);
      await fsp3.rename(src, dest);
    }
    const executablePath = this.findExecutable(newBinDir);
    if (!executablePath) {
      throw new Error("Bin\xE1rio do Piper n\xE3o encontrado ap\xF3s migra\xE7\xE3o.");
    }
    const metadata = this.settingsRef.models.piper;
    if (metadata) {
      const migrated = LegacyMigration.needsMigration(metadata) ? LegacyMigration.migrate(metadata) : metadata;
      migrated.installedRootPath = newBinDir;
      migrated.executablePath = executablePath;
      this.settingsRef.models.piper = migrated;
      await this.settingsRef.saveSettings();
    }
    console.log("[ModelManagementService] Piper migrado do Vault para local padr\xE3o.");
    return true;
  }
  findExecutable(dir) {
    const candidates = process.platform === "win32" ? ["piper.exe", "piper"] : ["piper"];
    try {
      const entries = fs11.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isDirectory() && candidates.includes(entry.name)) {
          return path9.join(dir, entry.name);
        }
      }
    } catch (e) {
    }
    return null;
  }
  async migrateVoicesToSubfolders() {
    const basePiperDir = this.getPiperRoot();
    if (!basePiperDir) return false;
    const entries = await fsp3.readdir(basePiperDir, { withFileTypes: true });
    const hasVoicesInRoot = entries.some(
      (entry) => !entry.isDirectory() && entry.name.endsWith(".onnx")
    );
    if (!hasVoicesInRoot) return false;
    if (!this.voicesCache) {
      await this.fetchPiperVoices();
    }
    let migratedCount = 0;
    for (const voice of this.voicesCache || []) {
      const allFilesExist = Object.keys(voice.files).every((rel) => {
        const fileName = path9.basename(rel);
        const filePath = path9.join(basePiperDir, fileName);
        return fs11.existsSync(filePath);
      });
      if (!allFilesExist) continue;
      const voiceSubDir = path9.join(basePiperDir, voice.key);
      await fsp3.mkdir(voiceSubDir, { recursive: true });
      for (const rel of Object.keys(voice.files)) {
        const fileName = path9.basename(rel);
        const src = path9.join(basePiperDir, fileName);
        const dest = path9.join(voiceSubDir, fileName);
        if (fs11.existsSync(src)) {
          await fsp3.copyFile(src, dest);
        }
      }
      migratedCount++;
      console.log(`[ModelManagementService] Voz migrada: ${voice.key}`);
    }
    if (migratedCount > 0) {
      for (const entry of entries) {
        if (!entry.isDirectory()) {
          const ext = path9.extname(entry.name).toLowerCase();
          if (ext === ".onnx" || ext === ".json") {
            const filePath = path9.join(basePiperDir, entry.name);
            await fsp3.unlink(filePath).catch(() => {
            });
          }
        }
      }
      console.log(`[ModelManagementService] ${migratedCount} vozes migradas para subpastas.`);
      return true;
    }
    return false;
  }
  async remove(modelId) {
    if (!this.isInstalled(modelId)) {
      throw new Error(`Modelo "${modelId}" n\xE3o est\xE1 instalado.`);
    }
    const metadata = this.settingsRef.models[modelId];
    if (!(metadata == null ? void 0 : metadata.installedRootPath)) {
      throw new Error(`Metadados de instala\xE7\xE3o corrompidos para "${modelId}".`);
    }
    await this.installer.remove(modelId, metadata.installedRootPath);
  }
  resolvePlatformKey() {
    const arch = process.arch === "arm64" ? "arm64" : "x64";
    if (process.platform === "win32") return `windows-${arch}`;
    if (process.platform === "darwin") return `macos-${arch}`;
    return `linux-${arch}`;
  }
  async healthcheckPiper(piperPath) {
    var _a;
    const run = async () => {
      await execAsync(`"${piperPath}" --help`, { timeout: 12e4 });
    };
    try {
      await run();
    } catch (err) {
      const code = (_a = err == null ? void 0 : err.code) != null ? _a : -1;
      if (process.platform !== "win32" && code === "EACCES") {
        await fsp3.chmod(piperPath, 493);
        await run();
        return;
      }
      throw new Error(`Healthcheck do Piper falhou: ${(err == null ? void 0 : err.message) || String(err)}`);
    }
  }
};

// src/main.ts
var ObsidianVoicePlugin = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    this.queue = new ObsidianVoiceQueue();
    this.playerState = "aguardando";
    this.isClickListenerActive = false;
    this.currentParagraphText = "";
    this.activeEditor = null;
    this.lastNarratedPath = null;
    this.currentSessionId = 0;
    this.isUserScrolling = false;
    this.userScrollTimeout = null;
    this.scrollListenerEl = null;
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
    this.audioPlayer = new ObsidianAudioPlayer(this.app.vault, this.settings.playbackSpeed);
    let basePath = "";
    if (this.app.vault.adapter instanceof import_obsidian6.FileSystemAdapter) {
      basePath = this.app.vault.adapter.getBasePath();
    }
    this.modelManager = new ModelManagementService(
      basePath || process.cwd(),
      {
        models: this.settings.models,
        getPiperPath: () => this.settings.piperPath,
        saveSettings: () => this.saveSettings()
      }
    );
    this.rebuildTTSPipeline();
    await this.migrateLegacyMetadataIfNeeded();
    try {
      const migrated = await this.modelManager.migratePiperFromVault();
      if (migrated) {
        new import_obsidian6.Notice("Piper movido para local padr\xE3o. Seu Vault est\xE1 mais leve agora!");
      }
    } catch (err) {
      console.warn("[Obsidian Voice] Migra\xE7\xE3o do Piper falhou:", err);
    }
    try {
      await this.modelManager.migrateVoicesToSubfolders();
    } catch (err) {
      console.warn("[Obsidian Voice] Migra\xE7\xE3o das vozes para subpastas falhou:", err);
    }
    this.addRibbonIcon("headphones", t("commands.ribbon_narrate"), () => this.narrarNotaAtual());
    this.widget = new ObsidianVoiceWidget(
      () => this.togglePlayPause(),
      async () => this.pararNarracao(),
      () => this.queue.getChapters(),
      (chunkIndex) => this.jumpToChapter(chunkIndex),
      (active) => this.onResumoToggle(active),
      () => this.openSettingsTab(),
      (active) => this.onTeleprompterToggle(active),
      (speed) => this.onSpeedChange(speed),
      () => {
        const engines = [];
        const piperInstalled = this.modelManager.isInstalled("piper");
        const kokoroInstalled = this.modelManager.isInstalled("kokoro");
        engines.push({ id: "piper", name: "Piper", installed: piperInstalled });
        engines.push({ id: "kokoro", name: "Kokoro", installed: kokoroInstalled });
        return engines;
      },
      (engineId) => this.onEngineChange(engineId),
      () => this.settings.ttsEngine
    );
    this.widget.setTeleprompterAtivo(this.settings.enableTeleprompterMode);
    this.widget.setSpeed(this.settings.playbackSpeed);
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
        new import_obsidian6.Notice(t("notices.summary_mode", { state: estado }));
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
      editorCallback: async (editor) => {
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
      if (!this.isClickListenerActive) return;
      if (this.playerState !== "tocando") {
        return;
      }
      const target = evt.target;
      if (target && target.closest("#obsidian-voice-widget")) {
        return;
      }
      const activeView = this.app.workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
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
    await this.ttsPipeline.stop();
    if (this.userScrollTimeout) {
      clearTimeout(this.userScrollTimeout);
      this.userScrollTimeout = null;
    }
    this.unregisterScrollListeners();
    this.widget.hide();
    this.activeEditor = this.getActiveEditor();
    if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
    this.activeEditor = null;
    console.log("[Obsidian Voice] Plugin descarregado.");
  }
  getPlayerState() {
    return this.playerState;
  }
  activatePlugin() {
    this.isClickListenerActive = true;
    this.highlighter.setActive(true);
  }
  deactivatePlugin() {
    this.isClickListenerActive = false;
    this.highlighter.setActive(false);
  }
  updatePlayerState(state) {
    this.playerState = state;
    this.widget.show(state, activeDocument.body);
    if (state === "tocando") {
      this.activatePlugin();
    } else {
      this.deactivatePlugin();
    }
  }
  async pararNarracao() {
    await this.pararNarracaoSilenciosamente();
    new import_obsidian6.Notice(t("notices.narration_stopped"));
    console.log("[Obsidian Voice] Narra\xE7\xE3o interrompida pelo usu\xE1rio.");
  }
  async pararNarracaoSilenciosamente() {
    this.currentSessionId++;
    this.queue.reset();
    this.audioPlayer.stop();
    await this.ttsPipeline.stop();
    this.unregisterScrollListeners();
    this.updatePlayerState("aguardando");
    this.activeEditor = this.getActiveEditor();
    if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
    this.activeEditor = null;
  }
  onResumoToggle(active) {
    this.queue.readOnlyHighlights = active;
    const estado = active ? t("notices.enabled") : t("notices.disabled");
    new import_obsidian6.Notice(t("notices.summary_mode", { state: estado }));
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
  async onTeleprompterToggle(active) {
    this.settings.enableTeleprompterMode = active;
    await this.saveSettings();
    const estado = active ? t("notices.enabled") : t("notices.disabled");
    new import_obsidian6.Notice(t("notices.teleprompter_mode", { state: estado }));
  }
  onSpeedChange(speed) {
    this.audioPlayer.setPlaybackRate(speed);
    this.settings.playbackSpeed = speed;
    this.saveSettings();
  }
  async onEngineChange(engineId) {
    if (this.playerState === "tocando") {
      this.settings.ttsEngine = engineId;
      await this.saveSettings();
      new import_obsidian6.Notice(t("notices.engine_change_delayed"));
      return;
    }
    this.settings.ttsEngine = engineId;
    await this.saveSettings();
    this.rebuildTTSPipeline();
    new import_obsidian6.Notice(t("notices.engine_changed", { engine: engineId }));
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
        this.playNextParagraph();
      }
    }
  }
  async narrarNotaAtual() {
    this.currentSessionId++;
    const activeFile = this.app.workspace.getActiveFile();
    if (!(activeFile instanceof import_obsidian6.TFile)) {
      new import_obsidian6.Notice(t("notices.no_active_note"));
      return;
    }
    this.activeEditor = this.getActiveEditor();
    if (!this.activeEditor) {
      console.warn("[Obsidian Voice] Nenhuma leaf com o arquivo ativo encontrada \u2014 highlight desativado.");
    }
    const conteudo = await this.app.vault.read(activeFile);
    const textoLimpo = this.cleanMarkdown(conteudo);
    if (!textoLimpo) {
      new import_obsidian6.Notice(t("notices.empty_note"));
      return;
    }
    const valido = await this.validarConfiguracoes();
    if (!valido) return;
    this.queue.startQueue(conteudo);
    this.updatePlayerState("tocando");
    this.registerScrollListeners();
    const mesmaNote = this.lastNarratedPath === activeFile.path;
    new import_obsidian6.Notice(mesmaNote ? t("notices.restarting") : t("notices.starting_narration"));
    this.lastNarratedPath = activeFile.path;
    console.log(`[Obsidian Voice] Narrando: ${activeFile.name}`);
    await this.ttsPipeline.start();
    this.playNextParagraph();
  }
  cleanMarkdown(text) {
    const cleaned = stripFrontmatter(text).replace(/```[\s\S]*?```/g, "").replace(/(?<![#\S])#[^\s#][^\s]*/g, "").replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/==(.*?)==/g, "$1").trim();
    return cleaned;
  }
  async validarConfiguracoes() {
    this.rebuildTTSPipeline();
    const result = await this.ttsPipeline.validate();
    if (!result.ok) {
      new import_obsidian6.Notice(t("notices.piper_or_model_missing"));
      return false;
    }
    return true;
  }
  async playNextParagraph() {
    if (this.playerState === "pausado") return;
    const sessionId = this.currentSessionId;
    const chunk = await this.ttsPipeline.getNextChunk();
    if (this.currentSessionId !== sessionId) return;
    if (chunk === null) {
      this.queue.reset();
      this.updatePlayerState("aguardando");
      this.activeEditor = this.getActiveEditor();
      if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
      this.activeEditor = null;
      new import_obsidian6.Notice(t("notices.narration_finished"));
      console.log("[Obsidian Voice] Fila encerrada.");
      return;
    }
    if (chunk.error) {
      this.queue.reset();
      this.updatePlayerState("aguardando");
      this.activeEditor = this.getActiveEditor();
      if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
      this.activeEditor = null;
      new import_obsidian6.Notice(t("notices.narration_error", { error: chunk.error }));
      console.error("[Obsidian Voice] Erro no chunk:", chunk.error);
      try {
        if (fs12.existsSync(chunk.absolutePath)) fs12.unlinkSync(chunk.absolutePath);
      } catch (_) {
      }
      return;
    }
    if (this.getPlayerState() === "pausado") {
      this.ttsPipeline.holdChunk(chunk);
      return;
    }
    this.ttsPipeline.prefetch();
    this.currentParagraphText = chunk.text;
    this.activeEditor = this.getActiveEditor();
    if (this.activeEditor) {
      const scrollEnabled = this.settings.enableTeleprompterMode && !this.isUserScrolling;
      this.highlighter.highlightParagraph(this.activeEditor, chunk.text, scrollEnabled);
    } else {
      console.warn("[Obsidian Voice] activeEditor \xE9 null \u2014 highlight ignorado.");
    }
    console.log(`[Obsidian Voice] Reproduzindo chunk: ${chunk.resourcePath}`);
    this.audioPlayer.playFile(chunk.resourcePath, chunk.absolutePath, () => {
      this.playNextParagraph();
    });
  }
  async jumpToLine(lineNumber) {
    console.log(`[Obsidian Voice] Pulando para a linha: ${lineNumber}`);
    this.currentSessionId++;
    this.audioPlayer.stop();
    await this.ttsPipeline.cancelCurrentGeneration();
    await this.ttsPipeline.resetPrefetch();
    const targetIndex = this.queue.getChunkIndexByLine(lineNumber);
    this.queue.setCurrentIndex(targetIndex);
    this.updatePlayerState("tocando");
    this.ttsPipeline.prefetch();
    this.playNextParagraph();
  }
  async jumpToChapter(chunkIndex) {
    console.log(`[Obsidian Voice] Pulando para o cap\xEDtulo no chunk index: ${chunkIndex}`);
    this.currentSessionId++;
    this.audioPlayer.stop();
    await this.ttsPipeline.cancelCurrentGeneration();
    await this.ttsPipeline.resetPrefetch();
    this.queue.setCurrentIndex(chunkIndex);
    this.updatePlayerState("tocando");
    this.ttsPipeline.prefetch();
    this.playNextParagraph();
  }
  async runPiperTest() {
    const valido = await this.validarConfiguracoes();
    if (!valido) return;
    const texto = "Teste de \xE1udio do Obsidian Voice";
    new import_obsidian6.Notice(t("notices.generating_audio"));
    const cacheDir = path10.join(os3.tmpdir(), "ObsidianVoiceCache");
    if (!fs12.existsSync(cacheDir)) fs12.mkdirSync(cacheDir, { recursive: true });
    const testFile = path10.join(cacheDir, "teste.wav");
    try {
      await this.ttsPipeline.runTest(texto, testFile);
      new import_obsidian6.Notice(t("notices.audio_generated"));
      try {
        if (fs12.existsSync(testFile)) fs12.unlinkSync(testFile);
      } catch (_) {
      }
    } catch (error) {
      new import_obsidian6.Notice(t("notices.audio_generation_error", { error: (error == null ? void 0 : error.message) || String(error) }));
    }
  }
  rebuildTTSPipeline() {
    let basePath = "";
    if (this.app.vault.adapter instanceof import_obsidian6.FileSystemAdapter) {
      basePath = this.app.vault.adapter.getBasePath();
    }
    const resolvedPath = this.modelManager ? this.modelManager.resolveBinaryPath(this.settings.ttsEngine) : "";
    const piperInstallRoot = this.modelManager ? this.modelManager.getPiperRoot() : "";
    const engine = TTSEngineFactory.create({
      ttsEngine: this.settings.ttsEngine,
      piperPath: resolvedPath,
      piperInstallRoot,
      selectedVoice: this.settings.selectedVoice,
      selectedKokoroVoice: this.settings.selectedKokoroVoice,
      basePath
    });
    this.ttsPipeline = new TTSPipelineService(
      this.app.vault,
      this.queue,
      engine
    );
  }
  getActiveEditor() {
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
    if (activeView && activeView.file) {
      return activeView.editor;
    }
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) return null;
    let editor = null;
    this.app.workspace.iterateAllLeaves((leaf) => {
      var _a;
      if (leaf.view instanceof import_obsidian6.MarkdownView && ((_a = leaf.view.file) == null ? void 0 : _a.path) === activeFile.path) {
        editor = leaf.view.editor;
      }
    });
    return editor;
  }
  registerScrollListeners() {
    var _a;
    this.unregisterScrollListeners();
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
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
  /**
   * Self-Healing: migra apenas instalações legadas (formato antigo com absolutePath).
   * INVARIANT: Não modifica instalações que já estão no formato canônico.
   */
  async migrateLegacyMetadataIfNeeded() {
    const piperMetadata = this.settings.models.piper;
    if (!LegacyMigration.needsMigration(piperMetadata)) {
      return;
    }
    await this.modelManager.migrateLegacyMetadata();
    this.rebuildTTSPipeline();
  }
};
//# sourceMappingURL=main.js.map