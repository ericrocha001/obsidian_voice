// Responsabilidades do Script
//
// 1. Gerenciar downloads resilientes de arquivos grandes via HTTPS com suporte a Range Requests.
// 2. Emitir eventos de progresso em tempo real para a UI durante o download.
// 3. Validar integridade criptográfica (SHA-256 e MD5) do arquivo finalizado via stream.

import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';
import * as crypto from 'crypto';
import * as path from 'path';
import { EventEmitter } from 'events';
import type { IncomingMessage } from 'http';

const MAX_REDIRECTS = 5;
const MAX_RETRIES = 3;
const BASE_RETRY_DELAY_MS = 1000;

export interface DownloadProgress {
  bytesDownloaded: number;
  bytesTotal: number;
  percent: number;
}

export interface DownloadOptions {
  url: string;
  destPath: string;
  expectedSha256?: string;
  expectedMd5?: string;
  signal?: AbortSignal;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFileSize(filePath: string): number {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

function isAbortError(err: unknown): boolean {
  return err instanceof Error && err.name === 'AbortError';
}

function resolveResponse(
  url: string,
  rangeStart: number,
  signal: AbortSignal | undefined,
  redirectsLeft: number,
): Promise<IncomingMessage> {
  return new Promise((resolve, reject) => {
    let settled = false;

    const parsed = new URL(url);
    const lib = parsed.protocol === 'https:' ? https : http;

    const headers: Record<string, string> = {};
    if (rangeStart > 0) {
      headers['Range'] = `bytes=${rangeStart}-`;
    }

    const req = lib.get(
      {
        hostname: parsed.hostname,
        port: parsed.port || undefined,
        path: parsed.pathname + parsed.search,
        headers,
      },
      (res) => {
        const { statusCode, headers: resHeaders } = res;

        const isRedirect = [301, 302, 307, 308].includes(statusCode!);
        if (isRedirect && resHeaders.location) {
          res.resume();
          if (redirectsLeft <= 0) {
            reject(new Error('Limite máximo de redirecionamentos HTTP atingido.'));
            return;
          }
          const redirectUrl = new URL(resHeaders.location, url).href;
          resolveResponse(redirectUrl, rangeStart, signal, redirectsLeft - 1)
            .then(resolve)
            .catch(reject);
          return;
        }

        resolve(res);
      },
    );

    req.on('error', (err) => {
      if (!settled) reject(err);
    });

    if (signal) {
      const onAbort = () => {
        settled = true;
        req.destroy();
        const err = new Error('Download cancelado');
        err.name = 'AbortError';
        reject(err);
      };
      signal.addEventListener('abort', onAbort, { once: true });
    }
  });
}

async function attemptDownload(
  url: string,
  partPath: string,
  signal: AbortSignal | undefined,
  onProgress: (p: DownloadProgress) => void,
): Promise<void> {
  await fs.promises.mkdir(path.dirname(partPath), { recursive: true });

  const existingBytes = getFileSize(partPath);
  const response = await resolveResponse(url, existingBytes, signal, MAX_REDIRECTS);
  const { statusCode, headers } = response;

  const isResume = statusCode === 206 && existingBytes > 0;

  if (!isResume && existingBytes > 0) {
    await fs.promises.unlink(partPath).catch(() => {});
  }

  const writeStream = fs.createWriteStream(partPath, { flags: isResume ? 'a' : 'w' });
  const contentLength = parseInt(headers['content-length'] ?? '0', 10);
  const totalBytes = isResume ? existingBytes + contentLength : contentLength;
  let downloadedBytes = isResume ? existingBytes : 0;

  await new Promise<void>((resolve, reject) => {
    response.on('data', (chunk: Buffer) => {
      downloadedBytes += chunk.length;
      const percent = totalBytes > 0 ? Math.round((downloadedBytes / totalBytes) * 100) : 0;
      onProgress({ bytesDownloaded: downloadedBytes, bytesTotal: totalBytes, percent });
    });

    response.on('error', (err) => {
      writeStream.destroy();
      reject(err);
    });

    writeStream.on('error', reject);
    writeStream.on('finish', resolve);

    response.pipe(writeStream);
  });
}

function computeSha256(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('data', (chunk) => hash.update(Buffer.from(chunk)));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

function computeMd5(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5');
    const stream = fs.createReadStream(filePath);
    stream.on('data', (chunk) => hash.update(Buffer.from(chunk)));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

export class DownloadManager extends EventEmitter {
  async download(options: DownloadOptions): Promise<void> {
    const { url, destPath, expectedSha256, expectedMd5, signal } = options;
    const partPath = `${destPath}.part`;

    const onProgress = (progress: DownloadProgress) => this.emit('progress', progress);

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        if (signal?.aborted) {
          const err = new Error('Download cancelado antes de iniciar');
          err.name = 'AbortError';
          throw err;
        }

        await attemptDownload(url, partPath, signal, onProgress);
        break;
      } catch (err) {
        if (isAbortError(err)) throw err;

        if (attempt >= MAX_RETRIES - 1) throw err;

        const delay = BASE_RETRY_DELAY_MS * Math.pow(2, attempt);
        console.warn(
          `[DownloadManager] Tentativa ${attempt + 1}/${MAX_RETRIES} falhou. Retomando em ${delay}ms...`,
          err,
        );
        await sleep(delay);
      }
    }

    if (expectedSha256) {
      console.log('[DownloadManager] Download concluído. Verificando integridade SHA-256...');
      const actualSha256 = await computeSha256(partPath);

      if (actualSha256 !== expectedSha256) {
        await fs.promises.unlink(partPath).catch(() => {});
        throw new Error(
          `[DownloadManager] Falha de integridade SHA-256: esperado ${expectedSha256}, obtido ${actualSha256}. Arquivo corrompido removido.`,
        );
      }
    }

    if (expectedMd5) {
      console.log('[DownloadManager] Download concluído. Verificando integridade MD5...');
      const actualMd5 = await computeMd5(partPath);

      if (actualMd5 !== expectedMd5) {
        await fs.promises.unlink(partPath).catch(() => {});
        throw new Error(
          `[DownloadManager] Falha de integridade MD5: esperado ${expectedMd5}, obtido ${actualMd5}. Arquivo corrompido removido.`,
        );
      }
    }

    await fs.promises.rename(partPath, destPath);
    console.log(`[DownloadManager] Arquivo verificado e salvo em: ${destPath}`);
  }
}
