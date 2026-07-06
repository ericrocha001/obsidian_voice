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
  private playbackRate: number = 1.0;

  constructor(vault: Vault, initialRate: number = 1.0) {
    this.vault = vault;
    this.playbackRate = initialRate;
  }

  playFile(filePath: string, filename: string, onEnded: () => void) {
    this.stop();

    this.currentChunk = filename;
    this.audio = new Audio(filePath);
    this.audio.playbackRate = this.playbackRate;

    // Garante que o playbackRate seja reaplicado assim que o áudio estiver carregado.
    // No Chromium, o playbackRate setado antes do carregamento completo pode ser ignorado,
    // fazendo o novo chunk iniciar sempre em 1x (velocidade padrão).
    const reapplyRate = () => {
      if (this.audio) this.audio.playbackRate = this.playbackRate;
    };
    this.audio.addEventListener("canplay", reapplyRate);

    this.audio.onended = () => {
      this.audio?.removeEventListener("canplay", reapplyRate);
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
      // Reaplica o playbackRate imediatamente após retomar, pois o navegador
      // pode ignorar o valor salvo durante pausa/retomada no Chromium.
      this.audio.playbackRate = this.playbackRate;
    } else {
      this.audio.pause();
    }
  }

  /** Aplica velocidade de reprodução ao chunk ativo e persiste para próximas instâncias.
   *  Evita atualizações redundantes no hardware de áudio quando o valor não mudou. */
  setPlaybackRate(rate: number) {
    if (Math.abs(this.playbackRate - rate) < 0.001) return;
    this.playbackRate = rate;
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
      await fs.promises.unlink(filename);
      console.log("[Obsidian Voice] Arquivo temporário removido:", filename);
    } catch (e: any) {
      // Ignora ENOENT (arquivo já não existe)
      if (e?.code !== 'ENOENT') {
        console.warn("[Obsidian Voice] Não foi possível remover o chunk:", filename, e);
      }
    }
  }
}