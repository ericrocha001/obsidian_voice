// Responsabilidades do Script
//
// 1. Criar e gerenciar a escrita de registros de depuração no arquivo voice_debug.log.
// 2. Formatar e gravar tentativas de execução do motor Piper.
// 3. Registrar erros e códigos de encerramento do processo do motor Piper.

import * as fs from "fs";
import * as path from "path";

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
}
