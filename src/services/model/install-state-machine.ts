// Responsabilidades do Script
//
// 1. Controlar as transições válidas de estado de instalação de modelos.
// 2. Impedir concorrência bloqueando novas instalações para o mesmo modelo.

import { InstallState } from '../../types/model';

const VALID_TRANSITIONS: Record<InstallState, InstallState[]> = {
  [InstallState.NOT_INSTALLED]: [
    InstallState.FETCHING_MANIFEST,
  ],
  [InstallState.FETCHING_MANIFEST]: [
    InstallState.DOWNLOADING,
    InstallState.FAILED,
  ],
  [InstallState.DOWNLOADING]: [
    InstallState.VERIFYING,
    InstallState.FAILED,
  ],
  [InstallState.VERIFYING]: [
    InstallState.EXTRACTING,
    InstallState.FAILED,
  ],
  [InstallState.EXTRACTING]: [
    InstallState.VALIDATING_RUNTIME,
    InstallState.FAILED,
  ],
  [InstallState.VALIDATING_RUNTIME]: [
    InstallState.INSTALLING,
    InstallState.FAILED,
  ],
  [InstallState.INSTALLING]: [
    InstallState.INSTALLED,
    InstallState.FAILED,
  ],
  [InstallState.INSTALLED]: [
    InstallState.UPDATING,
    InstallState.REMOVING,
  ],
  [InstallState.FAILED]: [
    InstallState.FETCHING_MANIFEST,
    InstallState.REMOVING,
  ],
  [InstallState.REMOVING]: [
    InstallState.NOT_INSTALLED,
    InstallState.FAILED,
  ],
  [InstallState.UPDATING]: [
    InstallState.DOWNLOADING,
    InstallState.FAILED,
  ],
  [InstallState.ROLLBACK]: [
    InstallState.INSTALLED,
    InstallState.FAILED,
  ],
};

export class InstallStateMachine {
  private currentState: InstallState;
  private onStateChange?: (state: InstallState) => void;

  constructor(initialState: InstallState = InstallState.NOT_INSTALLED) {
    this.currentState = initialState;
  }

  get state(): InstallState {
    return this.currentState;
  }

  setOnStateChange(callback: (state: InstallState) => void): void {
    this.onStateChange = callback;
  }

  transitionTo(nextState: InstallState): void {
    const allowed = VALID_TRANSITIONS[this.currentState];
    if (!allowed || !allowed.includes(nextState)) {
      throw new Error(
        `Transição inválida: ${this.currentState} → ${nextState}`
      );
    }

    this.currentState = nextState;
    this.onStateChange?.(nextState);
  }

  isInstalling(): boolean {
    return (
      this.currentState !== InstallState.NOT_INSTALLED &&
      this.currentState !== InstallState.INSTALLED &&
      this.currentState !== InstallState.FAILED
    );
  }
}