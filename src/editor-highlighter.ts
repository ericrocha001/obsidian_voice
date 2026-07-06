/*
--- ARQUITETURA DO SCRIPT ---

Responsabilidades do Script

1. Gerenciar as marcações (decorations) de destaque de texto no editor CodeMirror do Obsidian.
2. Localizar a posição exata de um bloco de texto dentro do documento ativo do editor.
3. Expor métodos para destacar e limpar o destaque de parágrafos no editor.
4. Controlar scroll automático para teleprompter.

Mapa de Relacionamentos do Script

1. main.ts
   - Tipo: Dependência Inversa
   - Relação: main.ts consome EditorHighlighter para destacar parágrafos durante narração.
   - Criticidade: Alta

2. CodeMirror (StateEffect / StateField)
   - Tipo: Contrato / Interface
   - Relação: Utiliza setHighlightEffect e highlightField para manipular decorations.
   - Criticidade: Alta

Invariantes do Script

1. O portão de silêncio (isHighlighterActive) deve vir antes do curto-circuito de performance no update().
2. O curto-circuito de performance no update() nunca deve ser removido.
3. A assinatura pública de highlightParagraph(editor, paragraphText, scrollEnabled) deve permanecer estável.
4. A busca de parágrafos deve ser determinística para o mesmo texto e documento.

--- FIM ARQUITETURA DO SCRIPT ---
*/

import { StateEffect, StateField, Extension, Transaction } from "@codemirror/state";
import { Decoration, DecorationSet, EditorView } from "@codemirror/view";
import { Editor } from "obsidian";

let isHighlighterActive = false;

export const setHighlightEffect = StateEffect.define<{ from: number; to: number } | null>();

export const highlightField = StateField.define<DecorationSet>({
  create() {
    return Decoration.none;
  },
  update(decorations: DecorationSet, tr: Transaction): DecorationSet {
    // Portão de silêncio: se o plugin está inativo, apenas mapeia as decorações
    // existentes para o novo documento (caso o usuário digite) e ignora efeitos.
    if (!isHighlighterActive) {
      return tr.docChanged ? decorations.map(tr.changes) : decorations;
    }

    // Curto-circuito de alta performance: se não há decorations ativas e não há
    // efeito de destaque na transação, retorna imediatamente sem processar map/efeitos.
    const hasHighlightEffect = tr.effects.some(e => e.is(setHighlightEffect));
    if (decorations.size === 0 && !hasHighlightEffect) {
      return Decoration.none;
    }

    decorations = decorations.map(tr.changes);

    for (const effect of tr.effects) {
      if (effect.is(setHighlightEffect)) {
        if (effect.value) {
          const { from, to } = effect.value;
          const deco = Decoration.mark({
            attributes: { class: "obsidian-voice-highlight" }
          });
          return Decoration.set([deco.range(from, to)]);
        } else {
          return Decoration.none;
        }
      }
    }
    return decorations;
  },
  provide: (field) => EditorView.decorations.from(field),
});

export class EditorHighlighter {
  private lastSourceIndex = 0;

  // Cache de normalização do documento
  private cachedDocText: string = "";
  private cachedOriginalToAlphanum: { char: string; origIdx: number }[] = [];
  private cachedSourceStr: string = "";

  setActive(active: boolean): void {
    isHighlighterActive = active;
  }

  getExtension(): Extension {
    return highlightField;
  }

  clearHighlight(editor: Editor): void {
    const view = (editor as any).cm as EditorView | undefined;
    if (view) {
      view.dispatch({
        effects: setHighlightEffect.of(null)
      });
    }
    this.lastSourceIndex = 0;
  }

  highlightParagraph(editor: Editor, paragraphText: string, scrollEnabled = true): void {
    const view = (editor as any).cm as EditorView | undefined;
    if (!view) {
      console.warn("[Obsidian Voice Highlighter] EditorView (cm) não encontrado no editor.");
      return;
    }

    const docText = view.state.doc.toString();

    // Cache de normalização: reutiliza o resultado se o documento não mudou
    if (docText !== this.cachedDocText) {
      // 1. Mapeia caracteres alfanuméricos mantendo o índice original
      const originalToAlphanum: { char: string; origIdx: number }[] = [];
      for (let i = 0; i < docText.length; i++) {
        const char = docText[i];
        if (/^\p{L}|\p{N}$/u.test(char)) {
          originalToAlphanum.push({ char: char.toLowerCase(), origIdx: i });
        }
      }
      this.cachedOriginalToAlphanum = originalToAlphanum;
      this.cachedSourceStr = originalToAlphanum.map((x) => x.char).join("");
      this.cachedDocText = docText;
    }

    // Usa o cache
    const sourceStr = this.cachedSourceStr;
    const originalToAlphanum = this.cachedOriginalToAlphanum;

    // 2. Normaliza o parágrafo alvo
    const cleanTarget: string[] = [];
    for (let i = 0; i < paragraphText.length; i++) {
      const char = paragraphText[i];
      if (/^\p{L}|\p{N}$/u.test(char)) {
        cleanTarget.push(char.toLowerCase());
      }
    }
    const targetStr = cleanTarget.join("");

    if (!targetStr) {
      console.warn("[Obsidian Voice Highlighter] targetStr normalizada está vazia.");
      return;
    }

    // 3. Procura o parágrafo na string normalizada
    let matchIndex = sourceStr.indexOf(targetStr, this.lastSourceIndex);
    if (matchIndex === -1) {
      matchIndex = sourceStr.indexOf(targetStr, 0);
    }

    if (matchIndex !== -1) {
      this.lastSourceIndex = matchIndex + targetStr.length;

      const from = originalToAlphanum[matchIndex].origIdx;
      const to = originalToAlphanum[matchIndex + targetStr.length - 1].origIdx + 1;

      // Dispara efeito de destaque no CodeMirror
      view.dispatch({
        effects: setHighlightEffect.of({ from, to })
      });

      // Rola o editor para exibir o trecho destacado (apenas se o usuário não estiver rolando manualmente)
      if (scrollEnabled) {
        const rect = view.coordsAtPos(from);
        if (rect && view.scrollDOM) {
          const editorRect = view.scrollDOM.getBoundingClientRect();
          const targetTop = rect.top - editorRect.top + view.scrollDOM.scrollTop;
          const height = rect.bottom - rect.top;
          const finalScrollTop = targetTop - (editorRect.height / 2) + (height / 2);
          view.scrollDOM.scrollTo({
            top: finalScrollTop,
            behavior: "smooth"
          });
        } else {
          view.dispatch({
            effects: EditorView.scrollIntoView(from, { y: "center" })
          });
        }
      }
    } else {
      console.warn("[Obsidian Voice Highlighter] Parágrafo não pôde ser localizado no documento.");
    }
  }
}