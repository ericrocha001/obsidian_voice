/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Gerenciar o ciclo de vida de reprodução de um arquivo de áudio (play, pause, retomada e parada).
2. Aplicar alteração de velocidade de reprodução em tempo real no chunk ativo.
3. Garantir a liberação segura do arquivo no sistema operacional (evitando EBUSY).

Mapa de Relacionamentos do Script

1. main.ts
   - Tipo: Dependência Inversa
   - Relação: main.ts controla a reprodução do áudio através do ObsidianAudioPlayer.
   - Criticidade: Alta

Invariantes do Script

1. Nunca deletar arquivos diretamente (esta responsabilidade pertence ao GarbageCollector na Sprint 2).
2. O estado do player deve refletir com precisão a reprodução do chunk atual.
3. A liberação do recurso de áudio deve ser explícita (src = "") para garantir a deleção sem erro EBUSY no Windows.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import { Vault } from "obsidian";

export class ObsidianAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private vault: Vault;
  private playbackRate: number = 1.0;

  constructor(vault: Vault, initialRate: number = 1.0) {
    this.vault = vault;
    this.playbackRate = initialRate;
  }

  playFile(filePath: string, filename: string, onEnded: () => void) {
    this.stop();

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
      onEnded();
    };

    // Captura e silencia o AbortError do Chrome, que ocorre quando audio.play()
    // é interrompido por audio.pause() antes de terminar o carregamento
    // (ex: usuário pausa ou pula rapidamente). O erro é esperado e documentado.
    this.audio.play().catch((err: any) => {
      if (err?.name !== 'AbortError') {
        console.warn("[Obsidian Voice] Erro ao reproduzir áudio:", err);
      }
    });
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
  }

  /**
   * Para o áudio e aguarda a liberação completa do arquivo pelo sistema operacional,
   * prevenindo erros do tipo EBUSY ao tentar deletar o arquivo no Windows em seguida.
   * 
   * O delay de 50ms após o evento 'pause' é necessário para prevenir erros EBUSY
   * no Windows, onde o Chromium pode ainda estar segurando o file handle por alguns
   * milissegundos após o pause. Caso o evento 'pause' não dispare em 100ms
   * (timeout de segurança), a parada é forçada como fallback.
   */
  async stopAndWait(): Promise<void> {
    const audio = this.audio;
    if (!audio || audio.paused || audio.ended) {
      this.stop();
      return;
    }
    
    return new Promise((resolve) => {
      const onPause = () => {
        audio.removeEventListener("pause", onPause);
        // Delay para dar tempo ao OS de liberar o file handle após o pause,
        // prevenindo EBUSY no Windows ao tentar deletar o arquivo em seguida.
        setTimeout(() => {
          this.stop();
          resolve();
        }, 50);
      };
      
      audio.addEventListener("pause", onPause);
      audio.pause();
      
      // Timeout de segurança para evitar travamento se o evento não disparar
      setTimeout(() => {
        audio.removeEventListener("pause", onPause);
        this.stop();
        resolve();
      }, 100);
    });
  }
}