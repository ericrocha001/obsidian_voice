// Responsabilidades do Script
//
// 1. Fornecer API pública unificada (Facade) para instalação e remoção de modelos TTS.
// 2. Orquestrar ManifestService, ResourceGuard, DownloadManager e ModelInstaller.
// 3. Persistir metadados de modelos instalados via callback no data.json do plugin.
// 4. Resolver caminhos de executáveis de forma polimórfica entre instalação gerenciada e manual.

import * as fs from 'fs/promises';
import * as path from 'path';
import * as os from 'os';
import { exec } from 'child_process';
import { promisify } from 'util';
import { requestUrl } from 'obsidian';
import { ManifestService, type ModelManifest } from './manifest-service';
import { ResourceGuard } from './resource-guard';
import { DownloadManager } from './download-manager';
import { ModelInstaller, type InstallCallbacks } from './model-installer';
import { getModelEntry } from './model-catalog';
import { InstallState } from '../../types/model';
import type { ModelId, InstalledModelMetadata } from '../../types/model';
import { VoiceLogger } from '../../logger';

const MANIFEST_URL = 'https://raw.githubusercontent.com/ericrocha001/obsidian_voice/main/manifest-models.json';
const execAsync = promisify(exec);

interface SettingsRef {
  models: Record<string, InstalledModelMetadata>;
  getPiperPath: () => string;
  saveSettings: () => Promise<void>;
}

export interface PiperVoiceEntry {
  key: string;
  name: string;
  language: {
    code: string;
    family: string;
    region: string;
    name_native: string;
    name_english: string;
    country_english: string;
  };
  quality: string;
  num_speakers: number;
  speaker_id_map?: Record<string, number>;
  files: Record<string, { size_bytes: number; md5_digest: string }>;
  aliases: string[];
}

export class ModelManagementService {
  private manifestService: ManifestService;
  private resourceGuard: ResourceGuard;
  private downloadManager: DownloadManager;
  private installer: ModelInstaller;
  private settingsRef: SettingsRef;
  private basePath: string;
  private cachedManifest: ModelManifest | null = null;
  private voicesCache: PiperVoiceEntry[] | null = null;
  private logger: VoiceLogger;

  constructor(basePath: string, settingsRef: SettingsRef, logger: VoiceLogger) {
    this.basePath = basePath;
    this.settingsRef = settingsRef;
    this.logger = logger;

    const binDir = path.join(basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin');

    this.manifestService = new ManifestService(MANIFEST_URL);
    this.resourceGuard = new ResourceGuard(basePath);
    this.downloadManager = new DownloadManager();

    const callbacks: InstallCallbacks = {
      onInstalled: (modelId, metadata) => {
        this.settingsRef.models[modelId] = metadata;
        this.settingsRef.saveSettings().catch((err) =>
          console.error('[ModelManagementService] Erro ao salvar metadados:', err)
        );
      },
      onRemoved: (modelId) => {
        delete this.settingsRef.models[modelId];
        this.settingsRef.saveSettings().catch((err) =>
          console.error('[ModelManagementService] Erro ao salvar remoção:', err)
        );
      },
    };

    this.installer = new ModelInstaller(binDir, callbacks);
  }

  isInstalled(modelId: ModelId): boolean {
    return !!this.settingsRef.models[modelId];
  }

  /**
   * Resolve o caminho absoluto do executável do modelo.
   * Prioriza o caminho salvo nos metadados de instalação gerenciada.
   * Fallback para settings.piperPath (instalação manual legada).
   */
  resolveBinaryPath(modelId: ModelId): string {
    const metadata = this.settingsRef.models[modelId];
    if (metadata?.absolutePath) return metadata.absolutePath;
    if (modelId === 'piper') return this.settingsRef.getPiperPath() ?? '';
    return '';
  }

  isInstalling(modelId: ModelId): boolean {
    return this.installer.getMachine(modelId).isInstalling();
  }

  async ensureManifest(): Promise<ModelManifest> {
    if (!this.cachedManifest) {
      this.cachedManifest = await this.manifestService.fetchManifest();
    }
    return this.cachedManifest;
  }

  async fetchPiperVoices(): Promise<void> {
    if (this.voicesCache) return;

    const url = 'https://huggingface.co/rhasspy/piper-voices/resolve/main/voices.json';
    const res = await requestUrl({ url, method: 'GET', contentType: 'application/json' });
    const parsed = JSON.parse(res.text) as Record<string, PiperVoiceEntry>;
    this.voicesCache = Object.values(parsed).sort((a, b) => a.key.localeCompare(b.key));
  }

  async install(
    modelId: ModelId,
    onStateChange: (state: InstallState) => void,
    onProgress?: (percent: number) => void,
  ): Promise<void> {
    if (this.isInstalled(modelId) && !this.isInstalling(modelId)) {
      throw new Error(`Modelo "${modelId}" já está instalado.`);
    }

    const catalogEntry = getModelEntry(modelId);
    if (!catalogEntry) {
      throw new Error(`Modelo "${modelId}" não encontrado no catálogo.`);
    }

    const machine = this.installer.getMachine(modelId);
    machine.setOnStateChange((state) => {
      this.installer.getMachine(modelId).setOnStateChange(() => {});
      onStateChange(state);
    });

    machine.transitionTo(InstallState.FETCHING_MANIFEST);
    onStateChange(InstallState.FETCHING_MANIFEST);
    machine.setOnStateChange(onStateChange);

    const manifest = await this.ensureManifest();
    const modelEntry = manifest.models[modelId];
    if (!modelEntry) {
      machine.transitionTo(InstallState.FAILED);
      throw new Error(`Modelo "${modelId}" não encontrado no manifesto.`);
    }

    const platformKey = this.resolvePlatformKey() as 'windows-x64' | 'macos-arm64' | 'linux-x64' | 'macos-x64' | 'linux-arm64';
    const platforms = modelEntry.platforms || {};
    const platformEntry = platforms[platformKey];
    if (!platformEntry) {
      machine.transitionTo(InstallState.FAILED);
      throw new Error(`Plataforma "${platformKey}" não suportada para o modelo "${modelId}".`);
    }

    const envCheck = await this.resourceGuard.validateEnvironment(
      modelId,
      catalogEntry.estimatedDiskMB * 1024 * 1024,
    );
    if (!envCheck.success) {
      machine.transitionTo(InstallState.FAILED);
      throw new Error(envCheck.error);
    }

    machine.transitionTo(InstallState.DOWNLOADING);
    onStateChange(InstallState.DOWNLOADING);

    const tmpDir = path.join(os.tmpdir(), 'obsidian-voice-downloads');
    const archiveName = `${modelId}-${platformKey}.zip`;
    const archivePath = path.join(tmpDir, archiveName);

    if (onProgress) {
      const onDownloadProgress = (progress: { percent: number }) => onProgress(progress.percent);
      this.downloadManager.on('progress', onDownloadProgress);
    }

    try {
      await this.downloadManager.download({
        url: platformEntry.url,
        destPath: archivePath,
        expectedSha256: platformEntry.sha256,
      });
    } finally {
      this.downloadManager.removeAllListeners('progress');
    }

    const destDir = path.join(this.basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin', modelId);

    await this.installer.install(modelId, archivePath, destDir, manifest.version);

    // Runtime Registration: localizar binário e validar saúde
    await this.registerRuntime(modelId);
  }

  async installVoice(voice: PiperVoiceEntry, onProgress?: (percent: number) => void): Promise<void> {
    const piperPathSetting = this.settingsRef.models.piper?.absolutePath;
    if (!piperPathSetting) {
      throw new Error('Piper não está instalado.');
    }

    const destDir = path.dirname(piperPathSetting);
    const base = 'https://huggingface.co/rhasspy/piper-voices/resolve/main/';

    const tasks: { url: string; dest: string; md5: string }[] = [];
    for (const [rel, meta] of Object.entries(voice.files)) {
      const fileName = path.basename(rel);
      const dest = path.join(destDir, fileName);
      tasks.push({ url: base + rel, dest, md5: meta.md5_digest });
    }

    for (const task of tasks) {
      await this.downloadManager.download({
        url: task.url,
        destPath: task.dest,
        expectedMd5: task.md5,
      });
      if (onProgress) onProgress(100);
    }
  }

  async remove(modelId: ModelId): Promise<void> {
    if (!this.isInstalled(modelId)) {
      throw new Error(`Modelo "${modelId}" não está instalado.`);
    }

    const destDir = path.join(this.basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin', modelId);
    await this.installer.remove(modelId, destDir);
  }

  private resolvePlatformKey(): string {
    const arch = process.arch === 'arm64' ? 'arm64' : 'x64';
    if (process.platform === 'win32') return `windows-${arch}`;
    if (process.platform === 'darwin') return `macos-${arch}`;
    return `linux-${arch}`;
  }

  async findPiperBinary(binDir: string): Promise<string> {
    const candidates: string[] = process.platform === 'win32' ? ['piper.exe'] : ['piper'];

    async function walk(dir: string): Promise<string | null> {
      let entries: { name: string; isDirectory: () => boolean }[] = [];
      try {
        entries = await fs.readdir(dir, { withFileTypes: true });
      } catch {
        return null;
      }
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          const found = await walk(full);
          if (found) return found;
        } else if (candidates.includes(entry.name)) {
          return full;
        }
      }
      return null;
    }

    const found = await walk(binDir);
    if (!found) throw new Error('Binário do Piper não encontrado após instalação.');
    return found;
  }

  private async healthcheckPiper(piperPath: string): Promise<void> {
    const run = async () => {
      await execAsync(`"${piperPath}" --help`, { timeout: 120000 });
    };

    try {
      await run();
    } catch (err: any) {
      const code = err?.code ?? -1;
      if (process.platform !== 'win32' && code === 'EACCES') {
        await fs.chmod(piperPath, 0o755);
        await run();
        return;
      }
      throw new Error(`Healthcheck do Piper falhou: ${err?.message || String(err)}`);
    }
  }

  private async registerRuntime(modelId: ModelId): Promise<void> {
    if (modelId !== 'piper') return;

    const binDir = path.join(this.basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin', 'piper');
    const piperPath = await this.findPiperBinary(binDir);

    // Persiste metadados de forma atômica antes do healthcheck.
    // Garante que o status "Instalado" seja salvo mesmo se o healthcheck falhar.
    this.settingsRef.models.piper = {
      id: 'piper',
      activeVersion: 'official-2023.11.14-2',
      absolutePath: piperPath,
      installedAt: Date.now(),
    } as any;

    await this.settingsRef.saveSettings();

    // Healthcheck isolado: falhas de permissão temporária não abortam o fluxo.
    try {
      await this.healthcheckPiper(piperPath);
    } catch (err: any) {
      this.logger.logError(`Healthcheck do Piper falhou (não-fatal): ${err?.message || String(err)}`);
      console.warn('[ModelManagementService] Healthcheck do Piper falhou (não-fatal):', err);
    }
  }
}