/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Registrar o plugin no ciclo de vida do Obsidian e conectar os módulos isolados.
2. Executar o motor TTS via subprocesso e gerenciar o pipeline de áudio com pre-fetching.
3. Orquestrar a narração de notas Markdown limpas controlando o estado global do player.
4. Gerenciar a coexistência entre scroll automático (Teleprompter) e rolagem manual do usuário.

Mapa de Relacionamentos do Script

1. model-management-service.ts
   - Tipo: Dependência Direta
   - Relação: Usa modelManager para instalar/remover modelos e migrar instalações legadas.
   - Criticidade: Alta

2. settings.ts
   - Tipo: Fluxo de Dados
   - Relação: Consome settings e notifica mudanças de estado.
   - Criticidade: Alta

3. tts/pipeline-service.ts
   - Tipo: Dependência Direta
   - Relação: Orquestra o ciclo de geração de áudio TTS.
   - Criticidade: Alta

4. editor-highlighter.ts
   - Tipo: Dependência Direta
   - Relação: Destaca parágrafos no editor durante narração.
   - Criticidade: Alta

5. tts/engine/engine-factory.ts
   - Tipo: Dependência Direta
   - Relação: Cria instância da engine TTS ativa.
   - Criticidade: Alta

Invariantes do Script

1. O Self-Healing SÓ roda para migrar instalações legadas, nunca para corrigir instalações novas.
2. A raiz da instalação é sempre obtida de installedRootPath nos metadados.
3. O rebuildTTSPipeline usa resolveBinaryPath que retorna apenas executável dos metadados.
4. updatePlayerState() é o único ponto de ativação/desativação de recursos do plugin.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { Editor, FileSystemAdapter, MarkdownView, Notice, Plugin, setIcon, TFile } from "obsidian";
import { EditorView } from "@codemirror/view";
import { ObsidianAudioPlayer } from "./audio-player";
import { ObsidianVoiceQueue } from "./queue";
import { ObsidianVoiceWidget } from "./player-widget";
import { stripFrontmatter } from "./utils/markdown";
import { ObsidianVoiceSettingTab, ObsidianVoiceSettings, DEFAULT_SETTINGS } from "./settings";
import { EditorHighlighter, highlightField } from "./editor-highlighter";
import { initializeI18n, t } from "./i18n";
import { TTSPipelineService } from "./tts/pipeline-service";
import { TTSEngineFactory } from "./tts/engine/engine-factory";
import { ModelManagementService, LegacyMigration } from "./services/model/model-management-service";

export type PlayerState = "aguardando" | "tocando" | "pausado";

export default class ObsidianVoicePlugin extends Plugin {
  settings!: ObsidianVoiceSettings;
  modelManager!: ModelManagementService;

  private audioPlayer!: ObsidianAudioPlayer;
  private queue = new ObsidianVoiceQueue();
  private widget!: ObsidianVoiceWidget;
  private highlighter!: EditorHighlighter;
  private playerState: PlayerState = "aguardando";
  private isClickListenerActive = false;
  private ttsPipeline!: TTSPipelineService;
  private currentParagraphText = "";
  private activeEditor: import("obsidian").Editor | null = null;
  private lastNarratedPath: string | null = null;
  private currentSessionId: number = 0;

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

    this.audioPlayer = new ObsidianAudioPlayer(this.app.vault, this.settings.playbackSpeed);

    let basePath = "";
    if (this.app.vault.adapter instanceof FileSystemAdapter) {
      basePath = this.app.vault.adapter.getBasePath();
    }

    this.modelManager = new ModelManagementService(
      basePath || process.cwd(),
      {
        models: this.settings.models,
        getPiperPath: () => this.settings.piperPath,
        saveSettings: () => this.saveSettings(),
      }
    );

    this.rebuildTTSPipeline();

    // Self-Healing de Metadados: migrar apenas instalações legadas
    await this.migrateLegacyMetadataIfNeeded();

    // Migrar Piper do Vault para local padrão (uma única vez)
    try {
      const migrated = await this.modelManager.migratePiperFromVault();
      if (migrated) {
        new Notice('Piper movido para local padrão. Seu Vault está mais leve agora!');
      }
    } catch (err: any) {
      console.warn('[Obsidian Voice] Migração do Piper falhou:', err);
    }

    // Migrar vozes já instaladas no formato antigo para subpastas
    try {
      await this.modelManager.migrateVoicesToSubfolders();
    } catch (err: any) {
      console.warn('[Obsidian Voice] Migração das vozes para subpastas falhou:', err);
    }

    this.addRibbonIcon("headphones", t("commands.ribbon_narrate"), () => this.narrarNotaAtual());

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
    this.widget.setTeleprompterAtivo(this.settings.enableTeleprompterMode);
    this.widget.setSpeed(this.settings.playbackSpeed);
    this.widget.show("aguardando", activeDocument.body);

    this.registerEvent(
      this.app.workspace.on("file-open", async (file) => {
        if (!file || (this.lastNarratedPath && this.lastNarratedPath !== file.path)) {
          await this.pararNarracaoSilenciosamente();
        }
      })
    );

    this.addSettingTab(new ObsidianVoiceSettingTab(this.app, this));

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

        this.widget.setResumoAtivo(this.queue.readOnlyHighlights);

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

    this.registerDomEvent(document, "click", (evt: MouseEvent) => {
      // Portão de silêncio: se o plugin não está ativo, ignora o clique imediatamente
      if (!this.isClickListenerActive) return;

      if (this.playerState !== "tocando") {
        return;
      }
      // BUGFIX: Removida trava artificial que exigia teleprompter ativo para o clique funcionar.
      // O clique para pular e o teleprompter são funcionalidades independentes.
      // Usuário pode querer iniciar narração a partir de um clique sem scroll automático.

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
    await this.audioPlayer.stopAndWait();
    this.queue.reset();
    await this.ttsPipeline.stop();
    await this.ttsPipeline.cleanupAllSessions();
    await this.ttsPipeline.cleanupOrphanedFiles();
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

  private getPlayerState(): PlayerState {
    return this.playerState;
  }

  private activatePlugin(): void {
    this.isClickListenerActive = true;
    this.highlighter.setActive(true);
  }

  private deactivatePlugin(): void {
    this.isClickListenerActive = false;
    this.highlighter.setActive(false);
  }

  private updatePlayerState(state: PlayerState) {
    this.playerState = state;
    this.widget.show(state, activeDocument.body);

    // Ativa/desativa recursos baseado no estado
    if (state === "tocando") {
      this.activatePlugin();
    } else {
      this.deactivatePlugin();
    }
  }

  private async pararNarracao() {
    await this.pararNarracaoSilenciosamente();
    new Notice(t("notices.narration_stopped"));
    console.log("[Obsidian Voice] Narração interrompida pelo usuário.");
  }

  private async pararNarracaoSilenciosamente() {
    this.currentSessionId++;
    this.queue.reset();
    await this.audioPlayer.stopAndWait();
    await this.ttsPipeline.stop();
    await this.ttsPipeline.cleanupAllSessions();
    this.unregisterScrollListeners();
    this.updatePlayerState("aguardando");

    // Tenta limpar o highlighter da nota onde a narração começou,
    // mesmo que o usuário tenha trocado de nota durante a narração.
    // Se não encontrar (nota fechada ou nunca iniciada), faz fallback para o activeEditor.
    let editorToClear: import("obsidian").Editor | null = null;
    if (this.lastNarratedPath) {
      editorToClear = this.getEditorForPath(this.lastNarratedPath);
    }
    if (!editorToClear) {
      // Fallback seguro: só limpa o activeEditor se ele corresponder à nota narrada,
      // ou se nunca houve narração (lastNarratedPath === null).
      // Isso evita limpar highlights de notas diferentes em cenários de troca rápida.
      const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
      if (!this.lastNarratedPath || activeView?.file?.path === this.lastNarratedPath) {
        editorToClear = this.getActiveEditor();
      }
    }
    if (editorToClear) this.highlighter.clearHighlight(editorToClear);
    this.activeEditor = null;
  }

  private onResumoToggle(active: boolean) {
    this.queue.readOnlyHighlights = active;
    const estado = active ? t("notices.enabled") : t("notices.disabled");
    new Notice(t("notices.summary_mode", { state: estado }));

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

  private async onTeleprompterToggle(active: boolean) {
    this.settings.enableTeleprompterMode = active;
    await this.saveSettings();
    const estado = active ? t("notices.enabled") : t("notices.disabled");
    new Notice(t("notices.teleprompter_mode", { state: estado }));
  }

  private onSpeedChange(speed: number) {
    this.audioPlayer.setPlaybackRate(speed);
    this.settings.playbackSpeed = speed;
    this.ttsPipeline.setPlaybackRate(speed);
    this.saveSettings();
  }

  private async onEngineChange(engineId: 'piper' | 'kokoro') {
    if (this.playerState === 'tocando') {
      this.settings.ttsEngine = engineId;
      await this.saveSettings();
      new Notice(t("notices.engine_change_delayed"));
      return;
    }

    this.settings.ttsEngine = engineId;
    await this.saveSettings();
    this.rebuildTTSPipeline();
    new Notice(t("notices.engine_changed", { engine: engineId }));
  }

  private togglePlayPause() {
    if (this.playerState === "aguardando") {
      this.narrarNotaAtual();
      return;
    }

    const next: PlayerState = this.playerState === "tocando" ? "pausado" : "tocando";

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

  private async narrarNotaAtual() {
    this.currentSessionId++;
    const activeFile = this.app.workspace.getActiveFile();
    if (!(activeFile instanceof TFile)) {
      new Notice(t("notices.no_active_note"));
      return;
    }

    this.activeEditor = this.getActiveEditor();
    if (!this.activeEditor) {
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

    await this.ttsPipeline.start(this.currentSessionId);
    await this.playNextParagraph();
  }

  private cleanMarkdown(text: string): string {
    const cleaned = stripFrontmatter(text)
      .replace(/```[\s\S]*?```/g, "")
      .replace(/(?<![#\S])#[^\s#][^\s]*/g, "")
      .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      .replace(/==(.*?)==/g, "$1")
      .trim();
    return cleaned;
  }

  private async validarConfiguracoes(): Promise<boolean> {
    this.rebuildTTSPipeline();
    const result = await this.ttsPipeline.validate();
    if (!result.ok) {
      new Notice(t("notices.piper_or_model_missing"));
      return false;
    }
    return true;
  }

  private resetNarrationState(): void {
    this.queue.reset();
    this.updatePlayerState("aguardando");
    this.activeEditor = this.getActiveEditor();
    if (this.activeEditor) this.highlighter.clearHighlight(this.activeEditor);
    this.activeEditor = null;
  }

  private async playNextParagraph() {
    if (this.playerState === "pausado") return;

    let iterations = 0;
    // Limite de segurança para debug: previne travamento em cenários de bug
    const MAX_ITERATIONS = 100;

    while (iterations++ < MAX_ITERATIONS) {
      const chunk = await this.ttsPipeline.getNextChunk();

      if (chunk === null) {
        // Buffer vazio: a geração ainda pode estar em andamento no fillBuffer().
        // Não assume fila encerrada — espera 100ms e tenta novamente.
        await new Promise(resolve => setTimeout(resolve, 100));
        continue;
      }

      if ('discarded' in chunk) {
        console.log(`[Obsidian Voice] Chunk descartado (sessão ${chunk.sessionId}, iteração ${iterations})`);
        continue;
      }

      if (chunk.error) {
        this.resetNarrationState();
        new Notice(t("notices.narration_error", { error: chunk.error }));
        console.error("[Obsidian Voice] Erro no chunk:", chunk.error);
        try { if (fs.existsSync(chunk.absolutePath)) fs.unlinkSync(chunk.absolutePath); } catch (_) {}
        return;
      }

      if (this.getPlayerState() === "pausado") {
        const held = this.ttsPipeline.holdChunk(chunk);
        if (!held) {
          // Chunk descartado por mudança de sessão durante pausa: tenta o próximo.
          console.log(`[Obsidian Voice] Chunk descartado durante pausa (sessão ${chunk.sessionId})`);
          continue;
        }
        return;
      }

      this.currentParagraphText = chunk.text;
      this.activeEditor = this.getActiveEditor();
      if (this.activeEditor) {
        const scrollEnabled = this.settings.enableTeleprompterMode && !this.isUserScrolling;
        this.highlighter.highlightParagraph(this.activeEditor, chunk.text, scrollEnabled);
      } else {
        console.warn("[Obsidian Voice] activeEditor é null — highlight ignorado.");
      }

      console.log(`[Obsidian Voice] Reproduzindo chunk: ${chunk.resourcePath}`);
      this.audioPlayer.playFile(chunk.resourcePath, chunk.absolutePath, () => {
        this.playNextParagraph();
      });
      return;
    }

    // Segurança: se o loop exceder o limite, reseta para evitar travamento
    console.error(`[Obsidian Voice] Loop excedeu ${MAX_ITERATIONS} iterações — possível bug de sessão`);
    this.resetNarrationState();
  }

  private getEditorForPath(filePath: string): import("obsidian").Editor | null {
    // Caminho rápido: view ativa é um MarkdownView com o arquivo correspondente
    const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (activeView && activeView.file?.path === filePath) {
      return activeView.editor;
    }

    // Fallback: procurar em todas as leaves
    let editor: import("obsidian").Editor | null = null;
    this.app.workspace.iterateAllLeaves((leaf) => {
      if (leaf.view instanceof MarkdownView && leaf.view.file?.path === filePath) {
        editor = (leaf.view as MarkdownView).editor;
      }
    });
    return editor;
  }

  /**
   * INVARIANTE CRÍTICA: setCurrentIndex() DEVE ser chamado ANTES de start().
   *
   * Motivo: start() dispara fillBuffer() em background, que consome chunks
   * da queue. Se a queue ainda estiver na posição antiga, o buffer será
   * preenchido com chunks errados, causando áudio incorreto e loops infinitos.
   */
  private async jumpToLine(lineNumber: number) {
    console.log(`[Obsidian Voice] Pulando para a linha: ${lineNumber}`);
    const oldSessionId = this.currentSessionId;
    this.currentSessionId++;
    await this.audioPlayer.stopAndWait();

    const targetIndex = this.queue.getChunkIndexByLine(lineNumber);
    this.queue.setCurrentIndex(targetIndex);

    await this.ttsPipeline.start(this.currentSessionId);
    await this.ttsPipeline.cleanupSession(oldSessionId);

    this.updatePlayerState("tocando");
    await this.playNextParagraph();
  }

  /**
   * INVARIANTE CRÍTICA: setCurrentIndex() DEVE ser chamado ANTES de start().
   *
   * Motivo: start() dispara fillBuffer() em background, que consome chunks
   * da queue. Se a queue ainda estiver na posição antiga, o buffer será
   * preenchido com chunks errados, causando áudio incorreto e loops infinitos.
   */
  private async jumpToChapter(chunkIndex: number) {
    console.log(`[Obsidian Voice] Pulando para o capítulo no chunk index: ${chunkIndex}`);
    const oldSessionId = this.currentSessionId;
    this.currentSessionId++;
    await this.audioPlayer.stopAndWait();

    this.queue.setCurrentIndex(chunkIndex);

    await this.ttsPipeline.start(this.currentSessionId);
    await this.ttsPipeline.cleanupSession(oldSessionId);

    this.updatePlayerState("tocando");
    await this.playNextParagraph();
  }

  private async runPiperTest() {
    const valido = await this.validarConfiguracoes();
    if (!valido) return;

    const texto = "Teste de áudio do Obsidian Voice";
    new Notice(t("notices.generating_audio"));
    const cacheDir = path.join(os.tmpdir(), "ObsidianVoiceCache");
    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
    const testFile = path.join(cacheDir, "teste.wav");

    try {
      await this.ttsPipeline.runTest(texto, testFile);
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

    const resolvedPath = this.modelManager ? this.modelManager.resolveBinaryPath(this.settings.ttsEngine) : '';
    const piperInstallRoot = this.modelManager ? this.modelManager.getPiperRoot() : '';

    const engine = TTSEngineFactory.create({
      ttsEngine: this.settings.ttsEngine,
      piperPath: resolvedPath,
      piperInstallRoot,
      selectedVoice: this.settings.selectedVoice,
      selectedKokoroVoice: this.settings.selectedKokoroVoice,
      basePath,
    });

    this.ttsPipeline = new TTSPipelineService(
      this.app.vault,
      this.queue,
      engine
    );
  }

  private getActiveEditor(): Editor | null {
    // Caminho rápido: view ativa é um MarkdownView
    const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (activeView && activeView.file) {
      return activeView.editor;
    }

    // Fallback: procurar em todas as leaves (para split views e cenários complexos)
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
    this.scrollListenerEl = null;
    this.isUserScrolling  = false;
  }

  /**
   * Self-Healing: migra apenas instalações legadas (formato antigo com absolutePath).
   * INVARIANT: Não modifica instalações que já estão no formato canônico.
   */
  private async migrateLegacyMetadataIfNeeded(): Promise<void> {
    const piperMetadata = this.settings.models.piper;

    // INVARIANT: Só migrar se estiver no formato legado
    if (!LegacyMigration.needsMigration(piperMetadata)) {
      return;
    }

    // Realizar migração
    await this.modelManager.migrateLegacyMetadata();

    // Reconstruir pipeline com os novos caminhos
    this.rebuildTTSPipeline();
  }
}