/**
 * Manifest Types
 * Contracts for remote manifest management
 */

import type { ModelId, SupportedPlatform, Architecture } from './model';

/**
 * Archive format for model builds
 */
export type ArchiveFormat = 'zip' | 'tar.gz';

/**
 * Platform-specific build configuration
 */
export interface ManifestPlatformBuild {
  readonly url: string;
  readonly sha256: string;
  readonly sizeBytes: number;
  readonly platform: SupportedPlatform;
  readonly architecture: Architecture;
  readonly archiveFormat: ArchiveFormat;
  readonly version: string;
}

/**
 * Model entry in the manifest
 */
export interface ManifestModelEntry {
  readonly modelId: ModelId;
  readonly builds: readonly ManifestPlatformBuild[];
}

/**
 * Remote manifest structure
 */
export interface RemoteManifest {
  readonly version: string;
  readonly generatedAt: string;
  readonly models: Record<ModelId, ManifestModelEntry>;
  readonly signatureVersion: string;
}

/**
 * Validation result for manifest
 */
export interface ManifestValidationResult {
  readonly valid: boolean;
  readonly error?: string;
}
