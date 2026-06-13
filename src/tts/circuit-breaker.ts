// Responsabilidades do Script
//
// 1. Bloquear temporariamente engines TTS instáveis após falhas consecutivas de geração.
// 2. Controlar a recuperação gradual de engines TTS após o período de resfriamento.

import { CircuitState } from "./types";

export class CircuitBreaker {
  private failures = 0;
  private openedAt = 0;
  private state: CircuitState = "closed";

  constructor(
    private readonly failureThreshold = 3,
    private readonly cooldownMs = 60_000
  ) {}

  getState(): CircuitState {
    if (this.state === "open" && Date.now() - this.openedAt >= this.cooldownMs) {
      this.state = "half-open";
    }
    return this.state;
  }

  canExecute(): boolean {
    return this.getState() !== "open";
  }

  recordSuccess(): void {
    this.failures = 0;
    this.state = "closed";
    this.openedAt = 0;
  }

  recordFailure(): void {
    this.failures += 1;
    if (this.failures >= this.failureThreshold) {
      this.state = "open";
      this.openedAt = Date.now();
    }
  }
}
