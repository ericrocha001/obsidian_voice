// Responsabilidades do Script
//
// 1. Criar e gerenciar a escrita assíncrona bufferizada de logs no arquivo voice_debug.log, sem travar a thread principal.
// 2. Controlar a exibição de logs de depuração via flag DEBUG_MODE.
// 3. Formatar e gravar eventos, tentativas de execução e erros do motor TTS.
// 4. Limpar recursos e timers ao ser descartado.

import * as fs from "fs";
import * as path from "path";
import { GenerationResult } from "./tts/types";

export const DEBUG_MODE = false;

export class VoiceLogger {
  private logPath: string;
  private logBuffer: string[] = [];
  private flushTimer: ReturnType<typeof setInterval> | null = null;

  constructor(vaultPath: string) {
    this.logPath = path.resolve(vaultPath, "voice_debug.log");
    this.startFlushTimer();
  }

  private startFlushTimer() {
    if (this.flushTimer) return;
    this.flushTimer = setInterval(async () => {
      if (this.logBuffer.length === 0) return;
      
      const logsToWrite = this.logBuffer.join("");
      this.logBuffer = [];
      
      try {
        await fs.promises.appendFile(this.logPath, logsToWrite, "utf-8");
      } catch (e) {
        console.error("[Obsidian Voice] Falha ao descarregar log:", e);
      }
    }, 3000);
  }

  dispose() {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
      this.flushTimer = null;
    }
    // Attempt to flush synchronously any remaining logs before disposing
    if (this.logBuffer.length > 0) {
      const logsToWrite = this.logBuffer.join("");
      this.logBuffer = [];
      try {
        fs.appendFileSync(this.logPath, logsToWrite, "utf-8");
      } catch (e) {
        console.error("[Obsidian Voice] Falha ao descarregar log no dispose:", e);
      }
    }
  }

  private writeLog(level: string, message: string) {
    const timestamp = new Date().toISOString();
    const logLine = `[${timestamp}] [${level}] ${message}\n`;
    this.logBuffer.push(logLine);
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
    if (DEBUG_MODE) {
      this.writeLog("DEBUG", message);
    }
  }

  logEngineEvent(engineId: string, phase: string, message: string) {
    this.writeLog("INFO", `Engine=${engineId} | Fase=${phase} | ${message}`);
  }

  logGeneration(result: GenerationResult) {
    this.writeLog(
      "INFO",
      `Engine=${result.engineId} | geração=${result.generationMs}ms | arquivo=${result.filePath} | cache=${result.cached}`
    );
  }
}
