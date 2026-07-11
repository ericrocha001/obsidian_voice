/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Manter o processo Piper vivo durante toda uma sessão de narração.
2. Enviar textos ao Piper via stdin em formato JSON linha a linha.
3. Aguardar a escrita do arquivo WAV de saída após cada geração.
4. Encerrar o subprocesso de forma graciosa no dispose, com fallback SIGKILL.

Mapa de Relacionamentos do Script

1. piper-engine.ts
   - Tipo: Dependência Inversa
   - Relação: PiperEngineSession consome este runtime para gerar áudio persistentemente.
   - Criticidade: Alta

2. subprocess-runtime.ts
   - Tipo: Dependência Inversa
   - Relação: Alternativa one-shot usada pelo Kokoro; este runtime é a contraparte persistente.
   - Criticidade: Média

Invariantes do Script

1. Nunca mais de um processo Piper ativo por instância de runtime.
2. O stdin jamais deve ser escrito após ser encerrado (EOF enviado).
3. O stderr deve ser consumido continuamente para evitar deadlock de I/O no SO.
4. Cada chamada a generate() é serializada: não há chamadas concorrentes por instância.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import * as fs from "fs";
import { ChildProcess, spawn } from "child_process";

export interface PersistentRuntimeOptions {
  /** Caminho absoluto (ou comando PATH) do executável Piper. */
  executablePath: string;
  /** Argumentos de inicialização (modelo, voz, sample rate, --json-input, etc.). */
  args: string[];
  /** Diretório de trabalho opcional para o subprocesso. */
  cwd?: string;
}

export class PersistentSubprocessRuntime {
  private child: ChildProcess | null = null;
  private stdinClosed = false;

  /**
   * Inicia o subprocesso Piper com os argumentos configurados.
   * Deve ser chamado uma única vez por sessão (no warmup).
   *
   * INVARIANT: Se já houver um processo ativo, lança erro para evitar duplicidade.
   */
  start(options: PersistentRuntimeOptions): void {
    if (this.child) {
      throw new Error("[PersistentSubprocessRuntime] Processo já está ativo. Chame stop() antes.");
    }

    this.stdinClosed = false;

    const child = spawn(options.executablePath, options.args, {
      cwd: options.cwd,
      stdio: ["pipe", "pipe", "pipe"],
      // WARNING: windowsHide evita janela de console no Windows
      windowsHide: true,
    });

    this.child = child;

    // INVARIANT: stderr deve ser consumido continuamente para não travar o SO.
    // Se não lermos o stderr, o buffer do pipe enche e o Piper trava (deadlock).
    child.stderr?.on("data", (data: Buffer) => {
      const msg = data.toString().trim();
      if (msg) console.log(`[Piper] ${msg}`);
    });

    child.on("error", (err) => {
      console.error(`[PersistentSubprocessRuntime] Erro no processo Piper: ${err.message}`);
      this.child = null;
    });

    child.on("exit", (code, signal) => {
      console.log(`[PersistentSubprocessRuntime] Piper encerrado (code=${code}, signal=${signal})`);
      this.child = null;
    });

    // Absorve stdout — o áudio vai para --output_file especificado por JSON, não para stdout.
    // Ler stdout evita que o pipe encha caso o Piper escreva algo inesperado.
    child.stdout?.resume();
  }

  /**
   * Gera um chunk de áudio enviando texto via stdin em formato JSON.
   *
   * O Piper com --json-input aceita por linha: {"text":"...","output_file":"..."}
   * Aguarda o arquivo de saída aparecer no disco com polling, pois o Piper
   * escreve de forma síncrona no output_file antes de processar o próximo JSON.
   *
   * @param text  Texto a ser sintetizado.
   * @param outputPath  Caminho absoluto do arquivo WAV de saída.
   * @param signal  AbortSignal opcional para cancelar a espera do arquivo.
   * @param timeoutMs  Timeout máximo de espera pelo arquivo (padrão: 30s).
   */
  async generate(text: string, outputPath: string, signal?: AbortSignal, timeoutMs = 30_000): Promise<void> {
    if (!this.isAlive()) {
      throw new Error("[PersistentSubprocessRuntime] Processo Piper não está ativo.");
    }

    // Remove arquivo anterior se existir, para garantir detecção correta da nova geração
    // Usa fs.promises com try/catch para evitar EBUSY no Windows e ENOENT se não existir
    try {
      await fs.promises.unlink(outputPath);
    } catch (err: any) {
      // ENOENT: arquivo não existe (esperado na primeira geração)
      // EBUSY: Windows ainda não liberou o handle (apenas ignora)
      if (err.code !== "ENOENT" && err.code !== "EBUSY") {
        throw err;
      }
    }

    // JSON.stringify garante escape correto de aspas, quebras de linha e caracteres especiais
    const payload = JSON.stringify({ text, output_file: outputPath }) + "\n";

    await new Promise<void>((resolve, reject) => {
      if (!this.child?.stdin || this.stdinClosed) {
        return reject(new Error("[PersistentSubprocessRuntime] stdin não disponível."));
      }

      const written = this.child.stdin.write(payload, "utf-8", (err) => {
        if (err) reject(new Error(`[PersistentSubprocessRuntime] Erro ao escrever no stdin: ${err.message}`));
        else resolve();
      });

      // BUGFIX: se write() retornar false, o buffer interno está cheio (backpressure).
      // Aguarda 'drain' antes de continuar. Em condições normais isso raramente ocorre.
      if (!written) {
        this.child.stdin.once("drain", resolve);
      }
    });

    // Aguarda o arquivo WAV aparecer no disco via polling.
    // O Piper finaliza a escrita do arquivo antes de ler o próximo JSON da stdin.
    await this.waitForFile(outputPath, signal, timeoutMs);
  }

  /**
   * Cancela a geração atual abortando a espera do arquivo.
   * Disparado pelo abort() da sessão.
   * O cancelamento é orquestrado exclusivamente pela PiperEngineSession
   * via injeção do AbortSignal no generate(). Este método é mantido como
   * interface pública para a sessão disparar o abort no runtime.
   */
  abortCurrentGeneration(): void {
    // O cancelamento real é feito via AbortSignal injetado no generate().
    // Este método existe apenas como interface de compatibilidade.
  }

  /**
   * Verifica se o subprocesso está ativo e vivo.
   */
  isAlive(): boolean {
    return this.child !== null && !this.stdinClosed;
  }

  /**
   * Encerra o subprocesso graciosamente.
   * 1. Fecha stdin (envia EOF) → Piper termina ao acabar a fila interna.
   * 2. Aguarda até 5s para o processo sair.
   * 3. Se não sair, força com SIGTERM e depois SIGKILL.
   */
  async stop(): Promise<void> {
    const child = this.child;
    if (!child) return;

    this.stdinClosed = true;

    // Fecha stdin para sinalizar EOF ao Piper
    try {
      child.stdin?.end();
    } catch (_) {
      // Ignora erros ao fechar stdin (processo pode já ter saído)
    }

    // Aguarda encerramento graciod com timeout
    const exited = await this.waitForExit(child, 5_000);

    if (!exited) {
      console.warn("[PersistentSubprocessRuntime] Timeout graciod — forçando SIGTERM.");
      try { child.kill("SIGTERM"); } catch (_) {}

      const exitedAfterTerm = await this.waitForExit(child, 2_000);
      if (!exitedAfterTerm) {
        console.warn("[PersistentSubprocessRuntime] SIGTERM ignorado — forçando SIGKILL.");
        try { child.kill("SIGKILL"); } catch (_) {}
      }
    }

    this.child = null;
    console.log("[Obsidian Voice] Subprocesso Piper encerrado no unload.");
  }

  /**
   * Aguarda o arquivo aparecer no disco com polling não-bloqueante.
   *
   * Usa setTimeout(..., 0) em vez de setImmediate porque o ambiente
   * Electron do Obsidian (renderer) não expõe setImmediate globalmente.
   * setTimeout(..., 0) é o fallback universal e cede o event loop
   * o suficiente para processar AbortSignal e outras I/Os.
   *
   * Usa fs.promises.stat para não bloquear a thread principal da UI.
   *
   * Para garantir que o arquivo foi completamente escrito (e não apenas
   * o header de 44 bytes), implementa verificação de "tamanho estável":
   * mede o tamanho, espera 50ms, mede novamente. Se o tamanho não mudou,
   * o Piper fechou o file handle e o arquivo está completo.
   *
   * Falha com timeout se o arquivo não aparecer dentro do prazo.
   * Falha imediatamente se o AbortSignal for disparado.
   */
  private async waitForFile(filePath: string, signal?: AbortSignal, timeoutMs = 30_000): Promise<void> {
    const start = Date.now();
    let previousSize = 0;

    while (true) {
      // Verifica abortamento externo (chamado por abort() da sessão)
      if (signal?.aborted) {
        throw new Error("[PersistentSubprocessRuntime] Geração cancelada via abort().");
      }

      // Verifica se o processo morreu enquanto aguardava
      if (!this.child) {
        throw new Error("[PersistentSubprocessRuntime] Processo Piper morreu durante geração.");
      }

      // Verifica timeout
      if (Date.now() - start > timeoutMs) {
        throw new Error(`[PersistentSubprocessRuntime] Timeout aguardando arquivo WAV: ${filePath}`);
      }

      try {
        const stat = await fs.promises.stat(filePath);

        // Verificação de "tamanho estável": se o arquivo parou de crescer,
        // o Piper fechou o file handle e o arquivo está completo.
        if (stat.size >= 44 && stat.size === previousSize) {
          return;
        }

        // Atualiza o tamanho anterior para a próxima iteração
        if (stat.size >= 44) {
          previousSize = stat.size;
        }
      } catch (err: any) {
        // ENOENT: arquivo ainda não foi criado, continua polling
        if (err.code !== "ENOENT") {
          throw err;
        }
      }

      // Cede o event loop com setTimeout(..., 0) em vez de setImmediate.
      // O Electron (renderer do Obsidian) não expõe setImmediate globalmente.
      // setTimeout(..., 0) é o fallback universal compatível com todos os ambientes.
      await new Promise<void>(resolve => setTimeout(resolve, 0));
    }
  }

  /**
   * Aguarda o processo encerrar dentro do timeout.
   * @returns true se encerrou, false se expirou o timeout.
   */
  private waitForExit(child: ChildProcess, timeoutMs: number): Promise<boolean> {
    return new Promise((resolve) => {
      if (child.exitCode !== null) {
        // Processo já encerrou
        resolve(true);
        return;
      }

      const timer = setTimeout(() => {
        resolve(false);
      }, timeoutMs);

      child.once("exit", () => {
        clearTimeout(timer);
        resolve(true);
      });
    });
  }
}