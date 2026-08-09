"use client";

import { useEffect, useRef } from "react";
import { d } from "@/lib/u";

// Figma (Projeto expandido.png): painel translúcido com blur cobrindo a página,
// borda esquerda em x 68 e topo em y 77; X no canto superior direito.
//
// O modal mostra apenas o projeto que foi aberto: não há navegação entre
// projetos aqui dentro. Para ver outro projeto, fecha-se o modal e escolhe-se
// outro card na pilha.
export default function ProjectModal({ project, labels, onClose }) {
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      // Mantém o foco preso dentro do modal enquanto ele está aberto.
      if (event.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll("button, a[href]");
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title ?? project.blocks[0].line1}
        onClick={(event) => event.stopPropagation()}
        style={d({ left: 68, top: 77, width: 1784, height: 852, borderRadius: 28 })}
        // Vidro fosco: translúcido o bastante pra perceber, embaçado, o que
        // está atrás — sem apagar tudo.
        className="modal-panel d d-br absolute overflow-hidden bg-surface/35 shadow-xl backdrop-blur-md max-lg:relative max-lg:h-[86dvh] max-lg:w-[92vw] max-lg:rounded-2xl"
      >
        {/* Área rolável: o modal é o único lugar do site com scroll. */}
        <div
          style={d({ padding: 90 })}
          className="modal-scroll modal-content d-p h-full overflow-y-auto overscroll-contain max-lg:p-6 max-lg:pt-16"
        >
          {/* Projeto já preenchido usa o título real; os que ainda estão
              com texto de exemplo caem no primeiro bloco. */}
          <h2
            style={d({ fontSize: 48 })}
            className="d font-bold tracking-tight max-lg:text-2xl"
          >
            {project.title ?? project.blocks[0].line1}
            {project.note && (
              <span
                style={d({ fontSize: 26 })}
                className="d ml-3 font-medium text-foreground/60 max-lg:text-base"
              >
                {project.note}
              </span>
            )}
          </h2>
          <p
            style={d({ fontSize: 26, marginTop: 20 })}
            className="d d-mt font-medium text-foreground/85 max-lg:mt-3 max-lg:text-sm"
          >
            {project.title ? project.blocks[0].line1 : project.blocks[0].line2}
          </p>
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          style={d({ right: 31, top: 30, width: 40, height: 40 })}
          className="d absolute z-10 flex items-center justify-center rounded-full bg-surface/70 text-foreground transition-opacity hover:opacity-60 max-lg:right-3 max-lg:top-3 max-lg:h-10 max-lg:w-10"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            style={d({ width: 22, height: 22 })}
            className="d max-lg:h-5 max-lg:w-5"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
