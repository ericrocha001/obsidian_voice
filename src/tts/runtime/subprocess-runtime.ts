/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Executar comandos de engines TTS por subprocesso local.
2. Encaminhar texto para stdin do subprocesso.
3. Encerrar subprocessos ativos quando a narração for interrompida.

Mapa de Relacionamentos do Script

1. piper-engine.ts
   - Tipo: Dependência Direta
   - Relação: Consome SubprocessRuntime para executar o comando Piper.
   - Criticidade: Alta

2. kokoro-engine.ts
   - Tipo: Dependência Direta
   - Relação: Consome SubprocessRuntime para executar o comando Kokoro.
   - Criticidade: Alta

Invariantes do Script

1. O subprocesso deve ser encerrado ao chamar abort().
2. Nunca deve haver mais de um subprocesso ativo por instância.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import { ChildProcess, exec } from "child_process";

export interface SubprocessRunRequest {
  command: string;
  input: string;
  cwd?: string;
}

export class SubprocessRuntime {
  private child: ChildProcess | null = null;

  constructor() {}

  run(request: SubprocessRunRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      const child = exec(request.command, request.cwd ? { cwd: request.cwd } : {}, (error, _stdout, stderr) => {
        this.child = null;
        if (error) {
          reject(new Error(error.message));
          return;
        }
        resolve();
      });

      this.child = child;
      if (child.stdin) {
        child.stdin.on("error", (e) => console.warn(`Erro no stdin do subprocesso TTS: ${e.message}`));
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
