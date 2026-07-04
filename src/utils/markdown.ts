// Responsabilidades do Script
//
// 1. Extrair blocos de frontmatter YAML no início de notas Markdown.
// 2. Disponibilizar utilitários compartilhados de limpeza de frontmatter.

/**
 * Remove o bloco de frontmatter YAML do início do texto, se presente.
 *
 * Regras:
 * - Só remove o bloco quando o primeiro conteúdo é exatamente "---" (ou "\r\n").
 * - Procura o fechamento "---" a partir do índice 4 para aceitar conteúdo mínimo.
 * - Suporta tanto "\n" quanto "\r\n".
 * - Não altera o restante do documento; "---" no corpo é preservado.
 */
export function stripFrontmatter(text: string): string {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) return text;

  const isCrLf = text.startsWith("---\r\n");
  const endMark = isCrLf ? "\r\n---\r\n" : "\n---\n";
  const endMarkAlt = isCrLf ? "\r\n---" : "\n---";

  let endIndex = text.indexOf(endMark, 4);
  let matchLength = 0;

  if (endIndex !== -1) {
    matchLength = endIndex + endMark.length;
  } else {
    endIndex = text.indexOf(endMarkAlt, 4);
    if (endIndex !== -1) {
      matchLength = endIndex + endMarkAlt.length;
    }
  }

  if (endIndex !== -1) {
    return text.slice(matchLength);
  }

  return text;
}