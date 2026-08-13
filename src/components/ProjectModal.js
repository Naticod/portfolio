"use client";

import { useEffect, useRef } from "react";
import CaseContent from "@/components/CaseContent";
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
        aria-label={project.label}
        onClick={(event) => event.stopPropagation()}
        // Ocupa quase todo o frame (1920x1024), deixando só uma margem de
        // respiro. O painel do Figma era 1784x852; crescer aqui é o que dá
        // mais área de leitura sem precisar rolar tanto.
        style={d({ left: 30, top: 30, width: 1860, height: 964, borderRadius: 28 })}
        // Fundo sólido: o case tem muito texto, e qualquer transparência
        // deixaria o conteúdo de trás competindo com a leitura.
        className="modal-panel d d-br absolute overflow-hidden bg-[#e1ddeb] shadow-2xl dark:bg-[#472c35] max-lg:relative max-lg:h-[86dvh] max-lg:w-[92vw] max-lg:rounded-2xl"
      >
        {/* Área rolável: o modal é o único lugar do site com scroll. */}
        <div
          style={d({ padding: 60 })}
          className="modal-scroll modal-content d-p h-full overflow-y-auto overscroll-contain max-lg:p-5 max-lg:pt-16"
        >
          <h2
            style={d({ fontSize: 40 })}
            className="d font-bold tracking-tight max-lg:text-2xl"
          >
            {project.label}
            {project.note && (
              <span
                style={d({ fontSize: 22 })}
                className="d ml-3 font-medium text-foreground/60 max-lg:text-base"
              >
                {project.note}
              </span>
            )}
          </h2>

          {/* A ficha técnica (cargo, ano, foco) vive na abertura do case. */}
          <CaseContent project={project} />
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          style={d({ right: 31, top: 30, width: 50, height: 50 })}
          className="d absolute z-10 flex items-center justify-center rounded-full bg-foreground text-background shadow-lg ring-1 ring-black/10 transition-transform hover:scale-105 max-lg:right-3 max-lg:top-3 max-lg:h-12 max-lg:w-12"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            style={d({ width: 28, height: 28 })}
            className="d max-lg:h-6 max-lg:w-6"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
