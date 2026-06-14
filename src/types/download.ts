/**
 * Download state union type
 */
export type DownloadState = 'idle' | 'downloading' | 'completed' | 'failed' | 'cancelled';

/**
 * Download progress information
 */
export interface DownloadProgress {
  downloadedBytes: number;
  totalBytes: number;
  percentage: number;
  state: DownloadState;
  speedBytesPerSec: number;
}

/**
 * Download options configuration
 */
export interface DownloadOptions {
  url: string;
  destinationPath: string;
  timeoutMs?: number;
}

/**
 * Download result information
 */
export interface DownloadResult {
  success: boolean;
  filePath: string;
  totalBytes: number;
  error?: string;
}
