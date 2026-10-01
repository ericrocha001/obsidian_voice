# Obsidian Voice

**Local text-to-speech and document narration infrastructure for Obsidian.**

Obsidian Voice is a desktop-focused Obsidian plugin designed to turn Markdown notes into locally generated speech while keeping the reading experience synchronized with the editor.

The project started from a simple need — making Obsidian notes readable aloud — and evolved into a broader TTS architecture with pluggable engines, document preprocessing, playback orchestration, model/runtime management, resilient downloads, installation state management, and editor highlighting.

> **Portfolio status:** this repository represents a working project that was still evolving architecturally when active development paused. Piper is the primary operational TTS path. Kokoro support is present in the engine architecture but remains an in-progress capability.

## Why it exists

Obsidian is excellent for writing and organizing knowledge, but reading long notes can become a bottleneck. Obsidian Voice explores a local-first answer: transform notes into speech without making cloud TTS a mandatory part of the workflow.

The engineering challenge quickly became larger than calling a speech engine. A useful narration system also needs to understand document structure, prepare text for speech, coordinate asynchronous generation and playback, recover from failures, manage local runtimes and voice models, and keep the spoken position connected to the source note.

## Core capabilities

### Local TTS engine architecture

The TTS layer is built around a shared engine contract instead of coupling the plugin directly to a single runtime.

The current architecture includes:

- Piper engine integration;
- Kokoro engine adapter as an evolving integration;
- engine factory and registry abstractions;
- engine capability and health contracts;
- session lifecycle, warm-up, generation, abort and disposal;
- circuit-breaker protection for unstable generation paths.

This keeps orchestration independent from the concrete speech engine and leaves room for additional local engines.

### Narration pipeline

`TTSPipelineService` coordinates the path from prepared text to playable audio. Its responsibilities include:

- opening and closing engine sessions;
- warming the active engine;
- generating audio chunks;
- prefetching upcoming narration;
- managing temporary audio files;
- aborting active work;
- cleaning runtime resources;
- routing generation through a circuit breaker.

Prefetch is used to reduce the perceived delay between consecutive pieces of narration.

### Markdown-to-speech processing

Notes are transformed into narration-oriented chunks rather than being sent raw to the TTS engine.

The queue layer handles concerns such as:

- frontmatter and code-block exclusion;
- heading/chapter detection;
- Markdown cleanup;
- internal and external link normalization;
- long-text segmentation around punctuation;
- mapping narration chunks back to source lines;
- optional narration of highlighted `==text==` regions.

The result is a representation optimized for speech while retaining enough source information to synchronize narration with the editor.

### Editor synchronization

Obsidian Voice integrates with CodeMirror to visually track the text currently being narrated.

The highlighting subsystem uses CodeMirror state effects, state fields and decorations to map normalized narration text back to source ranges. It also coordinates automatic scrolling while respecting the distinction between programmatic and user-driven movement.

### Model and runtime management

The project includes a local model-management subsystem rather than assuming that TTS runtimes and voices already exist on the machine.

It covers:

- model catalog and manifests;
- runtime/model installation;
- installation metadata persistence;
- staging and archive extraction;
- runtime validation;
- resource checks;
- model removal;
- Piper voice discovery and installation.

### Installation state machine

Model installation is represented explicitly as state rather than as an implicit sequence of callbacks.

The lifecycle includes states for manifest acquisition, download, verification, extraction, runtime validation, installation, failure, removal, update and rollback. Invalid transitions are rejected, and installation state is also used to prevent conflicting operations.

### Resilient downloads and integrity

Large runtime/model downloads are handled with infrastructure for:

- HTTP redirects;
- Range Requests and download resume;
- retry with exponential backoff;
- progress reporting;
- partial `.part` files;
- SHA-256 / MD5 verification;
- promotion to the final artifact only after validation.

This prevents incomplete or corrupted downloads from silently becoming installed runtime artifacts.

### Internationalization

The plugin includes localization resources for:

- Portuguese;
- English;
- Spanish.

Language can be selected explicitly or derived automatically.

## Architecture

A simplified view of the runtime flow:

```text
Obsidian note
    |
    v
Markdown / narration queue
    |
    v
TTS pipeline
    |
    +--> Engine factory / registry
    |        |
    |        +--> Piper
    |        +--> Kokoro (in progress)
    |
    +--> Circuit breaker
    +--> Prefetch / temporary audio
    |
    v
Audio player
    |
    +--> Player UI
    +--> CodeMirror highlighting

Model catalog / manifests
    |
    v
Model management
    |
    +--> Resource guard
    +--> Download manager
    +--> Integrity verification
    +--> Staging / extraction
    +--> Runtime validation
    +--> Installation state machine
```

The architecture deliberately separates document preparation, TTS generation, playback, editor synchronization and model/runtime lifecycle so that each can evolve independently.

## Engineering highlights

This project provided practical work in several areas beyond basic plugin development:

- extensible adapter-based architecture;
- asynchronous pipeline orchestration;
- local subprocess/runtime integration;
- Text-to-Speech infrastructure;
- state-machine modeling;
- fault tolerance with circuit breaker and retries;
- resumable networking and artifact integrity;
- Markdown transformation;
- CodeMirror integration;
- model lifecycle management;
- internationalization;
- local-first application design.

## Technology

- TypeScript
- Node.js APIs
- Obsidian Plugin API
- CodeMirror
- Piper TTS
- Kokoro TTS integration (in progress)
- esbuild
- HTTP/HTTPS streaming
- SHA-256 / MD5 integrity verification

## Project structure

```text
src/
├── main.ts                  Plugin orchestration and lifecycle
├── queue.ts                 Markdown-to-narration preparation
├── audio-player.ts          Audio playback
├── player-widget.ts         Playback interface
├── editor-highlighter.ts    CodeMirror synchronization
├── settings.ts              Plugin settings and model UI
├── locales/                 pt / en / es localization
├── services/model/          Model and runtime lifecycle
└── tts/
    ├── pipeline-service.ts   Generation orchestration
    ├── circuit-breaker.ts    TTS failure isolation
    └── engine/              Engine adapters, factory and registry
```

## Current status

Obsidian Voice should be read as a substantial project under active architectural evolution rather than a finished commercial release.

The Piper path is the primary implemented local TTS workflow. The repository also contains the architectural foundation for Kokoro, but its distribution/runtime path is not presented as production-ready.

Some larger orchestration services remain candidates for further decomposition. That work was already part of the project's architectural direction before development paused.

## Development

The project uses npm scripts for TypeScript validation and bundling:

```bash
npm install
npm run typecheck
npm run build
```

The generated plugin bundle is `main.js`. Running the plugin itself requires an Obsidian desktop environment and the corresponding local TTS runtime/model setup.

## About this repository

This repository is published primarily to present the engineering work behind Obsidian Voice as part of a software-engineering portfolio.

Public visibility is provided for inspection of the architecture and implementation. It does **not** make the project open source or grant permission to reuse the original project materials.

## License

**Proprietary — All Rights Reserved.**

No permission is granted to modify, redistribute, create derivative works from, incorporate into another product, or otherwise reuse the original Obsidian Voice materials except where required by applicable law or the hosting platform's terms.

Third-party libraries, runtimes, models, trademarks and other materials remain governed by their respective licenses and terms.

See [LICENSE](LICENSE) for the complete proprietary notice.
