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
