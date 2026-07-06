// Responsabilidades do Script
//
// 1. Detectar e extrair blocos de frontmatter YAML no início de notas Markdown.
// 2. Calcular o offset de linhas do frontmatter para mapeamento correto de cliques.
// 3. Disponibilizar utilitários compartilhados de frontmatter.

/**
 * Detecta e remove o bloco de frontmatter YAML do início do texto.
 * Garante que o "---" de fechamento está em início de linha (não no meio de valores YAML).
 *
 * Regras:
 * - Só remove o bloco quando o primeiro conteúdo é exatamente "---" (ou "\r\n").
 * - Procura o fechamento "---" em início de linha, evitando fechamento prematuro.
 * - Suporta tanto "\n" quanto "\r\n".
 * - Retorna tanto o texto limpo quanto a contagem de linhas do frontmatter.
 */
export function stripFrontmatter(text: string): string {
  const result = detectAndStripFrontmatter(text);
  return result ? result.strippedText : text;
}

/**
 * Resultado da detecção de frontmatter contendo texto limpo e informações de offset.
 */
export interface FrontmatterInfo {
  strippedText: string;
  lineCount: number;
}

/**
 * Detecta frontmatter YAML no início do texto e retorna informações completas.
 * O "---" de fechamento deve estar em início de linha para evitar fechamento prematuro.
 */
export function detectAndStripFrontmatter(text: string): FrontmatterInfo | null {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) return null;

  const isCrLf = text.startsWith("---\r\n");
  // Regex que garante "---" de fechamento em início de linha ou fim do texto
  // Isso previne fechamento prematuro quando há "---" no meio de valores YAML
  const endMark = isCrLf ? "\r\n---\r\n" : "\n---\n";
  const endMarkAlt = isCrLf ? "\r\n---" : "\n---";

  let endIndex = text.indexOf(endMark, 4);
  let matchLength = 0;
  let lineCount = 2; // --- inicial + pelo menos uma linha de conteúdo

  if (endIndex !== -1) {
    matchLength = endIndex + endMark.length;
  } else {
    endIndex = text.indexOf(endMarkAlt, 4);
    if (endIndex !== -1) {
      matchLength = endIndex + endMarkAlt.length;
    }
  }

  if (endIndex !== -1) {
    // BUGFIX: Conta linhas via regex para evitar array temporário
    // Usa match(/\n/g) que é mais eficiente que split().length
    const frontmatter = text.slice(0, matchLength);
    const newlineMatches = frontmatter.match(/\n/g);
    lineCount = newlineMatches ? newlineMatches.length : 2;
    return {
      strippedText: text.slice(matchLength),
      lineCount
    };
  }

  return null;
}
