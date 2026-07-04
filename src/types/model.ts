/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Definir os tipos globais de identificação e estado de instalação de modelos TTS.
2. Descrever a estrutura de metadados estáticos (catálogo) e persistidos (disco) dos modelos.

Mapa de Relacionamentos do Script

1. src/services/model/model-installer.ts
   - Tipo: Contrato / Interface
   - Relação: Consome InstalledModelMetadata para persistir metadados de instalação.
   - Criticidade: Alta

2. src/services/model/model-management-service.ts
   - Tipo: Contrato / Interface
   - Relação: Fornece e consome metadados para decisão de instalação e remoção.
   - Criticidade: Alta

Invariantes do Script

1. installedRootPath sempre aponta para a raiz da instalação, nunca para o executável.
2. executablePath sempre aponta para o binário executável, nunca para um diretório.
3. Os dois campos são mutuamente exclusivos e possuem responsabilidades distintas.
4. Metadados inválidos (raiz inexistente) devem ser identificados durante a migração.

--- FIM ARQUITETURA DO SCRIPT ---
*/

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

/**
 * Metadados de instalação persistidos.
 * Contém a raiz da instalação e o caminho do executável como fontes canônicas.
 */
export interface InstalledModelMetadata {
  id: ModelId;
  activeVersion: string;
  /** Raiz da instalação (pasta onde o Piper foi extraído) */
  installedRootPath: string;
  /** Caminho absoluto do executável do motor TTS */
  executablePath: string;
  installedAt: number;
}