// Responsabilidades do Script
//
// 1. Executar comandos de engines TTS por subprocesso local.
// 2. Encaminhar texto para stdin e registrar falhas do processo de geração.
// 3. Encerrar subprocessos ativos quando a narração for interrompida.

import { ChildProcess, exec } from "child_process";
import { VoiceLogger } from "../../logger";

export interface SubprocessRunRequest {
  command: string;
  input: string;
  cwd?: string;
}

export class SubprocessRuntime {
  private child: ChildProcess | null = null;

  constructor(private readonly logger: VoiceLogger) {}

  run(request: SubprocessRunRequest): Promise<void> {
    this.logger.logDebug(`[Runtime:subprocess] Executando comando: ${request.command}`);

    return new Promise((resolve, reject) => {
      const child = exec(request.command, request.cwd ? { cwd: request.cwd } : {}, (error, _stdout, stderr) => {
        this.child = null;
        if (error) {
          this.logger.logError(stderr || error.message);
          this.logger.logExit(error.code || 1);
          reject(new Error(error.message));
          return;
        }
        this.logger.logExit(0);
        resolve();
      });

      this.child = child;
      if (child.stdin) {
        child.stdin.on("error", (e) => this.logger.logError(`Erro no stdin do subprocesso TTS: ${e.message}`));
        child.stdin.write(request.input, "utf-8");
        child.stdin.end();
      }
    });
  }

  abort(): void {
    if (!this.child) return;
    this.child.kill();
    this.child = null;
  }
}
