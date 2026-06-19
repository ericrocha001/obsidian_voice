// Responsabilidades do Script
//
// 1. Expor o catálogo estático de modelos TTS com metadados para exibição na UI.

import type { ModelCatalogEntry } from '../../types/model';

const MODEL_CATALOG: Record<string, ModelCatalogEntry> = {
  piper: {
    id: 'piper',
    displayName: 'Piper',
    description: 'Motor TTS local rápido e leve. Ideal para narração diária com baixo consumo de recursos.',
    estimatedRamMB: 256,
    estimatedDiskMB: 200,
    tags: ['rápido', 'leve', 'local'],
  },
  kokoro: {
    id: 'kokoro',
    displayName: 'Kokoro',
    description: 'Motor TTS com vozes naturais e qualidade premium. Consume mais recursos, mas entrega áudio mais realista.',
    estimatedRamMB: 1024,
    estimatedDiskMB: 2000,
    tags: ['qualidade', 'premium', 'vozes naturais'],
  },
};

export function getModelCatalog(): Record<string, ModelCatalogEntry> {
  return MODEL_CATALOG;
}

export function getModelEntry(id: string): ModelCatalogEntry | undefined {
  return MODEL_CATALOG[id];
}