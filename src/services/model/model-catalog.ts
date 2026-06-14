/**
 * Model Catalog Service
 * Provides static metadata for model display and selection.
 * 
 * Note: This service does NOT contain URLs, hashes, or installation logic.
 */

import type { ModelId, ModelMetadata } from '../../types/model';

const MODEL_CATALOG: readonly ModelMetadata[] = [
  {
    id: 'piper',
    displayName: 'Piper TTS',
    description: 'Motor local leve focado em velocidade.',
    tier: 'fast',
    installSizeMB: 100,
    estimatedRamMB: 300,
    recommended: true,
    supportedPlatforms: ['windows', 'macos', 'linux'] as const,
  },
  {
    id: 'kokoro',
    displayName: 'Kokoro TTS',
    description: 'Motor local premium focado em naturalidade.',
    tier: 'premium',
    installSizeMB: 400,
    estimatedRamMB: 1200,
    recommended: true,
    supportedPlatforms: ['windows', 'macos', 'linux'] as const,
  },
] as const;

/**
 * Returns the complete model catalog (readonly).
 */
export function getModelCatalog(): readonly ModelMetadata[] {
  return MODEL_CATALOG;
}

/**
 * Returns metadata for a specific model by ID.
 * Returns null if the model does not exist.
 */
export function getModelMetadata(modelId: ModelId): ModelMetadata | null {
  return MODEL_CATALOG.find((model) => model.id === modelId) ?? null;
}

/**
 * Returns only the recommended models.
 */
export function getRecommendedModels(): readonly ModelMetadata[] {
  return MODEL_CATALOG.filter((model) => model.recommended);
}
