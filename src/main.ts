// Responsabilidades do Script
//
// 1. Registrar o plugin no ciclo de vida do Obsidian e conectar os módulos isolados.
// 2. Executar o motor Piper TTS via subprocesso e gerenciar o pipeline de áudio com pre-fetching.
// 3. Orquestrar a narração de notas Markdown limpas controlando o estado global do player.
// 4. Gerenciar a coexistência entre scroll automático (Teleprompter) e rolagem manual do usuário.

import { ChildProcess, exec } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { Editor, FileSystemAdapter, MarkdownView, Notice, Plugin, setIcon, TFile } from "obsidian";
import { EditorView } from "@codemirror/view";
import { ObsidianAudioPlayer } from "./audio-player";
import { ObsidianVoiceQueue } from "./queue";
import { ObsidianVoiceWidget } from "./player-widget";
import { ObsidianVoiceSettingTab, ObsidianVoiceSettings, DEFAULT_SETTINGS } from "./settings";
import { VoiceLogger } from "./logger";
import { EditorHighlighter, highlightField } from "./editor-highlighter";
import { initializeI18n, t } from "./i18n";

export type PlayerState = "aguardando" | "tocando" | "pausado";

type ChunkResult = { resourcePath: string; absolutePath: string; filename: string; text: string; error?: string } | null;

export default class ObsidianVoicePlugin extends Plugin {
  settings: ObsidianVoiceSettings;

  private audioPlayer: ObsidianAudioPlayer;
  private queue = new ObsidianVoiceQueue();
  private widget: ObsidianVoiceWidget;
  private logger: VoiceLogger;
  private highlighter: EditorHighlighter;
  private playerState: PlayerState = "aguardando";
  private nextChunkPromise: Promise<ChunkResult> | null = null;
  private piperProcess: ChildProcess | null = null;
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
      (speed: number) => this.onSpeedChange(speed)
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
      editorCallback: async (editor: Editor, view: MarkdownView) => {
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
        if (!this.nextChunkPromise) {
          this.nextChunkPromise = this.prefetchNextChunk();
        }
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

    this.nextChunkPromise = this.prefetchNextChunk();
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
    const { piperPath, selectedVoice } = this.settings;

    if (!piperPath || !selectedVoice) {
      new Notice(t("notices.missing_configuration"));
      return false;
    }

    const isPiperCommand = !piperPath.includes("/") && !piperPath.includes("\\");
    const resolvedModel = this.resolveModelPath();

    const piperExiste = isPiperCommand || fs.existsSync(piperPath);
    const modelExiste = !resolvedModel || fs.existsSync(resolvedModel);

    if (!piperExiste || !modelExiste) {
      new Notice(t("notices.piper_or_model_missing"));
      return false;
    }

    return true;
  }

  private resolveModelPath(): string {
    const { piperPath, selectedVoice } = this.settings;
    if (!selectedVoice || !piperPath) return "";
    const isPiperCommand = !piperPath.includes("/") && !piperPath.includes("\\");
    
    let modelDir = isPiperCommand ? "" : path.dirname(piperPath);
    
    // Se modelDir não for absoluto e existir basePath do Vault, resolve em relação ao vault
    if (modelDir && !path.isAbsolute(modelDir) && this.app.vault.adapter instanceof FileSystemAdapter) {
      const basePath = this.app.vault.adapter.getBasePath();
      modelDir = path.resolve(basePath, modelDir);
    }
    
    return modelDir ? path.join(modelDir, selectedVoice) : selectedVoice;
  }

  // ── Pipeline de Áudio com Pre-fetching ───────────────────

  private async playNextParagraph() {
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
    if (this.playerState === "pausado") {
      this.nextChunkPromise = Promise.resolve(chunk);
      return;
    }

    // Inicia a geração do próximo chunk em segundo plano enquanto toca o atual
    this.nextChunkPromise = this.prefetchNextChunk();

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
    await this.cleanupPrefetchedChunk();

    const targetIndex = this.queue.getChunkIndexByLine(lineNumber);
    this.queue.setCurrentIndex(targetIndex);

    this.updatePlayerState("tocando");
    this.nextChunkPromise = this.prefetchNextChunk();
    this.playNextParagraph();
  }

  private async jumpToChapter(chunkIndex: number) {
    console.log(`[Obsidian Voice] Pulando para o capítulo no chunk index: ${chunkIndex}`);
    this.audioPlayer.stop();
    await this.cleanupPrefetchedChunk();

    this.queue.setCurrentIndex(chunkIndex);

    this.updatePlayerState("tocando");
    this.nextChunkPromise = this.prefetchNextChunk();
    this.playNextParagraph();
  }

  private prefetchNextChunk(): Promise<ChunkResult> {
    const chunk = this.queue.getNextChunk();
    if (chunk === null) return Promise.resolve(null);

    const cacheDir = path.join(os.tmpdir(), "ObsidianVoiceCache");
    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });

    const chunkFilename = `voice_chunk_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.wav`;
    const absoluteChunkPath = path.join(cacheDir, chunkFilename);
    const speed = this.widget.getSpeed();

    return new Promise((resolve) => {
      this.runPiper(chunk.text, absoluteChunkPath, speed, {
        onSuccess: () => {
          const resourcePath = this.toResourcePath(absoluteChunkPath);
          resolve({ resourcePath, absolutePath: absoluteChunkPath, filename: chunkFilename, text: chunk.text });
        },
        onError: (msg) => {
          console.error("[Obsidian Voice] Erro ao pré-gerar chunk:", msg);
          resolve({ resourcePath: "", absolutePath: absoluteChunkPath, filename: chunkFilename, text: chunk.text, error: msg });
        },
      });
    });
  }

  private toResourcePath(absolutePath: string): string {
    if (this.app.vault.adapter instanceof FileSystemAdapter) {
      const basePath = this.app.vault.adapter.getBasePath();
      const relativePath = path.relative(basePath, absolutePath);
      return this.app.vault.adapter.getResourcePath(relativePath);
    }
    return `app://local/${absolutePath.replace(/\\/g, "/").replace(/^([A-Za-z]):/, "$1%3A")}`;
  }

  private async cleanupPrefetchedChunk() {
    if (!this.nextChunkPromise) return;
    const chunk = await this.nextChunkPromise;
    this.nextChunkPromise = null;
    if (chunk?.absolutePath) {
      try {
        if (fs.existsSync(chunk.absolutePath)) {
          fs.unlinkSync(chunk.absolutePath);
          console.log("[Obsidian Voice] Chunk pré-gerado removido:", chunk.absolutePath);
        }
      } catch (e) {
        console.warn("[Obsidian Voice] Não foi possível remover o chunk pré-gerado:", e);
      }
    }
  }

  // ── Motor Piper ──────────────────────────────────────────

  private runPiperTest() {
    const texto = "Teste de áudio do Obsidian Voice";
    new Notice(t("notices.generating_audio"));
    const cacheDir = path.join(os.tmpdir(), "ObsidianVoiceCache");
    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
    const testFile = path.join(cacheDir, "teste.wav");
    this.runPiper(texto, testFile, 1.0, {
      onSuccess: () => {
        new Notice(t("notices.audio_generated"));
        try { if (fs.existsSync(testFile)) fs.unlinkSync(testFile); } catch (_) {}
      },
      onError: (msg) => new Notice(t("notices.audio_generation_error", { error: msg })),
    });
  }

  private runPiper(
    texto: string,
    outputFile: string,
    speed: number,
    callbacks: { onSuccess: () => void; onError: (msg: string) => void }
  ) {
    const { piperPath } = this.settings;
    const resolvedModel = this.resolveModelPath();

    const isPiperCommand = !piperPath.includes("/") && !piperPath.includes("\\");
    let resolvedPiper = piperPath;
    let basePath = "";

    if (this.app.vault.adapter instanceof FileSystemAdapter) {
      basePath = this.app.vault.adapter.getBasePath();
      if (!isPiperCommand && !path.isAbsolute(piperPath)) {
        resolvedPiper = path.resolve(basePath, piperPath);
      }
    }

    // length_scale inversamente proporcional à velocidade: 1x → 1.0, 2x → 0.5
    const lengthScale = (1 / speed).toFixed(4);

    const comando = `"${resolvedPiper}" --model "${resolvedModel}" --length_scale ${lengthScale} --output_file "${outputFile}"`;
    const options = basePath ? { cwd: basePath } : {};

    this.logger.logTentativa(texto, comando);

    const child = exec(comando, options, (erro, _stdout, stderr) => {
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
