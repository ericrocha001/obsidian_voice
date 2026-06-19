// Responsabilidades do Script
//
// 1. Definir os tipos globais de identificação e estado de instalação de modelos TTS.
// 2. Descrever a estrutura de metadados estáticos (catálogo) e persistidos (disco) dos modelos.

export type ModelId = 'piper' | 'kokoro';

export const enum InstallState {
  NOT_INSTALLED = 'NOT_INSTALLED',
  FETCHING_MANIFEST = 'FETCHING_MANIFEST',
  DOWNLOADING = 'DOWNLOADING',
  VERIFYING = 'VERIFYING',
  EXTRACTING = 'EXTRACTING',
  VALIDATING_RUNTIME = 'VALIDATING_RUNTIME',
  INSTALLING = 'INSTALLING',
  INSTALLED = 'INSTALLED',
  FAILED = 'FAILED',
  REMOVING = 'REMOVING',
  UPDATING = 'UPDATING',
  ROLLBACK = 'ROLLBACK',
}

export interface ModelCatalogEntry {
  id: ModelId;
  displayName: string;
  description: string;
  estimatedRamMB: number;
  estimatedDiskMB: number;
  tags: string[];
}

export interface InstalledModelMetadata {
  id: ModelId;
  activeVersion: string;
  absolutePath: string;
  installedAt: number;
}