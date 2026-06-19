// Responsabilidades do Script
//
// 1. Gerenciar o diretório temporário .staging para instalação atômica de modelos.
// 2. Promover o diretório de staging para o destino final com rename atômico.
// 3. Remover resíduos de staging em caso de falha ou abortamento.

import * as path from 'path';
import * as fs from 'fs/promises';
import type { ModelId } from '../../types/model';

export class StagingManager {
  private stagingRoot: string;

  constructor(stagingRoot: string) {
    this.stagingRoot = stagingRoot;
  }

  async prepareStaging(modelId: ModelId): Promise<string> {
    const stagingDir = path.join(this.stagingRoot, '.staging', `${modelId}-temp`);
    await fs.mkdir(stagingDir, { recursive: true });

    // Remove conteúdo existente sem remover o diretório raiz
    const entries = await fs.readdir(stagingDir);
    await Promise.all(
      entries.map((entry) =>
        fs.rm(path.join(stagingDir, entry), { recursive: true, force: true })
      )
    );

    return stagingDir;
  }

  async promoteStaging(stagingDir: string, destDir: string): Promise<void> {
    // Remove o destino antigo se existir
    await fs.rm(destDir, { recursive: true, force: true });
    // Rename atômico: staging → destino
    await fs.rename(stagingDir, destDir);
  }

  async cleanupStaging(stagingDir: string): Promise<void> {
    await fs.rm(stagingDir, { recursive: true, force: true });
  }
}