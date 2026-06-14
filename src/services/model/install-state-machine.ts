/**
 * Install State Machine
 * Validates state transitions for model installation.
 * 
 * This module does NOT perform actual installation, downloads, or side effects.
 * It only validates allowed state transitions.
 */

import { InstallState, type InstallStateValue } from '../../types/model';

/**
 * Defines valid state transitions for the installation process.
 * Key: current state
 * Value: array of allowed next states
 */
const TRANSITION_MAP: Record<InstallStateValue, readonly InstallStateValue[]> = {
  [InstallState.NOT_INSTALLED]: [
    InstallState.FETCHING_MANIFEST,
    InstallState.FAILED,
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
    InstallState.REMOVING,
    InstallState.UPDATING,
  ],
  [InstallState.FAILED]: [
    InstallState.NOT_INSTALLED,
    InstallState.ROLLBACK,
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
    InstallState.NOT_INSTALLED,
    InstallState.FAILED,
  ],
} as const;

export class InstallStateMachine {
  private currentState: InstallStateValue;

  constructor() {
    this.currentState = InstallState.NOT_INSTALLED;
  }

  /**
   * Returns the current state.
   */
  public getState(): InstallStateValue {
    return this.currentState;
  }

  /**
   * Checks if a transition to the given state is allowed.
   * Does not perform any side effects.
   */
  public canTransitionTo(nextState: InstallStateValue): boolean {
    const allowedTransitions = TRANSITION_MAP[this.currentState];
    return allowedTransitions.includes(nextState);
  }

  /**
   * Attempts to transition to the given state.
   * Throws an error if the transition is invalid.
   */
  public transitionTo(nextState: InstallStateValue): void {
    if (!this.canTransitionTo(nextState)) {
      throw new Error(
        `Invalid state transition: cannot transition from "${this.currentState}" to "${nextState}"`
      );
    }
    this.currentState = nextState;
  }

  /**
   * Resets the state machine to its initial state.
   */
  public reset(): void {
    this.currentState = InstallState.NOT_INSTALLED;
  }
}
