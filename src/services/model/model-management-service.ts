/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Fornecer API pública unificada (Facade) para instalação e remoção de modelos TTS.
2. Orquestrar ManifestService, ResourceGuard, DownloadManager e ModelInstaller.
3. Persistir metadados de modelos instalados via callback no data.json do plugin.
4. Resolver caminhos de executáveis exclusivamente via metadados persistidos.
5. Baixar vozes individuais do Piper com progresso em tempo real baseado em bytes.
6. Migrar instalações legadas (versões antigas) para o novo formato de metadados.
7. Utilizar diretório temporário do sistema operacional para staging, evitando peso no vault do usuário.
8. Detectar e limpar metadata corrompido quando o arquivo físico não existe mais.

Mapa de Relacionamentos do Script

1. src/main.ts
   - Tipo: Dependência Direta
   - Relação: Consome instância do service para instalar/remover modelos.
   - Criticidade: Alta

2. src/settings.ts
   - Tipo: Fluxo de Dados
   - Relação: Fornece PiperVoiceEntry, cache de vozes e método installVoice() com progresso.
   - Criticidade: Alta

3. src/services/model/download-manager.ts
   - Tipo: Dependência Direta
   - Relação: Gerencia downloads com progresso isolado por callback.
   - Criticidade: Alta

4. src/services/model/model-installer.ts
   - Tipo: Dependência Direta
   - Relação: Orquestra extração e staging de modelos.
   - Criticidade: Alta

Invariantes do Script

1. installedRootPath é a única fonte canônica para localização da instalação.
2. executablePath é a única fonte canônica para localização do binário.
3. Nenhuma rotina deduz caminhos: todas as operações usam metadados.
4. A remoção só atualiza estado após confirmação física de exclusão.
5. A migração legacy só roda para instalações antigas, nunca para instalações novas.
6. O staging temporário nunca deve ocorrer dentro do vault do usuário.
7. O metadata de instalação só é considerado válido quando o arquivo físico existe no caminho registrado.
8. getPiperRoot() retorna o diretório do executável, não a raiz da instalação.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import * as fs from 'fs';
import * as fsp from 'fs/promises';
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

/**
 * Contém a lógica de migração para instalações legadas.
 * Executado apenas uma vez no onload.
 * 
 * INVARIANT: Esta classe SÓ lida com dados legados (absolutePath).
 * Não deve ser usada para novas instalações.
 */
export class LegacyMigration {
  /**
   * Detecta se os metadados estão no formato legado (absolutePath como executável).
   */
  static needsMigration(metadata: any): boolean {
    if (!metadata) return false;
    return !metadata.installedRootPath && !!metadata.absolutePath;
  }

  /**
   * Converte metadados legados para o novo formato canônico.
   * Retorna os metadados migrados ou null se não houver caminho legacy.
   */
  static migrate(metadata: any): InstalledModelMetadata | null {
    if (metadata.installedRootPath) {
      return metadata;
    }

    const legacyPath = metadata.absolutePath;
    if (!legacyPath) return null;

    const installRoot = path.dirname(legacyPath);

    const migrated: InstalledModelMetadata = {
      id: metadata.id,
      activeVersion: metadata.activeVersion,
      installedRootPath: installRoot,
      executablePath: legacyPath,
      installedAt: metadata.installedAt,
    };

    return migrated;
  }
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

    const stagingRoot = path.join(os.tmpdir(), 'obsidian-voice-staging');

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

    this.installer = new ModelInstaller(stagingRoot, callbacks, this.isInstalled.bind(this));
  }

  getPiperInstallRoot(): string {
    if (process.platform === 'win32') {
      return path.join(os.homedir(), 'AppData', 'Roaming', 'obsidian-voice', 'bin', 'piper');
    } else if (process.platform === 'darwin') {
      return path.join(os.homedir(), 'Library', 'Application Support', 'obsidian-voice', 'bin', 'piper');
    } else {
      return path.join(os.homedir(), '.local', 'share', 'obsidian-voice', 'bin', 'piper');
    }
  }

  isInstalled(modelId: ModelId): boolean {
    const metadata = this.settingsRef.models[modelId];
    if (!metadata) return false;

    try {
      return fs.existsSync(metadata.installedRootPath);
    } catch {
      return false;
    }
  }

  resolveBinaryPath(modelId: ModelId): string {
    const metadata = this.settingsRef.models[modelId];
    if (!metadata?.executablePath) return '';
    return metadata.executablePath;
  }

  getInstallRoot(modelId: ModelId): string {
    const metadata = this.settingsRef.models[modelId];
    return metadata?.installedRootPath || '';
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

  getPiperRoot(): string {
    const metadata = this.settingsRef.models.piper;
    if (!metadata?.executablePath) return '';
    return path.dirname(metadata.executablePath);
  }

  async install(
    modelId: ModelId,
    onStateChange: (state: InstallState) => void,
    onProgress?: (percent: number) => void,
  ): Promise<void> {
    // Detecta metadata corrompido: arquivo físico movido/removido manualmente
    const metadata = this.settingsRef.models[modelId];
    if (metadata && metadata.installedRootPath && !fs.existsSync(metadata.installedRootPath)) {
      delete this.settingsRef.models[modelId];
      await this.settingsRef.saveSettings();
    }

    if (this.isInstalled(modelId) && !this.isInstalling(modelId)) {
      throw new Error(`Modelo "${modelId}" já está instalado.`);
    }

    const catalogEntry = getModelEntry(modelId);
    if (!catalogEntry) {
      throw new Error(`Modelo "${modelId}" não encontrado no catálogo.`);
    }

    const machine = this.installer.getMachine(modelId);
    machine.setOnStateChange(() => {});
    machine.setOnStateChange(onStateChange);

    machine.transitionTo(InstallState.FETCHING_MANIFEST);
    onStateChange(InstallState.FETCHING_MANIFEST);

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

    const onDownloadProgress = onProgress
      ? (progress: { percent: number }) => onProgress(progress.percent)
      : null;

    if (onDownloadProgress) {
      this.downloadManager.on('progress', onDownloadProgress);
    }

    try {
      await this.downloadManager.download({
        url: platformEntry.url,
        destPath: archivePath,
        expectedSha256: platformEntry.sha256,
      });
    } finally {
      if (onDownloadProgress) {
        this.downloadManager.off('progress', onDownloadProgress);
      }
    }

    const destDir = modelId === 'piper'
      ? this.getPiperInstallRoot()
      : path.join(this.basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin', modelId);

    await this.installer.install(modelId, archivePath, destDir, manifest.version);
  }

  async installVoice(voice: PiperVoiceEntry, onProgress?: (percent: number) => void): Promise<void> {
    const basePiperDir = this.getPiperRoot();
    if (!basePiperDir) {
      throw new Error('Piper não está instalado.');
    }

    const voiceSubDir = path.join(basePiperDir, voice.key);
    await fsp.mkdir(voiceSubDir, { recursive: true });

    const base = 'https://huggingface.co/rhasspy/piper-voices/resolve/main/';

    const totalBytes = Object.values(voice.files).reduce((sum, meta) => sum + meta.size_bytes, 0);
    let downloadedBytes = 0;

    const tasks: { url: string; dest: string; md5: string; sizeBytes: number }[] = [];

    for (const [rel, meta] of Object.entries(voice.files)) {
      const fileName = path.basename(rel);
      const dest = path.join(voiceSubDir, fileName);
      tasks.push({ url: base + rel, dest, md5: meta.md5_digest, sizeBytes: meta.size_bytes });
    }

    for (const task of tasks) {
      const onFileProgress = (progress: { bytesDownloaded: number }) => {
        if (onProgress) {
          const currentTotal = downloadedBytes + progress.bytesDownloaded;
          const percent = Math.round((currentTotal / totalBytes) * 100);
          onProgress(percent);
        }
      };

      await this.downloadManager.download({
        url: task.url,
        destPath: task.dest,
        expectedMd5: task.md5,
        onProgress: onFileProgress,
      });

      downloadedBytes += task.sizeBytes;
    }

    if (onProgress) onProgress(100);
    console.log(`[ModelManagementService] Voz ${voice.key} instalada em: ${voiceSubDir}`);
  }

  async migrateLegacyMetadata(): Promise<boolean> {
    const piperMetadata = this.settingsRef.models.piper;

    if (!LegacyMigration.needsMigration(piperMetadata)) {
      return false;
    }

    const migrated = LegacyMigration.migrate(piperMetadata!);
    if (!migrated) return false;

    this.settingsRef.models.piper = migrated;
    await this.settingsRef.saveSettings();

    console.log('[ModelManagementService] Metadados legacy migrados para formato canônico.');
    return true;
  }

  async migratePiperFromVault(): Promise<boolean> {
    const oldBinDir = path.join(this.basePath, '.obsidian', 'plugins', 'obsidian-voice', 'bin', 'piper');
    const newBinDir = this.getPiperInstallRoot();

    if (!fs.existsSync(oldBinDir)) return false;
    if (fs.existsSync(newBinDir)) return false;

    await fsp.mkdir(newBinDir, { recursive: true });

    const entries = await fsp.readdir(oldBinDir, { withFileTypes: true });
    for (const entry of entries) {
      const src = path.join(oldBinDir, entry.name);
      const dest = path.join(newBinDir, entry.name);
      await fsp.rename(src, dest);
    }

    const executablePath = this.findExecutable(newBinDir);
    if (!executablePath) {
      throw new Error('Binário do Piper não encontrado após migração.');
    }

    const metadata = this.settingsRef.models.piper;
    if (metadata) {
      const migrated = LegacyMigration.needsMigration(metadata)
        ? LegacyMigration.migrate(metadata)!
        : metadata;

      migrated.installedRootPath = newBinDir;
      migrated.executablePath = executablePath;
      this.settingsRef.models.piper = migrated;
      await this.settingsRef.saveSettings();
    }

    console.log('[ModelManagementService] Piper migrado do Vault para local padrão.');
    return true;
  }

  private findExecutable(dir: string): string | null {
    const candidates = process.platform === 'win32' ? ['piper.exe', 'piper'] : ['piper'];

    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isDirectory() && candidates.includes(entry.name)) {
          return path.join(dir, entry.name);
        }
      }
    } catch {
      // Diretório não existe ou erro de leitura
    }

    return null;
  }

  async migrateVoicesToSubfolders(): Promise<boolean> {
    const basePiperDir = this.getPiperRoot();
    if (!basePiperDir) return false;

    const entries = await fsp.readdir(basePiperDir, { withFileTypes: true });
    const hasVoicesInRoot = entries.some(entry =>
      !entry.isDirectory() && entry.name.endsWith('.onnx')
    );

    if (!hasVoicesInRoot) return false;

    if (!this.voicesCache) {
      await this.fetchPiperVoices();
    }

    let migratedCount = 0;

    for (const voice of this.voicesCache || []) {
      const allFilesExist = Object.keys(voice.files).every(rel => {
        const fileName = path.basename(rel);
        const filePath = path.join(basePiperDir, fileName);
        return fs.existsSync(filePath);
      });

      if (!allFilesExist) continue;

      const voiceSubDir = path.join(basePiperDir, voice.key);
      await fsp.mkdir(voiceSubDir, { recursive: true });

      for (const rel of Object.keys(voice.files)) {
        const fileName = path.basename(rel);
        const src = path.join(basePiperDir, fileName);
        const dest = path.join(voiceSubDir, fileName);

        if (fs.existsSync(src)) {
          await fsp.copyFile(src, dest);
        }
      }

      migratedCount++;
      console.log(`[ModelManagementService] Voz migrada: ${voice.key}`);
    }

    if (migratedCount > 0) {
      for (const entry of entries) {
        if (!entry.isDirectory()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (ext === '.onnx' || ext === '.json') {
            const filePath = path.join(basePiperDir, entry.name);
            await fsp.unlink(filePath).catch(() => {});
          }
        }
      }
      console.log(`[ModelManagementService] ${migratedCount} vozes migradas para subpastas.`);
      return true;
    }

    return false;
  }

  async remove(modelId: ModelId): Promise<void> {
    if (!this.isInstalled(modelId)) {
      throw new Error(`Modelo "${modelId}" não está instalado.`);
    }

    const metadata = this.settingsRef.models[modelId];
    if (!metadata?.installedRootPath) {
      throw new Error(`Metadados de instalação corrompidos para "${modelId}".`);
    }

    await this.installer.remove(modelId, metadata.installedRootPath);
  }

  private resolvePlatformKey(): string {
    const arch = process.arch === 'arm64' ? 'arm64' : 'x64';
    if (process.platform === 'win32') return `windows-${arch}`;
    if (process.platform === 'darwin') return `macos-${arch}`;
    return `linux-${arch}`;
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
        await fsp.chmod(piperPath, 0o755);
        await run();
        return;
      }
      throw new Error(`Healthcheck do Piper falhou: ${err?.message || String(err)}`);
    }
  }
}