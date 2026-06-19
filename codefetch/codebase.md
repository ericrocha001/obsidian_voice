<source_code>
AGENTS.md
```
---
aliases: []
tags: [IDE/antigravity, IDE/antigravity/rules/rule, programação, software, software/engenharia_de_software, software/engenharia_de_software/arquitetura_de_software, software/mecanismo_software, software/resiliencia_software, software/segurança_software, software/software_agentivo, software/software_erro]
title: AGENTS
source:
  - https://chatgpt.com/g/g-p-6981cf9c38988191932b596154a84f94-google-antigravity/c/69cac95e-f804-8328-995e-f5c0f2ce1526
author:
  - Eric Rocha
project:
connections:
date created: 2026-03-30 15:53
date modified: 2026-06-16 00:22
---

# AGENTS

## Blindagem Arquitetural

### Responsabilidades Do Script

Todo script criado pelo agente **deve obrigatoriamente iniciar** com uma seção chamada:

```
Responsabilidades do Script
```

Essa seção deve aparecer nas primeiras linhas do arquivo.

### Objetivo

Permitir entendimento imediato do propósito do arquivo sem leitura completa do código, reduzindo custo cognitivo humano, consumo de contexto por agentes de IA e complexidade arquitetural do sistema.

### Regras Obrigatórias

1. Escrever sempre em português do Brasil.
2. Listar apenas responsabilidades reais do arquivo.
3. Cada responsabilidade deve:
    - começar com verbo de ação;
    - descrever claramente o que o script faz;
    - indicar o domínio ou contexto do sistema quando aplicável;
    - evitar descrições genéricas.
4. Responsabilidade significa **um único motivo futuro de modificação do arquivo**.
5. A lista deve ser escrita em formato numerado.
6. Não descrever detalhes de implementação interna.
7. Não repetir nomes de funções (`def`) ou classes.

### Limite Arquitetural De Responsabilidades

O arquivo deve possuir:

- Ideal: **1 a 3 responsabilidades**
- Limite máximo aceitável: **4 responsabilidades**

Se o número ultrapassar 4, o agente deve:

- sugerir divisão do arquivo;
- propor novos scripts especializados;
- separar responsabilidades por domínio.

### Critérios De Divisão Automática

O agente deve sugerir refatoração quando o script:

- executa múltiplos papéis distintos;
- conversa com mais de um sistema externo;
- mistura regras de negócio, validação e persistência;
- possui responsabilidades parcialmente reutilizáveis.

### Estrutura Padrão Obrigatória

Exemplo correto:

```
Responsabilidades do Script

1. Validar dados de entrada do usuário no módulo de autenticação.
2. Converter respostas da API externa para o modelo interno do sistema.
3. Persistir logs estruturados no sistema de observabilidade.
```

### Benefícios Esperados

- Arquivos pequenos e especializados
- Manutenção simplificada
- Debugging mais rápido
- Melhor navegação do código
- Menor consumo de tokens por agentes de IA
- Arquitetura naturalmente modular

### Atualização Das Responsabilidades

Sempre que o script for modificado, refatorado ou tiver seu comportamento alterado, o agente deve:

1. revisar a seção "Responsabilidades do Script";
2. atualizar, adicionar ou remover responsabilidades quando necessário;
3. garantir que a lista reflita exatamente o estado atual do arquivo.
  
A lista de responsabilidades nunca deve ficar desatualizada em relação ao código.

### Princípio Arquitetural Aplicado

Todo arquivo deve representar **uma unidade clara de responsabilidade dentro do sistema**.
Se o propósito do arquivo não puder ser explicado rapidamente na lista inicial, o design do script deve ser reconsiderado.

-------------------------

## Código Limpo E Enxuto

Todo código criado ou modificado pelo agente deve priorizar simplicidade, legibilidade e baixa complexidade.

## Regras Obrigatórias

1. Preferir sempre a solução mais simples que funcione.
2. Evitar abstrações, padrões ou otimizações prematuras.
3. Manter funções pequenas e fáceis de entender.
4. Utilizar nomes claros e autoexplicativos.
5. Evitar níveis profundos de indentação.
6. Remover automaticamente:
    - código morto;
    - variáveis não utilizadas;
    - imports desnecessários;
    - comentários obsoletos.
7. Não adicionar lógica, configurações ou estruturas que não sejam necessárias no momento atual.
8. Sempre que modificar código existente, simplificar o que for possível.

## Regra De Decisão

Se existir dúvida entre uma solução simples e uma solução sofisticada, escolher sempre a mais simples.
```

main.js
```
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
        engine_changed: "Voice engine changed to {{engine}}."
      },
      errors: {
        missing_translation: "Missing translation: {{key}} ({{language}})",
        resource_guard: {
          insufficient_disk: "Insufficient disk space. Required: {{required}} bytes, available: {{available}} bytes.",
          incompatible_arch: "Incompatible processor architecture: {{arch}}. Supported architectures: {{supported}}.",
          incompatible_os: "Unsupported operating system: {{os}}.",
          manifest_signature_failed: "Manifest security signature verification failed. The file may have been tampered with.",
          disk_check_timeout: "Disk space check timed out. Please try again."
        }
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
        engine_changed: "Motor de voz cambiado a {{engine}}."
      },
      errors: {
        missing_translation: "Traducci\xF3n faltante: {{key}} ({{language}})",
        resource_guard: {
          insufficient_disk: "Espacio en disco insuficiente. Requerido: {{required}} bytes, disponible: {{available}} bytes.",
          incompatible_arch: "Arquitectura de procesador incompatible: {{arch}}. Arquitecturas compatibles: {{supported}}.",
          incompatible_os: "Sistema operativo no compatible: {{os}}.",
          manifest_signature_failed: "Fall\xF3 la verificaci\xF3n de firma de seguridad del manifiesto. El archivo puede haber sido alterado.",
          disk_check_timeout: "La verificaci\xF3n de espacio en disco super\xF3 el tiempo l\xEDmite. Int\xE9ntelo de nuevo."
        }
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
        engine_changed: "Motor de voz alterado para {{engine}}."
      },
      errors: {
        missing_translation: "Tradu\xE7\xE3o ausente: {{key}} ({{language}})",
        resource_guard: {
          insufficient_disk: "Espa\xE7o em disco insuficiente. Necess\xE1rio: {{required}} bytes, dispon\xEDvel: {{available}} bytes.",
          incompatible_arch: "Arquitetura de processador incompat\xEDvel: {{arch}}. Arquiteturas suportadas: {{supported}}.",
          incompatible_os: "Sistema operacional n\xE3o suportado: {{os}}.",
          manifest_signature_failed: "Falha na verifica\xE7\xE3o de assinatura de seguran\xE7a do manifesto. O arquivo pode ter sido adulterado.",
          disk_check_timeout: "Verifica\xE7\xE3o de espa\xE7o em disco excedeu o tempo limite. Tente novamente."
        }
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
            return new Promise(function(resolve5, reject) {
              promiseResolve = resolve5;
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
          return new Promise((resolve5, reject) => {
            if (stream._duplexState & DESTROYED) return resolve5({ value: void 0, done: true });
            stream.once("close", function() {
              if (err) reject(err);
              else resolve5({ value: void 0, done: true });
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
        return new Promise((resolve5) => {
          state.drains.push({ writes, resolve: resolve5 });
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
      return new Promise((resolve5, reject) => {
        return pipeline(...streams, (err) => {
          if (err) return reject(err);
          resolve5();
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
        function onnext(resolve5, reject) {
          if (error) {
            return reject(error);
          }
          if (entryStream) {
            resolve5({ value: entryStream, done: false });
            entryStream = null;
            return;
          }
          promiseResolve = resolve5;
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
          return new Promise((resolve5, reject) => {
            if (extract2.destroyed) return resolve5({ value: void 0, done: true });
            extract2.once("close", function() {
              if (err) reject(err);
              else resolve5({ value: void 0, done: true });
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
      function mkdirSync4(fpath) {
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
      mkdirSync4(folder);
    };
    Utils.prototype.writeFileTo = function(path10, content, overwrite, attr) {
      const self = this;
      if (self.fs.existsSync(path10)) {
        if (!overwrite) return false;
        var stat = self.fs.statSync(path10);
        if (stat.isDirectory()) {
          return false;
        }
      }
      var folder = pth.dirname(path10);
      if (!self.fs.existsSync(folder)) {
        self.makeDir(folder);
      }
      var fd;
      try {
        fd = self.fs.openSync(path10, "w", 438);
      } catch (e) {
        self.fs.chmodSync(path10, 438);
        fd = self.fs.openSync(path10, "w", 438);
      }
      if (fd) {
        try {
          self.fs.writeSync(fd, content, 0, content.length, 0);
        } finally {
          self.fs.closeSync(fd);
        }
      }
      self.fs.chmodSync(path10, attr || 438);
      return true;
    };
    Utils.prototype.writeFileToAsync = function(path10, content, overwrite, attr, callback) {
      if (typeof attr === "function") {
        callback = attr;
        attr = void 0;
      }
      const self = this;
      self.fs.exists(path10, function(exist) {
        if (exist && !overwrite) return callback(false);
        self.fs.stat(path10, function(err, stat) {
          if (exist && stat.isDirectory()) {
            return callback(false);
          }
          var folder = pth.dirname(path10);
          self.fs.exists(folder, function(exists) {
            if (!exists) self.makeDir(folder);
            self.fs.open(path10, "w", 438, function(err2, fd) {
              if (err2) {
                self.fs.chmod(path10, 438, function() {
                  self.fs.open(path10, "w", 438, function(err3, fd2) {
                    self.fs.write(fd2, content, 0, content.length, 0, function() {
                      self.fs.close(fd2, function() {
                        self.fs.chmod(path10, attr || 438, function() {
                          callback(true);
                        });
                      });
                    });
                  });
                });
              } else if (fd) {
                self.fs.write(fd, content, 0, content.length, 0, function() {
                  self.fs.close(fd, function() {
                    self.fs.chmod(path10, attr || 438, function() {
                      callback(true);
                    });
                  });
                });
              } else {
                self.fs.chmod(path10, attr || 438, function() {
                  callback(true);
                });
              }
            });
          });
        });
      });
    };
    Utils.prototype.findFiles = function(path10) {
      const self = this;
      function findSync(dir, pattern, recursive) {
        if (typeof pattern === "boolean") {
          recursive = pattern;
          pattern = void 0;
        }
        let files = [];
        self.fs.readdirSync(dir).forEach(function(file) {
          const path11 = pth.join(dir, file);
          const stat = self.fs.statSync(path11);
          if (!pattern || pattern.test(path11)) {
            files.push(pth.normalize(path11) + (stat.isDirectory() ? self.sep : ""));
          }
          if (stat.isDirectory() && recursive) files = files.concat(findSync(path11, pattern, recursive));
        });
        return files;
      }
      return findSync(path10, void 0, true);
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
    Utils.canonical = function(path10) {
      if (!path10) return "";
      const safeSuffix = pth.posix.normalize("/" + path10.split("\\").join("/"));
      return pth.join(".", safeSuffix);
    };
    Utils.zipnamefix = function(path10) {
      if (!path10) return "";
      const safeSuffix = pth.posix.normalize("/" + path10.split("\\").join("/"));
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
        var path10 = pth.normalize(pth.join(prefix, parts.slice(i, l).join(pth.sep)));
        if (path10.indexOf(prefix) === 0) {
          return path10;
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
    module2.exports = function(path10, { fs: fs12 }) {
      var _path = path10 || "", _obj = newAttr(), _stat = null;
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
      if (_path && fs12.existsSync(_path)) {
        _stat = fs12.statSync(_path);
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
        const { join: join7, normalize: normalize2, sep: sep2 } = pth.posix;
        return join7(pth.isAbsolute(zipPath) ? "/" : ".", normalize2(sep2 + zipPath.split("\\").join(sep2) + sep2));
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
          return new Promise((resolve5, reject) => {
            this.addLocalFolderAsync2(Object.assign({ localPath: localPath2 }, props), (err, done) => {
              if (err) reject(err);
              if (done) resolve5(this);
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
            return new Promise((resolve5, reject) => {
              this.extractAllToAsync(targetPath, overwrite, keepOriginalPermission, function(err) {
                if (err) {
                  reject(err);
                } else {
                  resolve5(this);
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
          return new Promise((resolve5, reject) => {
            if (!targetFileName && opts.filename) targetFileName = opts.filename;
            if (!targetFileName) reject("ADM-ZIP: ZIP File Name Missing");
            this.toBufferPromise().then((zipData) => {
              const ret = (done) => done ? resolve5(done) : reject("ADM-ZIP: Wasn't able to write zip file");
              filetools.writeFileToAsync(targetFileName, zipData, overwrite, perm, ret);
            }, reject);
          });
        },
        /**
         * @returns {Promise<Buffer>} A promise to the Buffer.
         */
        toBufferPromise: function() {
          return new Promise((resolve5, reject) => {
            _zip.toAsyncBuffer(resolve5, reject);
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
var fs11 = __toESM(require("fs"));
var os3 = __toESM(require("os"));
var path9 = __toESM(require("path"));
var import_obsidian6 = require("obsidian");

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
[TRUNCATED]
```

manifest-models.json
```
{
  "version": "1.0.0",
  "models": {
    "piper": {
      "platforms": {
        "windows-x64": {
          "url": "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_windows_amd64.zip",
          "sha256": "f3c58906402b24f3a96d92145f58acba6d86c9b5db896d207f78dc80811efcea"
        },
        "macos-arm64": {
          "url": "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_macos_aarch64.tar.gz",
          "sha256": "6b1eb03b3735946cb35216e063e7eebcc33a6bbf5dd96ec0217959bf1cdcb0cc"
        },
        "macos-x64": {
          "url": "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_macos_x64.tar.gz",
          "sha256": "ced85c0a3df13945b1e623b878a48fdc2854d5c485b4b67f62857cf551deaf8b"
        },
        "linux-x64": {
          "url": "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_linux_x86_64.tar.gz",
          "sha256": "a50cb45f355b7af1f6d758c1b360717877ba0a398cc8cbe6d2a7a3a26e225992"
        },
        "linux-arm64": {
          "url": "https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_linux_aarch64.tar.gz",
          "sha256": "fea0fd2d87c54dbc7078d0f878289f404bd4d6eea6e7444a77835d1537ab88eb"
        }
      }
    },
    "kokoro": {
      "platforms": {
        "windows-x64": {
          "url": "https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-windows-x64.zip",
          "sha256": "0000000000000000000000000000000000000000000000000000000000000000"
        },
        "macos-arm64": {
          "url": "https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-macos-arm64.zip",
          "sha256": "0000000000000000000000000000000000000000000000000000000000000000"
        },
        "macos-x64": {
          "url": "https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-macos-x64.zip",
          "sha256": "0000000000000000000000000000000000000000000000000000000000000000"
        },
        "linux-x64": {
          "url": "https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-linux-x64.zip",
          "sha256": "0000000000000000000000000000000000000000000000000000000000000000"
        },
        "linux-arm64": {
          "url": "https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-linux-arm64.zip",
          "sha256": "0000000000000000000000000000000000000000000000000000000000000000"
        }
      }
    }
  }
}
```

manifest.json
```
{
  "id": "obsidian-voice",
  "name": "Obsidian Voice",
  "version": "0.0.1",
  "minAppVersion": "1.0.0",
  "description": "Transforme suas notas em áudio local com TTS",
  "author": "Developer",
  "isDesktopOnly": true
}
```

package.json
```
{
  "name": "obsidian-voice",
  "version": "0.0.1",
  "description": "Transforme suas notas em áudio local com TTS",
  "main": "main.js",
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup"
  },
  "devDependencies": {
    "@types/adm-zip": "^0.5.8",
    "@types/node": "^22.0.0",
    "@types/tar-stream": "^3.1.4",
    "adm-zip": "^0.5.17",
    "tar-stream": "^3.2.0",
    "obsidian": "latest",
    "tsup": "^8.0.0",
    "typescript": "^5.4.0"
  }
}
```

styles.css
```
/* 
 * Responsabilidades do Script
 *
 * 1. Definir os estilos visuais de destaque de texto do plugin Obsidian Voice no editor.
 * 2. Consumir a variável CSS dinâmica de cor de destaque injetada pelo orquestrador principal.
 * 3. Estilizar os cards do marketplace de modelos na aba de configurações.
 * 4. Garantir resiliência visual (fallback) e compatibilidade com quebra de linha (word-wrap).
 */

/* 
 * Aumentamos a especificidade do seletor para evitar o abuso de !important,
 * garantindo que o estilo vença temas de terceiros de forma elegante.
 */
.workspace-leaf-content .cm-content .obsidian-voice-highlight {
  /* 
   * CORREÇÃO 1 & 4: Fallback robusto. 
   * Usa a variável injetada pelo JS. Se falhar, usa verde pastel com 40% de opacidade,
   * garantindo contraste e estética em temas claros e escuros (conforme Roadmap).
   */
  background-color: var(--ov-highlight-color, rgba(226, 240, 217, 0.4)) !important;
  
  /* 
   * CORREÇÃO 3: Removido !important desnecessário. 
   * A especificidade do seletor já é suficiente.
   */
  border-radius: 2px;
  color: inherit;
  
  /* 
   * CORREÇÃO 2: box-decoration-break.
   * Garante que, se o texto destacado quebrar para a próxima linha no editor,
   * o border-radius e o background sejam aplicados suavemente em cada fragmento,
   * evitando o efeito visual "quebrado" ou em degrau.
   */
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  
  /* 
   * Mantido inline para não quebrar o fluxo de texto do CodeMirror, 
   * mas com transição suave para evitar flickering visual.
   */
  display: inline;
  transition: background-color 0.2s ease-out;
}

/* 
 * Fallback de segurança para o modo de leitura (Reading View) do Obsidian, 
 * caso o plugin também seja usado fora do modo de edição (Live Preview).
 */
.markdown-reading-view .obsidian-voice-highlight {
  background-color: var(--ov-highlight-color, rgba(226, 240, 217, 0.4)) !important;
  border-radius: 2px;
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

/* ── Cards do Marketplace ─────────────────────────────────── */

.ov-marketplace-description {
  margin-bottom: 16px;
  color: var(--text-muted);
  font-size: var(--font-ui-small);
}

.ov-cards-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ov-card {
  background: var(--background-primary-alt);
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
  padding: 16px;
  transition: border-color 0.2s ease;
}

.ov-card:hover {
  border-color: var(--interactive-accent);
}

.ov-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.ov-card-name {
  font-size: var(--font-ui-large);
  font-weight: 600;
  color: var(--text-normal);
}

.ov-card-badge {
  font-size: var(--font-ui-smaller);
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.ov-badge-installed {
  background: var(--color-green);
  color: var(--text-on-accent);
}

.ov-badge-available {
  background: var(--background-modifier-border);
  color: var(--text-muted);
}

.ov-card-description {
  font-size: var(--font-ui-small);
  color: var(--text-muted);
  margin: 0 0 12px 0;
  line-height: 1.4;
}

.ov-card-tags {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.ov-card-tag {
  background: var(--background-modifier-hover);
  color: var(--text-muted);
  font-size: var(--font-ui-smaller);
  padding: 1px 6px;
  border-radius: 3px;
}

.ov-card-resources {
  display: flex;
  gap: 16px;
  font-size: var(--font-ui-smaller);
  color: var(--text-faint);
  margin-bottom: 12px;
}

.ov-card-btn {
  padding: 6px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: var(--font-ui-small);
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.ov-card-btn:hover {
  opacity: 0.85;
}

.ov-btn-install {
  background: var(--interactive-accent);
  color: var(--text-on-accent);
}

.ov-btn-remove {
  background: var(--text-error);
  color: var(--text-on-accent);
}

/* ── Card Em Breve ────────────────────────────────────────── */

.ov-card-coming-soon {
  opacity: 0.65;
  pointer-events: none;
}

/* ── Progresso ───────────────────────────────────────────── */

.ov-progress-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 14px;
}

.ov-progress-text {
  font-size: var(--font-ui-smaller);
  color: var(--text-muted);
}

.ov-progress-bar {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  border: none;
  background: var(--background-modifier-border);
  color: var(--interactive-accent);
}

.ov-progress-bar::-webkit-progress-bar {
  background: var(--background-modifier-border);
  border-radius: 4px;
}

.ov-progress-bar::-webkit-progress-value {
  background: var(--interactive-accent);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.ov-progress-bar::-moz-progress-bar {
  background: var(--interactive-accent);
  border-radius: 4px;
}
```

tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "CommonJS",
    "lib": ["ES2018", "DOM"],
    "strict": true,
    "moduleResolution": "node",
    "ignoreDeprecations": "6.0",
    "resolveJsonModule": true,
    "rootDir": "src",
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

tsup.config.ts
```
// Responsabilidades do Script
//
// 1. Configurar o processo de build do plugin para gerar o bundle compatível com o Obsidian.

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"],
  outDir: ".",
  outExtension: () => ({ js: ".js" }),
  format: "cjs",
  external: ["obsidian", "@codemirror/state", "@codemirror/view"],
  sourcemap: true,
  clean: false,
});
```

.kilo/agent-manager.json
```
{
  "worktrees": {},
  "sessions": {},
  "tabOrder": {
    "local": [
      "pending:1"
    ]
  }
}
```

.kilo/package.json
```
{
  "dependencies": {
    "@kilocode/plugin": "7.3.46"
  }
}
```

src/audio-player.ts
```
// Responsabilidades do Script
//
// 1. Gerenciar o ciclo de vida de reprodução de um arquivo de áudio (play, pause, retomada e parada).
// 2. Remover o arquivo temporário de chunk após a reprodução ou interrupção.
// 3. Aplicar alteração de velocidade de reprodução em tempo real no chunk ativo.

import { Vault } from "obsidian";
import * as fs from "fs";

export class ObsidianAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private vault: Vault;
  private currentChunk: string | null = null;

  constructor(vault: Vault) {
    this.vault = vault;
  }

  playFile(filePath: string, filename: string, onEnded: () => void) {
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
  isActive(): boolean {
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
  setPlaybackRate(rate: number) {
    if (this.audio) this.audio.playbackRate = rate;
  }

  stop() {
    if (!this.audio) return;
    this.audio.pause();
    this.audio.src = ""; // Libera o arquivo imediatamente no Windows para evitar EBUSY
    this.audio = null;

    if (this.currentChunk) {
      this.cleanupChunk(this.currentChunk);
      this.currentChunk = null;
    }
  }


  private async cleanupChunk(filename: string) {
    try {
      if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
        console.log("[Obsidian Voice] Arquivo temporário removido:", filename);
      }
    } catch (e) {
      console.warn("[Obsidian Voice] Não foi possível remover o chunk:", filename, e);
    }
  }
}
```

src/editor-highlighter.ts
```
// Responsabilidades do Script
//
// 1. Gerenciar as marcações (decorations) de destaque de texto no editor CodeMirror do Obsidian.
// 2. Localizar a posição exata de um bloco de texto dentro do documento ativo do editor.
// 3. Expor métodos para destacar e limpar o destaque de parágrafos no editor de forma isolada.
// 4. Receber flag externa de controle de scroll para coexistir com rolagem manual do usuário.

import { StateEffect, StateField, Extension } from "@codemirror/state";
import { Decoration, DecorationSet, EditorView } from "@codemirror/view";
import { Editor } from "obsidian";
import { VoiceLogger } from "./logger";

let moduleLogger: VoiceLogger | null = null;
const highlightDiagnostics = {
  createCount: 0,
  updateCount: 0,
  effectCount: 0,
};

function logHighlightDiagnostic(message: string, payload?: unknown): void {
  let serializedPayload = "";
  if (payload !== undefined) {
    try {
      serializedPayload = ` ${JSON.stringify(payload, null, 2)}`;
    } catch (error) {
      serializedPayload = ` [payload não serializável: ${error instanceof Error ? error.message : String(error)}]`;
    }
  }

  moduleLogger?.logDebug(`[Diagnostico Highlight] ${message}${serializedPayload}`);
  if (payload === undefined) {
    console.log(`[Obsidian Voice Highlight Diagnostic] ${message}`);
  } else {
    console.log(`[Obsidian Voice Highlight Diagnostic] ${message}`, payload);
  }
}

function describeEditorStateExtensions(state: unknown): unknown {
  const stateAny = state as any;
  const config = stateAny?.config;

  if (!config) {
    return {
      available: false,
      reason: "state.config não está acessível",
    };
  }

  const highlightFieldId = (highlightField as any).id;
  const fieldAddress = highlightFieldId ? config.address?.[highlightFieldId] : undefined;
  const knownFieldIds = config.address
    ? Object.keys(config.address).filter((key) => config.address[key] != null)
    : [];

  return {
    available: true,
    highlightFieldId,
    highlightFieldAddress: fieldAddress ?? null,
    highlightFieldPresentInConfig: fieldAddress != null,
    knownStateFieldIds: knownFieldIds,
    facetCount: Array.isArray(config.facets) ? config.facets.length : undefined,
    staticValuesCount: Array.isArray(config.staticValues) ? config.staticValues.length : undefined,
    dynamicSlotsCount: Array.isArray(config.dynamicSlots) ? config.dynamicSlots.length : undefined,
  };
}

export const setHighlightEffect = StateEffect.define<{ from: number; to: number } | null>();

export const highlightField = StateField.define<DecorationSet>({
  create() {
    highlightDiagnostics.createCount += 1;
    logHighlightDiagnostic("highlightField.create() executado.", {
      createCount: highlightDiagnostics.createCount,
      updateCount: highlightDiagnostics.updateCount,
      effectCount: highlightDiagnostics.effectCount,
    });
    return Decoration.none;
  },
  update(decorations, tr) {
    highlightDiagnostics.updateCount += 1;
    logHighlightDiagnostic("highlightField.update() executado.", {
      createCount: highlightDiagnostics.createCount,
      updateCount: highlightDiagnostics.updateCount,
      effectCount: highlightDiagnostics.effectCount,
      effectsInTransaction: tr.effects.length,
      docChanged: tr.docChanged,
      selection: tr.state.selection?.toJSON?.(),
    });

    decorations = decorations.map(tr.changes);

    if (tr.effects.length > 0) {
      moduleLogger?.logDebug(`[Field] update chamado. tr.effects.length = ${tr.effects.length}`);
      console.log("[Obsidian Voice Field] update chamado. Efeitos no tr:", tr.effects.length);
    }

    for (const effect of tr.effects) {
      if (effect.is(setHighlightEffect)) {
        highlightDiagnostics.effectCount += 1;
        logHighlightDiagnostic("setHighlightEffect chegou ao highlightField.update().", {
          effectValue: effect.value,
          createCount: highlightDiagnostics.createCount,
          updateCount: highlightDiagnostics.updateCount,
          effectCount: highlightDiagnostics.effectCount,
        });
        moduleLogger?.logDebug(`[Field] setHighlightEffect recebido com valor: ${JSON.stringify(effect.value)}`);
        console.log("[Obsidian Voice Field] setHighlightEffect recebido no update:", effect.value);
        if (effect.value) {
          const { from, to } = effect.value;
          const deco = Decoration.mark({
            attributes: { class: "obsidian-voice-highlight" }
          });
          return Decoration.set([deco.range(from, to)]);
        } else {
          return Decoration.none;
        }
      }
    }
    return decorations;
  },
  provide: (field) => EditorView.decorations.from(field),
});

export class EditorHighlighter {
  private lastSourceIndex = 0;
  private logger: VoiceLogger | null = null;

  setLogger(logger: VoiceLogger): void {
    this.logger = logger;
    moduleLogger = logger;
  }

  getExtension(): Extension {
    return highlightField;
  }

  clearHighlight(editor: Editor): void {
    const view = (editor as any).cm as EditorView | undefined;
    if (view) {
      view.dispatch({
        effects: setHighlightEffect.of(null)
      });
    }
    this.lastSourceIndex = 0;
  }

  highlightParagraph(editor: Editor, paragraphText: string, scrollEnabled = true): void {
    const briefText = paragraphText.substring(0, 40) + "...";
    this.logger?.logDebug(`[Highlighter] highlightParagraph chamado para: "${briefText}"`);
    console.log("[Obsidian Voice Highlighter] highlightParagraph chamado para texto:", briefText);
    
    const view = (editor as any).cm as EditorView | undefined;
    if (!view) {
      this.logger?.logDebug("[Highlighter] EditorView (cm) não encontrado no editor.");
      console.warn("[Obsidian Voice Highlighter] EditorView (cm) não encontrado no editor.");
      return;
    }

    const docText = view.state.doc.toString();
    this.logger?.logDebug(`[Highlighter] Comprimento do documento: ${docText.length}`);
    console.log("[Obsidian Voice Highlighter] Comprimento do docText:", docText.length);

    // 1. Mapeia caracteres alfanuméricos mantendo o índice original
    const originalToAlphanum: { char: string; origIdx: number }[] = [];
    for (let i = 0; i < docText.length; i++) {
      const char = docText[i];
      if (/^\p{L}|\p{N}$/u.test(char)) {
        originalToAlphanum.push({ char: char.toLowerCase(), origIdx: i });
      }
    }
    const sourceStr = originalToAlphanum.map((x) => x.char).join("");
    this.logger?.logDebug(`[Highlighter] Comprimento da string normalizada do documento: ${sourceStr.length}`);
    console.log("[Obsidian Voice Highlighter] Comprimento da sourceStr normalizada:", sourceStr.length);

    // 2. Normaliza o parágrafo alvo
    const cleanTarget: string[] = [];
    for (let i = 0; i < paragraphText.length; i++) {
      const char = paragraphText[i];
      if (/^\p{L}|\p{N}$/u.test(char)) {
        cleanTarget.push(char.toLowerCase());
      }
    }
    const targetStr = cleanTarget.join("");
    this.logger?.logDebug(`[Highlighter] Comprimento da string normalizada do parágrafo: ${targetStr.length}`);
    console.log("[Obsidian Voice Highlighter] Comprimento da targetStr normalizada:", targetStr.length);

    if (!targetStr) {
      this.logger?.logDebug("[Highlighter] targetStr normalizada está vazia.");
      console.warn("[Obsidian Voice Highlighter] targetStr normalizada está vazia.");
      return;
    }

    // 3. Procura o parágrafo na string normalizada
    this.logger?.logDebug(`[Highlighter] Procurando a partir de lastSourceIndex: ${this.lastSourceIndex}`);
    console.log("[Obsidian Voice Highlighter] Buscando a partir do índice:", this.lastSourceIndex);
    
    let matchIndex = sourceStr.indexOf(targetStr, this.lastSourceIndex);
    if (matchIndex === -1) {
      this.logger?.logDebug("[Highlighter] Parágrafo não encontrado após lastSourceIndex. Buscando do início...");
      console.log("[Obsidian Voice Highlighter] Parágrafo não encontrado a partir do lastSourceIndex. Tentando do início...");
      matchIndex = sourceStr.indexOf(targetStr, 0);
    }

    if (matchIndex !== -1) {
      this.lastSourceIndex = matchIndex + targetStr.length;

      const from = originalToAlphanum[matchIndex].origIdx;
      const to = originalToAlphanum[matchIndex + targetStr.length - 1].origIdx + 1;
      
      const foundTextSample = docText.substring(from, to).substring(0, 40) + "...";
      this.logger?.logDebug(`[Highlighter] Encontrado! Range original: [${from}, ${to}]. Texto correspondente: "${foundTextSample}"`);
      console.log(`[Obsidian Voice Highlighter] Parágrafo encontrado! Range original: [${from}, ${to}]. Texto correspondente: "${foundTextSample}"`);

      // Dispara efeito de destaque no CodeMirror
      const dispatchDiagnostics: Record<string, unknown> = {
        viewExists: !!view,
        stateExists: !!view?.state,
        createCount: highlightDiagnostics.createCount,
        updateCount: highlightDiagnostics.updateCount,
        effectCount: highlightDiagnostics.effectCount,
      };

      try {
        const currentFieldValue = view.state?.field(highlightField, false);
        dispatchDiagnostics.highlightFieldPresentInDispatchView = currentFieldValue !== undefined;
        dispatchDiagnostics.highlightFieldValueSummary = currentFieldValue
          ? {
              constructorName: currentFieldValue.constructor?.name,
              isDecorationNone: currentFieldValue === Decoration.none,
            }
          : currentFieldValue;
      } catch (error) {
        dispatchDiagnostics.highlightFieldReadError = error instanceof Error ? error.message : String(error);
      }

      dispatchDiagnostics.currentEditorStateExtensions = describeEditorStateExtensions(view.state);

      logHighlightDiagnostic("Relatorio antes de view.dispatch(setHighlightEffect).", dispatchDiagnostics);

      view.dispatch({
        effects: setHighlightEffect.of({ from, to })
      });
      this.logger?.logDebug("[Highlighter] Efeito setHighlightEffect despachado.");
      console.log("[Obsidian Voice Highlighter] Efeito setHighlightEffect despachado.");

      // Rola o editor para exibir o trecho destacado (apenas se o usuário não estiver rolando manualmente)
      if (scrollEnabled) {
        const rect = view.coordsAtPos(from);
        if (rect && view.scrollDOM) {
          const editorRect = view.scrollDOM.getBoundingClientRect();
          const targetTop = rect.top - editorRect.top + view.scrollDOM.scrollTop;
          const height = rect.bottom - rect.top;
          const finalScrollTop = targetTop - (editorRect.height / 2) + (height / 2);
          view.scrollDOM.scrollTo({
            top: finalScrollTop,
            behavior: "smooth"
          });
        } else {
          view.dispatch({
            effects: EditorView.scrollIntoView(from, { y: "center" })
          });
        }
      }
    } else {
      this.logger?.logDebug(`[Highlighter] Parágrafo não pôde ser localizado no documento. Buscado: "${targetStr.substring(0, 30)}..."`);
      console.warn("[Obsidian Voice Highlighter] Parágrafo não pôde ser localizado no documento.");
    }
  }
}
```

src/i18n.ts
```
import { App } from "obsidian";
import en = require("./locales/en.json");
import es = require("./locales/es.json");
import pt = require("./locales/pt.json");

export type LanguageSetting = "auto" | "pt" | "en" | "es";
export type SupportedLanguage = Exclude<LanguageSetting, "auto">;
export type TranslationVars = Record<string, string | number | boolean | null | undefined>;

type TranslationLeaf = string | TranslationTree;
type TranslationTree = { [key: string]: TranslationLeaf };
type LanguageChangedCallback = (language: SupportedLanguage, setting: LanguageSetting) => void;

const fallbackLanguage: SupportedLanguage = "en";
const supportedLanguages: SupportedLanguage[] = ["pt", "en", "es"];

const dictionaries: Record<SupportedLanguage, TranslationTree> = {
  en: en as TranslationTree,
  pt: pt as TranslationTree,
  es: es as TranslationTree,
};

let appRef: App | null = null;
let configuredLanguage: LanguageSetting = "auto";
let activeLanguage: SupportedLanguage = fallbackLanguage;
const listeners = new Set<LanguageChangedCallback>();
const cache = new Map<string, string>();
const warnedMissingKeys = new Set<string>();

export function initializeI18n(app: App, language: LanguageSetting) {
  appRef = app;
  configuredLanguage = normalizeLanguageSetting(language);
  activeLanguage = resolveActiveLanguage(configuredLanguage);
  cache.clear();
}

export function t(key: string, vars?: TranslationVars): string {
  const cacheKey = `${activeLanguage}:${key}`;
  let template = cache.get(cacheKey);

  if (!template) {
    template = resolveTranslation(key);
    if (typeof template !== "string") return key;
    cache.set(cacheKey, template);
  }

  return interpolate(template, vars);
}

export function setLanguage(language: LanguageSetting) {
  const nextConfiguredLanguage = normalizeLanguageSetting(language);
  const nextActiveLanguage = resolveActiveLanguage(nextConfiguredLanguage);
  const changed =
    nextConfiguredLanguage !== configuredLanguage ||
    nextActiveLanguage !== activeLanguage;

  configuredLanguage = nextConfiguredLanguage;
  activeLanguage = nextActiveLanguage;

  if (!changed) return;

  cache.clear();
  warnedMissingKeys.clear();
  for (const listener of listeners) {
    listener(activeLanguage, configuredLanguage);
  }
}

export function getLanguage(): SupportedLanguage {
  return activeLanguage;
}

export function getLanguageSetting(): LanguageSetting {
  return configuredLanguage;
}

export function onLanguageChanged(callback: LanguageChangedCallback): () => void {
  listeners.add(callback);
  return () => offLanguageChanged(callback);
}

export function offLanguageChanged(callback: LanguageChangedCallback) {
  listeners.delete(callback);
}

function normalizeLanguageSetting(language: unknown): LanguageSetting {
  return language === "pt" || language === "en" || language === "es" ? language : "auto";
}

function resolveActiveLanguage(language: LanguageSetting): SupportedLanguage {
  if (language !== "auto") return language;

  const locale = getObsidianLocale().toLowerCase();
  const [baseLanguage] = locale.split("-");
  return isSupportedLanguage(baseLanguage) ? baseLanguage : fallbackLanguage;
}

function getObsidianLocale(): string {
  const appWithLocale = appRef as (App & { getLocale?: () => string }) | null;
  const appLocale = appWithLocale?.getLocale?.();
  if (appLocale) return appLocale;

  const navigatorLocale = globalThis.navigator?.language;
  return navigatorLocale || fallbackLanguage;
}

function isSupportedLanguage(language: string): language is SupportedLanguage {
  return supportedLanguages.includes(language as SupportedLanguage);
}

function resolveTranslation(key: string): string {
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

function lookup(dictionary: TranslationTree, key: string): TranslationLeaf | undefined {
  return key.split(".").reduce<TranslationLeaf | undefined>((current, part) => {
    if (!current || typeof current === "string") return undefined;
    return current[part];
  }, dictionary);
}

function interpolate(template: unknown, vars?: TranslationVars): string {
  if (typeof template !== "string") return "";
  if (!vars) return template;
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_match, name: string) => {
    const value = vars[name];
    return value === null || value === undefined ? "" : String(value);
  });
}

function warnMissingTranslation(key: string) {
  const warningKey = `${activeLanguage}:${key}`;
  if (warnedMissingKeys.has(warningKey)) return;

  warnedMissingKeys.add(warningKey);
  const missingTranslationTemplate =
    lookup(dictionaries[fallbackLanguage], "errors.missing_translation") as string | undefined;
  console.warn(
    interpolate(missingTranslationTemplate || "Missing translation: {{key}} ({{language}})", {
      key,
      language: activeLanguage,
    })
  );
}
```

src/logger.ts
```
// Responsabilidades do Script
//
// 1. Criar e gerenciar a escrita de registros de depuração no arquivo voice_debug.log.
// 2. Formatar e gravar tentativas de execução do motor Piper.
// 3. Registrar erros e códigos de encerramento do processo do motor Piper.

import * as fs from "fs";
import * as path from "path";
import { GenerationResult } from "./tts/types";

export class VoiceLogger {
  private logPath: string;

  constructor(vaultPath: string) {
    this.logPath = path.resolve(vaultPath, "voice_debug.log");
  }

  private writeLog(level: string, message: string) {
    const timestamp = new Date().toISOString();
    const logLine = `[${timestamp}] [${level}] ${message}\n`;
    try {
      fs.appendFileSync(this.logPath, logLine, "utf-8");
    } catch (e) {
      console.error("[Obsidian Voice] Falha ao gravar log:", e);
    }
  }

  logTentativa(texto: string, comando: string) {
    const trecho = texto.length > 60 ? texto.substring(0, 60) + "..." : texto;
    this.writeLog("INFO", `Tentativa de execução - Comando: ${comando} | Texto: "${trecho}"`);
  }

  logError(message: string) {
    this.writeLog("ERROR", `Erro do processo: ${message}`);
  }

  logExit(code: number | string) {
    this.writeLog("INFO", `Processo finalizado com código: ${code}`);
  }

  logDebug(message: string) {
    this.writeLog("DEBUG", message);
  }

  logEngineEvent(engineId: string, phase: string, message: string) {
    this.writeLog("INFO", `Engine=${engineId} | Fase=${phase} | ${message}`);
  }

  logGeneration(result: GenerationResult) {
    this.writeLog(
      "INFO",
      `Engine=${result.engineId} | geração=${result.generationMs}ms | arquivo=${result.filePath} | cache=${result.cached}`
    );
  }
}
```

src/main.ts
```
// Responsabilidades do Script
//
// 1. Registrar o plugin no ciclo de vida do Obsidian e conectar os módulos isolados.
// 2. Executar o motor Piper TTS via subprocesso e gerenciar o pipeline de áudio com pre-fetching.
// 3. Orquestrar a narração de notas Markdown limpas controlando o estado global do player.
// 4. Gerenciar a coexistência entre scroll automático (Teleprompter) e rolagem manual do usuário.

import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { Editor, FileSystemAdapter, MarkdownView, Notice, Plugin, setIcon, TFile } from "obsidian";
import { EditorView } from "@codemirror/view";
import { ObsidianAudioPlayer } from "./audio-player";
import { ObsidianVoiceQueue } from "./queue";
import { ObsidianVoiceWidget } from "./player-widget";
import { ObsidianVoiceSettingTab, ObsidianVoiceSettings, DEFAULT_SETTINGS } from "./settings";
import { VoiceLogger } from "./logger";
import { EditorHighlighter, highlightField } from "./editor-highlighter";
import { initializeI18n, t } from "./i18n";
import { TTSPipelineService, ChunkResult } from "./tts/pipeline-service";
import { TTSEngineFactory } from "./tts/engine/engine-factory";
import { ModelManagementService } from "./services/model/model-management-service";

export type PlayerState = "aguardando" | "tocando" | "pausado";

export default class ObsidianVoicePlugin extends Plugin {
  settings!: ObsidianVoiceSettings;
  modelManager!: ModelManagementService;

  private audioPlayer!: ObsidianAudioPlayer;
  private queue = new ObsidianVoiceQueue();
  private widget!: ObsidianVoiceWidget;
  private logger!: VoiceLogger;
  private highlighter!: EditorHighlighter;
  private playerState: PlayerState = "aguardando";
  private ttsPipeline!: TTSPipelineService;
  private currentParagraphText = "";
  private activeEditor: import("obsidian").Editor | null = null;
  private lastNarratedPath: string | null = null;   // Rastreia a nota narrada por último

  // ── Controle de Scroll Manual ─────────────────────────────
  private isUserScrolling = false;
  private userScrollTimeout: ReturnType<typeof setTimeout> | null = null;
  private scrollListenerEl: HTMLElement | null = null;

  async onload() {
    console.log("[Obsidian Voice] Plugin carregado.");

    await this.loadSettings();
    initializeI18n(this.app, this.settings.language);
    this.updateHighlightVariables();

    this.highlighter = new EditorHighlighter();
    this.registerEditorExtension([highlightField]);

    this.audioPlayer = new ObsidianAudioPlayer(this.app.vault);

    let basePath = "";
    if (this.app.vault.adapter instanceof FileSystemAdapter) {
      basePath = this.app.vault.adapter.getBasePath();
    }
    this.logger = new VoiceLogger(basePath || process.cwd());
    this.highlighter.setLogger(this.logger);
    this.rebuildTTSPipeline();

    // ── Model Management Service ─────────────────────────
    this.modelManager = new ModelManagementService(
      basePath || process.cwd(),
      {
        models: this.settings.models,
        saveSettings: () => this.saveSettings(),
      },
    );

    // ── Auto-Detecção de Piper pré-existente ─────────────────
    const piperPath = this.settings.piperPath;
    const piperAlreadyInstalled = this.modelManager.isInstalled('piper');
    if (piperPath && !piperAlreadyInstalled && fs.existsSync(piperPath)) {
      this.settings.models.piper = {
        id: 'piper',
        activeVersion: 'manual',
        absolutePath: piperPath,
        installedAt: Date.now(),
      };
      await this.saveSettings();
      console.log('[Obsidian Voice] Motor Piper pré-existente detectado e registrado.');
    }

    // ── Ribbon ──────────────────────────────────────────────
    this.addRibbonIcon("headphones", t("commands.ribbon_narrate"), () => this.narrarNotaAtual());



    // ── Widget Flutuante (sempre visível, inicia minimizado) ──────────
    this.widget = new ObsidianVoiceWidget(
      () => this.togglePlayPause(),
      async () => this.pararNarracao(),
      () => this.queue.getChapters(),
      (chunkIndex: number) => this.jumpToChapter(chunkIndex),
      (active: boolean) => this.onResumoToggle(active),
      () => this.openSettingsTab(),
      (active: boolean) => this.onTeleprompterToggle(active),
      (speed: number) => this.onSpeedChange(speed),
      () => {
        const engines: { id: string; name: string; installed: boolean }[] = [];
        const piperInstalled = this.modelManager.isInstalled('piper');
        const kokoroInstalled = this.modelManager.isInstalled('kokoro');
        engines.push({ id: 'piper', name: 'Piper', installed: piperInstalled });
        engines.push({ id: 'kokoro', name: 'Kokoro', installed: kokoroInstalled });
        return engines;
      },
      (engineId: 'piper' | 'kokoro') => this.onEngineChange(engineId),
      () => this.settings.ttsEngine,
    );
    // Sincroniza o estado inicial do toggle com as settings persistidas
    this.widget.setTeleprompterAtivo(this.settings.enableTeleprompterMode);
    this.widget.show("aguardando", activeDocument.body);

    // Escuta mudanças de nota ativa para interromper a narração anterior silenciosamente
    this.registerEvent(
      this.app.workspace.on("file-open", async (file) => {
        if (!file || (this.lastNarratedPath && this.lastNarratedPath !== file.path)) {
          await this.pararNarracaoSilenciosamente();
        }
      })
    );

    // ── Aba de Configurações ─────────────────────────────────
    this.addSettingTab(new ObsidianVoiceSettingTab(this.app, this));

    // ── Comandos ─────────────────────────────────────────────
    this.addCommand({
      id: "testar-motor-tts-piper",
      name: t("commands.test_piper"),
      callback: () => this.runPiperTest(),
    });

    this.addCommand({
      id: "narrar-nota-atual",
      name: t("commands.narrate_current_note"),
      callback: () => this.narrarNotaAtual(),
    });

    this.addCommand({
      id: "alternar-play-pause",
      name: t("commands.toggle_play_pause"),
      callback: () => this.togglePlayPause(),
    });

    this.addCommand({
      id: "parar-narracao",
      name: t("commands.stop_narration"),
      callback: async () => this.pararNarracao(),
    });

    this.addCommand({
      id: "toggle-highlights-only",
      name: t("commands.toggle_highlights_only"),
      callback: () => {
        this.queue.readOnlyHighlights = !this.queue.readOnlyHighlights;
        const estado = this.queue.readOnlyHighlights ? t("notices.enabled") : t("notices.disabled");
        new Notice(t("notices.summary_mode", { state: estado }));

        // Sincroniza visualmente o toggle do menu de ferramentas (se aberto)
        this.widget.setResumoAtivo(this.queue.readOnlyHighlights);

        // Se a narração estiver ativa, reinicia com o novo filtro
        if (this.playerState === "tocando" || this.playerState === "pausado") {
          this.pararNarracao().then(() => this.narrarNotaAtual());
        }
      },
    });

    this.addCommand({
      id: "play-from-selection",
      name: t("commands.play_from_selection"),
      hotkeys: [],
      editorCallback: async (editor: Editor) => {
        const cursor = editor.getCursor();
        const currentLineText = editor.getLine(cursor.line);

        // Se o player já estiver ativo (tocando/pausado), a fila já está populada
        if (this.playerState === "tocando" || this.playerState === "pausado") {
          let targetIndex = this.queue.getChunkIndexByLine(cursor.line);
          if (targetIndex === 0 && cursor.line !== 0) {
            targetIndex = this.queue.findChunkIndexByLineText(currentLineText);
          }
          await this.jumpToChapter(targetIndex);
        } else {
          // Inicialização Fria (Plugin não estava rodando)
          const valido = await this.validarConfiguracoes();
          if (!valido) return;

          const fullText = editor.getValue();
          this.activeEditor = editor;

          // Popula a fila com o texto completo para preservar os line numbers
          this.queue.startQueue(fullText);

          // Localiza o índice correspondente
          let targetIndex = this.queue.getChunkIndexByLine(cursor.line);
          if (targetIndex === 0 && cursor.line !== 0) {
            targetIndex = this.queue.findChunkIndexByLineText(currentLineText);
          }

          // Inicia a reprodução
          await this.jumpToChapter(targetIndex);
        }
      }
    });

    // ── Navegação Universal por Clique ────────────────────────
    this.registerDomEvent(document, "click", (evt: MouseEvent) => {
      if (!this.settings.enableTeleprompterMode) return;
      if (this.playerState !== "tocando") {
        return;
      }

      // Evita conflito: ignora cliques que ocorram no widget ou fora do editor
      const target = evt.target as HTMLElement | null;
      if (target && target.closest("#obsidian-voice-widget")) {
        return;
      }

      const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
      if (!activeView) return;

      const editor = activeView.editor;
      const view = (editor as any).cm as EditorView | undefined;
      if (!view) return;

      const pos = view.posAtCoords({ x: evt.clientX, y: evt.clientY });
      if (pos === null) return;

      try {
        const lineObj = view.state.doc.lineAt(pos);
        const lineNumber = lineObj.number - 1;
        this.jumpToLine(lineNumber);
      } catch (e) {
        // Ignora erros de mapeamento de clique
      }
    });
  }

  async loadSettings() {
    const data = await this.loadData();
    if (data && 'enableChapterNavigation' in data) {
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

  updateHighlightVariables(): void {
    const isDark = document.body.classList.contains("theme-dark");
    const colorMap: Record<string, string> = {
      green:  isDark ? "rgba(40, 160, 70, 0.4)"   : "#cbeec9",
      yellow: isDark ? "rgba(215, 165, 40, 0.35)" : "#fff2cc",
      blue:   isDark ? "rgba(45, 115, 210, 0.4)"  : "#d0e1fd",
      purple: isDark ? "rgba(145, 70, 190, 0.4)"  : "#ebd6fa",
      orange: isDark ? "rgba(210, 105, 30, 0.35)" : "#ffe0b2",
    };
    const selectedColor = colorMap[this.settings.highlightColor] ?? colorMap.green;
    document.documentElement.style.setProperty("--ov-highlight-color", selectedColor);
  }

  openSettingsTab(): void {
    (this.app as any).setting.open();
    (this.app as any).setting.openTabById(this.manifest.id);
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

  // ── Estado do Player ─────────────────────────────────────

  private getPlayerState(): PlayerState {
    return this.playerState;
  }

  private updatePlayerState(state: PlayerState) {
    this.playerState = state;
    // O widget é permanente: nunca escondemos, apenas atualizamos o estado visual
    this.widget.show(state, activeDocument.body);
  }

  private async pararNarracao() {
    await this.pararNarracaoSilenciosamente();
    new Notice(t("notices.narration_stopped"));
    console.log("[Obsidian Voice] Narração interrompida pelo usuário.");
  }

  private async pararNarracaoSilenciosamente() {
    this.queue.reset();
    this.audioPlayer.stop();
    await this.ttsPipeline.stop();
    this.unregisterScrollListeners();
    this.updatePlayerState("aguardando");

    this.activeEditor = this.getActiveEditor();
    if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
    this.activeEditor = null;
  }

  /** Callback do toggle de Modo Resumo no menu de ferramentas do widget. */
  private onResumoToggle(active: boolean) {
    this.queue.readOnlyHighlights = active;
    const estado = active ? t("notices.enabled") : t("notices.disabled");
    new Notice(t("notices.summary_mode", { state: estado }));

    if (this.playerState === "tocando") {
      // Interrompe imediatamente e reinicia com o novo filtro
      this.pararNarracao().then(() => this.narrarNotaAtual());
    } else if (this.playerState === "pausado") {
      // Regenera a fila silenciosamente para o próximo play
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
  private async onTeleprompterToggle(active: boolean) {
    this.settings.enableTeleprompterMode = active;
    await this.saveSettings();
    const estado = active ? t("notices.enabled") : t("notices.disabled");
    new Notice(t("notices.teleprompter_mode", { state: estado }));
  }

  /** Callback do slider de velocidade: aplica imediatamente no chunk em reprodução. */
  private onSpeedChange(speed: number) {
    this.audioPlayer.setPlaybackRate(speed);
  }

  private async onEngineChange(engineId: 'piper' | 'kokoro') {
    if (this.playerState === 'tocando') {
      this.settings.ttsEngine = engineId;
      await this.saveSettings();
      new Notice(t("notices.engine_change_delayed"));
      this.logger.logEngineEvent(engineId, "switch", "Motor alterado via widget (adiado)");
      return;
    }

    this.settings.ttsEngine = engineId;
    await this.saveSettings();
    this.rebuildTTSPipeline();
    new Notice(t("notices.engine_changed", { engine: engineId }));
    this.logger.logEngineEvent(engineId, "switch", "Motor alterado via widget");
  }

  private togglePlayPause() {
    // Estado ocioso: recomeça a narração do início
    if (this.playerState === "aguardando") {
      this.narrarNotaAtual();
      return;
    }

    const next: PlayerState = this.playerState === "tocando" ? "pausado" : "tocando";

    if (next === "pausado") {
      // Pausar: suspende o áudio e limpa o highlight
      this.audioPlayer.toggle();
      this.updatePlayerState("pausado");
      this.activeEditor = this.getActiveEditor();
      if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
    } else {
      // Retomar: se o áudio ainda está pausado no player, simplesmente resume
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
        // O chunk foi descartado (ex: após um pulo): reinicia a partir do índice atual da fila
        this.updatePlayerState("tocando");
        this.playNextParagraph();
      }
    }
  }

  // ── Narração Principal ───────────────────────────────────

  private async narrarNotaAtual() {
    const activeFile = this.app.workspace.getActiveFile();
    if (!(activeFile instanceof TFile)) {
      new Notice(t("notices.no_active_note"));
      return;
    }

    // Busca o editor que está exibindo o arquivo ativo, independente do foco atual.
    // getActiveViewOfType() falha quando a ribbon/comando rouba o foco da janela.
    this.activeEditor = this.getActiveEditor();
    if (!this.activeEditor) {
      this.logger.logDebug("[Main] narrarNotaAtual: nenhuma leaf com o arquivo ativo encontrada.");
      console.warn("[Obsidian Voice] Nenhuma leaf com o arquivo ativo encontrada — highlight desativado.");
    }

    const conteudo = await this.app.vault.read(activeFile);
    const textoLimpo = this.cleanMarkdown(conteudo);

    if (!textoLimpo) {
      new Notice(t("notices.empty_note"));
      return;
    }

    const valido = await this.validarConfiguracoes();
    if (!valido) return;

    this.queue.startQueue(conteudo);
    this.updatePlayerState("tocando");
    this.registerScrollListeners();

    const mesmaNote = this.lastNarratedPath === activeFile.path;
    new Notice(mesmaNote ? t("notices.restarting") : t("notices.starting_narration"));
    this.lastNarratedPath = activeFile.path;
    console.log(`[Obsidian Voice] Narrando: ${activeFile.name}`);

    await this.ttsPipeline.start();
    this.playNextParagraph();
  }

  private cleanMarkdown(text: string): string {
    return text
      .replace(/^---[\s\S]*?---\n?/m, "")
      .replace(/```[\s\S]*?```/g, "")
      .replace(/(?<![#\S])#[^\s#][^\s]*/g, "")
      .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .trim();
  }

  // ── Validação ────────────────────────────────────────────

  private async validarConfiguracoes(): Promise<boolean> {
    this.rebuildTTSPipeline();
    const result = await this.ttsPipeline.validate();
    if (!result.ok) {
      new Notice(t("notices.piper_or_model_missing"));
      if (result.error) this.logger.logError(result.error);
      return false;
    }
    return true;
  }

  // ── Pipeline de Áudio com Pre-fetching ───────────────────

  private async playNextParagraph() {
    if (this.playerState === "pausado") return;

    const chunk = await this.ttsPipeline.getNextChunk();

    if (chunk === null) {
      this.queue.reset();
      this.updatePlayerState("aguardando");
      this.activeEditor = this.getActiveEditor();
      if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
      this.activeEditor = null;
      new Notice(t("notices.narration_finished"));
      console.log("[Obsidian Voice] Fila encerrada.");
      return;
    }

    if (chunk.error) {
      this.queue.reset();
      this.updatePlayerState("aguardando");
      this.activeEditor = this.getActiveEditor();
      if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
      this.activeEditor = null;
      new Notice(t("notices.narration_error", { error: chunk.error }));
      console.error("[Obsidian Voice] Erro no chunk:", chunk.error);
      try { if (fs.existsSync(chunk.absolutePath)) fs.unlinkSync(chunk.absolutePath); } catch (_) {}
      return;
    }

    // Se o usuário pausou enquanto o áudio estava sendo gerado, interrompe a reprodução e guarda o chunk
    if (this.getPlayerState() === "pausado") {
      this.ttsPipeline.holdChunk(chunk);
      return;
    }

    // Inicia a geração do próximo chunk em segundo plano enquanto toca o atual
    this.ttsPipeline.prefetch();

    // Destaca o parágrafo atual usando o editor capturado no início da narração
    this.currentParagraphText = chunk.text;
    this.activeEditor = this.getActiveEditor();
    if (this.activeEditor) {
      const scrollEnabled = this.settings.enableTeleprompterMode && !this.isUserScrolling;
      this.highlighter.highlightParagraph(this.activeEditor, chunk.text, scrollEnabled);
    } else {
      this.logger.logDebug(`[Main] playNextParagraph: activeEditor é null, highlight ignorado para: "${chunk.text.substring(0, 40)}"`);
      console.warn("[Obsidian Voice] activeEditor é null — highlight ignorado.");
    }

    console.log(`[Obsidian Voice] Reproduzindo chunk: ${chunk.resourcePath}`);
    this.audioPlayer.playFile(chunk.resourcePath, chunk.absolutePath, () => {
      this.playNextParagraph();
    });
  }

  private async jumpToLine(lineNumber: number) {
    console.log(`[Obsidian Voice] Pulando para a linha: ${lineNumber}`);
    this.audioPlayer.stop();
    await this.ttsPipeline.resetPrefetch();

    const targetIndex = this.queue.getChunkIndexByLine(lineNumber);
    this.queue.setCurrentIndex(targetIndex);

    this.updatePlayerState("tocando");
    this.ttsPipeline.prefetch();
    this.playNextParagraph();
  }

  private async jumpToChapter(chunkIndex: number) {
    console.log(`[Obsidian Voice] Pulando para o capítulo no chunk index: ${chunkIndex}`);
    this.audioPlayer.stop();
    await this.ttsPipeline.resetPrefetch();

    this.queue.setCurrentIndex(chunkIndex);

    this.updatePlayerState("tocando");
    this.ttsPipeline.prefetch();
    this.playNextParagraph();
  }


  // ── Motor Piper ──────────────────────────────────────────

  private async runPiperTest() {
    const valido = await this.validarConfiguracoes();
    if (!valido) return;

    const texto = "Teste de áudio do Obsidian Voice";
    new Notice(t("notices.generating_audio"));
    const cacheDir = path.join(os.tmpdir(), "ObsidianVoiceCache");
    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
    const testFile = path.join(cacheDir, "teste.wav");

    try {
      await this.ttsPipeline.runTest(texto, testFile, 1.0);
      new Notice(t("notices.audio_generated"));
      try { if (fs.existsSync(testFile)) fs.unlinkSync(testFile); } catch (_) {}
    } catch (error: any) {
      new Notice(t("notices.audio_generation_error", { error: error?.message || String(error) }));
    }
  }

  private rebuildTTSPipeline() {
    let basePath = "";
    if (this.app.vault.adapter instanceof FileSystemAdapter) {
      basePath = this.app.vault.adapter.getBasePath();
    }

    const engine = TTSEngineFactory.create({
      ttsEngine: this.settings.ttsEngine,
      piperPath: this.settings.piperPath,
      selectedVoice: this.settings.selectedVoice,
      selectedKokoroVoice: this.settings.selectedKokoroVoice,
      basePath,
      logger: this.logger,
    });

    this.ttsPipeline = new TTSPipelineService(
      this.app.vault,
      this.queue,
      engine,
      this.logger,
      () => this.widget.getSpeed()
    );
  }

  private getActiveEditor(): Editor | null {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) return null;
    let editor: Editor | null = null;
    this.app.workspace.iterateAllLeaves((leaf) => {
      if (leaf.view instanceof MarkdownView && leaf.view.file?.path === activeFile.path) {
        editor = (leaf.view as MarkdownView).editor;
      }
    });
    return editor;
  }

  // ── Controle de Scroll Manual ────────────────────────────

  private onUserScrollActivity = () => {
    this.isUserScrolling = true;
    if (this.userScrollTimeout) clearTimeout(this.userScrollTimeout);
    this.userScrollTimeout = setTimeout(() => {
      this.isUserScrolling = false;
      this.userScrollTimeout = null;
    }, 1500);
  };

  registerScrollListeners() {
    this.unregisterScrollListeners();

    const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
    const containerEl = activeView?.containerEl ?? null;
    if (!containerEl) return;

    this.scrollListenerEl = containerEl;
    const KEYS = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown"]);

    containerEl.addEventListener("wheel",     this.onUserScrollActivity, { passive: true });
    containerEl.addEventListener("touchmove", this.onUserScrollActivity, { passive: true });
    containerEl.addEventListener("keydown", (evt: KeyboardEvent) => {
      if (KEYS.has(evt.key)) this.onUserScrollActivity();
    });
  }

  private unregisterScrollListeners() {
    if (!this.scrollListenerEl) return;
    this.scrollListenerEl.removeEventListener("wheel",     this.onUserScrollActivity);
    this.scrollListenerEl.removeEventListener("touchmove", this.onUserScrollActivity);
    // keydown anônimo: o próprio GC limpa quando o elemento é removido do DOM
    this.scrollListenerEl = null;
    this.isUserScrolling  = false;
  }
}
```

src/player-widget.ts
```
// Responsabilidades do Script
//
// 1. Criar e gerenciar o elemento DOM do widget flutuante de controle de áudio.
// 2. Gerenciar os estados visuais: ocioso, tocando, pausado, minimizado e expandido.
// 3. Exibir animação de onda sonora no miniplayer quando o áudio estiver tocando.
// 4. Expor o valor atual de velocidade do slider e os estados dos Modos Resumo e Teleprompter ao orquestrador.

import { setIcon } from "obsidian";
import { PlayerState } from "./main";
import { ChapterInfo } from "./queue";
import { onLanguageChanged, t } from "./i18n";

const SPEED_MIN     = 1.0;
const SPEED_MAX     = 2.0;
const SPEED_STEP    = 0.1;
const SPEED_DEFAULT = 1.0;

const STYLE_ID = "obsidian-voice-styles";

/** Injeta as keyframes de animação uma única vez no document head. */
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
      /* Transição apenas sobre border-radius para a animação de forma */
      transition: border-radius 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    /* Ícone circular (headphone) — sempre compatível com temas claro e escuro */
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
    /* Painel de controles: usa max-width + opacity para não quebrar overflow:visible */
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
    /* Estado expandido: painel visível */
    .ov-widget-container.is-expanded .ov-controls-panel {
      max-width:      500px;
      opacity:        1;
      overflow:       visible;
      pointer-events: auto;
    }
  `;
  document.head.appendChild(style);
}

export class ObsidianVoiceWidget {
  private onToggle: () => void;
  private onStop: () => void;
  private getChapters: () => ChapterInfo[];
  private onChapterClick: (chunkIndex: number) => void;
  private onResumoToggle: (active: boolean) => void;
  private onTeleprompterToggle: (active: boolean) => void;
  private openSettings: () => void;
  private onSpeedChange: (speed: number) => void;
  private getInstalledEngines: () => { id: string; name: string; installed: boolean }[];
  private onEngineChange: (engineId: 'piper' | 'kokoro') => void;
  private getActiveEngineId: () => 'piper' | 'kokoro';

  private widgetEl:            HTMLElement | null = null;
  private miniIconEl:          HTMLElement | null = null;   // Círculo do miniplayer
  private ring1El:             HTMLElement | null = null;
  private ring2El:             HTMLElement | null = null;
  private controlsEl:          HTMLElement | null = null;   // Área de controles expandida
  private statusTextEl:        HTMLElement | null = null;
  private toggleBtn:           HTMLElement | null = null;
  private collapseBtn:         HTMLElement | null = null;
  private stopBtn:             HTMLElement | null = null;
  private chaptersBtn:         HTMLElement | null = null;
  private toolsBtn:            HTMLElement | null = null;
  private indicatorEl:         HTMLElement | null = null;
  private chaptersDropEl:      HTMLElement | null = null;
  private toolsDropEl:         HTMLElement | null = null;
  private resumoToggleEl:      HTMLInputElement | null = null;
  private teleprompterToggleEl: HTMLInputElement | null = null;

  private speedValue        = SPEED_DEFAULT;
  private isMinimized       = true;   // Começa minimizado
  private resumoAtivo       = false;
  private teleprompterAtivo = true;   // Ativado por padrão (espelha settings.enableTeleprompterMode)
  private lastState: PlayerState = "aguardando";
  private unsubscribeLanguageChanged: (() => void) | null = null;

  constructor(
    onToggle: () => void,
    onStop: () => void,
    getChapters: () => ChapterInfo[],
    onChapterClick: (chunkIndex: number) => void,
    onResumoToggle: (active: boolean) => void,
    openSettings: () => void,
    onTeleprompterToggle: (active: boolean) => void,
    onSpeedChange: (speed: number) => void,
    getInstalledEngines: () => { id: string; name: string; installed: boolean }[],
    onEngineChange: (engineId: 'piper' | 'kokoro') => void,
    getActiveEngineId: () => 'piper' | 'kokoro'
  ) {
    this.onToggle             = onToggle;
    this.onStop               = onStop;
    this.getChapters          = getChapters;
    this.onChapterClick       = onChapterClick;
    this.onResumoToggle       = onResumoToggle;
    this.openSettings         = openSettings;
    this.onTeleprompterToggle = onTeleprompterToggle;
    this.onSpeedChange        = onSpeedChange;
    this.getInstalledEngines  = getInstalledEngines;
    this.onEngineChange       = onEngineChange;
    this.getActiveEngineId    = getActiveEngineId;
    this.unsubscribeLanguageChanged = onLanguageChanged(() => this.refreshTexts());
  }

  getSpeed(): number { return this.speedValue; }

  /** Inicializa o widget permanente na tela (sempre minimizado ao criar). */
  show(state: PlayerState, container: HTMLElement) {
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
      this.widgetEl     = null;
      this.miniIconEl   = null;
      this.ring1El      = null;
      this.ring2El      = null;
      this.controlsEl   = null;
      this.statusTextEl = null;
      this.toggleBtn    = null;
      this.collapseBtn  = null;
      this.stopBtn      = null;
      this.chaptersBtn  = null;
      this.toolsBtn     = null;
      this.indicatorEl  = null;
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
  setResumoAtivo(active: boolean) {
    this.resumoAtivo = active;
    if (this.resumoToggleEl) this.resumoToggleEl.checked = active;
  }

  /** Sincroniza o toggle de Modo Teleprompter quando alterado externamente. */
  setTeleprompterAtivo(active: boolean) {
    this.teleprompterAtivo = active;
    if (this.teleprompterToggleEl) this.teleprompterToggleEl.checked = active;
  }

  // ── Construção do DOM ────────────────────────────────────

  private build(container: HTMLElement) {
    injectStyles();

    this.widgetEl = container.createDiv({ attr: { id: "obsidian-voice-widget" }, cls: "ov-widget-container" });
    this.widgetEl.classList.add(this.isMinimized ? "is-minimized" : "is-expanded");

    // ── Círculo do Miniplayer ──────────────────────────────
    // Wrapper relativo para as rings de animação
    const miniWrapper = this.widgetEl.createDiv();
    Object.assign(miniWrapper.style, {
      position:     "relative",
      width:        "40px",
      height:       "40px",
      flexShrink:   "0",
    });

    // Anéis de onda sonora (ocultos quando não toca)
    this.ring1El = miniWrapper.createDiv({ cls: "ov-ring ov-ring-1" });
    this.ring2El = miniWrapper.createDiv({ cls: "ov-ring ov-ring-2" });

    // Botão circular de headphone
    this.miniIconEl = miniWrapper.createDiv({ cls: "clickable-icon ov-headphone-icon" });
    setIcon(this.miniIconEl, "headphones");
    this.miniIconEl.setAttribute("aria-label", t("widget.aria.expand_player"));

    // Clique no headphone: expande (se minimizado) ou não faz nada
    this.miniIconEl.addEventListener("click", () => {
      if (this.isMinimized) this.expand();
    });

    // ── Área de Controles (visível quando expandido) ───────
    this.controlsEl = this.widgetEl.createDiv({ cls: "ov-controls-panel" });

    // Botão Colapsar (chevron-right = "encolher para a direita/menor")
    this.collapseBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.collapseBtn.setAttribute("aria-label", t("widget.aria.minimize_player"));
    setIcon(this.collapseBtn, "chevron-right");
    this.collapseBtn.addEventListener("click", () => this.minimize());

    // Separador
    this.addSep(this.controlsEl);

    // Indicador luminoso
    this.indicatorEl = this.controlsEl.createSpan();
    Object.assign(this.indicatorEl.style, {
      width:        "7px",
      height:       "7px",
      borderRadius: "50%",
      display:      "inline-block",
      flexShrink:   "0",
      background:   "var(--text-faint)",
      transition:   "background-color 0.2s ease, box-shadow 0.2s ease",
    });

    // Rótulo de status
    this.statusTextEl = this.controlsEl.createSpan();
    Object.assign(this.statusTextEl.style, {
      fontWeight: "500",
      minWidth:   "110px",
    });
    this.statusTextEl.textContent = t("widget.status.waiting");

    // Botão Play/Pause
    this.toggleBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.toggleBtn.setAttribute("aria-label", t("widget.aria.play_pause"));
    setIcon(this.toggleBtn, "play");
    this.toggleBtn.addEventListener("click", () => this.onToggle());

    // Botão Stop
    this.stopBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.stopBtn.setAttribute("aria-label", t("widget.aria.stop_narration"));
    setIcon(this.stopBtn, "square");
    this.stopBtn.addEventListener("click", () => this.onStop());

    // Botão Capítulos
    this.chaptersBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.chaptersBtn.setAttribute("aria-label", t("widget.aria.chapters"));
    setIcon(this.chaptersBtn, "list");
    this.chaptersBtn.addEventListener("click", (evt: MouseEvent) => {
      evt.stopPropagation();
      this.closeToolsMenu();
      this.toggleChaptersDropdown();
    });

    // Separador
    this.addSep(this.controlsEl);

    // Slider de velocidade
    const speedWrapper = this.controlsEl.createDiv();
    Object.assign(speedWrapper.style, { display: "flex", alignItems: "center", gap: "6px" });

    const slider = speedWrapper.createEl("input", { cls: "slider" });
    slider.type  = "range";
    slider.min   = String(SPEED_MIN);
    slider.max   = String(SPEED_MAX);
    slider.step  = String(SPEED_STEP);
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

    // Separador
    this.addSep(this.controlsEl);

    // Botão Ferramentas
    this.toolsBtn = this.controlsEl.createDiv({ cls: "clickable-icon" });
    this.toolsBtn.setAttribute("aria-label", t("widget.aria.tools"));
    setIcon(this.toolsBtn, "settings");
    this.toolsBtn.addEventListener("click", (evt: MouseEvent) => {
      evt.stopPropagation();
      this.closeChaptersDropdown();
      this.toggleToolsMenu();
    });

    // Ajusta bordas quando minimizado/expandido na primeira montagem
    this.applyLayoutMode();
  }

  // ── Minimizar / Expandir ─────────────────────────────────

  private minimize() {
    if (!this.widgetEl || !this.controlsEl || !this.miniIconEl) return;
    this.isMinimized = true;
    this.closeChaptersDropdown();
    this.closeToolsMenu();
    this.applyLayoutMode();
  }

  private expand() {
    if (!this.widgetEl || !this.controlsEl) return;
    this.isMinimized = false;
    this.applyLayoutMode();
  }

  /** Aplica o layout correto de acordo com isMinimized. */
  private applyLayoutMode() {
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

  private toggleChaptersDropdown() {
    if (this.chaptersDropEl) { this.closeChaptersDropdown(); return; }
    if (!this.widgetEl) return;

    const chapters = this.getChapters();
    if (chapters.length === 0) return;

    this.chaptersDropEl = this.widgetEl.createDiv({ attr: { id: "obsidian-voice-chapters-dropdown" } });
    Object.assign(this.chaptersDropEl.style, {
      position: "absolute", right: "0", marginBottom: "8px",
      width: "260px", maxHeight: "180px", overflowY: "auto",
      background: "var(--background-secondary-alt)",
      border: "1px solid var(--background-modifier-border)",
      borderRadius: "8px", boxShadow: "var(--shadow-l)",
      padding: "8px 6px", display: "flex", flexDirection: "column", gap: "6px", zIndex: "9999",
      pointerEvents: "auto",
    });

    // Viewport collision detection: abre para cima ou para baixo conforme espaço disponível
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
        padding: "8px 12px", borderRadius: "4px", cursor: "pointer",
        fontSize: "var(--font-ui-small)", whiteSpace: "normal",
        wordBreak: "break-word", lineHeight: "1.4", display: "block",
        transition: "background-color 0.1s ease",
      });
      if (chapter.level === 2) itemEl.style.paddingLeft = "20px";
      else if (chapter.level === 3) itemEl.style.paddingLeft = "32px";

      itemEl.addEventListener("mouseenter", () => { itemEl.style.background = "var(--background-modifier-hover)"; });
      itemEl.addEventListener("mouseleave", () => { itemEl.style.background = "transparent"; });
      itemEl.addEventListener("click", (evt: MouseEvent) => {
        evt.stopPropagation();
        this.onChapterClick(chapter.chunkIndex);
        this.closeChaptersDropdown();
      });
    }

    document.addEventListener("click", this.closeChaptersOnOutsideClick);
    document.addEventListener("keydown", this.closeOnEscape);
  }

  private closeChaptersDropdown() {
    if (this.chaptersDropEl) { this.chaptersDropEl.remove(); this.chaptersDropEl = null; }
    document.removeEventListener("click", this.closeChaptersOnOutsideClick);
    document.removeEventListener("keydown", this.closeOnEscape);
  }

  private closeChaptersOnOutsideClick = (evt: MouseEvent) => {
    if (this.chaptersDropEl && this.widgetEl && !this.widgetEl.contains(evt.target as Node)) {
      this.closeChaptersDropdown();
    }
  };

  // ── Menu de Ferramentas ──────────────────────────────────

  private closeOnEscape = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      this.closeChaptersDropdown();
      this.closeToolsMenu();
    }
  };

  private toggleToolsMenu() {
    if (this.toolsDropEl) { this.closeToolsMenu(); return; }
    if (!this.widgetEl) return;

    this.toolsDropEl = this.widgetEl.createDiv({ attr: { id: "obsidian-voice-tools-menu" } });
    Object.assign(this.toolsDropEl.style, {
      position: "absolute", right: "0", marginBottom: "8px",
      width: "260px", background: "var(--background-secondary-alt)",
      border: "1px solid var(--background-modifier-border)",
      borderRadius: "8px", boxShadow: "var(--shadow-l)", padding: "10px 12px", zIndex: "9999",
      pointerEvents: "auto",
    });

    // Viewport collision detection: abre para cima ou para baixo conforme espaço disponível
    const widgetRect = this.widgetEl.getBoundingClientRect();
    if (widgetRect.top < 200) {
      Object.assign(this.toolsDropEl.style, { bottom: "auto", top: "100%", marginBottom: "0", marginTop: "8px" });
    } else {
      Object.assign(this.toolsDropEl.style, { bottom: "100%", top: "auto", marginTop: "0" });
    }

    // ── Helper: cria uma linha de toggle reutilizável ──────────────────
    const addToggleRow = (
      labelText: string,
      tooltip: string,
      inputId: string,
      checked: boolean,
      onChange: (v: boolean) => void
    ): HTMLInputElement => {
      const row = this.toolsDropEl!.createDiv();
      Object.assign(row.style, { display: "flex", alignItems: "center", gap: "8px" });

      const labelWrapper = row.createDiv();
      Object.assign(labelWrapper.style, { display: "flex", alignItems: "center", gap: "4px", flex: "1", minWidth: "0" });

      const label = labelWrapper.createSpan();
      label.textContent = labelText;
      label.style.fontWeight = "500";

      const infoIcon = labelWrapper.createDiv({ cls: "clickable-icon" });
      infoIcon.style.opacity = "0.6";
      infoIcon.style.flexShrink = "0";
      setIcon(infoIcon, "info");
      infoIcon.setAttribute("aria-label", tooltip);
      infoIcon.setAttribute("data-tooltip-position", "top");

      const toggleEl = row.createEl("input");
      toggleEl.type    = "checkbox";
      toggleEl.id      = inputId;
      toggleEl.checked = checked;
      Object.assign(toggleEl.style, {
        width: "36px", height: "20px", cursor: "pointer", flexShrink: "0",
        accentColor: "var(--interactive-accent)",
      });
      toggleEl.addEventListener("change", () => onChange(toggleEl.checked));
      return toggleEl;
    };

    // ── Row: Modo Resumo ──────────────────────────────────
    this.resumoToggleEl = addToggleRow(
      t("widget.tools.summary_mode"),
      t("widget.tools.summary_mode_tooltip"),
      "obsidian-voice-resumo-toggle",
      this.resumoAtivo,
      (v) => { this.resumoAtivo = v; this.onResumoToggle(v); }
    );

    // Separador
    const sep1 = this.toolsDropEl.createDiv();
    sep1.style.cssText = "height:1px; background:var(--background-modifier-border); margin:8px 0;";

    // ── Row: Modo Teleprompter ────────────────────────────
    this.teleprompterToggleEl = addToggleRow(
      t("widget.tools.teleprompter_mode"),
      t("widget.tools.teleprompter_mode_tooltip"),
      "obsidian-voice-teleprompter-toggle",
      this.teleprompterAtivo,
      (v) => { this.teleprompterAtivo = v; this.onTeleprompterToggle(v); }
    );

    // Separador
    const sep2 = this.toolsDropEl.createDiv();
    sep2.style.cssText = "height:1px; background:var(--background-modifier-border); margin:8px 0;";

    // ── Row: Seletor de Motor de Voz ──────────────────────
    const engineRow = this.toolsDropEl.createDiv();
    Object.assign(engineRow.style, { display: "flex", alignItems: "center", gap: "8px" });

    const engineLabel = engineRow.createSpan();
    engineLabel.textContent = t("widget.tools.voice_engine");
    engineLabel.style.fontWeight = "500";
    engineLabel.style.flex = "1";

    const engineSelect = engineRow.createEl("select");
    Object.assign(engineSelect.style, {
      width: "120px", fontSize: "var(--font-ui-small)", padding: "2px 4px",
      background: "var(--background-primary)", border: "1px solid var(--background-modifier-border)",
      borderRadius: "4px", color: "var(--text-normal)", cursor: "pointer", flexShrink: "0",
    });
    // Popula opções baseadas nas engines instaladas
    const engines = this.getInstalledEngines();
    for (const engine of engines) {
       const option = engineSelect.createEl("option");
       option.value = engine.id;
       option.textContent = engine.name;
       if (!engine.installed) {
         option.disabled = true;
         option.textContent += " (não instalado)";
       }
    }

    engineSelect.value = this.getActiveEngineId();

    engineSelect.addEventListener("change", () => {
      const value = engineSelect.value as 'piper' | 'kokoro';
      this.onEngineChange(value);
    });

    // Separador
    const sep3 = this.toolsDropEl.createDiv();
    sep3.style.cssText = "height:1px; background:var(--background-modifier-border); margin:8px 0;";

    // ── Item: Configurações... ────────────────────────────
    const settingsItem = this.toolsDropEl.createDiv();
    settingsItem.setText(t("widget.tools.settings"));
    Object.assign(settingsItem.style, {
      padding: "6px 4px", borderRadius: "4px", cursor: "pointer",
      fontSize: "var(--font-ui-small)", fontWeight: "500",
    });
    settingsItem.addEventListener("mouseenter", () => { settingsItem.style.background = "var(--background-modifier-hover)"; });
    settingsItem.addEventListener("mouseleave", () => { settingsItem.style.background = "transparent"; });
    settingsItem.addEventListener("click", (evt: MouseEvent) => {
      evt.stopPropagation();
      this.closeToolsMenu();
      this.openSettings();
    });

    document.addEventListener("click", this.closeToolsOnOutsideClick);
    document.addEventListener("keydown", this.closeOnEscape);
  }

  private closeToolsMenu() {
    if (this.toolsDropEl) {
      this.toolsDropEl.remove();
      this.toolsDropEl          = null;
      this.resumoToggleEl       = null;
      this.teleprompterToggleEl = null;
    }
    document.removeEventListener("click", this.closeToolsOnOutsideClick);
    document.removeEventListener("keydown", this.closeOnEscape);
  }

  private closeToolsOnOutsideClick = (evt: MouseEvent) => {
    if (this.toolsDropEl && this.widgetEl && !this.widgetEl.contains(evt.target as Node)) {
      this.closeToolsMenu();
    }
  };

  // ── Atualização de Estado ────────────────────────────────

  private applyState(state: PlayerState) {
    this.lastState = state;
    const isTocando = state === "tocando";
    const isActive  = state !== "aguardando";

    // Animação dos anéis de onda no miniplayer
    if (this.ring1El && this.ring2El) {
      this.ring1El.classList.toggle("is-playing", isTocando);
      this.ring2El.classList.toggle("is-playing", isTocando);
    }
    // Animação do ícone de headphone
    if (this.miniIconEl) {
      this.miniIconEl.classList.toggle("is-playing", isTocando);
    }

    if (!this.statusTextEl || !this.toggleBtn || !this.indicatorEl) return;

    if (!isActive) {
      this.statusTextEl.textContent = t("widget.status.waiting");
      setIcon(this.toggleBtn, "play");
      Object.assign(this.indicatorEl.style, {
        background: "var(--text-faint)",
        boxShadow:  "none",
      });
      return;
    }

    this.statusTextEl.textContent = isTocando ? t("widget.status.playing") : t("widget.status.paused");
    setIcon(this.toggleBtn, isTocando ? "pause" : "play");
    Object.assign(this.indicatorEl.style, {
      background: isTocando ? "var(--text-success)" : "var(--text-warning)",
      boxShadow:  isTocando ? "0 0 6px var(--text-success)" : "none",
    });
  }

  // ── Utilitários ──────────────────────────────────────────

  private addSep(container: HTMLElement) {
    const sep = container.createSpan();
    sep.style.cssText = "width:1px; height:16px; background:var(--background-modifier-border); flex-shrink:0;";
  }

  private refreshTexts() {
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
}
```

src/queue.ts
```
// Responsabilidades do Script
//
// 1. Limpar marcações Markdown e normalizar caracteres especiais em linhas individuais.
// 2. Fatiar a nota em chunks mapeando as linhas físicas originais do editor (0-indexed).
// 3. Gerenciar o ponteiro de leitura e realizar buscas por índice de linha em memória.
// 4. Filtrar apenas destaques (==texto==) quando o modo Audio-Resumo estiver ativo.

export interface AudioChunk {
  index: number;
  text: string;
  startLine: number;
  endLine: number;
}

export interface ChapterInfo {
  title: string;
  chunkIndex: number;
  level: number;
}

export class ObsidianVoiceQueue {
  private chunks: AudioChunk[] = [];
  private chapters: ChapterInfo[] = [];
  private currentIndex = 0;
  private readonly MAX_CHUNK_LENGTH = 500;

  /** Quando true, a fila é populada apenas com os destaques ==texto== da nota. */
  readOnlyHighlights = false;

  startQueue(rawText: string) {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;

    if (this.readOnlyHighlights) {
      this.buildHighlightsQueue(rawText);
      // Capítulos são extraídos APÓS os chunks estarem prontos
      this.buildChapters(rawText);
      return;
    }

    const rawLines = rawText.split(/\r?\n/);
    let inFrontmatter = false;
    let inCodeBlock = false;

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      const trimmed = line.trim();

      // Detecta Frontmatter no início do arquivo
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

      // Detecta blocos de código
      if (trimmed.startsWith("```")) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) {
        continue;
      }

      // Detecta cabeçalhos H1-H3 para navegação por capítulos
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

      // Limpa a linha de marcações Markdown e formatações
      const cleanLine = this.cleanLineMarkdown(line);
      if (!cleanLine) {
        continue;
      }

      // Se exceder o tamanho máximo, subdivide
      if (cleanLine.length <= this.MAX_CHUNK_LENGTH) {
        this.chunks.push({
          index: this.chunks.length,
          text: cleanLine,
          startLine: i,
          endLine: i,
        });
      } else {
        const subChunks = this.splitParagraph(cleanLine, this.MAX_CHUNK_LENGTH);
        for (const sub of subChunks) {
          this.chunks.push({
            index: this.chunks.length,
            text: sub,
            startLine: i,
            endLine: i,
          });
        }
      }
    }
  }

  /**
   * Popula a fila exclusivamente com os trechos destacados (==texto==) da nota.
   * As tags == são removidas antes do envio ao TTS.
   */
  private buildHighlightsQueue(rawText: string) {
    // Lazy match (.*?) aceita = dentro do destaque, ex: ==x = y==
    const regex = /==(.*?)==/g;
    const rawLines = rawText.split(/\r?\n/);

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      let match: RegExpExecArray | null;

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
          endLine: i,
        });
      }
    }
  }

  /**
   * Extrai capítulos (H1-H3) do texto bruto e os associa ao primeiro chunk
   * que começa na linha do heading ou imediatamente após ela.
   * Funciona corretamente em ambos os modos (normal e readOnlyHighlights).
   */
  private buildChapters(rawText: string) {
    const rawLines = rawText.split(/\r?\n/);
    let inFrontmatter = false;
    let inCodeBlock = false;

    for (let i = 0; i < rawLines.length; i++) {
      const trimmed = rawLines[i].trim();

      // Frontmatter
      if (i === 0 && trimmed === "---") { inFrontmatter = true; continue; }
      if (inFrontmatter) {
        if (trimmed === "---") inFrontmatter = false;
        continue;
      }

      // Code blocks
      if (trimmed.startsWith("```")) { inCodeBlock = !inCodeBlock; continue; }
      if (inCodeBlock) continue;

      // Headings H1-H3
      const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)/);
      if (!headingMatch) continue;

      const level = headingMatch[1].length;
      const title = headingMatch[2].trim();

      // Busca o primeiro chunk cuja startLine >= linha do heading.
      // Isso funciona tanto no modo normal (chunks contínuos) quanto no modo
      // highlight (chunks esparsos), pois avança pelo array sem assumir cobertura contínua.
      const chunkIndex = this.nextChunkAfterLine(i);

      this.chapters.push({ title, chunkIndex, level });
    }
  }

  /**
   * Retorna o índice do primeiro chunk com startLine >= targetLine.
   * Se nenhum chunk estiver à frente, retorna o índice do último chunk.
   */
  private nextChunkAfterLine(targetLine: number): number {
    for (let i = 0; i < this.chunks.length; i++) {
      if (this.chunks[i].startLine >= targetLine) return this.chunks[i].index;
    }
    return this.chunks.length > 0 ? this.chunks[this.chunks.length - 1].index : 0;
  }

  getNextChunk(): AudioChunk | null {
    if (!this.hasMore()) return null;
    return this.chunks[this.currentIndex++];
  }

  hasMore(): boolean {
    return this.currentIndex < this.chunks.length;
  }

  reset() {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;
  }

  getChapters(): ChapterInfo[] {
    return this.chapters;
  }

  setCurrentIndex(index: number) {
    if (index >= 0 && index <= this.chunks.length) {
      this.currentIndex = index;
    }
  }

  getChunkIndexByLine(lineNumber: number): number {
    if (this.chunks.length === 0) return 0;

    // Tenta encontrar o primeiro chunk que contém a linha no intervalo [startLine, endLine]
    for (let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i];
      if (lineNumber >= chunk.startLine && lineNumber <= chunk.endLine) {
        return chunk.index;
      }
    }

    // Se não encontrar, busca o chunk mais próximo
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

  findChunkIndexByLineText(lineText: string): number {
    if (!lineText || !lineText.trim()) return 0;

    const cleanedLine = this.cleanLineMarkdown(lineText).toLowerCase();
    if (!cleanedLine) return 0;

    const index = this.chunks.findIndex(chunk => {
      const chunkText = chunk.text.toLowerCase();
      return chunkText.includes(cleanedLine) || cleanedLine.includes(chunkText);
    });

    return index !== -1 ? index : 0;
  }

  /**
   * Limpa marcações markdown e formatações de uma linha individual.
   */
  private cleanLineMarkdown(line: string): string {
    let clean = line
      // Remove blocos de código em linha
      .replace(/`([^`]+)`/g, "$1")
      // Sintaxe de links internos: [[Link|Texto]] -> Texto e [[Link]] -> Link
      .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      // Links externos: [Texto](URL) -> Texto
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Destaques: ==texto== -> texto (lazy match aceita = dentro do destaque)
      .replace(/==(.*?)==/g, "$1")
      .replace(/==/g, "")
      // Negrito e Itálico: **texto**, __texto__, *texto*, _texto_
      .replace(/(\*\*|__)(.*?)\1/g, "$2")
      .replace(/(\*|_)(.*?)\1/g, "$2")
      .replace(/[*_]/g, "") // Remove qualquer asterisco ou underscore residual
      // Marcadores de cabeçalho: # Titulo -> Titulo
      .replace(/^#+\s+/, "")
      // Traços de listas no início de linhas: "- item" ou "* item" ou "1. item" -> "item"
      .replace(/^\s*[-*+]\s+/, "")
      .replace(/^\s*\d+\.\s+/, "")
      // Remove hashtags (#tag) apenas quando precedidas por espaço ou início de linha,
      // e apenas quando o token após # não é puramente numérico (ex: evita remover #FF0000 ou #123)
      .replace(/(^|\s)#(?![0-9a-fA-F]{3,6}\b)([^\s#]+)/g, "$1")
      // Substituições tipográficas
      .replace(/[""]/g, '"') // Aspas inteligentes duplas
      .replace(/['']/g, "'") // Aspas inteligentes simples
      .replace(/—/g, ",")    // Travessão longo por vírgula
      .replace(/–/g, ",")    // Travessão médio por vírgula
      // Remove emojis e símbolos especiais sem representação fonética direta
      .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{1F1E6}-\u{1F1FF}]/gu, "");

    return clean.trim();
  }

  /**
   * Divide recursivamente um parágrafo longo em sub-blocos no ponto de pontuação mais próximo.
   */
  private splitParagraph(text: string, maxLength: number): string[] {
    if (text.length <= maxLength) {
      return [text];
    }

    let splitIndex = -1;
    const punctuations = [".", ";", "?", "!"];

    // Encontra a última pontuação dentro do limite seguro
    for (const punct of punctuations) {
      const idx = text.lastIndexOf(punct, maxLength - 1);
      if (idx > splitIndex) {
        splitIndex = idx;
      }
    }

    // Se encontrou pontuação, divide nela
    if (splitIndex !== -1) {
      const part1 = text.substring(0, splitIndex + 1).trim();
      const part2 = text.substring(splitIndex + 1).trim();
      if (part1 && part2) {
        return [part1, ...this.splitParagraph(part2, maxLength)];
      }
    }

    // Fallback: divide no último espaço (palavra completa)
    const spaceIdx = text.lastIndexOf(" ", maxLength - 1);
    if (spaceIdx !== -1) {
      const part1 = text.substring(0, spaceIdx).trim();
      const part2 = text.substring(spaceIdx + 1).trim();
      if (part1 && part2) {
        return [part1, ...this.splitParagraph(part2, maxLength)];
      }
    }

    // Fallback final: corta a seco no limite máximo
    const part1 = text.substring(0, maxLength).trim();
    const part2 = text.substring(maxLength).trim();
    return [part1, ...this.splitParagraph(part2, maxLength)];
  }
}
```

src/settings.ts
```
// Responsabilidades do Script
//
// 1. Definir a interface e os padrões das configurações do plugin.
// 2. Renderizar os cards reativos do marketplace com barra de progresso ao vivo.
// 3. Gerenciar o seletor global de idioma.

import { App, PluginSettingTab, Setting, Notice } from "obsidian";
import ObsidianVoicePlugin from "./main";
import { LanguageSetting, offLanguageChanged, onLanguageChanged, setLanguage, t } from "./i18n";
import type { InstalledModelMetadata } from "./types/model";
import { getModelCatalog } from "./services/model/model-catalog";
import { InstallState } from "./types/model";
import type { PiperVoiceEntry } from "./services/model/model-management-service";

export interface ObsidianVoiceSettings {
  piperPath: string;
  selectedVoice: string;
  highlightColor: string;
  enableTeleprompterMode: boolean;
  language: LanguageSetting;
  models: Record<string, InstalledModelMetadata>;
  ttsEngine: 'piper' | 'kokoro';
  selectedKokoroVoice: string;
}

export const DEFAULT_SETTINGS: ObsidianVoiceSettings = {
  piperPath:               "",
  selectedVoice:           "",
  highlightColor:          "green",
  enableTeleprompterMode:  true,
  language:                "auto",
  models:                  {},
  ttsEngine:               'piper',
  selectedKokoroVoice:     'af_bella',
};

const STATE_LABELS: Record<InstallState, string> = {
  [InstallState.NOT_INSTALLED]:     "Aguardando",
  [InstallState.FETCHING_MANIFEST]: "Obtendo informações do modelo...",
  [InstallState.DOWNLOADING]:       "Baixando...",
  [InstallState.VERIFYING]:         "Verificando integridade...",
  [InstallState.EXTRACTING]:        "Extraindo...",
  [InstallState.VALIDATING_RUNTIME]: "Validando motor de síntese...",
  [InstallState.INSTALLING]:        "Instalando...",
  [InstallState.INSTALLED]:         "Instalado",
  [InstallState.FAILED]:            "Falha na instalação",
  [InstallState.REMOVING]:          "Removendo...",
  [InstallState.UPDATING]:          "Atualizando...",
  [InstallState.ROLLBACK]:          "Revertendo...",
};

// ── Aba de Configurações ─────────────────────────────────────────────────────
export class ObsidianVoiceSettingTab extends PluginSettingTab {
  plugin: ObsidianVoicePlugin;
  private readonly languageChangeHandler = () => this.display();
  /** Map para armazenar referências DOM dos progress containers por modelId */
  private progressRefs = new Map<string, {
    container: HTMLDivElement;
    progress: HTMLProgressElement;
    text: HTMLSpanElement;
  }>();

  constructor(app: App, plugin: ObsidianVoicePlugin) {
    super(app, plugin);
    this.plugin = plugin;
    onLanguageChanged(this.languageChangeHandler);
    this.plugin.register(() => offLanguageChanged(this.languageChangeHandler));
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();
    this.progressRefs.clear();

    // ── Campo: Idioma ───────────────────────────────────────
    new Setting(containerEl)
      .setName(t("settings.language.title"))
      .setDesc(t("settings.language.description"))
      .addDropdown((drop) => {
        drop.addOption("auto", t("settings.language.auto"));
        drop.addOption("pt",   t("settings.language.pt"));
        drop.addOption("en",   t("settings.language.en"));
        drop.addOption("es",   t("settings.language.es"));
        drop.setValue(this.plugin.settings.language || "auto");
        drop.onChange(async (value) => {
          this.plugin.settings.language = value as LanguageSetting;
          await this.plugin.saveSettings();
          setLanguage(value as LanguageSetting);
        });
      });

    // ── Seção: Gerenciador de Modelos ─────────────────────────
    containerEl.createEl("h3", { text: "Gerenciador de Modelos de Voz (Local)" });
    containerEl.createEl("p", {
      text: "As instalações rodam localmente no seu computador, sem envio de dados para a nuvem e sem custo de rede.",
      cls: "ov-marketplace-description",
    });

    const cardsContainer = containerEl.createDiv({ cls: "ov-cards-container" });

    const catalog = getModelCatalog();
    for (const [id, entry] of Object.entries(catalog)) {
      const modelId = id as 'piper' | 'kokoro';
      const installed = this.plugin.modelManager.isInstalled(modelId);
      const installing = this.plugin.modelManager.isInstalling(modelId);
      this.renderCard(cardsContainer, modelId, entry, installed, installing);
    }

    this.renderVoiceSection(containerEl);
  }

  private renderCard(
    container: HTMLDivElement,
    id: 'piper' | 'kokoro',
    entry: { displayName: string; description: string; estimatedRamMB: number; estimatedDiskMB: number; tags: string[] },
    installed: boolean,
    installing: boolean,
  ): void {
    const isComingSoon = id === 'kokoro';
    const card = container.createDiv({ cls: `ov-card ${isComingSoon ? 'ov-card-coming-soon' : ''}` });

    // Cabeçalho do card
    const header = card.createDiv({ cls: "ov-card-header" });
    header.createSpan({ cls: "ov-card-name", text: entry.displayName });

    const badge = header.createSpan({
      cls: `ov-card-badge ${installed ? "ov-badge-installed" : "ov-badge-available"}`,
      text: installed ? "Instalado" : "Disponível para Download",
    });

    // Descrição
    card.createEl("p", { cls: "ov-card-description", text: entry.description });

    // Tags
    const tagsRow = card.createDiv({ cls: "ov-card-tags" });
    for (const tag of entry.tags) {
      tagsRow.createSpan({ cls: "ov-card-tag", text: tag });
    }

    // Recursos
    const resources = card.createDiv({ cls: "ov-card-resources" });
    resources.createSpan({ text: `RAM estimada: ${entry.estimatedRamMB} MB` });
    resources.createSpan({ text: `Disco estimado: ${entry.estimatedDiskMB} MB` });

    // Container de progresso (oculto por padrão)
    const progressContainer = card.createDiv({ cls: "ov-progress-container" });
    const progressText = progressContainer.createSpan({ cls: "ov-progress-text" });
    const progressBar = progressContainer.createEl("progress", {
      cls: "ov-progress-bar",
      attr: { max: "100", value: "0" },
    });
    progressContainer.style.display = "none";

    this.progressRefs.set(id, { container: progressContainer, progress: progressBar, text: progressText });

    // Se já estiver instalando, exibe progresso imediatamente
    if (installing) {
      progressContainer.style.display = "flex";
      progressText.textContent = "Instalação em andamento...";
    }

    // Botão de ação
    const actionBtn = card.createEl("button", {
      cls: `ov-card-btn ${installed ? "ov-btn-remove" : "ov-btn-install"}`,
      text: installed ? "Remover" : (isComingSoon ? t("settings.marketplace.coming_soon") : "Instalar"),
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

  private handleInstall(
    id: 'piper' | 'kokoro',
    displayName: string,
    btn: HTMLButtonElement,
    progressContainer: HTMLDivElement,
    progressText: HTMLSpanElement,
    progressBar: HTMLProgressElement,
  ): void {
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

            if (state === InstallState.INSTALLED) {
              progressContainer.style.display = "none";
              this.display();
            }
          },
          (percent) => {
            progressBar.value = percent;
          },
        );
      } catch (err: any) {
        new Notice(`Erro na instalação: ${err?.message || String(err)}`);
        progressContainer.style.display = "none";
        btn.disabled = false;
        btn.textContent = "Instalar";
        this.display();
      }
    })();
  }

  private async renderVoiceSection(containerEl: HTMLElement) {
    if (!this.plugin.modelManager.isInstalled('piper')) return;

    containerEl.createEl("h3", { text: t("settings.voice_model.title") });
    containerEl.createEl("p", {
      text: "Escolha uma voz para o motor Piper. O download é feito diretamente do catálogo oficial.",
      cls: "ov-marketplace-description",
    });

    const voicesSection = containerEl.createDiv({ cls: "ov-voices-section" });

    const langDrop = voicesSection.createEl("select", { cls: "ov-voice-dropdown" });
    const profileDrop = voicesSection.createEl("select", { cls: "ov-voice-dropdown" });
    const downloadBtn = voicesSection.createEl("button", { cls: "ov-card-btn ov-btn-install", text: "Baixar Voz Selecionada" });

    let voices: PiperVoiceEntry[] = [];
    try {
      await this.plugin.modelManager.fetchPiperVoices();
      voices = (this.plugin.modelManager as any).voicesCache || [];
    } catch (e) {
      new Notice("Falha ao carregar catálogo de vozes.");
      return;
    }

    const langs = Array.from(new Set(voices.map((v) => v.language.code))).sort();
    langDrop.length = 0;
    for (const code of langs) {
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = code;
      langDrop.add(opt);
    }

    const currentLang = this.plugin.settings.selectedVoice ? this.plugin.settings.selectedVoice.split("-")[0] || "" : "";
    if (currentLang && langs.includes(currentLang)) langDrop.value = currentLang;

    const refreshProfiles = () => {
      const lang = langDrop.value;
      const filtered = voices.filter((v) => v.language.code === lang);
      profileDrop.length = 0;
      for (const v of filtered) {
        const opt = document.createElement('option');
        opt.value = v.key;
        opt.textContent = `${v.name} (${v.quality})`;
        profileDrop.add(opt);
      }
      if (filtered.length > 0) profileDrop.selectedIndex = 0;
    };

    langDrop.addEventListener('change', refreshProfiles);
    refreshProfiles();

    downloadBtn.addEventListener('click', async () => {
      const selected = profileDrop.value;
      const voice = voices.find((v) => v.key === selected);
      if (!voice) return;

      downloadBtn.disabled = true;
      downloadBtn.textContent = "Baixando...";

      try {
        await (this.plugin.modelManager as any).installVoice(voice);
        this.plugin.settings.selectedVoice = voice.key;
        await this.plugin.saveSettings();
        new Notice(`Voz ${voice.key} instalada.`);
        this.display();
      } catch (e: any) {
        new Notice(`Falha ao baixar voz: ${e?.message || String(e)}`);
        downloadBtn.disabled = false;
        downloadBtn.textContent = "Baixar Voz Selecionada";
      }
    });
  }

  private handleRemove(
    id: 'piper' | 'kokoro',
    displayName: string,
    btn: HTMLButtonElement,
    progressContainer: HTMLDivElement,
    progressText: HTMLSpanElement,
  ): void {
    btn.disabled = true;
    btn.textContent = "Removendo...";
    progressContainer.style.display = "flex";
    progressText.textContent = "Removendo modelo...";

    this.plugin.modelManager.remove(id)
      .then(() => {
        new Notice(`Modelo ${displayName} removido com sucesso.`);
        this.display();
      })
      .catch((err) => {
        new Notice(`Erro ao remover: ${err.message}`);
        this.display();
      });
  }
}
```

src/locales/en.json
```
{
  "settings": {
    "language": {
      "title": "Language",
      "description": "Controls the language used by Obsidian Voice.",
      "auto": "Auto (System)",
      "pt": "Português",
      "en": "English",
      "es": "Español"
    },
    "marketplace": {
      "coming_soon": "Coming soon"
    },
    "piper_path": {
      "title": "Piper executable path",
      "description": "Absolute path to the Piper binary (example: C:\\piper\\piper.exe). ONNX models will be detected automatically in the same folder.",
      "not_file": "The provided path is not a file.",
      "missing": "The provided executable does not exist on disk."
    },
    "voice_model": {
      "title": "Default voice",
      "loading": "Searching for .onnx models...",
      "found": ".onnx models found in the Piper executable folder.",
      "select": "- select a model -",
      "none": "No .onnx models found"
    },
    "highlight_color": {
      "title": "Highlight color",
      "description": "Color of the visual highlight applied to the paragraph being narrated.",
      "green": "Green (Default)",
      "yellow": "Classic Yellow",
      "blue": "Focus Blue",
      "purple": "Zen Purple",
      "orange": "Autumn Amber"
    },
    "teleprompter": {
      "title": "Automatic scroll (Teleprompter)",
      "description": "When enabled, the editor scrolls automatically to follow the paragraph being narrated. Disable it to navigate manually without player interference."
    },
    "errors": {
      "prefix": "Error: {{error}}",
      "unknown_directory": "Unknown error while reading the directory."
    }
  },
  "widget": {
    "aria": {
      "expand_player": "Expand player",
      "minimize_player": "Minimize player",
      "play_pause": "Play / Pause",
      "stop_narration": "Stop narration",
      "chapters": "Chapters",
      "tools": "Tools"
    },
    "status": {
      "waiting": "Waiting for narration...",
      "playing": "Narrating note...",
      "paused": "Paused"
    },
    "tools": {
      "summary_mode": "Summary Mode",
      "summary_mode_tooltip": "Summary Mode: When enabled, the player will read only highlights (==text==) from this note.",
      "teleprompter_mode": "Teleprompter Mode",
      "teleprompter_mode_tooltip": "Teleprompter Mode: When enabled, the editor scrolls automatically with the narrated paragraph.",
      "settings": "Settings...",
      "voice_engine": "Voice Engine"
    }
  },
  "commands": {
    "test_piper": "Test TTS Engine (Piper)",
    "narrate_current_note": "Narrate Current Note (Obsidian Voice)",
    "toggle_play_pause": "Toggle Play/Pause (Obsidian Voice)",
    "stop_narration": "Stop Narration (Obsidian Voice)",
    "toggle_highlights_only": "Obsidian Voice: Toggle highlight reading (Audio Summary)",
    "play_from_selection": "Play/Narrate text from current selection",
    "ribbon_narrate": "Narrate note (Obsidian Voice)"
  },
  "notices": {
    "summary_mode": "Audio Summary Mode: {{state}}",
    "teleprompter_mode": "Teleprompter Mode: {{state}}",
    "enabled": "Enabled",
    "disabled": "Disabled",
    "narration_stopped": "Narration stopped.",
    "no_active_note": "No active note found.",
    "empty_note": "This note has no content to narrate.",
    "restarting": "Restarting...",
    "starting_narration": "Starting note narration...",
    "missing_configuration": "Obsidian Voice: Configure the Piper path and voice in the plugin settings.",
    "piper_or_model_missing": "Obsidian Voice: Piper executable or ONNX model not found at the specified path.",
    "narration_finished": "Narration complete!",
    "narration_error": "Narration error: {{error}}",
    "generating_audio": "Generating audio...",
    "audio_generated": "Audio generated successfully!",
    "audio_generation_error": "Error generating audio: {{error}}",
    "model_scan_error": "Obsidian Voice: {{error}}",
    "engine_change_delayed": "Engine change will apply on the next narration.",
    "engine_changed": "Voice engine changed to {{engine}}."
  },
  "errors": {
    "missing_translation": "Missing translation: {{key}} ({{language}})",
    "resource_guard": {
      "insufficient_disk": "Insufficient disk space. Required: {{required}} bytes, available: {{available}} bytes.",
      "incompatible_arch": "Incompatible processor architecture: {{arch}}. Supported architectures: {{supported}}.",
      "incompatible_os": "Unsupported operating system: {{os}}.",
      "manifest_signature_failed": "Manifest security signature verification failed. The file may have been tampered with.",
      "disk_check_timeout": "Disk space check timed out. Please try again."
    }
  },
  "logs": {}
}
```

src/locales/es.json
```
{
  "settings": {
    "language": {
      "title": "Idioma",
      "description": "Controla el idioma usado por Obsidian Voice.",
      "auto": "Automático (Sistema)",
      "pt": "Português",
      "en": "English",
      "es": "Español"
    },
    "marketplace": {
      "coming_soon": "Próximamente"
    },
    "piper_path": {
      "title": "Ruta del ejecutable de Piper",
      "description": "Ruta absoluta al binario de Piper (ejemplo: C:\\piper\\piper.exe). Los modelos .onnx se detectarán automáticamente en la misma carpeta.",
      "not_file": "La ruta proporcionada no es un archivo.",
      "missing": "El ejecutable proporcionado no existe en el disco."
    },
    "voice_model": {
      "title": "Voz predeterminada",
      "loading": "Buscando modelos .onnx...",
      "found": "Modelos .onnx encontrados en la carpeta del ejecutable de Piper.",
      "select": "- selecciona un modelo -",
      "none": "No se encontraron modelos .onnx"
    },
    "highlight_color": {
      "title": "Color de resaltado",
      "description": "Color del resaltado visual aplicado al párrafo que se está narrando.",
      "green": "Verde (Predeterminado)",
      "yellow": "Amarillo clásico",
      "blue": "Azul enfoque",
      "purple": "Púrpura zen",
      "orange": "Ámbar otoñal"
    },
    "teleprompter": {
      "title": "Desplazamiento automático (Teleprompter)",
      "description": "Cuando está activado, el editor se desplaza automáticamente para seguir el párrafo que se está narrando. Desactívalo para navegar manualmente sin interferencia del reproductor."
    },
    "errors": {
      "prefix": "Error: {{error}}",
      "unknown_directory": "Error desconocido al leer el directorio."
    }
  },
  "widget": {
    "aria": {
      "expand_player": "Expandir reproductor",
      "minimize_player": "Minimizar reproductor",
      "play_pause": "Reproducir / Pausar",
      "stop_narration": "Detener narración",
      "chapters": "Capítulos",
      "tools": "Herramientas"
    },
    "status": {
      "waiting": "Esperando narración...",
      "playing": "Narrando nota...",
      "paused": "Pausado"
    },
    "tools": {
      "summary_mode": "Modo resumen",
      "summary_mode_tooltip": "Modo resumen: Cuando está activado, el reproductor leerá solo los resaltados (==texto==) de esta nota.",
      "teleprompter_mode": "Modo Teleprompter",
      "teleprompter_mode_tooltip": "Modo Teleprompter: Cuando está activado, el editor se desplaza automáticamente con el párrafo narrado.",
      "settings": "Configuración...",
      "voice_engine": "Motor de Voz"
    }
  },
  "commands": {
    "test_piper": "Probar motor TTS (Piper)",
    "narrate_current_note": "Narrar nota actual (Obsidian Voice)",
    "toggle_play_pause": "Alternar Reproducir/Pausar (Obsidian Voice)",
    "stop_narration": "Detener narración (Obsidian Voice)",
    "toggle_highlights_only": "Obsidian Voice: Alternar lectura de resaltados (Resumen de audio)",
    "play_from_selection": "Reproducir/Narrar texto de la selección actual",
    "ribbon_narrate": "Narrar nota (Obsidian Voice)"
  },
  "notices": {
    "summary_mode": "Modo resumen de audio: {{state}}",
    "teleprompter_mode": "Modo Teleprompter: {{state}}",
    "enabled": "Activado",
    "disabled": "Desactivado",
    "narration_stopped": "Narración detenida.",
    "no_active_note": "No se encontró ninguna nota activa.",
    "empty_note": "La nota no tiene contenido para narrar.",
    "restarting": "Reiniciando...",
    "starting_narration": "Iniciando narración de la nota...",
    "missing_configuration": "Obsidian Voice: Configura la ruta de Piper y la voz en la configuración del plugin.",
    "piper_or_model_missing": "Obsidian Voice: Ejecutable de Piper o modelo ONNX no encontrado en la ruta especificada.",
    "narration_finished": "Narración completada.",
    "narration_error": "Error en la narración: {{error}}",
    "generating_audio": "Generando audio...",
    "audio_generated": "Audio generado correctamente.",
    "audio_generation_error": "Error al generar audio: {{error}}",
    "model_scan_error": "Obsidian Voice: {{error}}",
    "engine_change_delayed": "El cambio de motor se aplicará en la próxima narración.",
    "engine_changed": "Motor de voz cambiado a {{engine}}."
  },
  "errors": {
    "missing_translation": "Traducción faltante: {{key}} ({{language}})",
    "resource_guard": {
      "insufficient_disk": "Espacio en disco insuficiente. Requerido: {{required}} bytes, disponible: {{available}} bytes.",
      "incompatible_arch": "Arquitectura de procesador incompatible: {{arch}}. Arquitecturas compatibles: {{supported}}.",
      "incompatible_os": "Sistema operativo no compatible: {{os}}.",
      "manifest_signature_failed": "Falló la verificación de firma de seguridad del manifiesto. El archivo puede haber sido alterado.",
      "disk_check_timeout": "La verificación de espacio en disco superó el tiempo límite. Inténtelo de nuevo."
    }
  },
  "logs": {}
}
```

src/locales/pt.json
```
{
  "settings": {
    "language": {
      "title": "Idioma",
      "description": "Controla o idioma usado pelo Obsidian Voice.",
      "auto": "Automático (Sistema)",
      "pt": "Português",
      "en": "English",
      "es": "Español"
    },
    "marketplace": {
      "coming_soon": "Em breve"
    },
    "piper_path": {
      "title": "Caminho do executável do Piper",
      "description": "Caminho absoluto para o binário do Piper (ex: C:\\piper\\piper.exe). Os modelos .onnx serão detectados automaticamente no mesmo diretório.",
      "not_file": "O caminho fornecido não é um arquivo.",
      "missing": "O executável fornecido não existe no disco."
    },
    "voice_model": {
      "title": "Voz padrão",
      "loading": "Buscando modelos .onnx...",
      "found": "Modelos .onnx encontrados no diretório do executável do Piper.",
      "select": "- selecione um modelo -",
      "none": "Nenhum .onnx encontrado"
    },
    "highlight_color": {
      "title": "Cor de destaque",
      "description": "Cor do realce visual aplicado ao parágrafo sendo narrado.",
      "green": "Verde (Padrão)",
      "yellow": "Amarelo Classic",
      "blue": "Azul Foco",
      "purple": "Púrpura Zen",
      "orange": "Âmbar Outono"
    },
    "teleprompter": {
      "title": "Scroll automático (Teleprompter)",
      "description": "Quando ativado, o editor rola automaticamente para acompanhar o parágrafo sendo narrado. Desative para navegar manualmente sem interferência do player."
    },
    "errors": {
      "prefix": "Erro: {{error}}",
      "unknown_directory": "Erro desconhecido ao ler o diretório."
    }
  },
  "widget": {
    "aria": {
      "expand_player": "Expandir player",
      "minimize_player": "Minimizar player",
      "play_pause": "Play / Pausar",
      "stop_narration": "Parar narração",
      "chapters": "Capítulos",
      "tools": "Ferramentas"
    },
    "status": {
      "waiting": "Aguardando narração...",
      "playing": "Narrando nota...",
      "paused": "Pausado"
    },
    "tools": {
      "summary_mode": "Modo Resumo",
      "summary_mode_tooltip": "Modo Resumo: Quando ativado, o player lerá apenas os destaques (==texto==) desta nota.",
      "teleprompter_mode": "Modo Teleprompter",
      "teleprompter_mode_tooltip": "Modo Teleprompter: Quando ativado, o editor rola automaticamente acompanhando o parágrafo narrado.",
      "settings": "Configurações...",
      "voice_engine": "Motor de Voz"
    }
  },
  "commands": {
    "test_piper": "Testar Motor TTS (Piper)",
    "narrate_current_note": "Narrar Nota Atual (Obsidian Voice)",
    "toggle_play_pause": "Alternar Play/Pause (Obsidian Voice)",
    "stop_narration": "Parar Narração (Obsidian Voice)",
    "toggle_highlights_only": "Obsidian Voice: Alternar leitura de destaques (Audio-Resumo)",
    "play_from_selection": "Play/Narrate text from current selection",
    "ribbon_narrate": "Narrar nota (Obsidian Voice)"
  },
  "notices": {
    "summary_mode": "Modo Audio-Resumo: {{state}}",
    "teleprompter_mode": "Modo Teleprompter: {{state}}",
    "enabled": "Ativado",
    "disabled": "Desativado",
    "narration_stopped": "Narração interrompida.",
    "no_active_note": "Nenhuma nota ativa encontrada.",
    "empty_note": "A nota não possui conteúdo para narrar.",
    "restarting": "Recomeçando...",
    "starting_narration": "Iniciando narração da nota...",
    "missing_configuration": "Obsidian Voice: Configure o caminho do Piper e a voz nas configurações do plugin.",
    "piper_or_model_missing": "Obsidian Voice: Executável do Piper ou Modelo ONNX não encontrado no caminho especificado.",
    "narration_finished": "Narração concluída!",
    "narration_error": "Erro na narração: {{error}}",
    "generating_audio": "Gerando áudio...",
    "audio_generated": "Áudio gerado com sucesso!",
    "audio_generation_error": "Erro ao gerar áudio: {{error}}",
    "model_scan_error": "Obsidian Voice: {{error}}",
    "engine_change_delayed": "A troca de motor será aplicada na próxima narração.",
    "engine_changed": "Motor de voz alterado para {{engine}}."
  },
  "errors": {
    "missing_translation": "Tradução ausente: {{key}} ({{language}})",
    "resource_guard": {
      "insufficient_disk": "Espaço em disco insuficiente. Necessário: {{required}} bytes, disponível: {{available}} bytes.",
      "incompatible_arch": "Arquitetura de processador incompatível: {{arch}}. Arquiteturas suportadas: {{supported}}.",
      "incompatible_os": "Sistema operacional não suportado: {{os}}.",
      "manifest_signature_failed": "Falha na verificação de assinatura de segurança do manifesto. O arquivo pode ter sido adulterado.",
      "disk_check_timeout": "Verificação de espaço em disco excedeu o tempo limite. Tente novamente."
    }
  },
  "logs": {}
}
```

src/tts/circuit-breaker.ts
```
// Responsabilidades do Script
//
// 1. Bloquear temporariamente engines TTS instáveis após falhas consecutivas de geração.
// 2. Controlar a recuperação gradual de engines TTS após o período de resfriamento.

import { CircuitState } from "./types";

export class CircuitBreaker {
  private failures = 0;
  private openedAt = 0;
  private state: CircuitState = "closed";

  constructor(
    private readonly failureThreshold = 3,
    private readonly cooldownMs = 60_000
  ) {}

  getState(): CircuitState {
    if (this.state === "open" && Date.now() - this.openedAt >= this.cooldownMs) {
      this.state = "half-open";
    }
    return this.state;
  }

  canExecute(): boolean {
    return this.getState() !== "open";
  }

  recordSuccess(): void {
    this.failures = 0;
    this.state = "closed";
    this.openedAt = 0;
  }

  recordFailure(): void {
    this.failures += 1;
    if (this.failures >= this.failureThreshold) {
      this.state = "open";
      this.openedAt = Date.now();
    }
  }
}
```

src/tts/pipeline-service.ts
```
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
```

src/tts/types.ts
```
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
  speed: number;
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
```

src/types/model.ts
```
// Responsabilidades do Script
//
// 1. Definir os tipos globais de identificação e estado de instalação de modelos TTS.
// 2. Descrever a estrutura de metadados estáticos (catálogo) e persistidos (disco) dos modelos.

export type ModelId = 'piper' | 'kokoro';

export const enum InstallState {
  NOT_INSTALLED = 'NOT_INSTALLED',
  FETCHING_MANIFEST = 'FETCHING_MANIFEST',
  DOWNLOADING = 'DOWNLOADING',
  VERIFYING = 'VERIFYING',
  EXTRACTING = 'EXTRACTING',
  VALIDATING_RUNTIME = 'VALIDATING_RUNTIME',
  INSTALLING = 'INSTALLING',
  INSTALLED = 'INSTALLED',
  FAILED = 'FAILED',
  REMOVING = 'REMOVING',
  UPDATING = 'UPDATING',
  ROLLBACK = 'ROLLBACK',
}

export interface ModelCatalogEntry {
  id: ModelId;
  displayName: string;
  description: string;
  estimatedRamMB: number;
  estimatedDiskMB: number;
  tags: string[];
}

export interface InstalledModelMetadata {
  id: ModelId;
  activeVersion: string;
  absolutePath: string;
  installedAt: number;
}
```

src/services/model/archive-manager.ts
```
// Responsabilidades do Script
//
// 1. Extrair arquivos .zip e .tar.gz de forma segura com proteção contra Zip Slip.
// 2. Validar cada entrada do archive para impedir escrita fora do diretório destino.

import * as path from 'path';
import * as fs from 'fs';
import * as zlib from 'zlib';
import * as tar from 'tar-stream';
import AdmZip = require('adm-zip');

function isPathSafe(destFolder: string, filePathInArchive: string): boolean {
  const resolved = path.resolve(destFolder, filePathInArchive);
  // Normaliza ambos para evitar falsos negativos por separadores mistos
  const normalizedDest = path.normalize(destFolder) + path.sep;
  const normalizedResolved = path.normalize(resolved);
  return normalizedResolved.startsWith(normalizedDest);
}

export class ArchiveManager {
  async extract(archivePath: string, destFolder: string): Promise<void> {
    const ext = path.extname(archivePath).toLowerCase();

    if (ext === '.zip') {
      await this.extractZip(archivePath, destFolder);
    } else if (ext === '.gz' || ext === '.tgz') {
      await this.extractTarGz(archivePath, destFolder);
    } else {
      throw new Error(`Formato de archive não suportado: ${ext}`);
    }
  }

  private async extractZip(archivePath: string, destFolder: string): Promise<void> {
    const zip = new AdmZip(archivePath);
    const entries = zip.getEntries();

    for (const entry of entries) {
      if (entry.isDirectory) continue;

      if (!isPathSafe(destFolder, entry.entryName)) {
        throw new Error('Zip Slip detectado: tentativa de escrita fora do diretório destino.');
      }

      const targetPath = path.resolve(destFolder, entry.entryName);
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.writeFileSync(targetPath, entry.getData());
    }
  }

  private async extractTarGz(archivePath: string, destFolder: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const extract = tar.extract();
      const errors: string[] = [];

      extract.on('entry', (header, stream, next) => {
        if (header.type === 'directory') {
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

        const targetPath = path.resolve(destFolder, entryName);
        fs.mkdirSync(path.dirname(targetPath), { recursive: true });
        const writeStream = fs.createWriteStream(targetPath);
        stream.pipe(writeStream);
        writeStream.on('finish', next);
        writeStream.on('error', (err) => {
          errors.push(err.message);
          next();
        });
      });

      extract.on('finish', () => {
        if (errors.length > 0) {
          reject(new Error(errors.join('; ')));
        } else {
          resolve();
        }
      });

      extract.on('error', (err) => reject(err));

      fs.createReadStream(archivePath)
        .pipe(zlib.createGunzip())
        .pipe(extract);
    });
  }

  isPathSafe(destFolder: string, filePathInArchive: string): boolean {
    return isPathSafe(destFolder, filePathInArchive);
  }
}
```

src/services/model/download-manager.ts
```
// Responsabilidades do Script
//
// 1. Gerenciar downloads resilientes de arquivos grandes via HTTPS com suporte a Range Requests.
// 2. Emitir eventos de progresso em tempo real para a UI durante o download.
// 3. Validar integridade criptográfica SHA-256 do arquivo finalizado via stream.

import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';
import * as crypto from 'crypto';
import * as path from 'path';
import { EventEmitter } from 'events';
import type { IncomingMessage } from 'http';

const MAX_REDIRECTS = 5;
const MAX_RETRIES = 3;
const BASE_RETRY_DELAY_MS = 1000;

export interface DownloadProgress {
  bytesDownloaded: number;
  bytesTotal: number;
  percent: number;
}

export interface DownloadOptions {
  url: string;
  destPath: string;
  expectedSha256: string;
  signal?: AbortSignal;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFileSize(filePath: string): number {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

function isAbortError(err: unknown): boolean {
  return err instanceof Error && err.name === 'AbortError';
}

function resolveResponse(
  url: string,
  rangeStart: number,
  signal: AbortSignal | undefined,
  redirectsLeft: number,
): Promise<IncomingMessage> {
  return new Promise((resolve, reject) => {
    let settled = false;

    const parsed = new URL(url);
    const lib = parsed.protocol === 'https:' ? https : http;

    const headers: Record<string, string> = {};
    if (rangeStart > 0) {
      headers['Range'] = `bytes=${rangeStart}-`;
    }

    const req = lib.get(
      {
        hostname: parsed.hostname,
        port: parsed.port || undefined,
        path: parsed.pathname + parsed.search,
        headers,
      },
      (res) => {
        const { statusCode, headers: resHeaders } = res;

        const isRedirect = [301, 302, 307, 308].includes(statusCode!);
        if (isRedirect && resHeaders.location) {
          res.resume();
          if (redirectsLeft <= 0) {
            reject(new Error('Limite máximo de redirecionamentos HTTP atingido.'));
            return;
          }
          resolveResponse(resHeaders.location, rangeStart, signal, redirectsLeft - 1)
            .then(resolve)
            .catch(reject);
          return;
        }

        resolve(res);
      },
    );

    req.on('error', (err) => {
      if (!settled) reject(err);
    });

    if (signal) {
      const onAbort = () => {
        settled = true;
        req.destroy();
        const err = new Error('Download cancelado');
        err.name = 'AbortError';
        reject(err);
      };
      signal.addEventListener('abort', onAbort, { once: true });
    }
  });
}

async function attemptDownload(
  url: string,
  partPath: string,
  signal: AbortSignal | undefined,
  onProgress: (p: DownloadProgress) => void,
): Promise<void> {
  await fs.promises.mkdir(path.dirname(partPath), { recursive: true });

  const existingBytes = getFileSize(partPath);
  const response = await resolveResponse(url, existingBytes, signal, MAX_REDIRECTS);
  const { statusCode, headers } = response;

  const isResume = statusCode === 206 && existingBytes > 0;

  if (!isResume && existingBytes > 0) {
    await fs.promises.unlink(partPath).catch(() => {});
  }

  const writeStream = fs.createWriteStream(partPath, { flags: isResume ? 'a' : 'w' });
  const contentLength = parseInt(headers['content-length'] ?? '0', 10);
  const totalBytes = isResume ? existingBytes + contentLength : contentLength;
  let downloadedBytes = isResume ? existingBytes : 0;

  await new Promise<void>((resolve, reject) => {
    response.on('data', (chunk: Buffer) => {
      downloadedBytes += chunk.length;
      const percent = totalBytes > 0 ? Math.round((downloadedBytes / totalBytes) * 100) : 0;
      onProgress({ bytesDownloaded: downloadedBytes, bytesTotal: totalBytes, percent });
    });

    response.on('error', (err) => {
      writeStream.destroy();
      reject(err);
    });

    writeStream.on('error', reject);
    writeStream.on('finish', resolve);

    response.pipe(writeStream);
  });
}

function computeSha256(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('data', (chunk) => hash.update(Buffer.from(chunk)));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

export class DownloadManager extends EventEmitter {
  async download(options: DownloadOptions): Promise<void> {
    const { url, destPath, expectedSha256, signal } = options;
    const partPath = `${destPath}.part`;

    const onProgress = (progress: DownloadProgress) => this.emit('progress', progress);

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        if (signal?.aborted) {
          const err = new Error('Download cancelado antes de iniciar');
          err.name = 'AbortError';
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
          err,
        );
        await sleep(delay);
      }
    }

    console.log('[DownloadManager] Download concluído. Verificando integridade SHA-256...');
    const actualSha256 = await computeSha256(partPath);

    if (actualSha256 !== expectedSha256) {
      await fs.promises.unlink(partPath).catch(() => {});
      throw new Error(
        `[DownloadManager] Falha de integridade: esperado ${expectedSha256}, obtido ${actualSha256}. Arquivo corrompido removido.`,
      );
    }

    await fs.promises.rename(partPath, destPath);
    console.log(`[DownloadManager] Arquivo verificado e salvo em: ${destPath}`);
  }
}
```

src/services/model/install-state-machine.ts
```
// Responsabilidades do Script
//
// 1. Controlar as transições válidas de estado de instalação de modelos.
// 2. Impedir concorrência bloqueando novas instalações para o mesmo modelo.

import { InstallState } from '../../types/model';

const VALID_TRANSITIONS: Record<InstallState, InstallState[]> = {
  [InstallState.NOT_INSTALLED]: [
    InstallState.FETCHING_MANIFEST,
  ],
  [InstallState.FETCHING_MANIFEST]: [
    InstallState.DOWNLOADING,
    InstallState.FAILED,
  ],
  [InstallState.DOWNLOADING]: [
    InstallState.VERIFYING,
    InstallState.FAILED,
  ],
  [InstallState.VERIFYING]: [
    InstallState.EXTRACTING,
    InstallState.FAILED,
  ],
  [InstallState.EXTRACTING]: [
    InstallState.VALIDATING_RUNTIME,
    InstallState.FAILED,
  ],
  [InstallState.VALIDATING_RUNTIME]: [
    InstallState.INSTALLING,
    InstallState.FAILED,
  ],
  [InstallState.INSTALLING]: [
    InstallState.INSTALLED,
    InstallState.FAILED,
  ],
  [InstallState.INSTALLED]: [
    InstallState.UPDATING,
    InstallState.REMOVING,
  ],
  [InstallState.FAILED]: [
    InstallState.FETCHING_MANIFEST,
    InstallState.REMOVING,
  ],
  [InstallState.REMOVING]: [
    InstallState.NOT_INSTALLED,
    InstallState.FAILED,
  ],
  [InstallState.UPDATING]: [
    InstallState.DOWNLOADING,
    InstallState.FAILED,
  ],
  [InstallState.ROLLBACK]: [
    InstallState.INSTALLED,
    InstallState.FAILED,
  ],
};

export class InstallStateMachine {
  private currentState: InstallState;
  private onStateChange?: (state: InstallState) => void;

  constructor(initialState: InstallState = InstallState.NOT_INSTALLED) {
    this.currentState = initialState;
  }

  get state(): InstallState {
    return this.currentState;
  }

  setOnStateChange(callback: (state: InstallState) => void): void {
    this.onStateChange = callback;
  }

  transitionTo(nextState: InstallState): void {
    const allowed = VALID_TRANSITIONS[this.currentState];
    if (!allowed || !allowed.includes(nextState)) {
      throw new Error(
        `Transição inválida: ${this.currentState} → ${nextState}`
      );
    }

    this.currentState = nextState;
    this.onStateChange?.(nextState);
  }

  isInstalling(): boolean {
    return (
      this.currentState !== InstallState.NOT_INSTALLED &&
      this.currentState !== InstallState.INSTALLED &&
      this.currentState !== InstallState.FAILED
    );
  }
}
```

src/services/model/manifest-models.ts
```
// Responsabilidades do Script
//
// 1. Fornecer o manifesto local de fallback dos modelos TTS para quando o download remoto falhar.

import type { ModelManifest } from './manifest-service';

export const FALLBACK_MANIFEST: ModelManifest = {
  version: '1.0.0',
  models: {
    piper: {
      platforms: {
        'windows-x64': {
          url: 'https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_windows_amd64.zip',
          sha256: 'f3c58906402b24f3a96d92145f58acba6d86c9b5db896d207f78dc80811efcea',
        },
        'macos-arm64': {
          url: 'https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_macos_aarch64.tar.gz',
          sha256: '6b1eb03b3735946cb35216e063e7eebcc33a6bbf5dd96ec0217959bf1cdcb0cc',
        },
        'macos-x64': {
          url: 'https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_macos_x64.tar.gz',
          sha256: 'ced85c0a3df13945b1e623b878a48fdc2854d5c485b4b67f62857cf551deaf8b',
        },
        'linux-x64': {
          url: 'https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_linux_x86_64.tar.gz',
          sha256: 'a50cb45f355b7af1f6d758c1b360717877ba0a398cc8cbe6d2a7a3a26e225992',
        },
        'linux-arm64': {
          url: 'https://github.com/rhasspy/piper/releases/download/2023.11.14-2/piper_linux_aarch64.tar.gz',
          sha256: 'fea0fd2d87c54dbc7078d0f878289f404bd4d6eea6e7444a77835d1537ab88eb',
        },
      },
    },
    kokoro: {
      platforms: {
        'windows-x64': {
          url: 'https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-windows-x64.zip',
          sha256: '0000000000000000000000000000000000000000000000000000000000000000',
        },
        'macos-arm64': {
          url: 'https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-macos-arm64.zip',
          sha256: '0000000000000000000000000000000000000000000000000000000000000000',
        },
        'linux-x64': {
          url: 'https://github.com/ericrocha001/obsidian_voice/releases/download/models/kokoro-linux-x64.zip',
          sha256: '0000000000000000000000000000000000000000000000000000000000000000',
        },
      },
    },
  },
};
```

src/services/model/manifest-service.ts
```
// Responsabilidades do Script
//
// 1. Realizar o download e parsing seguro do manifesto remoto de distribuição de modelos.
// 2. Validar a estrutura do manifesto com Type Guard.
// 3. Verificar a assinatura criptográfica do manifesto remoto para garantir integridade.
// 4. Fallback para cópia local embarcada quando o download remoto ou a verificação falhar.

import { requestUrl } from 'obsidian';
import * as crypto from 'crypto';
import { FALLBACK_MANIFEST } from './manifest-models';

export type SupportedPlatform = 'windows-x64' | 'macos-arm64' | 'macos-x64' | 'linux-x64' | 'linux-arm64';

export interface PlatformEntry {
  url: string;
  sha256: string;
}

export interface ModelManifestEntry {
  platforms?: Partial<Record<SupportedPlatform, PlatformEntry>>;
}

export interface ModelManifest {
  version: string;
  models: Record<string, ModelManifestEntry>;
}

/**
 * Chave pública RSA de teste para verificação de assinatura do manifesto.
 * ATENÇÃO: Substitua por sua chave pública de produção antes do deploy.
 * Gere o par com: openssl genrsa -out private.pem 2048 && openssl rsa -in private.pem -pubout -out public.pem
 */
const TEST_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0Z3VS5JJcds3xHn/ygWep4
PAtEsHnXMSBMzMfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGQQIDAQAB
-----END PUBLIC KEY-----`;

const SUPPORTED_PLATFORMS: SupportedPlatform[] = [
  'windows-x64',
  'macos-arm64',
  'macos-x64',
  'linux-x64',
  'linux-arm64',
];

function isPlatformEntry(value: unknown): value is PlatformEntry {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  return typeof obj.url === 'string' && typeof obj.sha256 === 'string';
}

function isModelManifestEntry(value: unknown): value is ModelManifestEntry {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  if (typeof obj.platforms !== 'object' || obj.platforms === null) return true;
  const platforms = obj.platforms as Record<string, unknown>;
  return SUPPORTED_PLATFORMS.every((p) => !(p in platforms) || isPlatformEntry(platforms[p]));
}

function isModelManifest(value: unknown): value is ModelManifest {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  if (typeof obj.version !== 'string') return false;
  if (typeof obj.models !== 'object' || obj.models === null) return false;
  const models = obj.models as Record<string, unknown>;
  return Object.values(models).every((m) => isModelManifestEntry(m));
}

function verifySignature(content: string, signatureBase64: string): boolean {
  try {
    const signature = Buffer.from(signatureBase64.trim(), 'base64');
    return crypto.verify(
      'RSA-SHA256',
      Buffer.from(content, 'utf-8'),
      TEST_PUBLIC_KEY,
      signature,
    );
  } catch (err) {
    console.error('[ManifestService] Erro ao executar verificação criptográfica:', err);
    return false;
  }
}

export class ManifestService {
  private manifestUrl: string;

  constructor(manifestUrl: string) {
    this.manifestUrl = manifestUrl;
  }

  async fetchManifest(): Promise<ModelManifest> {
    try {
      const sigUrl = this.manifestUrl.replace(/\.json$/, '.sig');

      const [manifestResponse, sigResponse] = await Promise.all([
        requestUrl({ url: this.manifestUrl, method: 'GET', contentType: 'application/json' }),
        requestUrl({ url: sigUrl, method: 'GET' }),
      ]);

      const rawText: string = manifestResponse.text;
      const signatureBase64: string = sigResponse.text;

      if (!verifySignature(rawText, signatureBase64)) {
        console.error('[ManifestService] SEGURANÇA: Assinatura do manifesto remoto inválida. Abortando uso remoto. Usando fallback local.');
        return FALLBACK_MANIFEST;
      }

      const parsed: unknown = JSON.parse(rawText);

      if (!isModelManifest(parsed)) {
        console.warn('[ManifestService] Manifesto remoto com estrutura inválida. Usando fallback local.');
        return FALLBACK_MANIFEST;
      }

      console.log('[ManifestService] Manifesto remoto verificado e obtido com sucesso.');
      return parsed;
    } catch (err) {
      console.warn('[ManifestService] Falha ao baixar manifesto remoto. Usando fallback local.', err);
      return FALLBACK_MANIFEST;
    }
  }
}
```

src/services/model/model-catalog.ts
```
// Responsabilidades do Script
//
// 1. Expor o catálogo estático de modelos TTS com metadados para exibição na UI.

import type { ModelCatalogEntry } from '../../types/model';

const MODEL_CATALOG: Record<string, ModelCatalogEntry> = {
  piper: {
    id: 'piper',
    displayName: 'Piper',
    description: 'Motor TTS local rápido e leve. Ideal para narração diária com baixo consumo de recursos.',
    estimatedRamMB: 256,
    estimatedDiskMB: 200,
    tags: ['rápido', 'leve', 'local'],
  },
  kokoro: {
    id: 'kokoro',
    displayName: 'Kokoro',
    description: 'Motor TTS com vozes naturais e qualidade premium. Consume mais recursos, mas entrega áudio mais realista.',
    estimatedRamMB: 1024,
    estimatedDiskMB: 2000,
    tags: ['qualidade', 'premium', 'vozes naturais'],
  },
};

export function getModelCatalog(): Record<string, ModelCatalogEntry> {
  return MODEL_CATALOG;
}

export function getModelEntry(id: string): ModelCatalogEntry | undefined {
  return MODEL_CATALOG[id];
}
```

src/services/model/model-installer.ts
```
// Responsabilidades do Script
//
// 1. Orquestrar o fluxo de extração e staging para instalação atômica de modelos.
// 2. Controlar as transições de estado da instalação com proteção contra concorrência.
// 3. Persistir metadados do modelo instalado via callback de salvamento.

import { ArchiveManager } from './archive-manager';
import { StagingManager } from './staging-manager';
import { InstallStateMachine } from './install-state-machine';
import { InstallState } from '../../types/model';
import type { ModelId, InstalledModelMetadata } from '../../types/model';

export interface InstallCallbacks {
  onStateChange?: (modelId: ModelId, state: InstallState) => void;
  onInstalled?: (modelId: ModelId, metadata: InstalledModelMetadata) => void;
  onRemoved?: (modelId: ModelId) => void;
}

export class ModelInstaller {
  private archiveManager: ArchiveManager;
  private stagingManager: StagingManager;
  private machines: Map<ModelId, InstallStateMachine> = new Map();
  private callbacks: InstallCallbacks;

  constructor(stagingRoot: string, callbacks: InstallCallbacks = {}) {
    this.archiveManager = new ArchiveManager();
    this.stagingManager = new StagingManager(stagingRoot);
    this.callbacks = callbacks;
  }

  getMachine(modelId: ModelId): InstallStateMachine {
    let machine = this.machines.get(modelId);
    if (!machine) {
      machine = new InstallStateMachine();
      machine.setOnStateChange((state) => this.callbacks.onStateChange?.(modelId, state));
      this.machines.set(modelId, machine);
    }
    return machine;
  }

  async install(modelId: ModelId, archivePath: string, destDir: string, version: string): Promise<void> {
    const machine = this.getMachine(modelId);

    try {
      machine.transitionTo(InstallState.VERIFYING);
      machine.transitionTo(InstallState.EXTRACTING);

      const stagingDir = await this.stagingManager.prepareStaging(modelId);

      machine.transitionTo(InstallState.VALIDATING_RUNTIME);
      machine.transitionTo(InstallState.INSTALLING);

      await this.archiveManager.extract(archivePath, stagingDir);
      await this.stagingManager.promoteStaging(stagingDir, destDir);

      machine.transitionTo(InstallState.INSTALLED);

      const metadata: InstalledModelMetadata = {
        id: modelId,
        activeVersion: version,
        absolutePath: destDir,
        installedAt: Date.now(),
      };

      this.callbacks.onInstalled?.(modelId, metadata);
    } catch (err) {
      machine.transitionTo(InstallState.FAILED);
      throw err;
    }
  }

  async remove(modelId: ModelId, destDir: string): Promise<void> {
    const machine = this.getMachine(modelId);

    if (machine.isInstalling()) {
      throw new Error(`Remoção bloqueada: instalação em andamento para o modelo: ${modelId}`);
    }

    machine.transitionTo(InstallState.REMOVING);

    try {
      const { rm } = await import('fs/promises');
      await rm(destDir, { recursive: true, force: true });
      machine.transitionTo(InstallState.NOT_INSTALLED);
      this.callbacks.onRemoved?.(modelId);
    } catch (err) {
      machine.transitionTo(InstallState.FAILED);
      throw err;
    }
  }
}
```

src/services/model/model-management-service.ts
```
// Responsabilidades do Script
//
// 1. Fornecer API pública unificada (Facade) para instalação e remoção de modelos TTS.
// 2. Orquestrar ManifestService, ResourceGuard, DownloadManager e ModelInstaller.
// 3. Persistir metadados de modelos instalados via callback no data.json do plugin.
// 4. Consultar catálogo de vozes do Piper no HuggingFace com cache.

import * as fs from 'fs/promises';
import * as path from 'path';
import * as os from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';
import { requestUrl } from 'obsidian';
import { ManifestService, type ModelManifest } from './manifest-service';
import { ResourceGuard } from './resource-guard';
import { DownloadManager } from './download-manager';
import { ModelInstaller, type InstallCallbacks } from './model-installer';
import { getModelEntry } from './model-catalog';
import { InstallState } from '../../types/model';
import type { ModelId, InstalledModelMetadata } from '../../types/model';

const MANIFEST_URL = 'https://raw.githubusercontent.com/ericrocha001/obsidian_voice/main/manifest-models.json';
const execAsync = promisify(exec);

interface SettingsRef {
  models: Record<string, InstalledModelMetadata>;
  saveSettings: () => Promise<void>;
}

export interface PiperVoiceEntry {
  key: string;
  name: string;
  language: {
    code: string;
    family: string;
    region: string;
    name_native: string;
    name_english: string;
    country_english: string;
  };
  quality: string;
  num_speakers: number;
  speaker_id_map?: Record<string, number>;
  files: Record<string, { size_bytes: number; md5_digest: string }>;
  aliases: string[];
}

export class ModelManagementService {
  private manifestService: ManifestService;
  private resourceGuard: ResourceGuard;
  private downloadManager: DownloadManager;
  private installer: ModelInstaller;
  private settingsRef: SettingsRef;
  private basePath: string;
  private cachedManifest: ModelManifest | null = null;
  private voicesCache: PiperVoiceEntry[] | null = null;

  constructor(basePath: string, settingsRef: SettingsRef) {
    this.basePath = basePath;
    this.settingsRef = settingsRef;

    const binDir = path.join(basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin');

    this.manifestService = new ManifestService(MANIFEST_URL);
    this.resourceGuard = new ResourceGuard(basePath);
    this.downloadManager = new DownloadManager();

    const callbacks: InstallCallbacks = {
      onInstalled: (modelId, metadata) => {
        this.settingsRef.models[modelId] = metadata;
        this.settingsRef.saveSettings().catch((err) =>
          console.error('[ModelManagementService] Erro ao salvar metadados:', err)
        );
      },
      onRemoved: (modelId) => {
        delete this.settingsRef.models[modelId];
        this.settingsRef.saveSettings().catch((err) =>
          console.error('[ModelManagementService] Erro ao salvar remoção:', err)
        );
      },
    };

    this.installer = new ModelInstaller(binDir, callbacks);
  }

  isInstalled(modelId: ModelId): boolean {
    return !!this.settingsRef.models[modelId];
  }

  isInstalling(modelId: ModelId): boolean {
    return this.installer.getMachine(modelId).isInstalling();
  }

  async ensureManifest(): Promise<ModelManifest> {
    if (!this.cachedManifest) {
      this.cachedManifest = await this.manifestService.fetchManifest();
    }
    return this.cachedManifest;
  }

  async fetchPiperVoices(): Promise<void> {
    if (this.voicesCache) return;

    const url = 'https://huggingface.co/rhasspy/piper-voices/resolve/main/voices.json';
    const res = await requestUrl({ url, method: 'GET', contentType: 'application/json' });
    const parsed = JSON.parse(res.text) as Record<string, PiperVoiceEntry>;
    this.voicesCache = Object.values(parsed).sort((a, b) => a.key.localeCompare(b.key));
  }

  async install(
    modelId: ModelId,
    onStateChange: (state: InstallState) => void,
    onProgress?: (percent: number) => void,
  ): Promise<void> {
    if (this.isInstalled(modelId) && !this.isInstalling(modelId)) {
      throw new Error(`Modelo "${modelId}" já está instalado.`);
    }

    const catalogEntry = getModelEntry(modelId);
    if (!catalogEntry) {
      throw new Error(`Modelo "${modelId}" não encontrado no catálogo.`);
    }

    const machine = this.installer.getMachine(modelId);
    machine.setOnStateChange((state) => {
      this.installer.getMachine(modelId).setOnStateChange(() => {});
      onStateChange(state);
    });

    machine.transitionTo(InstallState.FETCHING_MANIFEST);
    onStateChange(InstallState.FETCHING_MANIFEST);
    machine.setOnStateChange(onStateChange);

    const manifest = await this.ensureManifest();
    const modelEntry = manifest.models[modelId];
    if (!modelEntry) {
      machine.transitionTo(InstallState.FAILED);
      throw new Error(`Modelo "${modelId}" não encontrado no manifesto.`);
    }

    const platformKey = this.resolvePlatformKey() as 'windows-x64' | 'macos-arm64' | 'linux-x64' | 'macos-x64' | 'linux-arm64';
    const platforms = modelEntry.platforms || {};
    const platformEntry = platforms[platformKey];
    if (!platformEntry) {
      machine.transitionTo(InstallState.FAILED);
      throw new Error(`Plataforma "${platformKey}" não suportada para o modelo "${modelId}".`);
    }

    const envCheck = await this.resourceGuard.validateEnvironment(
      modelId,
      catalogEntry.estimatedDiskMB * 1024 * 1024,
    );
    if (!envCheck.success) {
      machine.transitionTo(InstallState.FAILED);
      throw new Error(envCheck.error);
    }

    machine.transitionTo(InstallState.DOWNLOADING);
    onStateChange(InstallState.DOWNLOADING);

    const tmpDir = path.join(os.tmpdir(), 'obsidian-voice-downloads');
    const archiveName = `${modelId}-${platformKey}.zip`;
    const archivePath = path.join(tmpDir, archiveName);

    if (onProgress) {
      const onDownloadProgress = (progress: { percent: number }) => onProgress(progress.percent);
      this.downloadManager.on('progress', onDownloadProgress);
    }

    try {
      await this.downloadManager.download({
        url: platformEntry.url,
        destPath: archivePath,
        expectedSha256: platformEntry.sha256,
      });
    } finally {
      this.downloadManager.removeAllListeners('progress');
    }

    const destDir = path.join(this.basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin', modelId);

    await this.installer.install(modelId, archivePath, destDir, manifest.version);

    // Runtime Registration: localizar binário e validar saúde
    await this.registerRuntime(modelId);
  }

  async installVoice(voice: PiperVoiceEntry, onProgress?: (percent: number) => void): Promise<void> {
    const piperPathSetting = this.settingsRef.models.piper?.absolutePath;
    if (!piperPathSetting) {
      throw new Error('Piper não está instalado.');
    }

    const destDir = path.dirname(piperPathSetting);
    const base = 'https://huggingface.co/rhasspy/piper-voices/resolve/main/';

    const tasks: { url: string; dest: string }[] = [];
    for (const [rel, meta] of Object.entries(voice.files)) {
      const fileName = path.basename(rel);
      const dest = path.join(destDir, fileName);
      tasks.push({ url: base + rel, dest });
    }

    for (const task of tasks) {
      await this.downloadManager.download({
        url: task.url,
        destPath: task.dest,
        expectedSha256: '',
      });
      if (onProgress) onProgress(100);
    }
  }

  async remove(modelId: ModelId): Promise<void> {
    if (!this.isInstalled(modelId)) {
      throw new Error(`Modelo "${modelId}" não está instalado.`);
    }

    const destDir = path.join(this.basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin', modelId);
    await this.installer.remove(modelId, destDir);
  }

  private resolvePlatformKey(): string {
    const arch = process.arch === 'arm64' ? 'arm64' : 'x64';
    if (process.platform === 'win32') return `windows-${arch}`;
    if (process.platform === 'darwin') return `macos-${arch}`;
    return `linux-${arch}`;
  }

  private async findPiperBinary(binDir: string): Promise<string> {
    const candidates: string[] = process.platform === 'win32' ? ['piper.exe'] : ['piper'];

    async function walk(dir: string): Promise<string | null> {
      let entries: { name: string; isDirectory: () => boolean }[] = [];
      try {
        entries = await fs.readdir(dir, { withFileTypes: true });
      } catch {
        return null;
      }
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          const found = await walk(full);
          if (found) return found;
        } else if (candidates.includes(entry.name)) {
          return full;
        }
      }
      return null;
    }

    const found = await walk(binDir);
    if (!found) throw new Error('Binário do Piper não encontrado após instalação.');
    return found;
  }

  private async healthcheckPiper(piperPath: string): Promise<void> {
    const run = async () => {
      await execAsync(`"${piperPath}" --help`, { timeout: 120000 });
    };

    try {
      await run();
    } catch (err: any) {
      const code = err?.code ?? -1;
      if (process.platform !== 'win32' && code === 'EACCES') {
        await fs.chmod(piperPath, 0o755);
        await run();
        return;
      }
      throw new Error(`Healthcheck do Piper falhou: ${err?.message || String(err)}`);
    }
  }

  private async registerRuntime(modelId: ModelId): Promise<void> {
    if (modelId !== 'piper') return;

    const binDir = path.join(this.basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin', 'piper');
    const piperPath = await this.findPiperBinary(binDir);
    await this.healthcheckPiper(piperPath);

    this.settingsRef.models.piper = {
      id: 'piper',
      activeVersion: 'official-2023.11.14-2',
      absolutePath: piperPath,
      installedAt: Date.now(),
    } as any;

    await this.settingsRef.saveSettings();
  }
}
```

src/services/model/resource-guard.ts
```
// Responsabilidades do Script
//
// 1. Verificar espaço livre em disco da partição do Vault via subprocesso nativo não-bloqueante.
// 2. Validar plataforma e arquitetura do sistema operacional contra listas de suporte declaradas.
// 3. Orquestrar a validação completa de ambiente para um modelo antes de iniciar qualquer download.

import { exec } from 'child_process';
import * as fs from 'fs';
import type { ModelId } from '../../types/model';

const TIMEOUT_MS = 3000;

function execWithTimeout(command: string, cwd: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      controller.abort();
      reject(new Error(`Comando excedeu o timeout de ${TIMEOUT_MS}ms: ${command}`));
    }, TIMEOUT_MS);

    exec(command, { cwd, signal: controller.signal }, (error, stdout) => {
      clearTimeout(timer);
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout.trim());
    });
  });
}

async function getDiskFreeBytes(vaultPath: string): Promise<number> {
  const safeCwd = (await fs.promises.access(vaultPath).then(() => vaultPath).catch(() => process.cwd())) || process.cwd();

  if (process.platform === 'win32') {
    const output = await execWithTimeout(
      'powershell -Command "(Get-Item -Path .).PSDrive.Free"',
      safeCwd,
    );
    const bytes = parseInt(output, 10);
    if (isNaN(bytes)) throw new Error(`Saída inesperada do PowerShell: "${output}"`);
    return bytes;
  }

  // macOS e Linux
  const output = await execWithTimeout('df -k .', safeCwd);
  const lines = output.split('\n');
  const dataLine = lines[1];
  if (!dataLine) throw new Error(`Saída inesperada do df: "${output}"`);
  const parts = dataLine.trim().split(/\s+/);
  // Coluna 3 (índice 3) = blocos disponíveis em kilobytes
  const availableKb = parseInt(parts[3], 10);
  if (isNaN(availableKb)) throw new Error(`Não foi possível parsear espaço disponível: "${dataLine}"`);
  return availableKb * 1024;
}

export class ResourceGuard {
  private vaultPath: string;

  constructor(vaultPath: string) {
    this.vaultPath = vaultPath;
  }

  async checkDiskSpace(requiredBytes: number): Promise<boolean> {
    const freeBytes = await getDiskFreeBytes(this.vaultPath);
    console.log(`[ResourceGuard] Espaço livre: ${freeBytes} bytes | Necessário: ${requiredBytes} bytes`);
    return freeBytes >= requiredBytes;
  }

  checkPlatformAndArch(supportedOS: string[], supportedArch: string[]): boolean {
    const osOk = supportedOS.includes(process.platform);
    const archOk = supportedArch.includes(process.arch);
    console.log(`[ResourceGuard] Plataforma: ${process.platform} (ok=${osOk}) | Arch: ${process.arch} (ok=${archOk})`);
    return osOk && archOk;
  }

  async validateEnvironment(
    modelId: ModelId,
    requiredBytes: number,
  ): Promise<{ success: boolean; error?: string }> {
    const platformOk = this.checkPlatformAndArch(
      ['win32', 'darwin', 'linux'],
      ['x64', 'arm64'],
    );

    if (!platformOk) {
      const msg = `Modelo "${modelId}": plataforma (${process.platform}/${process.arch}) não suportada.`;
      console.error(`[ResourceGuard] ${msg}`);
      return { success: false, error: msg };
    }

    try {
      const diskOk = await this.checkDiskSpace(requiredBytes);
      if (!diskOk) {
        const msg = `Modelo "${modelId}": espaço em disco insuficiente. Necessário: ${requiredBytes} bytes.`;
        console.error(`[ResourceGuard] ${msg}`);
        return { success: false, error: msg };
      }
    } catch (err) {
      const msg = `Modelo "${modelId}": falha na verificação de disco — ${err instanceof Error ? err.message : String(err)}`;
      console.error(`[ResourceGuard] ${msg}`);
      return { success: false, error: msg };
    }

    console.log(`[ResourceGuard] Ambiente validado com sucesso para o modelo "${modelId}".`);
    return { success: true };
  }
}
```

src/services/model/staging-manager.ts
```
// Responsabilidades do Script
//
// 1. Gerenciar o diretório temporário .staging para instalação atômica de modelos.
// 2. Promover o diretório de staging para o destino final com rename atômico.
// 3. Remover resíduos de staging em caso de falha ou abortamento.

import * as path from 'path';
import * as fs from 'fs/promises';
import type { ModelId } from '../../types/model';

export class StagingManager {
  private stagingRoot: string;

  constructor(stagingRoot: string) {
    this.stagingRoot = stagingRoot;
  }

  async prepareStaging(modelId: ModelId): Promise<string> {
    const stagingDir = path.join(this.stagingRoot, '.staging', `${modelId}-temp`);
    await fs.mkdir(stagingDir, { recursive: true });

    // Remove conteúdo existente sem remover o diretório raiz
    const entries = await fs.readdir(stagingDir);
    await Promise.all(
      entries.map((entry) =>
        fs.rm(path.join(stagingDir, entry), { recursive: true, force: true })
      )
    );

    return stagingDir;
  }

  async promoteStaging(stagingDir: string, destDir: string): Promise<void> {
    // Remove o destino antigo se existir
    await fs.rm(destDir, { recursive: true, force: true });
    // Rename atômico: staging → destino
    await fs.rename(stagingDir, destDir);
  }

  async cleanupStaging(stagingDir: string): Promise<void> {
    await fs.rm(stagingDir, { recursive: true, force: true });
  }
}
```

src/tts/engine/engine-factory.ts
```
// Responsabilidades do Script
//
// 1. Instanciar o motor TTS correto com base no identificador da engine ativa.
// 2. Desacoplar o main.ts da criação direta de classes de motor específicas.

import { TTSEngine } from "../types";
import { PiperEngine, PiperEngineOptions } from "./piper-engine";
import { KokoroEngine, KokoroEngineOptions } from "./kokoro-engine";
import { VoiceLogger } from "../../logger";

export interface EngineFactoryOptions {
  ttsEngine: 'piper' | 'kokoro';
  piperPath: string;
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
      selectedVoice: options.selectedVoice,
      basePath: options.basePath,
      logger: options.logger,
    };
    return new PiperEngine(piperOptions);
  }
}
```

src/tts/engine/engine-registry.ts
```
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
```

src/tts/engine/kokoro-engine.ts
```
// Responsabilidades do Script
//
// 1. Adaptar o motor Kokoro ao contrato interno de engines TTS.
// 2. Validar caminhos do executável e do modelo de voz usados pelo Kokoro.
// 3. Criar sessões de geração de áudio do Kokoro para o pipeline de narração.

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
import { VoiceLogger } from "../../logger";

export interface KokoroEngineOptions {
  kokoroPath: string;
  selectedVoice: string;
  basePath?: string;
  logger: VoiceLogger;
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
    return new KokoroEngineSession(this, new SubprocessRuntime(this.options.logger));
  }

  buildCommand(
    text: string,
    voice: string,
    outputFile: string,
    speed: number,
  ): { command: string; cwd?: string } {
    const resolvedKokoro = this.resolveKokoroPath();
    return {
      command: `"${resolvedKokoro}" --text "${text}" --voice "${voice}" --speed ${speed} --output "${outputFile}"`,
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
      request.speed,
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
```

src/tts/engine/piper-engine.ts
```
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
```

src/tts/runtime/subprocess-runtime.ts
```
// Responsabilidades do Script
//
// 1. Executar comandos de engines TTS por subprocesso local.
// 2. Encaminhar texto para stdin e registrar falhas do processo de geração.
// 3. Encerrar subprocessos ativos quando a narração for interrompida.

import { ChildProcess, exec } from "child_process";
import { VoiceLogger } from "../../logger";

export interface SubprocessRunRequest {
  command: string;
  input: string;
  cwd?: string;
}

export class SubprocessRuntime {
  private child: ChildProcess | null = null;

  constructor(private readonly logger: VoiceLogger) {}

  run(request: SubprocessRunRequest): Promise<void> {
    this.logger.logDebug(`[Runtime:subprocess] Executando comando: ${request.command}`);

    return new Promise((resolve, reject) => {
      const child = exec(request.command, request.cwd ? { cwd: request.cwd } : {}, (error, _stdout, stderr) => {
        this.child = null;
        if (error) {
          this.logger.logError(stderr || error.message);
          this.logger.logExit(error.code || 1);
          reject(new Error(error.message));
          return;
        }
        this.logger.logExit(0);
        resolve();
      });

      this.child = child;
      if (child.stdin) {
        child.stdin.on("error", (e) => this.logger.logError(`Erro no stdin do subprocesso TTS: ${e.message}`));
        child.stdin.write(request.input, "utf-8");
        child.stdin.end();
      }
    });
  }

  abort(): void {
    if (!this.child) return;
    this.child.kill();
    this.child = null;
  }
}
```

</source_code>