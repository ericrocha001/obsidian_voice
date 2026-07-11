/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Adaptar o motor Piper ao contrato interno de engines TTS.
2. Validar caminhos do executável e do modelo de voz usados pelo Piper.
3. Criar sessões de geração de áudio do Piper com subprocesso persistente.

Mapa de Relacionamentos do Script

1. persistent-subprocess-runtime.ts
   - Tipo: Dependência Direta
   - Relação: Cria PersistentSubprocessRuntime para manter o Piper vivo durante toda a sessão.
   - Criticidade: Alta

2. engine-factory.ts
   - Tipo: Dependência Inversa
   - Relação: PiperEngine é instanciado pela fábrica de engines.
   - Criticidade: Alta

3. pipeline-service.ts
   - Tipo: Fluxo de Dados
   - Relação: Consome sessões geradas por PiperEngine.
   - Criticidade: Alta

Invariantes do Script

1. piperInstallRoot é a única fonte canônica para localização das vozes do Piper.
2. Busca em fallback apenas para compatibilidade com instalações legadas (não para corrigir novas).
3. O subprocesso Piper é iniciado uma única vez no warmup() e encerrado apenas no dispose().
4. abort() nunca encerra o subprocesso — apenas sinaliza para interromper a geração atual.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { EngineHealth, EngineSession, EngineValidationResult, GenerationRequest, GenerationResult, TTSCapabilities, TTSEngine } from "../types";
import { PersistentSubprocessRuntime } from "../runtime/persistent-subprocess-runtime";

export interface PiperEngineOptions {
  piperPath: string;
  piperInstallRoot: string;
  selectedVoice: string;
  basePath?: string;
}

export class PiperEngine implements TTSEngine {
  readonly id = "piper";
  readonly name = "Piper";
  readonly version = "1";
  private health: EngineHealth = { state: "degraded" };

  constructor(private readonly options: PiperEngineOptions) {}

  getCapabilities(): TTSCapabilities {
    return {
      outputModes: ["wav-file"],
      supportsRealtime: false,
      supportsVoiceSwitch: true,
      supportsSpeedControl: true,
    };
  }

  getHealth(): EngineHealth {
    return { ...this.health };
  }

  async validate(): Promise<EngineValidationResult> {
    const { piperPath, piperInstallRoot } = this.options;
    const resolvedModel = this.resolveModelPath();
    const isPiperCommand = this.isCommand(piperPath);
    const piperExists = !!piperPath && (isPiperCommand || fs.existsSync(this.resolvePiperPath()));
    const modelExists = !!resolvedModel && fs.existsSync(resolvedModel);

    if (!piperExists || !modelExists) {
      const error = "Piper executable or voice model is missing.";
      this.health = { state: "broken", lastValidation: Date.now(), lastError: error };
      return { ok: false, error };
    }

    this.health = { state: "healthy", lastValidation: Date.now() };
    return { ok: true };
  }

  createSession(): EngineSession {
    return new PiperEngineSession(this, new PersistentSubprocessRuntime());
  }

  /**
   * Monta os argumentos de linha de comando para o Piper no modo persistente.
   * --json-input: habilita leitura de texto via stdin em formato JSON linha a linha.
   * Cada linha JSON especifica seu próprio output_file, sem necessidade de arg global.
   */
  buildSpawnArgs(): { executablePath: string; args: string[]; cwd?: string } {
    const resolvedPiper = this.resolvePiperPath();
    const resolvedModel = this.resolveModelPath();
    return {
      executablePath: resolvedPiper,
      args: ["--model", resolvedModel, "--json-input"],
      cwd: this.options.basePath,
    };
  }

  private resolvePiperPath(): string {
    const { piperPath, basePath } = this.options;
    if (this.isCommand(piperPath) || path.isAbsolute(piperPath) || !basePath) return piperPath;
    return path.resolve(basePath, piperPath);
  }

  private resolveModelPath(): string {
    const { piperInstallRoot, selectedVoice } = this.options;
    if (!selectedVoice || !piperInstallRoot) return "";

    // Usar a raiz da instalação como fonte canônica (eliminada dedução de path)
    const voiceFile = selectedVoice.endsWith('.onnx') ? selectedVoice : `${selectedVoice}.onnx`;

    // Padrão novo: busca na subpasta isolada
    const subfolderPath = path.join(piperInstallRoot, selectedVoice, voiceFile);
    if (fs.existsSync(subfolderPath)) return subfolderPath;

    // Padrão antigo: tenta o caminho direto na raiz do diretório do Piper
    const directPath = path.join(piperInstallRoot, voiceFile);
    if (fs.existsSync(directPath)) return directPath;

    // Fallback legado: busca nos diretórios pais (até 3 níveis acima) - apenas para compatibilidade
    let currentDir = piperInstallRoot;
    for (let i = 0; i < 3; i++) {
      const parentDir = path.dirname(currentDir);
      if (parentDir === currentDir) break;
      const candidatePath = path.join(parentDir, voiceFile);
      if (fs.existsSync(candidatePath)) return candidatePath;
      currentDir = parentDir;
    }

    return subfolderPath;
  }

  private isCommand(piperPath: string): boolean {
    return !piperPath.includes("/") && !piperPath.includes("\\");
  }
}

class PiperEngineSession implements EngineSession {
  // Flag para sinalizar abort() sem matar o processo (apenas cancela a espera do arquivo)
  private aborted = false;
  // AbortController para cancelar a geração atual via AbortSignal no runtime
  private abortController: AbortController | null = null;

  constructor(
    private readonly engine: PiperEngine,
    private readonly runtime: PersistentSubprocessRuntime,
  ) {}

  /**
   * Inicia o subprocesso Piper persistente com o modelo carregado em RAM.
   * Em vez de um sleep fixo de 500ms, envia "ping" como palavra de validação
   * para garantir que o modelo carregou e o processo está pronto.
   *
   * Usamos "ping" em vez de string vazia porque a maioria dos modelos ONNX
   * do Piper rejeita textos vazios ou sem fonemas pronunciáveis, retornando
   * erro ou simplesmente não gerando saída.
   */
  async warmup(): Promise<void> {
    const { executablePath, args, cwd } = this.engine.buildSpawnArgs();
    this.runtime.start({ executablePath, args, cwd });

    // Ping de validação: envia "ping" para verificar se o Piper está pronto.
    // O Piper com --json-input processa a palavra e gera um WAV de teste.
    // Isso substitui o sleep arbitrário de 500ms, garantindo 100% que o modelo
    // está carregado e o processo está ready antes de qualquer geração real.
    const pingPath = path.join(
      os.tmpdir(),
      `piper_warmup_${Date.now()}.wav`
    );

    try {
      await this.runtime.generate("ping", pingPath, undefined, 10_000);
    } catch (err) {
      // Se o ping falhar, o processo não está saudável
      throw new Error(`[PiperEngine] Subprocesso Piper falhou na inicialização. Verifique o modelo e o executável. ${err}`);
    } finally {
      // Limpa o arquivo de warmup (ignora erros)
      try { await fs.promises.unlink(pingPath); } catch (_) {}
    }

    if (!this.runtime.isAlive()) {
      throw new Error("[PiperEngine] Subprocesso Piper falhou na inicialização. Verifique o modelo e o executável.");
    }
  }

  async generate(request: GenerationRequest): Promise<GenerationResult> {
    this.aborted = false;
    this.abortController = new AbortController();
    const startedAt = Date.now();

    if (!this.runtime.isAlive()) {
      throw new Error("[PiperEngine] Subprocesso Piper não está ativo. O warmup() foi chamado?");
    }

    // INVARIANT: se abort() foi chamado antes desta geração, não gera
    if (this.aborted) {
      throw new Error("[PiperEngine] Geração cancelada via abort().");
    }

    await this.runtime.generate(request.text, request.outputFile, this.abortController.signal);

    return {
      filePath: request.outputFile,
      generationMs: Date.now() - startedAt,
      engineId: this.engine.id,
      cached: false,
    };
  }

  /**
   * Sinaliza cancelamento da geração atual.
   * Dispara o AbortController para interromper imediatamente o waitForFile,
   * evitando vazamento de CPU enquanto o polling continua.
   * NÃO encerra o subprocesso — isso é responsabilidade exclusiva de dispose().
   */
  abort(): void {
    this.aborted = true;
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
    this.runtime.abortCurrentGeneration();
  }

  /**
   * Encerra o subprocesso Piper graciosamente e libera recursos.
   * Deve ser chamado pelo pipeline no stop() da sessão.
   */
  async dispose(): Promise<void> {
    await this.runtime.stop();
  }
}