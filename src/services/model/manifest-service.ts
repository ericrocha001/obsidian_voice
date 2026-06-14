/**
 * Manifest Service
 * Responsible for fetching, validating, and caching remote manifests
 */

import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';
import type { RemoteManifest, ManifestValidationResult, ManifestPlatformBuild } from '../../types/manifest';
import type { ModelId, SupportedPlatform, Architecture } from '../../types/model';

/**
 * Service for managing remote manifests and local cache
 */
export class ManifestService {
  private readonly pluginDataPath: string;
  private readonly manifestUrl: string;
  private readonly signatureUrl: string;
  private readonly cachePath: string;
  private readonly signatureCachePath: string;

  constructor(pluginDataPath: string, manifestUrl: string, signatureUrl: string) {
    this.pluginDataPath = pluginDataPath;
    this.manifestUrl = manifestUrl;
    this.signatureUrl = signatureUrl;
    this.cachePath = path.join(pluginDataPath, 'cache', 'manifest.json');
    this.signatureCachePath = path.join(pluginDataPath, 'cache', 'manifest.sig');
  }

  /**
   * Fetch remote manifest and signature
   */
  async fetchManifest(): Promise<RemoteManifest> {
    // Step 1: Download manifest and signature
    const [manifestBytes, signatureBytes] = await Promise.all([
      this.downloadFile(this.manifestUrl),
      this.downloadFile(this.signatureUrl),
    ]);

    // Step 2: Verify signature (placeholder for Sprint 3)
    // TODO: implementar Ed25519 verification no Sprint 3
    const signatureValid = this.verifySignature(manifestBytes, signatureBytes);
    if (!signatureValid) {
      throw new Error('Manifest signature verification failed');
    }

    // Step 3: Parse JSON
    let manifest: RemoteManifest;
    try {
      manifest = JSON.parse(manifestBytes.toString('utf-8')) as RemoteManifest;
    } catch (error) {
      throw new Error('Invalid manifest JSON');
    }

    // Step 4: Validate schema
    const validation = this.validateManifestSchema(manifest);
    if (!validation.valid) {
      throw new Error(`Manifest schema validation failed: ${validation.error}`);
    }

    // Step 5: Save cache
    await this.saveCache(manifestBytes, signatureBytes);

    return manifest;
  }

  /**
   * Load cached manifest for offline fallback
   */
  async loadCachedManifest(): Promise<RemoteManifest | null> {
    try {
      if (!fs.existsSync(this.cachePath)) {
        return null;
      }

      const manifestBytes = fs.readFileSync(this.cachePath);
      const manifest: RemoteManifest = JSON.parse(manifestBytes.toString('utf-8')) as RemoteManifest;

      const validation = this.validateManifestSchema(manifest);
      if (!validation.valid) {
        return null;
      }

      return manifest;
    } catch {
      return null;
    }
  }

  /**
   * Get manifest with remote-first, cache-fallback strategy
   */
  async getManifestWithFallback(): Promise<RemoteManifest> {
    try {
      return await this.fetchManifest();
    } catch {
      const cached = await this.loadCachedManifest();
      if (cached !== null) {
        return cached;
      }
      throw new Error('Failed to fetch remote manifest and no valid cache available');
    }
  }

  /**
   * Validate manifest schema manually
   */
  validateManifestSchema(manifest: unknown): ManifestValidationResult {
    if (typeof manifest !== 'object' || manifest === null) {
      return { valid: false, error: 'Manifest must be an object' };
    }

    const m = manifest as Record<string, unknown>;

    // Validate root fields
    if (typeof m.version !== 'string') {
      return { valid: false, error: 'Missing or invalid version' };
    }
    if (typeof m.generatedAt !== 'string') {
      return { valid: false, error: 'Missing or invalid generatedAt' };
    }
    if (typeof m.signatureVersion !== 'string') {
      return { valid: false, error: 'Missing or invalid signatureVersion' };
    }
    if (typeof m.models !== 'object' || m.models === null) {
      return { valid: false, error: 'Missing or invalid models' };
    }

    const models = m.models as Record<string, unknown>;

    // Validate each model entry
    for (const [modelId, modelEntry] of Object.entries(models)) {
      if (!this.isValidModelId(modelId)) {
        return { valid: false, error: `Invalid modelId: ${modelId}` };
      }

      if (typeof modelEntry !== 'object' || modelEntry === null) {
        return { valid: false, error: `Invalid model entry for ${modelId}` };
      }

      const entry = modelEntry as Record<string, unknown>;

      if (!Array.isArray(entry.builds)) {
        return { valid: false, error: `Missing or invalid builds for ${modelId}` };
      }

      // Validate each build
      for (const build of entry.builds) {
        const buildValidation = this.validateBuild(build);
        if (!buildValidation.valid) {
          return { valid: false, error: buildValidation.error };
        }
      }
    }

    return { valid: true };
  }

  /**
   * Verify signature (placeholder for future crypto implementation)
   */
  verifySignature(_manifestBytes: Buffer, _signatureBytes: Buffer): boolean {
    // TODO: implementar Ed25519 verification no Sprint 3
    return true;
  }

  /**
   * Get build for current platform
   */
  getBuildForCurrentPlatform(
    manifest: RemoteManifest,
    modelId: ModelId
  ): ManifestPlatformBuild | null {
    const nodePlatform = process.platform;
    const nodeArch = process.arch;

    const platform = this.mapNodePlatform(nodePlatform);
    const architecture = this.mapNodeArch(nodeArch);

    if (!platform || !architecture) {
      return null;
    }

    const modelEntry = manifest.models[modelId];
    if (!modelEntry) {
      return null;
    }

    for (const build of modelEntry.builds) {
      if (build.platform === platform && build.architecture === architecture) {
        return build;
      }
    }

    return null;
  }

  /**
   * Download a file via HTTPS
   */
  private downloadFile(url: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      https
        .get(url, (res) => {
          if (res.statusCode !== 200) {
            reject(new Error(`Failed to download: ${res.statusCode}`));
            return;
          }

          const chunks: Buffer[] = [];
          res.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
          res.on('end', () => resolve(Buffer.concat(chunks)));
        })
        .on('error', reject);
    });
  }

  /**
   * Save manifest and signature to cache
   */
  private async saveCache(manifestBytes: Buffer, signatureBytes: Buffer): Promise<void> {
    const cacheDir = path.dirname(this.cachePath);
    
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    fs.writeFileSync(this.cachePath, manifestBytes);
    fs.writeFileSync(this.signatureCachePath, signatureBytes);
  }

  /**
   * Validate a single build entry
   */
  private validateBuild(build: unknown): ManifestValidationResult {
    if (typeof build !== 'object' || build === null) {
      return { valid: false, error: 'Build must be an object' };
    }

    const b = build as Record<string, unknown>;

    if (typeof b.url !== 'string') {
      return { valid: false, error: 'Missing or invalid url' };
    }
    if (typeof b.sha256 !== 'string') {
      return { valid: false, error: 'Missing or invalid sha256' };
    }
    if (typeof b.sizeBytes !== 'number') {
      return { valid: false, error: 'Missing or invalid sizeBytes' };
    }
    if (typeof b.version !== 'string') {
      return { valid: false, error: 'Missing or invalid version' };
    }
    if (typeof b.platform !== 'string' || !this.isValidPlatform(b.platform)) {
      return { valid: false, error: 'Missing or invalid platform' };
    }
    if (typeof b.architecture !== 'string' || !this.isValidArchitecture(b.architecture)) {
      return { valid: false, error: 'Missing or invalid architecture' };
    }
    if (typeof b.archiveFormat !== 'string' || !this.isValidArchiveFormat(b.archiveFormat)) {
      return { valid: false, error: 'Missing or invalid archiveFormat' };
    }

    return { valid: true };
  }

  /**
   * Check if string is a valid ModelId
   */
  private isValidModelId(id: string): id is ModelId {
    return ['piper', 'kokoro', 'silero'].includes(id);
  }

  /**
   * Check if string is a valid SupportedPlatform
   */
  private isValidPlatform(platform: string): platform is SupportedPlatform {
    return ['windows', 'macos', 'linux'].includes(platform);
  }

  /**
   * Check if string is a valid Architecture
   */
  private isValidArchitecture(arch: string): arch is Architecture {
    return ['x64', 'arm64'].includes(arch);
  }

  /**
   * Check if string is a valid ArchiveFormat
   */
  private isValidArchiveFormat(format: string): format is 'zip' | 'tar.gz' {
    return ['zip', 'tar.gz'].includes(format);
  }

  /**
   * Map Node.js platform to SupportedPlatform
   */
  private mapNodePlatform(nodePlatform: string): SupportedPlatform | null {
    switch (nodePlatform) {
      case 'win32':
        return 'windows';
      case 'darwin':
        return 'macos';
      case 'linux':
        return 'linux';
      default:
        return null;
    }
  }

  /**
   * Map Node.js architecture to Architecture
   */
  private mapNodeArch(nodeArch: string): Architecture | null {
    switch (nodeArch) {
      case 'x64':
        return 'x64';
      case 'arm64':
        return 'arm64';
      default:
        return null;
    }
  }
}
