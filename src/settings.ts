// Responsabilidades do Script
//
// 1. Definir a interface e os padrões das configurações do plugin.
// 2. Renderizar os campos de executável, seletor dinâmico de voz, preset de cor e controles de navegação na aba de configurações.
// 3. Varrer o diretório do executável assincronamente para detectar automaticamente os modelos .onnx disponíveis.

import * as fs from "fs";
import * as path from "path";
import { App, DropdownComponent, PluginSettingTab, Setting, Notice } from "obsidian";
import ObsidianVoicePlugin from "./main";
import { LanguageSetting, offLanguageChanged, onLanguageChanged, setLanguage, t } from "./i18n";

export interface ObsidianVoiceSettings {
  piperPath: string;
  selectedVoice: string;
  highlightColor: string;
  enableTeleprompterMode: boolean;
  language: LanguageSetting;
}

export const DEFAULT_SETTINGS: ObsidianVoiceSettings = {
  piperPath:               "",
  selectedVoice:           "",
  highlightColor:          "green",
  enableTeleprompterMode:  true,
  language:                "auto",
};

interface ModelosResult {
  modelos: string[];
  erro?: string;
}

// ── Utilitário: varre o dir do executável e retorna arquivos .onnx ──────────
async function listarModelos(piperPath: string): Promise<ModelosResult> {
  if (!piperPath) return { modelos: [] };
  
  try {
    const isAbsolute = path.isAbsolute(piperPath);
    let dir = "";
    
    // Verifica se o caminho existe e é um arquivo antes de pegar o dirname
    if (isAbsolute) {
      try {
        const stats = await fs.promises.stat(piperPath);
        if (stats.isFile()) {
          dir = path.dirname(piperPath);
        } else {
          return { modelos: [], erro: t("settings.piper_path.not_file") };
        }
      } catch (e) {
         // O arquivo principal não existe
         return { modelos: [], erro: t("settings.piper_path.missing") };
      }
    } else {
      // Se não for absoluto (ex: comando no path), assume que modelos estão na pasta raiz ou em models/
      // Como a detecção automática precisa de um diretório absoluto para ler da máquina, 
      // se for um comando no PATH, não tentamos varrer o disco.
      return { modelos: [] };
    }

    if (!dir) return { modelos: [] };

    const arquivos = await fs.promises.readdir(dir);
    const arquivosOnnx = [];

    for (const f of arquivos) {
      if (f.endsWith(".onnx")) {
        const filePath = path.join(dir, f);
        try {
          const stats = await fs.promises.stat(filePath);
          if (stats.isFile()) {
            arquivosOnnx.push(f);
          }
        } catch (e) {
          // Ignora arquivos que não puderam ser acessados
        }
      }
    }

    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    arquivosOnnx.sort(collator.compare);

    return { modelos: arquivosOnnx };
  } catch (error: any) {
    return { modelos: [], erro: error.message || t("settings.errors.unknown_directory") };
  }
}

// ── Aba de Configurações ─────────────────────────────────────────────────────
export class ObsidianVoiceSettingTab extends PluginSettingTab {
  plugin: ObsidianVoicePlugin;
  private dropdownContainer: HTMLDivElement | null = null;
  private debounceTimer: NodeJS.Timeout | null = null;
  private readonly languageChangeHandler = () => this.display();

  constructor(app: App, plugin: ObsidianVoicePlugin) {
    super(app, plugin);
    this.plugin = plugin;
    onLanguageChanged(this.languageChangeHandler);
    this.plugin.register(() => offLanguageChanged(this.languageChangeHandler));
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

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

    // ── Campo: Caminho do Executável ──────────────────────────
    new Setting(containerEl)
      .setName(t("settings.piper_path.title"))
      .setDesc(t("settings.piper_path.description"))
      .addText((text) => {
        text
          .setPlaceholder("C:\\piper\\piper.exe")
          .setValue(this.plugin.settings.piperPath)
          .onChange((value) => {
            const rawValue = value.trim();
            this.plugin.settings.piperPath = rawValue;
            this.plugin.saveSettings(); // Nao usamos await para não bloquear a digitação
            
            // Debounce para não travar a thread
            if (this.debounceTimer) clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => {
              this.reconstruirDropdown(rawValue);
            }, 500);
          });
      });

    // Container isolado para o Setting do dropdown
    this.dropdownContainer = containerEl.createDiv();
    this.reconstruirDropdown(this.plugin.settings.piperPath);

    // ── Campo: Cor de Destaque ────────────────────────────────
    new Setting(containerEl)
      .setName(t("settings.highlight_color.title"))
      .setDesc(t("settings.highlight_color.description"))
      .addDropdown((drop) => {
        drop.addOption("green",  t("settings.highlight_color.green"));
        drop.addOption("yellow", t("settings.highlight_color.yellow"));
        drop.addOption("blue",   t("settings.highlight_color.blue"));
        drop.addOption("purple", t("settings.highlight_color.purple"));
        drop.addOption("orange", t("settings.highlight_color.orange"));
        drop.setValue(this.plugin.settings.highlightColor || "green");
        drop.onChange(async (value) => {
          this.plugin.settings.highlightColor = value;
          await this.plugin.saveSettings();
          this.plugin.updateHighlightVariables();
        });
      });

    // ── Campo: Navegação Inteligente por Scroll ─────────────────────
    new Setting(containerEl)
      .setName(t("settings.teleprompter.title"))
      .setDesc(t("settings.teleprompter.description"))
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.enableTeleprompterMode)
          .onChange(async (value) => {
            this.plugin.settings.enableTeleprompterMode = value;
            await this.plugin.saveSettings();
          });
      });
  }

  // Reconstrói o container inteiro do Dropdown
  private async reconstruirDropdown(piperPath: string) {
    if (!this.dropdownContainer) return;
    
    // Limpa o DOM do container para recriar o Setting sem hacks
    this.dropdownContainer.empty();

    const setting = new Setting(this.dropdownContainer)
      .setName(t("settings.voice_model.title"))
      .setDesc(t("settings.voice_model.loading"));

    const resultado = await listarModelos(piperPath);

    if (resultado.erro) {
      setting.setDesc(t("settings.errors.prefix", { error: resultado.erro }));
      new Notice(t("notices.model_scan_error", { error: resultado.erro }));
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
  private preencherDropdown(drop: DropdownComponent, modelos: string[]) {
    // Opção padrão vazia
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
}
