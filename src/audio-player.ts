// Responsabilidades do Script
//
// 1. Gerenciar o ciclo de vida de reprodução de um arquivo de áudio (play, pause, retomada e parada).
// 2. Remover o arquivo temporário de chunk após a reprodução ou interrupção.
// 3. Aplicar alteração de velocidade de reprodução em tempo real no chunk ativo.

import { Vault } from "obsidian";
import * as fs from "fs";

export class ObsidianAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private vault: Vault;
  private currentChunk: string | null = null;

  constructor(vault: Vault) {
    this.vault = vault;
  }

  playFile(filePath: string, filename: string, onEnded: () => void) {
    this.stop();

    this.currentChunk = filename;
    this.audio = new Audio(filePath);

    this.audio.onended = () => {
      if (this.currentChunk) {
        this.cleanupChunk(this.currentChunk);
        this.currentChunk = null;
      }
      onEnded();
    };

    this.audio.play();
  }

  /** Retorna true se há um chunk de áudio ativo (tocando ou pausado). */
  isActive(): boolean {
    return this.audio !== null;
  }

  toggle() {
    if (!this.audio) return;

    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  /** Aplica velocidade de reprodução ao chunk ativo sem interromper o áudio. */
  setPlaybackRate(rate: number) {
    if (this.audio) this.audio.playbackRate = rate;
  }

  stop() {
    if (!this.audio) return;
    this.audio.pause();
    this.audio.src = ""; // Libera o arquivo imediatamente no Windows para evitar EBUSY
    this.audio = null;

    if (this.currentChunk) {
      this.cleanupChunk(this.currentChunk);
      this.currentChunk = null;
    }
  }


  private async cleanupChunk(filename: string) {
    try {
      if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
        console.log("[Obsidian Voice] Arquivo temporário removido:", filename);
      }
    } catch (e) {
      console.warn("[Obsidian Voice] Não foi possível remover o chunk:", filename, e);
    }
  }
}
