"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PlusIcon } from "@/components/icons";
import { d } from "@/lib/u";

// Figma (O que eu faço.png): h1 x 114.7 y 203.3 font ~66;
// itens: quadrado x 296 (50x45), texto x 373.3, "+" x 1601.3,
// primeiro item y 340, pitch 110.7, divisória x 296–1625 em y 418.7.
const ITEM_TOP = 340;

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
        style={d({ left: 296, top: ITEM_TOP, width: 1329 })}
        className="d max-lg:mt-5 max-lg:flex max-lg:min-h-0 max-lg:w-full max-lg:flex-1 max-lg:flex-col"
      >
        {t.whatIDo.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            // Figma: item 45 de altura, divisória 33.7 abaixo dele,
            // e o próximo item começa 110.7 após o anterior.
            <li
              key={index}
              style={d({ paddingBottom: 33.7, marginBottom: 31 })}
              className={`d d-pb d-mb border-b border-foreground/70 ${
                // No mobile o item aberto ocupa a sobra da tela, então
                // o conteúdo nunca ultrapassa a altura da janela.
                isOpen ? "max-lg:flex max-lg:min-h-0 max-lg:flex-1 max-lg:flex-col" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                style={d({ height: 45, gap: 27 })}
                className="d flex w-full items-center text-left max-lg:gap-3 max-lg:py-2.5"
              >
                <span
                  style={d({ width: 50, height: 45, borderRadius: 10 })}
                  className="d d-br flex-shrink-0 rounded-md bg-foreground max-lg:h-7 max-lg:w-8"
                />
                <span style={d({ fontSize: 26 })} className="d flex-1 max-lg:text-base">
                  {item}
                </span>
                <PlusIcon
                  style={d({ width: 26, height: 26 })}
                  className={`d flex-shrink-0 transition-transform max-lg:h-5 max-lg:w-5 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div
                  style={d({ marginTop: 28, height: 240, borderRadius: 20, marginBottom: 20 })}
                  className="d d-mt d-mb d-br rounded-2xl border border-foreground/20 bg-surface/60 max-lg:mb-2 max-lg:mt-7 max-lg:min-h-0 max-lg:flex-1"
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
