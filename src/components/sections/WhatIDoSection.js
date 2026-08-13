"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PlusIcon, PirinIcon } from "@/components/icons";
import { d } from "@/lib/u";

// Figma (O que eu faço.png): h1 x 114.7 y 203.3 font ~66;
// itens: elipse x 296 (50x45), texto x 373.3, "+" x 1601.3,
// primeiro item y 340, pitch 110.7 — esse espaçamento é fixo, igual com
// qualquer item aberto ou fechado (nada se comprime).
const ITEM_TOP = 340;
const ITEM_PADDING_BOTTOM = 33.7;
const ITEM_MARGIN_BOTTOM = 31;
// Altura visível da lista. Quando um item abre e o conteúdo cresce mais do
// que isso, é a LISTA que rola por dentro (item por cima fica parado, os de
// baixo só descem) — a página em si nunca rola.
const LIST_HEIGHT = 1024 - ITEM_TOP - 40;

export default function WhatIDoSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <>
      <h1
        data-abs
        style={d({ left: 114.7, top: 190, fontSize: 66 })}
        className="d font-medium tracking-tight max-lg:text-[clamp(1.5rem,7vw,2.25rem)]"
      >
        {t.whatIDo.title}
      </h1>

      <ul
        data-abs
        style={d({ left: 296, top: ITEM_TOP, width: 1329, height: LIST_HEIGHT })}
        // scroll-invisible: rola de verdade quando precisa (item 5 nunca
        // fica inacessível), mas sem barra de rolagem à mostra.
        className="d scroll-invisible overflow-y-auto overscroll-contain max-lg:mt-5 max-lg:min-h-0 max-lg:w-full max-lg:flex-1"
      >
        {t.whatIDo.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li
              key={index}
              style={d({ paddingBottom: ITEM_PADDING_BOTTOM, marginBottom: ITEM_MARGIN_BOTTOM })}
              className="d d-pb d-mb border-b border-foreground/70"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                // width:"100%" fica depois do d(): a classe "d" (que aplica
                // as medidas do Figma) tem prioridade sobre "w-full" do
                // Tailwind, então sem isso o botão encolhe pro tamanho do
                // texto e o "+" cola no título em vez de ir pro final da
                // linha. Estilo inline sempre vence, então isso resolve.
                style={{ ...d({ height: 45, gap: 27 }), width: "100%" }}
                className="d flex items-center text-left max-lg:gap-3 max-lg:py-2.5"
              >
                {/* Marcador do item: estrela Pirin (branca sobre o fundo roxo). */}
                <PirinIcon
                  style={d({ width: 46, height: 42 })}
                  className="d flex-shrink-0 text-foreground max-lg:h-7 max-lg:w-7"
                />
                <span
                  style={d({ fontSize: 26 })}
                  className="d flex-1 text-left font-bold max-lg:text-base"
                >
                  {item.title}
                </span>
                <PlusIcon
                  style={d({ width: 26, height: 26 })}
                  className={`d flex-shrink-0 transition-transform max-lg:h-5 max-lg:w-5 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              {/* Painel sempre no DOM, aberto ou fechado — assim dá pra
                  animar a altura suavemente. O truque é o grid: a linha vai
                  de 0fr pra 1fr (isso é animável, ao contrário de "height:
                  auto"), e o "overflow-hidden" por dentro corta o conteúdo
                  enquanto ela ainda está fechando. Os itens de baixo, que
                  vêm depois no fluxo normal da página, descem junto, suaves,
                  em vez de saltar de uma vez. */}
              <div
                aria-hidden={!isOpen}
                className="accordion-panel grid"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    style={d({ marginTop: 28, marginBottom: 20, borderRadius: 20 })}
                    className="surface-card d d-mt d-mb d-br rounded-2xl border border-foreground/20 bg-surface/60 max-lg:mb-2 max-lg:mt-7"
                  >
                    <p
                      style={d({ fontSize: 20, lineHeight: 30, padding: 28 })}
                      className="d d-p font-medium text-foreground max-lg:p-4 max-lg:text-sm"
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
