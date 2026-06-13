// Responsabilidades do Script
//
// 1. Configurar o processo de build do plugin para gerar o bundle compatível com o Obsidian.

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"],
  outDir: ".",
  outExtension: () => ({ js: ".js" }),
  entryNames: "main",
  format: "cjs",
  external: ["obsidian", "@codemirror/state", "@codemirror/view"],
  sourcemap: true,
  clean: false,
});
