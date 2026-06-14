/**
 * Model Management Types
 * Foundation layer for the model management subsystem
 */

// Model identifiers
export type ModelId = 'piper' | 'kokoro' | 'silero';

// Installation states
export const InstallState = {
  NOT_INSTALLED: 'NOT_INSTALLED',
  FETCHING_MANIFEST: 'FETCHING_MANIFEST',
  DOWNLOADING: 'DOWNLOADING',
  VERIFYING: 'VERIFYING',
  EXTRACTING: 'EXTRACTING',
  VALIDATING_RUNTIME: 'VALIDATING_RUNTIME',
  INSTALLING: 'INSTALLING',
  INSTALLED: 'INSTALLED',
  FAILED: 'FAILED',
  REMOVING: 'REMOVING',
  UPDATING: 'UPDATING',
  ROLLBACK: 'ROLLBACK',
} as const;

export type InstallStateValue = typeof InstallState[keyof typeof InstallState];

// Platform support
export type SupportedPlatform = 'windows' | 'macos' | 'linux';

// Architecture support
export type Architecture = 'x64' | 'arm64';

// Model tier classification
export type ModelTier = 'fast' | 'premium' | 'experimental';

/**
 * Static metadata for a model (used for UI/catalog display)
 */
export interface ModelMetadata {
  readonly id: ModelId;
  readonly displayName: string;
  readonly description: string;
  readonly tier: ModelTier;
  readonly installSizeMB: number;
  readonly estimatedRamMB: number;
  readonly recommended: boolean;
  readonly supportedPlatforms: readonly SupportedPlatform[];
}

/**
 * Runtime metadata for an installed model
 */
export interface InstalledModelMetadata {
  readonly modelId: ModelId;
  readonly installedVersion: string;
  readonly installPath: string;
  readonly installedAt: Date;
  readonly active: boolean;
  readonly diskUsageMB: number;
  readonly checksum: string;
}

/**
 * Current installation status for a model
 */
export interface ModelInstallStatus {
  readonly modelId: ModelId;
  readonly state: InstallStateValue;
  readonly progress: number; // 0-100
  readonly error?: string;
}
