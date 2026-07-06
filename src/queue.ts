/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Limpar marcações Markdown e normalizar caracteres especiais em linhas individuais.
2. Fatiar a nota em chunks mapeando as linhas físicas originais do editor (0-indexed).
3. Gerenciar o ponteiro de leitura e realizar buscas por índice de linha em memória.
4. Filtrar apenas destaques (==texto==) quando o modo Audio-Resumo estiver ativo.
5. Manter índice reverso para busca O(1) de chunks por texto.

Mapa de Relacionamentos do Script

1. main.ts
   - Tipo: Dependência Inversa
   - Relação: main.ts consome ObsidianVoiceQueue para gerenciar chunks durante a narração.
   - Criticidade: Alta

2. editor-highlighter.ts
   - Tipo: Dependência Direta
   - Relação: Usa findChunkIndexByLineText para localizar chunks por texto.
   - Criticidade: Alta

Invariantes do Script

1. O índice reverso (chunkIndex) deve ser limpo antes de iniciar uma nova fila.
2. O índice reverso deve ser limpo ao resetar a fila.
3. A busca de chunks por texto deve retornar -1 ou o índice correto, nunca lançar exceção.
4. Os chunks devem ser criados com índices sequenciais começando de 0.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import { stripFrontmatter } from "./utils/markdown";

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

  // Índice reverso para busca de chunks por texto.
  // Limitações:
  // - Texto é normalizado (lowercase, sem espaços extras) antes da indexação
  // - A busca exata é O(n) no pior caso devido à normalização adicional
  private chunkIndex: Map<string, number> = new Map();

  startQueue(rawText: string) {
    this.chunks = [];
    this.chapters = [];
    this.currentIndex = 0;

    // Limpa o índice reverso
    this.chunkIndex.clear();

    if (this.readOnlyHighlights) {
      this.buildHighlightsQueue(rawText);
      // Capítulos são extraídos APÓS os chunks estarem prontos
      this.buildChapters(rawText);
      return;
    }

    const textWithoutFrontmatter = stripFrontmatter(rawText);
    const rawLines = textWithoutFrontmatter.split(/\r?\n/);
    let inCodeBlock = false;

    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      const trimmed = line.trim();

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
        const chunkIndex = this.chunks.length;
        this.chunks.push({
          index: chunkIndex,
          text: cleanLine,
          startLine: i,
          endLine: i,
        });
        // Atualiza o índice reverso
        const normalized = this.normalizeForIndex(cleanLine, chunkIndex);
        this.chunkIndex.set(normalized, chunkIndex);
      } else {
        const subChunks = this.splitParagraph(cleanLine, this.MAX_CHUNK_LENGTH);
        for (const sub of subChunks) {
          const chunkIndex = this.chunks.length;
          this.chunks.push({
            index: chunkIndex,
            text: sub,
            startLine: i,
            endLine: i,
          });
          // Atualiza o índice reverso
          const normalized = this.normalizeForIndex(sub, chunkIndex);
          this.chunkIndex.set(normalized, chunkIndex);
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

        const chunkIndex = this.chunks.length;
        this.chunks.push({
          index: chunkIndex,
          text: cleanText,
          startLine: i,
          endLine: i,
        });
        // Atualiza o índice reverso
        const normalized = this.normalizeForIndex(cleanText, chunkIndex);
        this.chunkIndex.set(normalized, chunkIndex);
      }
    }
  }

  /**
   * Extrai capítulos (H1-H3) do texto bruto e os associa ao primeiro chunk
   * que começa na linha do heading ou imediatamente após ela.
   * Funciona corretamente em ambos os modos (normal e readOnlyHighlights).
   */
  private buildChapters(rawText: string) {
    const textWithoutFrontmatter = stripFrontmatter(rawText);
    const rawLines = textWithoutFrontmatter.split(/\r?\n/);
    let inCodeBlock = false;

    for (let i = 0; i < rawLines.length; i++) {
      const trimmed = rawLines[i].trim();


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

  /**
   * Normaliza texto para uso como chave de busca no índice reverso.
   * Inclui o índice do chunk para garantir unicidade.
   * Usa apenas os primeiros 100 caracteres para evitar chaves muito longas.
   */
  private normalizeForIndex(text: string, chunkIndex: number): string {
    const normalized = text.toLowerCase().replace(/\s+/g, ' ').trim().substring(0, 100);
    return `${chunkIndex}:${normalized}`;
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
    this.chunkIndex.clear();
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

    // Limpa o markdown do texto buscado para consistência com o texto indexado
    const cleanedLine = this.cleanLineMarkdown(lineText);
    if (!cleanedLine) return 0;

    // Busca no índice reverso por correspondência do texto (ignorando o prefixo do índice)
    const normalized = cleanedLine.toLowerCase().replace(/\s+/g, ' ').trim().substring(0, 100);

    // Busca em todos os chunks (O(n) no pior caso, mas com texto curto)
    for (const [key, index] of this.chunkIndex.entries()) {
      const keyText = key.substring(key.indexOf(':') + 1); // Remove prefixo "indice:"
      if (keyText === normalized) {
        return index;
      }
    }

    return 0;
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
