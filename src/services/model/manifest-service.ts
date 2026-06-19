// Responsabilidades do Script
//
// 1. Realizar o download e parsing seguro do manifesto remoto de distribuição de modelos.
// 2. Validar a estrutura do manifesto com Type Guard.
// 3. Verificar a assinatura criptográfica do manifesto remoto para garantir integridade.
// 4. Fallback para cópia local embarcada quando o download remoto ou a verificação falhar.

import { requestUrl } from 'obsidian';
import * as crypto from 'crypto';
import { FALLBACK_MANIFEST } from './manifest-models';

export type SupportedPlatform = 'windows-x64' | 'macos-arm64' | 'macos-x64' | 'linux-x64' | 'linux-arm64';

export interface PlatformEntry {
  url: string;
  sha256: string;
}

export interface ModelManifestEntry {
  platforms?: Partial<Record<SupportedPlatform, PlatformEntry>>;
}

export interface ModelManifest {
  version: string;
  models: Record<string, ModelManifestEntry>;
}

/**
 * Chave pública RSA de teste para verificação de assinatura do manifesto.
 * ATENÇÃO: Substitua por sua chave pública de produção antes do deploy.
 * Gere o par com: openssl genrsa -out private.pem 2048 && openssl rsa -in private.pem -pubout -out public.pem
 */
const TEST_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0Z3VS5JJcds3xHn/ygWep4
PAtEsHnXMSBMzMfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfBFBBGMFfB
FBBGQQIDAQAB
-----END PUBLIC KEY-----`;

const SUPPORTED_PLATFORMS: SupportedPlatform[] = [
  'windows-x64',
  'macos-arm64',
  'macos-x64',
  'linux-x64',
  'linux-arm64',
];

function isPlatformEntry(value: unknown): value is PlatformEntry {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  return typeof obj.url === 'string' && typeof obj.sha256 === 'string';
}

function isModelManifestEntry(value: unknown): value is ModelManifestEntry {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  if (typeof obj.platforms !== 'object' || obj.platforms === null) return true;
  const platforms = obj.platforms as Record<string, unknown>;
  return SUPPORTED_PLATFORMS.every((p) => !(p in platforms) || isPlatformEntry(platforms[p]));
}

function isModelManifest(value: unknown): value is ModelManifest {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  if (typeof obj.version !== 'string') return false;
  if (typeof obj.models !== 'object' || obj.models === null) return false;
  const models = obj.models as Record<string, unknown>;
  return Object.values(models).every((m) => isModelManifestEntry(m));
}

function verifySignature(content: string, signatureBase64: string): boolean {
  try {
    const signature = Buffer.from(signatureBase64.trim(), 'base64');
    return crypto.verify(
      'RSA-SHA256',
      Buffer.from(content, 'utf-8'),
      TEST_PUBLIC_KEY,
      signature,
    );
  } catch (err) {
    console.error('[ManifestService] Erro ao executar verificação criptográfica:', err);
    return false;
  }
}

export class ManifestService {
  private manifestUrl: string;

  constructor(manifestUrl: string) {
    this.manifestUrl = manifestUrl;
  }

  async fetchManifest(): Promise<ModelManifest> {
    try {
      const sigUrl = this.manifestUrl.replace(/\.json$/, '.sig');

      const [manifestResponse, sigResponse] = await Promise.all([
        requestUrl({ url: this.manifestUrl, method: 'GET', contentType: 'application/json' }),
        requestUrl({ url: sigUrl, method: 'GET' }),
      ]);

      const rawText: string = manifestResponse.text;
      const signatureBase64: string = sigResponse.text;

      if (!verifySignature(rawText, signatureBase64)) {
        console.error('[ManifestService] SEGURANÇA: Assinatura do manifesto remoto inválida. Abortando uso remoto. Usando fallback local.');
        return FALLBACK_MANIFEST;
      }

      const parsed: unknown = JSON.parse(rawText);

      if (!isModelManifest(parsed)) {
        console.warn('[ManifestService] Manifesto remoto com estrutura inválida. Usando fallback local.');
        return FALLBACK_MANIFEST;
      }

      console.log('[ManifestService] Manifesto remoto verificado e obtido com sucesso.');
      return parsed;
    } catch (err) {
      console.warn('[ManifestService] Falha ao baixar manifesto remoto. Usando fallback local.', err);
      return FALLBACK_MANIFEST;
    }
  }
}