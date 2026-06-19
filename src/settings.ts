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