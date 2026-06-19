// Responsabilidades do Script
//
// 1. Orquestrar o fluxo de extração e staging para instalação atômica de modelos.
// 2. Controlar as transições de estado da instalação com proteção contra concorrência.
// 3. Persistir metadados do modelo instalado via callback de salvamento.

import { ArchiveManager } from './archive-manager';
import { StagingManager } from './staging-manager';
import { InstallStateMachine } from './install-state-machine';
import { InstallState } from '../../types/model';
import type { ModelId, InstalledModelMetadata } from '../../types/model';

export interface InstallCallbacks {
  onStateChange?: (modelId: ModelId, state: InstallState) => void;
  onInstalled?: (modelId: ModelId, metadata: InstalledModelMetadata) => void;
  onRemoved?: (modelId: ModelId) => void;
}

export class ModelInstaller {
  private archiveManager: ArchiveManager;
  private stagingManager: StagingManager;
  private machines: Map<ModelId, InstallStateMachine> = new Map();
  private callbacks: InstallCallbacks;

  constructor(stagingRoot: string, callbacks: InstallCallbacks = {}) {
    this.archiveManager = new ArchiveManager();
    this.stagingManager = new StagingManager(stagingRoot);
    this.callbacks = callbacks;
  }

  getMachine(modelId: ModelId): InstallStateMachine {
    let machine = this.machines.get(modelId);
    if (!machine) {
      machine = new InstallStateMachine();
      machine.setOnStateChange((state) => this.callbacks.onStateChange?.(modelId, state));
      this.machines.set(modelId, machine);
    }
    return machine;
  }

  async install(modelId: ModelId, archivePath: string, destDir: string, version: string): Promise<void> {
    const machine = this.getMachine(modelId);

    try {
      machine.transitionTo(InstallState.VERIFYING);
      machine.transitionTo(InstallState.EXTRACTING);

      const stagingDir = await this.stagingManager.prepareStaging(modelId);

      machine.transitionTo(InstallState.VALIDATING_RUNTIME);
      machine.transitionTo(InstallState.INSTALLING);

      await this.archiveManager.extract(archivePath, stagingDir);
      await this.stagingManager.promoteStaging(stagingDir, destDir);

      machine.transitionTo(InstallState.INSTALLED);

      const metadata: InstalledModelMetadata = {
        id: modelId,
        activeVersion: version,
        absolutePath: destDir,
        installedAt: Date.now(),
      };

      this.callbacks.onInstalled?.(modelId, metadata);
    } catch (err) {
      machine.transitionTo(InstallState.FAILED);
      throw err;
    }
  }

  async remove(modelId: ModelId, destDir: string): Promise<void> {
    const machine = this.getMachine(modelId);

    if (machine.isInstalling()) {
      throw new Error(`Remoção bloqueada: instalação em andamento para o modelo: ${modelId}`);
    }

    machine.transitionTo(InstallState.REMOVING);

    try {
      const { rm } = await import('fs/promises');
      await rm(destDir, { recursive: true, force: true });
      machine.transitionTo(InstallState.NOT_INSTALLED);
      this.callbacks.onRemoved?.(modelId);
    } catch (err) {
      machine.transitionTo(InstallState.FAILED);
      throw err;
    }
  }
}