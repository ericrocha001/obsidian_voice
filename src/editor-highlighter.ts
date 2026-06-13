// Responsabilidades do Script
//
// 1. Gerenciar as marcações (decorations) de destaque de texto no editor CodeMirror do Obsidian.
// 2. Localizar a posição exata de um bloco de texto dentro do documento ativo do editor.
// 3. Expor métodos para destacar e limpar o destaque de parágrafos no editor de forma isolada.
// 4. Receber flag externa de controle de scroll para coexistir com rolagem manual do usuário.

import { StateEffect, StateField, Extension } from "@codemirror/state";
import { Decoration, DecorationSet, EditorView } from "@codemirror/view";
import { Editor } from "obsidian";
import { VoiceLogger } from "./logger";

let moduleLogger: VoiceLogger | null = null;
const highlightDiagnostics = {
  createCount: 0,
  updateCount: 0,
  effectCount: 0,
};

function logHighlightDiagnostic(message: string, payload?: unknown): void {
  let serializedPayload = "";
  if (payload !== undefined) {
    try {
      serializedPayload = ` ${JSON.stringify(payload, null, 2)}`;
    } catch (error) {
      serializedPayload = ` [payload não serializável: ${error instanceof Error ? error.message : String(error)}]`;
    }
  }

  moduleLogger?.logDebug(`[Diagnostico Highlight] ${message}${serializedPayload}`);
  if (payload === undefined) {
    console.log(`[Obsidian Voice Highlight Diagnostic] ${message}`);
  } else {
    console.log(`[Obsidian Voice Highlight Diagnostic] ${message}`, payload);
  }
}

function describeEditorStateExtensions(state: unknown): unknown {
  const stateAny = state as any;
  const config = stateAny?.config;

  if (!config) {
    return {
      available: false,
      reason: "state.config não está acessível",
    };
  }

  const highlightFieldId = (highlightField as any).id;
  const fieldAddress = highlightFieldId ? config.address?.[highlightFieldId] : undefined;
  const knownFieldIds = config.address
    ? Object.keys(config.address).filter((key) => config.address[key] != null)
    : [];

  return {
    available: true,
    highlightFieldId,
    highlightFieldAddress: fieldAddress ?? null,
    highlightFieldPresentInConfig: fieldAddress != null,
    knownStateFieldIds: knownFieldIds,
    facetCount: Array.isArray(config.facets) ? config.facets.length : undefined,
    staticValuesCount: Array.isArray(config.staticValues) ? config.staticValues.length : undefined,
    dynamicSlotsCount: Array.isArray(config.dynamicSlots) ? config.dynamicSlots.length : undefined,
  };
}

export const setHighlightEffect = StateEffect.define<{ from: number; to: number } | null>();

export const highlightField = StateField.define<DecorationSet>({
  create() {
    highlightDiagnostics.createCount += 1;
    logHighlightDiagnostic("highlightField.create() executado.", {
      createCount: highlightDiagnostics.createCount,
      updateCount: highlightDiagnostics.updateCount,
      effectCount: highlightDiagnostics.effectCount,
    });
    return Decoration.none;
  },
  update(decorations, tr) {
    highlightDiagnostics.updateCount += 1;
    logHighlightDiagnostic("highlightField.update() executado.", {
      createCount: highlightDiagnostics.createCount,
      updateCount: highlightDiagnostics.updateCount,
      effectCount: highlightDiagnostics.effectCount,
      effectsInTransaction: tr.effects.length,
      docChanged: tr.docChanged,
      selection: tr.state.selection?.toJSON?.(),
    });

    decorations = decorations.map(tr.changes);

    if (tr.effects.length > 0) {
      moduleLogger?.logDebug(`[Field] update chamado. tr.effects.length = ${tr.effects.length}`);
      console.log("[Obsidian Voice Field] update chamado. Efeitos no tr:", tr.effects.length);
    }

    for (const effect of tr.effects) {
      if (effect.is(setHighlightEffect)) {
        highlightDiagnostics.effectCount += 1;
        logHighlightDiagnostic("setHighlightEffect chegou ao highlightField.update().", {
          effectValue: effect.value,
          createCount: highlightDiagnostics.createCount,
          updateCount: highlightDiagnostics.updateCount,
          effectCount: highlightDiagnostics.effectCount,
        });
        moduleLogger?.logDebug(`[Field] setHighlightEffect recebido com valor: ${JSON.stringify(effect.value)}`);
        console.log("[Obsidian Voice Field] setHighlightEffect recebido no update:", effect.value);
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
  private logger: VoiceLogger | null = null;

  setLogger(logger: VoiceLogger): void {
    this.logger = logger;
    moduleLogger = logger;
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
    const briefText = paragraphText.substring(0, 40) + "...";
    this.logger?.logDebug(`[Highlighter] highlightParagraph chamado para: "${briefText}"`);
    console.log("[Obsidian Voice Highlighter] highlightParagraph chamado para texto:", briefText);
    
    const view = (editor as any).cm as EditorView | undefined;
    if (!view) {
      this.logger?.logDebug("[Highlighter] EditorView (cm) não encontrado no editor.");
      console.warn("[Obsidian Voice Highlighter] EditorView (cm) não encontrado no editor.");
      return;
    }

    const docText = view.state.doc.toString();
    this.logger?.logDebug(`[Highlighter] Comprimento do documento: ${docText.length}`);
    console.log("[Obsidian Voice Highlighter] Comprimento do docText:", docText.length);

    // 1. Mapeia caracteres alfanuméricos mantendo o índice original
    const originalToAlphanum: { char: string; origIdx: number }[] = [];
    for (let i = 0; i < docText.length; i++) {
      const char = docText[i];
      if (/^\p{L}|\p{N}$/u.test(char)) {
        originalToAlphanum.push({ char: char.toLowerCase(), origIdx: i });
      }
    }
    const sourceStr = originalToAlphanum.map((x) => x.char).join("");
    this.logger?.logDebug(`[Highlighter] Comprimento da string normalizada do documento: ${sourceStr.length}`);
    console.log("[Obsidian Voice Highlighter] Comprimento da sourceStr normalizada:", sourceStr.length);

    // 2. Normaliza o parágrafo alvo
    const cleanTarget: string[] = [];
    for (let i = 0; i < paragraphText.length; i++) {
      const char = paragraphText[i];
      if (/^\p{L}|\p{N}$/u.test(char)) {
        cleanTarget.push(char.toLowerCase());
      }
    }
    const targetStr = cleanTarget.join("");
    this.logger?.logDebug(`[Highlighter] Comprimento da string normalizada do parágrafo: ${targetStr.length}`);
    console.log("[Obsidian Voice Highlighter] Comprimento da targetStr normalizada:", targetStr.length);

    if (!targetStr) {
      this.logger?.logDebug("[Highlighter] targetStr normalizada está vazia.");
      console.warn("[Obsidian Voice Highlighter] targetStr normalizada está vazia.");
      return;
    }

    // 3. Procura o parágrafo na string normalizada
    this.logger?.logDebug(`[Highlighter] Procurando a partir de lastSourceIndex: ${this.lastSourceIndex}`);
    console.log("[Obsidian Voice Highlighter] Buscando a partir do índice:", this.lastSourceIndex);
    
    let matchIndex = sourceStr.indexOf(targetStr, this.lastSourceIndex);
    if (matchIndex === -1) {
      this.logger?.logDebug("[Highlighter] Parágrafo não encontrado após lastSourceIndex. Buscando do início...");
      console.log("[Obsidian Voice Highlighter] Parágrafo não encontrado a partir do lastSourceIndex. Tentando do início...");
      matchIndex = sourceStr.indexOf(targetStr, 0);
    }

    if (matchIndex !== -1) {
      this.lastSourceIndex = matchIndex + targetStr.length;

      const from = originalToAlphanum[matchIndex].origIdx;
      const to = originalToAlphanum[matchIndex + targetStr.length - 1].origIdx + 1;
      
      const foundTextSample = docText.substring(from, to).substring(0, 40) + "...";
      this.logger?.logDebug(`[Highlighter] Encontrado! Range original: [${from}, ${to}]. Texto correspondente: "${foundTextSample}"`);
      console.log(`[Obsidian Voice Highlighter] Parágrafo encontrado! Range original: [${from}, ${to}]. Texto correspondente: "${foundTextSample}"`);

      // Dispara efeito de destaque no CodeMirror
      const dispatchDiagnostics: Record<string, unknown> = {
        viewExists: !!view,
        stateExists: !!view?.state,
        createCount: highlightDiagnostics.createCount,
        updateCount: highlightDiagnostics.updateCount,
        effectCount: highlightDiagnostics.effectCount,
      };

      try {
        const currentFieldValue = view.state?.field(highlightField, false);
        dispatchDiagnostics.highlightFieldPresentInDispatchView = currentFieldValue !== undefined;
        dispatchDiagnostics.highlightFieldValueSummary = currentFieldValue
          ? {
              constructorName: currentFieldValue.constructor?.name,
              isDecorationNone: currentFieldValue === Decoration.none,
            }
          : currentFieldValue;
      } catch (error) {
        dispatchDiagnostics.highlightFieldReadError = error instanceof Error ? error.message : String(error);
      }

      dispatchDiagnostics.currentEditorStateExtensions = describeEditorStateExtensions(view.state);

      logHighlightDiagnostic("Relatorio antes de view.dispatch(setHighlightEffect).", dispatchDiagnostics);

      view.dispatch({
        effects: setHighlightEffect.of({ from, to })
      });
      this.logger?.logDebug("[Highlighter] Efeito setHighlightEffect despachado.");
      console.log("[Obsidian Voice Highlighter] Efeito setHighlightEffect despachado.");

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
      this.logger?.logDebug(`[Highlighter] Parágrafo não pôde ser localizado no documento. Buscado: "${targetStr.substring(0, 30)}..."`);
      console.warn("[Obsidian Voice Highlighter] Parágrafo não pôde ser localizado no documento.");
    }
  }
}
