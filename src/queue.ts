// Responsabilidades do Script
//
// 1. Limpar marcações Markdown e normalizar caracteres especiais em linhas individuais.
// 2. Fatiar a nota em chunks mapeando as linhas físicas originais do editor (0-indexed).
// 3. Gerenciar o ponteiro de leitura e realizar buscas por índice de linha em memória.
// 4. Filtrar apenas destaques (==texto==) quando o modo Audio-Resumo estiver ativo.

export interface AudioChunk {
  index: number;
  text: string;
  startLine: number;
  endLine: number;
}

export interface ChapterInfo {
  title: string;
  chunkIndex: number;
  level: number;
}

export class ObsidianVoiceQueue {
  private chunks: AudioChunk[] = [];
  private chapters: ChapterInfo[] = [];
  private currentIndex = 0;
  private readonly MAX_CHUNK_LENGTH = 500;

  /** Quando true, a fila é populada apenas com os destaques ==texto== da nota. */
  readOnlyHighlights = false;

  startQueue(rawText: string) {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;

    if (this.readOnlyHighlights) {
      this.buildHighlightsQueue(rawText);
      // Capítulos são extraídos APÓS os chunks estarem prontos
      this.buildChapters(rawText);
      return;
    }

    const rawLines = rawText.split(/\r?\n/);
    let inFrontmatter = false;
    let inCodeBlock = false;

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      const trimmed = line.trim();

      // Detecta Frontmatter no início do arquivo
      if (i === 0 && trimmed === "---") {
        inFrontmatter = true;
        continue;
      }
      if (inFrontmatter) {
        if (trimmed === "---") {
          inFrontmatter = false;
        }
        continue;
      }

      // Detecta blocos de código
      if (trimmed.startsWith("```")) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) {
        continue;
      }

      // Detecta cabeçalhos H1-H3 para navegação por capítulos
      const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const title = headingMatch[2].trim();
        this.chapters.push({
          title,
          chunkIndex: this.chunks.length,
          level
        });
      }

      // Limpa a linha de marcações Markdown e formatações
      const cleanLine = this.cleanLineMarkdown(line);
      if (!cleanLine) {
        continue;
      }

      // Se exceder o tamanho máximo, subdivide
      if (cleanLine.length <= this.MAX_CHUNK_LENGTH) {
        this.chunks.push({
          index: this.chunks.length,
          text: cleanLine,
          startLine: i,
          endLine: i,
        });
      } else {
        const subChunks = this.splitParagraph(cleanLine, this.MAX_CHUNK_LENGTH);
        for (const sub of subChunks) {
          this.chunks.push({
            index: this.chunks.length,
            text: sub,
            startLine: i,
            endLine: i,
          });
        }
      }
    }
  }

  /**
   * Popula a fila exclusivamente com os trechos destacados (==texto==) da nota.
   * As tags == são removidas antes do envio ao TTS.
   */
  private buildHighlightsQueue(rawText: string) {
    // Lazy match (.*?) aceita = dentro do destaque, ex: ==x = y==
    const regex = /==(.*?)==/g;
    const rawLines = rawText.split(/\r?\n/);

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      let match: RegExpExecArray | null;

      regex.lastIndex = 0;
      while ((match = regex.exec(line)) !== null) {
        const text = match[1].trim();
        if (!text) continue;

        const cleanText = this.cleanLineMarkdown(text);
        if (!cleanText) continue;

        this.chunks.push({
          index: this.chunks.length,
          text: cleanText,
          startLine: i,
          endLine: i,
        });
      }
    }
  }

  /**
   * Extrai capítulos (H1-H3) do texto bruto e os associa ao primeiro chunk
   * que começa na linha do heading ou imediatamente após ela.
   * Funciona corretamente em ambos os modos (normal e readOnlyHighlights).
   */
  private buildChapters(rawText: string) {
    const rawLines = rawText.split(/\r?\n/);
    let inFrontmatter = false;
    let inCodeBlock = false;

    for (let i = 0; i < rawLines.length; i++) {
      const trimmed = rawLines[i].trim();

      // Frontmatter
      if (i === 0 && trimmed === "---") { inFrontmatter = true; continue; }
      if (inFrontmatter) {
        if (trimmed === "---") inFrontmatter = false;
        continue;
      }

      // Code blocks
      if (trimmed.startsWith("```")) { inCodeBlock = !inCodeBlock; continue; }
      if (inCodeBlock) continue;

      // Headings H1-H3
      const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)/);
      if (!headingMatch) continue;

      const level = headingMatch[1].length;
      const title = headingMatch[2].trim();

      // Busca o primeiro chunk cuja startLine >= linha do heading.
      // Isso funciona tanto no modo normal (chunks contínuos) quanto no modo
      // highlight (chunks esparsos), pois avança pelo array sem assumir cobertura contínua.
      const chunkIndex = this.nextChunkAfterLine(i);

      this.chapters.push({ title, chunkIndex, level });
    }
  }

  /**
   * Retorna o índice do primeiro chunk com startLine >= targetLine.
   * Se nenhum chunk estiver à frente, retorna o índice do último chunk.
   */
  private nextChunkAfterLine(targetLine: number): number {
    for (let i = 0; i < this.chunks.length; i++) {
      if (this.chunks[i].startLine >= targetLine) return this.chunks[i].index;
    }
    return this.chunks.length > 0 ? this.chunks[this.chunks.length - 1].index : 0;
  }

  getNextChunk(): AudioChunk | null {
    if (!this.hasMore()) return null;
    return this.chunks[this.currentIndex++];
  }

  hasMore(): boolean {
    return this.currentIndex < this.chunks.length;
  }

  reset() {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;
  }

  getChapters(): ChapterInfo[] {
    return this.chapters;
  }

  setCurrentIndex(index: number) {
    if (index >= 0 && index <= this.chunks.length) {
      this.currentIndex = index;
    }
  }

  getChunkIndexByLine(lineNumber: number): number {
    if (this.chunks.length === 0) return 0;

    // Tenta encontrar o primeiro chunk que contém a linha no intervalo [startLine, endLine]
    for (let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i];
      if (lineNumber >= chunk.startLine && lineNumber <= chunk.endLine) {
        return chunk.index;
      }
    }

    // Se não encontrar, busca o chunk mais próximo
    let closestIndex = 0;
    let minDiff = Infinity;
    for (let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i];
      const diff = Math.min(
        Math.abs(lineNumber - chunk.startLine),
        Math.abs(lineNumber - chunk.endLine)
      );
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = chunk.index;
      }
    }
    return closestIndex;
  }

  findChunkIndexByLineText(lineText: string): number {
    if (!lineText || !lineText.trim()) return 0;

    const cleanedLine = this.cleanLineMarkdown(lineText).toLowerCase();
    if (!cleanedLine) return 0;

    const index = this.chunks.findIndex(chunk => {
      const chunkText = chunk.text.toLowerCase();
      return chunkText.includes(cleanedLine) || cleanedLine.includes(chunkText);
    });

    return index !== -1 ? index : 0;
  }

  /**
   * Limpa marcações markdown e formatações de uma linha individual.
   */
  private cleanLineMarkdown(line: string): string {
    let clean = line
      // Remove blocos de código em linha
      .replace(/`([^`]+)`/g, "$1")
      // Sintaxe de links internos: [[Link|Texto]] -> Texto e [[Link]] -> Link
      .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2")
      .replace(/\[\[([^\]]+)\]\]/g, "$1")
      // Links externos: [Texto](URL) -> Texto
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Destaques: ==texto== -> texto (lazy match aceita = dentro do destaque)
      .replace(/==(.*?)==/g, "$1")
      .replace(/==/g, "")
      // Negrito e Itálico: **texto**, __texto__, *texto*, _texto_
      .replace(/(\*\*|__)(.*?)\1/g, "$2")
      .replace(/(\*|_)(.*?)\1/g, "$2")
      .replace(/[*_]/g, "") // Remove qualquer asterisco ou underscore residual
      // Marcadores de cabeçalho: # Titulo -> Titulo
      .replace(/^#+\s+/, "")
      // Traços de listas no início de linhas: "- item" ou "* item" ou "1. item" -> "item"
      .replace(/^\s*[-*+]\s+/, "")
      .replace(/^\s*\d+\.\s+/, "")
      // Remove hashtags (#tag) apenas quando precedidas por espaço ou início de linha,
      // e apenas quando o token após # não é puramente numérico (ex: evita remover #FF0000 ou #123)
      .replace(/(^|\s)#(?![0-9a-fA-F]{3,6}\b)([^\s#]+)/g, "$1")
      // Substituições tipográficas
      .replace(/[""]/g, '"') // Aspas inteligentes duplas
      .replace(/['']/g, "'") // Aspas inteligentes simples
      .replace(/—/g, ",")    // Travessão longo por vírgula
      .replace(/–/g, ",")    // Travessão médio por vírgula
      // Remove emojis e símbolos especiais sem representação fonética direta
      .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{1F1E6}-\u{1F1FF}]/gu, "");

    return clean.trim();
  }

  /**
   * Divide recursivamente um parágrafo longo em sub-blocos no ponto de pontuação mais próximo.
   */
  private splitParagraph(text: string, maxLength: number): string[] {
    if (text.length <= maxLength) {
      return [text];
    }

    let splitIndex = -1;
    const punctuations = [".", ";", "?", "!"];

    // Encontra a última pontuação dentro do limite seguro
    for (const punct of punctuations) {
      const idx = text.lastIndexOf(punct, maxLength - 1);
      if (idx > splitIndex) {
        splitIndex = idx;
      }
    }

    // Se encontrou pontuação, divide nela
    if (splitIndex !== -1) {
      const part1 = text.substring(0, splitIndex + 1).trim();
      const part2 = text.substring(splitIndex + 1).trim();
      if (part1 && part2) {
        return [part1, ...this.splitParagraph(part2, maxLength)];
      }
    }

    // Fallback: divide no último espaço (palavra completa)
    const spaceIdx = text.lastIndexOf(" ", maxLength - 1);
    if (spaceIdx !== -1) {
      const part1 = text.substring(0, spaceIdx).trim();
      const part2 = text.substring(spaceIdx + 1).trim();
      if (part1 && part2) {
        return [part1, ...this.splitParagraph(part2, maxLength)];
      }
    }

    // Fallback final: corta a seco no limite máximo
    const part1 = text.substring(0, maxLength).trim();
    const part2 = text.substring(maxLength).trim();
    return [part1, ...this.splitParagraph(part2, maxLength)];
  }
}
