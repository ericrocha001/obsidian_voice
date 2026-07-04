/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Gerenciar o diretório temporário .staging para instalação atômica de modelos.
2. Promover o diretório de staging para o destino final com rename atômico.
3. Remover resíduos de staging em caso de falha ou abortamento.
4. Garantir que o diretório pai do destino exista antes do rename atômico.

Mapa de Relacionamentos do Script

1. model-installer.ts
   - Tipo: Fluxo de Dados
   - Relação: Consome o staging para instalação atômica de modelos.
   - Criticidade: Alta

2. model-management-service.ts
   - Tipo: Dependência Direta
   - Relação: Orquestra operações de staging para download/instalação.
   - Criticidade: Média

Invariantes do Script

1. O diretório pai do destino deve ser criado recursivamente antes do rename, mesmo que não exista.
2. O rename atômico só ocorre após a remoção do destino antigo.
3. Resíduos de staging são removidos após falhas.

--- FIM ARQUITETURA DO SCRIPT ---
*/

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
    // Garante a existência da hierarquia de diretórios antes do rename (fix para ENOENT no Windows)
    await fs.mkdir(path.dirname(destDir), { recursive: true });
    // Rename atômico: staging → destino
    await fs.rename(stagingDir, destDir);
  }

  async cleanupStaging(stagingDir: string): Promise<void> {
    await fs.rm(stagingDir, { recursive: true, force: true });
  }
}