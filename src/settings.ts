/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Definir a interface e os padrões das configurações do plugin.
2. Renderizar configurações agrupadas por motor de voz (Piper e Kokoro) com cards de instalação integrados.
3. Renderizar grid de vozes Piper dentro do bloco de configurações do Piper.
4. Gerenciar a seleção e ativação de vozes via clique nos cards.
5. Gerenciar o download de vozes com progresso visual integrado no card.
6. Gerenciar a remoção de vozes com confirmação e limpeza de disco, preservando arquivos compartilhados.
7. Gerenciar o seletor global de idioma.
8. Validar caminho manual do executável Piper e sincronizar metadata de instalação.
9. Sincronizar automaticamente o metadata de instalação manual quando o caminho for válido.

Mapa de Relacionamentos do Script

1. src/main.ts
   - Tipo: Dependência Direta
   - Relação: Consome instância do plugin para acessar settings e modelManager.
   - Criticidade: Alta

2. src/services/model/model-management-service.ts
   - Tipo: Fluxo de Dados
   - Relação: Fornece PiperVoiceEntry, cache de vozes e método installVoice() com progresso.
   - Criticidade: Alta

3. src/i18n.ts
   - Tipo: Dependência Direta
   - Relação: Fornece funções de tradução e gerenciamento de idioma.
   - Criticidade: Média

4. src/types/model.ts
   - Tipo: Contrato / Interface
   - Relação: Define tipos InstallState e InstalledModelMetadata.
   - Criticidade: Média

Invariantes do Script

1. renderVoiceSection nunca deve ser chamada se o Piper não estiver instalado.
2. Os cards do grid de vozes devem sempre exibir tamanho, qualidade e status corretos.
3. O dropdown de idioma deve recriar o grid ao mudar de idioma.
4. A detecção de instalação local nunca deve lançar exceção não tratada.
5. Apenas vozes instaladas podem ser ativadas via clique no card.
6. settings.selectedVoice deve sempre apontar para uma voz válida ou estar vazio.
7. O download de voz deve exibir progresso em tempo real baseado em bytes baixados.
8. Falhas de download devem reverter o card ao estado "Disponível" sem corromper dados.
9. A remoção de voz deve sempre exigir confirmação do usuário antes de deletar arquivos.
10. Se a voz ativa for removida, settings.selectedVoice deve ser limpo imediatamente.
11. Arquivos compartilhados (MODEL_CARD.md, README.md) nunca devem ser deletados durante a remoção de voz e cada voz deve ser isolada em sua própria subpasta.
12. A UI só deve ser re-renderizada após o metadata de instalação ser completamente persistido.
13. O metadata de instalação manual só deve ser criado quando o executável existir fisicamente no caminho informado.
14. O metadata de instalação manual deve ser criado ou removido automaticamente conforme a validade do caminho informado.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import { App, Notice, PluginSettingTab, Setting } from "obsidian";
import ObsidianVoicePlugin from "./main";
import { LanguageSetting, offLanguageChanged, onLanguageChanged, setLanguage, t } from "./i18n";
import type { InstalledModelMetadata } from "./types/model";
import { getModelCatalog } from "./services/model/model-catalog";
import { InstallState } from "./types/model";
import type { PiperVoiceEntry } from "./services/model/model-management-service";
import * as path from "path";
import * as fs from "fs";
import * as fsp from "fs/promises";

export interface ObsidianVoiceSettings {
  piperPath: string;
  selectedVoice: string;
  highlightColor: string;
  enableTeleprompterMode: boolean;
  language: LanguageSetting;
  models: Record<string, InstalledModelMetadata>;
  ttsEngine: 'piper' | 'kokoro';
  selectedKokoroVoice: string;
  playbackSpeed: number;
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
  playbackSpeed:           1.0,
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

const QUALITY_COLORS: Record<string, string> = {
  low:    "#e03131",
  medium: "#f59f00",
  high:   "#2f9e44",
};

const QUALITY_LABELS: Record<string, string> = {
  low:    "Low",
  medium: "Medium",
  high:   "High",
};

export class ObsidianVoiceSettingTab extends PluginSettingTab {
  plugin: ObsidianVoicePlugin;
  private readonly languageChangeHandler = () => this.display();
  private progressRefs = new Map<string, {
    container: HTMLDivElement;
    progress: HTMLProgressElement;
    text: HTMLSpanElement;
  }>();
  
  private lastSelectedVoiceLang: string = "";

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

    this.renderPiperSettingsSection(containerEl);

    this.renderVoiceSection(containerEl);

    this.renderKokoroSettingsSection(containerEl);
  }

  private renderKokoroSettingsSection(containerEl: HTMLElement): void {
    containerEl.createEl("h3", { text: "Configurações do Kokoro" });
    containerEl.createEl("p", {
      text: "Motor TTS com vozes naturais e qualidade premium. Em breve.",
      cls: "ov-marketplace-description",
    });

    const kokoroSection = containerEl.createDiv({ cls: "ov-kokoro-settings" });
    const kokoroCardContainer = kokoroSection.createDiv({ cls: "ov-cards-container" });
    const kokoroCatalog = getModelCatalog()['kokoro'];
    if (kokoroCatalog) {
      const installed = this.plugin.modelManager.isInstalled('kokoro');
      const installing = this.plugin.modelManager.isInstalling('kokoro');
      this.renderCard(kokoroCardContainer, 'kokoro', kokoroCatalog, installed, installing);
    }
  }

  private async renderPiperSettingsSection(containerEl: HTMLElement) {
    const isPiperInstalled = this.plugin.modelManager.isInstalled('piper');
    
    containerEl.createEl("h3", { text: "Configurações do Piper" });
    containerEl.createEl("p", {
      text: "Configure o motor de voz Piper. O executável é instalado automaticamente fora do Vault.",
      cls: "ov-marketplace-description",
    });
    
    const piperSection = containerEl.createDiv({ cls: "ov-piper-settings" });
    
    const statusRow = piperSection.createDiv({ cls: "ov-setting-row" });
    statusRow.createSpan({ 
      text: "Status: ",
      cls: "ov-setting-label"
    });
    statusRow.createSpan({ 
      text: isPiperInstalled ? "Instalado" : "Não instalado",
      cls: `ov-setting-value ${isPiperInstalled ? "ov-status-installed" : "ov-status-not-installed"}`
    });
    
    if (isPiperInstalled) {
      const piperPath = this.plugin.modelManager.resolveBinaryPath('piper');
      const pathRow = piperSection.createDiv({ cls: "ov-setting-row" });
      pathRow.createSpan({ 
        text: "Caminho: ",
        cls: "ov-setting-label"
      });
      pathRow.createSpan({ 
        text: piperPath || "Não encontrado",
        cls: "ov-setting-value ov-path-value"
      });
    }
    
    new Setting(piperSection)
      .setName("Caminho manual do Piper (opcional)")
      .setDesc("Informe o caminho completo do executável piper.exe. O plugin validará se o arquivo existe e registrará a instalação.")
      .addText((text) => {
        text.setPlaceholder("Ex: C:\\piper\\piper.exe")
          .setValue(this.plugin.settings.piperPath || "")
          .onChange(async (value) => {
            const piperPath = (value || "").trim();
            this.plugin.settings.piperPath = piperPath;

            if (!piperPath) {
              // Remove metadata quando caminho limpo
              if (this.plugin.settings.models.piper) {
                delete this.plugin.settings.models.piper;
              }
              await this.plugin.saveSettings();
              this.display();
              return;
            }

            // Atualiza metadata automaticamente apenas se caminho válido
            const isValid = fs.existsSync(piperPath) && fs.statSync(piperPath).isFile();
            if (isValid) {
              this.plugin.settings.models.piper = {
                id: 'piper',
                activeVersion: 'manual',
                installedRootPath: path.dirname(piperPath),
                executablePath: piperPath,
                installedAt: Date.now(),
              };
              await this.plugin.saveSettings();
              new Notice("Piper detectado e registrado automaticamente.");
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
        text: "Verificar Caminho",
      });
      verifyBtn.addEventListener("click", async () => {
        await this.verifyManualPiperPath();
      });
    }

    // Render card do Piper dentro das configurações
    const piperCardContainer = piperSection.createDiv({ cls: "ov-cards-container" });
    const piperCatalog = getModelCatalog()['piper'];
    if (piperCatalog) {
      const installed = this.plugin.modelManager.isInstalled('piper');
      const installing = this.plugin.modelManager.isInstalling('piper');
      this.renderCard(piperCardContainer, 'piper', piperCatalog, installed, installing);
    }
  }

  // BUGFIX: Validar caminho manual do Piper e sincronizar metadata para refletir instalação na UI
  private async verifyManualPiperPath(): Promise<void> {
    const piperPath = (this.plugin.settings.piperPath || "").trim();

    if (!piperPath) {
      new Notice("Informe o caminho do executável piper.exe.");
      return;
    }

    try {
      if (!fs.existsSync(piperPath) || !fs.statSync(piperPath).isFile()) {
        throw new Error("Caminho inválido");
      }

      // INVARIANT: metadata de instalação manual só é criado quando o executável existe fisicamente
      this.plugin.settings.models.piper = {
        id: 'piper',
        activeVersion: 'manual',
        installedRootPath: path.dirname(piperPath),
        executablePath: piperPath,
        installedAt: Date.now(),
      };

      await this.plugin.saveSettings();
      new Notice("Piper detectado e registrado com sucesso.");
      this.display();
    } catch {
      new Notice("O caminho informado não aponta para um executável válido.");
    }
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

    const header = card.createDiv({ cls: "ov-card-header" });
    header.createSpan({ cls: "ov-card-name", text: entry.displayName });

    const badge = header.createSpan({
      cls: `ov-card-badge ${installed ? "ov-badge-installed" : "ov-badge-available"}`,
      text: installed ? "Instalado" : "Disponível para Download",
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
      attr: { max: "100", value: "0" },
    });
    progressContainer.style.display = "none";

    this.progressRefs.set(id, { container: progressContainer, progress: progressBar, text: progressText });

    if (installing) {
      progressContainer.style.display = "flex";
      progressText.textContent = "Instalação em andamento...";
    }

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
          },
          (percent) => {
            progressBar.value = percent;
          },
        );
        // INVARIANT: UI re-renderizada após metadata ser persistido
        this.display();
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
    // INVARIANT: Usar getPiperRoot() para obter a raiz da instalação
    const piperRoot = this.plugin.modelManager.getPiperRoot();
    if (!piperRoot) return; // Piper não encontrado

    containerEl.createEl("h3", { text: t("settings.voice_model.title") });
    containerEl.createEl("p", {
      text: "Escolha uma voz para o motor Piper. O download é feito diretamente do catálogo oficial.",
      cls: "ov-marketplace-description",
    });

    const voicesSection = containerEl.createDiv({ cls: "ov-voices-section" });

    const langDrop = voicesSection.createEl("select", { cls: "ov-voice-dropdown" });

    const gridContainer = voicesSection.createDiv({ cls: "ov-voices-grid" });

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

    const currentLang = this.lastSelectedVoiceLang ||
      (this.plugin.settings.selectedVoice
        ? this.plugin.settings.selectedVoice.split("-")[0] || ""
        : "");
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

    langDrop.addEventListener('change', () => {
      this.lastSelectedVoiceLang = langDrop.value;
      renderGrid();
    });
    renderGrid();
  }

  private renderVoiceCard(
    container: HTMLDivElement,
    voice: PiperVoiceEntry,
    piperDir: string,
    selectedVoice: string,
  ): void {
    const isActive = voice.key === selectedVoice;
    const isInstalled = this.isVoiceInstalled(voice, piperDir);

    const card = container.createDiv({
      cls: `ov-voice-card ${isActive ? "is-active" : ""}`,
    });

    const header = card.createDiv({ cls: "ov-voice-card-header" });
    header.createSpan({ cls: "ov-voice-card-name", text: voice.name });

    if (isActive) {
      header.createSpan({
        cls: "ov-voice-active-badge",
        text: "✓ Ativa",
      });
    }

    const qualityBadge = header.createSpan({
      cls: "ov-voice-card-badge",
      text: QUALITY_LABELS[voice.quality] || voice.quality,
    });
    qualityBadge.style.color = QUALITY_COLORS[voice.quality] || "#888";

    const totalBytes = this.calculateVoiceSize(voice);
    const totalMB = totalBytes > 0 ? (totalBytes / (1024 * 1024)).toFixed(1) : "?";
    const infoRow = card.createDiv({ cls: "ov-voice-card-info" });
    infoRow.createSpan({ text: `${totalMB} MB` });

    const statusEl = card.createDiv({
      cls: `ov-voice-card-status ${isInstalled ? "ov-voice-status-installed" : "ov-voice-status-available"}`,
      text: isInstalled ? "Baixada" : "Disponível",
    });

    const progressContainer = card.createDiv({ cls: "ov-voice-progress-container" });
    progressContainer.style.display = "none";
    const progressText = progressContainer.createSpan({ cls: "ov-voice-progress-text" });
    const progressBar = progressContainer.createEl("progress", {
      cls: "ov-voice-progress-bar",
      attr: { max: "100", value: "0" },
    });

    if (isInstalled) {
      const removeBtn = card.createEl("button", {
        cls: "ov-voice-action-btn ov-btn-remove",
        text: t("buttons.remove"),
      });

      removeBtn.addEventListener("click", async () => {
        await this.handleVoiceRemoval(voice, piperDir, removeBtn);
      });
    } else {
      const downloadBtn = card.createEl("button", {
        cls: "ov-voice-action-btn ov-btn-install",
        text: "Baixar Voz",
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

  private async handleVoiceDownload(
    voice: PiperVoiceEntry,
    btn: HTMLButtonElement,
    progressContainer: HTMLDivElement,
    progressText: HTMLSpanElement,
    progressBar: HTMLProgressElement,
  ): Promise<void> {
    // INVARIANT: Usar getPiperRoot() para obter a raiz da instalação
    const piperRoot = this.plugin.modelManager.getPiperRoot();
    if (!piperRoot) {
      new Notice("Piper não está instalado.");
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
      await this.plugin.modelManager.installVoice(voice, (percent: number) => {
        progressBar.value = percent;
        progressText.textContent = `Baixando... ${percent}%`;
      });

      this.plugin.settings.selectedVoice = voice.key;
      await this.plugin.saveSettings();

      new Notice(t("notices.voice_activated", { voice: voice.key }));

      this.display();
    } catch (err: any) {
      new Notice(`Falha ao baixar voz: ${err?.message || String(err)}`);
      btn.disabled = false;
      btn.textContent = "Baixar Voz";
      progressContainer.style.display = "none";
      progressBar.value = 0;
    }
  }

  private async activateVoice(voiceKey: string): Promise<void> {
    if (!voiceKey) {
      console.warn('[Settings] Tentativa de ativar voz vazia');
      return;
    }

    this.plugin.settings.selectedVoice = voiceKey;
    await this.plugin.saveSettings();
    this.display();
    new Notice(t("notices.voice_activated", { voice: voiceKey }));
  }

  private async handleVoiceRemoval(
    voice: PiperVoiceEntry,
    piperDir: string,
    btn: HTMLButtonElement,
  ): Promise<void> {
    if (!piperDir) {
      new Notice("Diretório do Piper não configurado.");
      return;
    }

    const totalBytes = this.calculateVoiceSize(voice);
    const totalMB = totalBytes > 0 ? (totalBytes / (1024 * 1024)).toFixed(1) : "?";

    const confirmed = confirm(
      t("confirmations.remove_voice", { voice: voice.name, size: totalMB }),
    );
    if (!confirmed) return;

    btn.disabled = true;
    btn.textContent = t("buttons.removing");

    try {
      const voiceSubDir = path.join(piperDir, voice.key);
      
      if (!fs.existsSync(voiceSubDir)) {
        throw new Error(`Subpasta da voz não encontrada: ${voiceSubDir}`);
      }
      
      await fsp.rm(voiceSubDir, { recursive: true, force: true });
      console.log(`[Settings] Subpasta removida recursivamente: ${voiceSubDir}`);
      
      if (this.plugin.settings.selectedVoice === voice.key) {
        this.plugin.settings.selectedVoice = "";
        await this.plugin.saveSettings();
      }
      
      new Notice(t("notices.voice_removed", { voice: voice.name }));
      
      this.display();
    } catch (err: any) {
      new Notice(
        t("errors.remove_voice_failed", {
          voice: voice.name,
          error: err?.message || String(err),
        }),
      );
      this.display();
      btn.disabled = false;
      btn.textContent = t("buttons.remove");
    }
  }

  private calculateVoiceSize(voice: PiperVoiceEntry): number {
    let total = 0;
    for (const meta of Object.values(voice.files)) {
      total += meta.size_bytes;
    }
    return total;
  }

  private isVoiceInstalled(voice: PiperVoiceEntry, piperDir: string): boolean {
    if (!piperDir) return false;

    const voiceSubDir = path.join(piperDir, voice.key);

    if (!fs.existsSync(voiceSubDir)) {
      return false;
    }

    const missingFiles: string[] = [];

    for (const rel of Object.keys(voice.files)) {
      const fileName = path.basename(rel);
      const filePath = path.join(voiceSubDir, fileName);

      try {
        if (!fs.existsSync(filePath)) {
          missingFiles.push(fileName);
        }
      } catch {
        missingFiles.push(fileName);
      }
    }

    if (missingFiles.length > 0) {
      console.log(`[Settings] Voz ${voice.key} não instalada. Arquivos faltando: ${missingFiles.join(', ')}`);
      return false;
    }

    return true;
  }

  private handleRemove(
    id: 'piper' | 'kokoro',
    displayName: string,
    btn: HTMLButtonElement,
    progressContainer: HTMLDivElement,
    progressText: HTMLSpanElement,
  ): void {
    if (id === 'piper') {
      const confirmed = confirm(t("confirmations.remove_piper"));
      if (!confirmed) return;
    }

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