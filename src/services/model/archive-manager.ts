// Responsabilidades do Script
//
// 1. Extrair arquivos .zip e .tar.gz de forma segura com proteção contra Zip Slip.
// 2. Validar cada entrada do archive para impedir escrita fora do diretório destino.

import * as path from 'path';
import * as fs from 'fs';
import * as zlib from 'zlib';
import * as tar from 'tar-stream';
import AdmZip = require('adm-zip');

function isPathSafe(destFolder: string, filePathInArchive: string): boolean {
  const resolved = path.resolve(destFolder, filePathInArchive);
  // Normaliza ambos para evitar falsos negativos por separadores mistos
  const normalizedDest = path.normalize(destFolder) + path.sep;
  const normalizedResolved = path.normalize(resolved);
  return normalizedResolved.startsWith(normalizedDest);
}

export class ArchiveManager {
  async extract(archivePath: string, destFolder: string): Promise<void> {
    const ext = path.extname(archivePath).toLowerCase();

    if (ext === '.zip') {
      await this.extractZip(archivePath, destFolder);
    } else if (ext === '.gz' || ext === '.tgz') {
      await this.extractTarGz(archivePath, destFolder);
    } else {
      throw new Error(`Formato de archive não suportado: ${ext}`);
    }
  }

  private async extractZip(archivePath: string, destFolder: string): Promise<void> {
    const zip = new AdmZip(archivePath);
    const entries = zip.getEntries();

    for (const entry of entries) {
      if (entry.isDirectory) continue;

      if (!isPathSafe(destFolder, entry.entryName)) {
        throw new Error('Zip Slip detectado: tentativa de escrita fora do diretório destino.');
      }

      const targetPath = path.resolve(destFolder, entry.entryName);
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.writeFileSync(targetPath, entry.getData());
    }
  }

  private async extractTarGz(archivePath: string, destFolder: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const extract = tar.extract();
      const errors: string[] = [];

      extract.on('entry', (header, stream, next) => {
        if (header.type === 'directory') {
          stream.resume();
          next();
          return;
        }

        const entryName = header.name;

        if (!isPathSafe(destFolder, entryName)) {
          stream.resume();
          errors.push(`Zip Slip detectado: ${entryName}`);
          next();
          return;
        }

        const targetPath = path.resolve(destFolder, entryName);
        fs.mkdirSync(path.dirname(targetPath), { recursive: true });
        const writeStream = fs.createWriteStream(targetPath);
        stream.pipe(writeStream);
        writeStream.on('finish', next);
        writeStream.on('error', (err) => {
          errors.push(err.message);
          next();
        });
      });

      extract.on('finish', () => {
        if (errors.length > 0) {
          reject(new Error(errors.join('; ')));
        } else {
          resolve();
        }
      });

      extract.on('error', (err) => reject(err));

      fs.createReadStream(archivePath)
        .pipe(zlib.createGunzip())
        .pipe(extract);
    });
  }

  isPathSafe(destFolder: string, filePathInArchive: string): boolean {
    return isPathSafe(destFolder, filePathInArchive);
  }
}