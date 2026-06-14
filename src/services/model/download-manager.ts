import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { DownloadState, DownloadProgress, DownloadOptions, DownloadResult } from '../../types/download';

const MAX_REDIRECTS = 3;
const DEFAULT_TIMEOUT_MS = 60000;
const PROGRESS_THROTTLE_MS = 100;

export class DownloadManager {
  private activeRequest: http.ClientRequest | null = null;
  private currentState: DownloadState = 'idle';
  private startTime: number = 0;
  private writeStream: fs.WriteStream | null = null;
  private tempFilePath: string | null = null;

  /**
   * Download a file from URL to destination path
   */
  async download(
    options: DownloadOptions,
    onProgress?: (progress: DownloadProgress) => void
  ): Promise<DownloadResult> {
    // Step 1: Validate state - no concurrent downloads
    if (this.currentState === 'downloading') {
      throw new Error('Download already in progress');
    }

    const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    const tempPath = `${options.destinationPath}.part`;
    
    this.currentState = 'downloading';
    this.startTime = Date.now();
    this.tempFilePath = tempPath;

    try {
      // Step 2: Prepare destination directory
      const destDir = path.dirname(options.destinationPath);
      await fs.promises.mkdir(destDir, { recursive: true });

      // Step 3 & 4-8: Perform HTTP request with streaming
      return await this.performDownload(options, tempPath, timeoutMs, onProgress);
    } catch (error) {
      // Cleanup on error
      await this.cleanup();
      this.currentState = 'failed';
      
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return {
        success: false,
        filePath: options.destinationPath,
        totalBytes: 0,
        error: errorMessage
      };
    } finally {
      this.activeRequest = null;
      this.writeStream = null;
      this.tempFilePath = null;
    }
  }

  /**
   * Perform the actual HTTP download with streaming
   */
  private performDownload(
    options: DownloadOptions,
    tempPath: string,
    timeoutMs: number,
    onProgress?: (progress: DownloadProgress) => void
  ): Promise<DownloadResult> {
    return new Promise((resolve) => {
      let downloadedBytes = 0;
      let totalBytes = 0;
      let lastProgressEmit = 0;
      let redirectCount = 0;

      const makeRequest = (url: string) => {
        const parsedUrl = new URL(url);
        const client = parsedUrl.protocol === 'https:' ? https : http;

        const req = client.get(url, { timeout: timeoutMs }, (res) => {
          // Handle redirects
          if (res.statusCode === 301 || res.statusCode === 302) {
            redirectCount++;
            if (redirectCount > MAX_REDIRECTS) {
              this.closeStreamAndResolve(resolve, {
                success: false,
                filePath: options.destinationPath,
                totalBytes: 0,
                error: 'Too many redirects'
              });
              return;
            }

            const location = res.headers.location;
            if (location) {
              const redirectUrl = new URL(location, url).href;
              res.resume(); // Consume response data
              makeRequest(redirectUrl);
              return;
            }
          }

          // Validate status code
          if (res.statusCode !== 200) {
            this.closeStreamAndResolve(resolve, {
              success: false,
              filePath: options.destinationPath,
              totalBytes: 0,
              error: `Invalid HTTP status: ${res.statusCode}`
            });
            return;
          }

          // Extract content-length
          const contentLength = res.headers['content-length'];
          totalBytes = contentLength ? parseInt(contentLength, 10) : 0;

          // Step 7: Create write stream
          this.writeStream = fs.createWriteStream(tempPath);

          // Handle stream errors
          this.writeStream.on('error', (err) => {
            this.closeStreamAndResolve(resolve, {
              success: false,
              filePath: options.destinationPath,
              totalBytes: downloadedBytes,
              error: `Write error: ${err.message}`
            });
          });

          // Step 8: Process chunks
          res.on('data', (chunk: Buffer) => {
            downloadedBytes += chunk.length;
            this.writeStream!.write(chunk);

            // Throttled progress updates
            const now = Date.now();
            if (now - lastProgressEmit >= PROGRESS_THROTTLE_MS) {
              this.emitProgress(downloadedBytes, totalBytes, onProgress);
              lastProgressEmit = now;
            }
          });

          res.on('end', () => {
            this.writeStream!.end();
            
            this.writeStream!.on('finish', () => {
              // Step 9: Atomic rename
              fs.rename(tempPath, options.destinationPath, (renameErr) => {
                if (renameErr) {
                  resolve({
                    success: false,
                    filePath: options.destinationPath,
                    totalBytes: downloadedBytes,
                    error: `Rename error: ${renameErr.message}`
                  });
                  this.currentState = 'failed';
                } else {
                  this.currentState = 'completed';
                  resolve({
                    success: true,
                    filePath: options.destinationPath,
                    totalBytes: downloadedBytes
                  });
                }
              });
            });
          });
        });

        req.on('error', (err) => {
          this.closeStreamAndResolve(resolve, {
            success: false,
            filePath: options.destinationPath,
            totalBytes: downloadedBytes,
            error: `Network error: ${err.message}`
          });
        });

        req.on('timeout', () => {
          req.destroy();
          this.closeStreamAndResolve(resolve, {
            success: false,
            filePath: options.destinationPath,
            totalBytes: downloadedBytes,
            error: 'Download timeout'
          });
        });

        this.activeRequest = req;
      };

      makeRequest(options.url);
    });
  }

  /**
   * Emit progress update with throttling
   */
  private emitProgress(
    downloadedBytes: number,
    totalBytes: number,
    onProgress?: (progress: DownloadProgress) => void
  ) {
    if (!onProgress) return;

    const elapsedSeconds = (Date.now() - this.startTime) / 1000;
    const speedBytesPerSec = elapsedSeconds > 0 ? Math.floor(downloadedBytes / elapsedSeconds) : 0;
    const percentage = totalBytes > 0 ? Math.min(100, (downloadedBytes / totalBytes) * 100) : 0;

    onProgress({
      downloadedBytes,
      totalBytes,
      percentage,
      state: this.currentState,
      speedBytesPerSec
    });
  }

  /**
   * Cancel the current download
   */
  cancel(): void {
    if (this.currentState !== 'downloading') {
      return; // No-op
    }

    // Destroy request
    if (this.activeRequest) {
      this.activeRequest.destroy();
      this.activeRequest = null;
    }

    // Close stream
    if (this.writeStream) {
      this.writeStream.destroy();
      this.writeStream = null;
    }

    this.currentState = 'cancelled';
    
    // Cleanup temp file asynchronously
    if (this.tempFilePath) {
      fs.unlink(this.tempFilePath, () => {
        // Ignore errors during cleanup
      });
      this.tempFilePath = null;
    }
  }

  /**
   * Get current download state
   */
  getState(): DownloadState {
    return this.currentState;
  }

  /**
   * Helper to close stream and resolve promise
   */
  private closeStreamAndResolve(
    resolve: (result: DownloadResult) => void,
    result: DownloadResult
  ) {
    if (this.writeStream) {
      this.writeStream.destroy();
      this.writeStream = null;
    }
    
    // Cleanup temp file
    if (this.tempFilePath) {
      fs.unlink(this.tempFilePath, () => {
        // Ignore cleanup errors
      });
    }

    resolve(result);
  }

  /**
   * Cleanup resources on error
   */
  private async cleanup(): Promise<void> {
    if (this.activeRequest) {
      this.activeRequest.destroy();
      this.activeRequest = null;
    }

    if (this.writeStream) {
      this.writeStream.destroy();
      this.writeStream = null;
    }

    if (this.tempFilePath) {
      try {
        await fs.promises.unlink(this.tempFilePath);
      } catch {
        // Ignore cleanup errors
      }
      this.tempFilePath = null;
    }
  }
}
