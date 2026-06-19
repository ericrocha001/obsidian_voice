// Responsabilidades do Script
//
// 1. Verificar espaço livre em disco da partição do Vault via subprocesso nativo não-bloqueante.
// 2. Validar plataforma e arquitetura do sistema operacional contra listas de suporte declaradas.
// 3. Orquestrar a validação completa de ambiente para um modelo antes de iniciar qualquer download.

import { exec } from 'child_process';
import * as fs from 'fs';
import type { ModelId } from '../../types/model';

const TIMEOUT_MS = 3000;

function execWithTimeout(command: string, cwd: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      controller.abort();
      reject(new Error(`Comando excedeu o timeout de ${TIMEOUT_MS}ms: ${command}`));
    }, TIMEOUT_MS);

    exec(command, { cwd, signal: controller.signal }, (error, stdout) => {
      clearTimeout(timer);
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout.trim());
    });
  });
}

async function getDiskFreeBytes(vaultPath: string): Promise<number> {
  const safeCwd = (await fs.promises.access(vaultPath).then(() => vaultPath).catch(() => process.cwd())) || process.cwd();

  if (process.platform === 'win32') {
    const output = await execWithTimeout(
      'powershell -Command "(Get-Item -Path .).PSDrive.Free"',
      safeCwd,
    );
    const bytes = parseInt(output, 10);
    if (isNaN(bytes)) throw new Error(`Saída inesperada do PowerShell: "${output}"`);
    return bytes;
  }

  // macOS e Linux
  const output = await execWithTimeout('df -k .', safeCwd);
  const lines = output.split('\n');
  const dataLine = lines[1];
  if (!dataLine) throw new Error(`Saída inesperada do df: "${output}"`);
  const parts = dataLine.trim().split(/\s+/);
  // Coluna 3 (índice 3) = blocos disponíveis em kilobytes
  const availableKb = parseInt(parts[3], 10);
  if (isNaN(availableKb)) throw new Error(`Não foi possível parsear espaço disponível: "${dataLine}"`);
  return availableKb * 1024;
}

export class ResourceGuard {
  private vaultPath: string;

  constructor(vaultPath: string) {
    this.vaultPath = vaultPath;
  }

  async checkDiskSpace(requiredBytes: number): Promise<boolean> {
    const freeBytes = await getDiskFreeBytes(this.vaultPath);
    console.log(`[ResourceGuard] Espaço livre: ${freeBytes} bytes | Necessário: ${requiredBytes} bytes`);
    return freeBytes >= requiredBytes;
  }

  checkPlatformAndArch(supportedOS: string[], supportedArch: string[]): boolean {
    const osOk = supportedOS.includes(process.platform);
    const archOk = supportedArch.includes(process.arch);
    console.log(`[ResourceGuard] Plataforma: ${process.platform} (ok=${osOk}) | Arch: ${process.arch} (ok=${archOk})`);
    return osOk && archOk;
  }

  async validateEnvironment(
    modelId: ModelId,
    requiredBytes: number,
  ): Promise<{ success: boolean; error?: string }> {
    const platformOk = this.checkPlatformAndArch(
      ['win32', 'darwin', 'linux'],
      ['x64', 'arm64'],
    );

    if (!platformOk) {
      const msg = `Modelo "${modelId}": plataforma (${process.platform}/${process.arch}) não suportada.`;
      console.error(`[ResourceGuard] ${msg}`);
      return { success: false, error: msg };
    }

    try {
      const diskOk = await this.checkDiskSpace(requiredBytes);
      if (!diskOk) {
        const msg = `Modelo "${modelId}": espaço em disco insuficiente. Necessário: ${requiredBytes} bytes.`;
        console.error(`[ResourceGuard] ${msg}`);
        return { success: false, error: msg };
      }
    } catch (err) {
      const msg = `Modelo "${modelId}": falha na verificação de disco — ${err instanceof Error ? err.message : String(err)}`;
      console.error(`[ResourceGuard] ${msg}`);
      return { success: false, error: msg };
    }

    console.log(`[ResourceGuard] Ambiente validado com sucesso para o modelo "${modelId}".`);
    return { success: true };
  }
}
