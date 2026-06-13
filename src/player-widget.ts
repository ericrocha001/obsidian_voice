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
    onSpeedChange: (speed: number) => void
  ) {
    this.onToggle             = onToggle;
    this.onStop               = onStop;
    this.getChapters          = getChapters;
    this.onChapterClick       = onChapterClick;
    this.onResumoToggle       = onResumoToggle;
    this.openSettings         = openSettings;
    this.onTeleprompterToggle = onTeleprompterToggle;
    this.onSpeedChange        = onSpeedChange;
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
