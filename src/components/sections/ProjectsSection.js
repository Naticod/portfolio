"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpIcon, ArrowDownIcon } from "@/components/icons";
import ProjectModal from "@/components/ProjectModal";
import { d } from "@/lib/u";

// Figma (Projetos.png): h1 x 116.3 y 204 (font ~66);
// blocos de texto y 350 e 455.3, font ~24, line pitch 30;
// setas x 1014.3, y 496 e 588.
//
// A pilha tem 5 posições. O projeto ativo fica na posição 0 (o card grande do
// Figma, x 1073.3–1526.3 / y 229.3–820.0) e os demais nas posições que o
// design usava como cards decorativos. Ao navegar, cada card desliza para a
// posição seguinte — a pilha inteira se move, não só o card da frente.
// Os 4 cards de trás usam um tamanho padrão (228x138); só muda a posição
// de cada um. O card em destaque (posição "0") continua no tamanho do Figma.
const BACK_CARD_SIZE = { width: 228, height: 138 };

const SLOTS = {
  "-2": { left: 1430.7, top: 36, ...BACK_CARD_SIZE, borderRadius: 24, borderWidth: 1 },
  "-1": { left: 1300, top: 76, ...BACK_CARD_SIZE, borderRadius: 24, borderWidth: 1 },
  "0": { left: 1073.3, top: 229.3, width: 453, height: 590.7, borderRadius: 28, borderWidth: 2.5 },
  "1": { left: 1302.7, top: 830, ...BACK_CARD_SIZE, borderRadius: 24, borderWidth: 1 },
  "2": { left: 1400, top: 890, ...BACK_CARD_SIZE, borderRadius: 24, borderWidth: 1 },
};

const SLOT_STYLE = {
  "-2": { opacity: 0.45, zIndex: 1 },
  "-1": { opacity: 0.7, zIndex: 2 },
  "0": { opacity: 1, zIndex: 10 },
  "1": { opacity: 0.7, zIndex: 2 },
  "2": { opacity: 0.45, zIndex: 1 },
};

/** Distância circular de `index` até `active` (ex.: 5 itens => [-2, 2]). */
function slotOffset(index, active, total) {
  const half = Math.floor(total / 2);
  const forward = (((index - active) % total) + total) % total;
  return forward > half ? forward - total : forward;
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const items = t.projects.items;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function go(step) {
    setDirection(step > 0 ? "next" : "prev");
    // Circular: do último volta para o primeiro e vice-versa.
    setActive((current) => (current + step + items.length) % items.length);
  }

  const current = items[active];
  const animation = direction === "next" ? "carousel-in-up" : "carousel-in-down";

  return (
    <>
      <h1
        data-abs
        style={d({ left: 116.3, top: 190, fontSize: 66 })}
        className="d font-medium tracking-tight max-lg:text-[clamp(1.5rem,7vw,2.25rem)]"
      >
        {t.projects.title}
      </h1>

      <div
        data-abs
        style={d({ left: 292, top: 342, width: 700 })}
        className="d max-lg:mt-6 max-lg:w-full"
        aria-live="polite"
      >
        {current.blocks.map((block, index) => (
          <p
            key={`${active}-${index}`}
            style={{
              ...d({ fontSize: 24, lineHeight: 30, marginBottom: index === 0 ? 75 : 0 }),
              animationDelay: `${index * 60}ms`,
            }}
            className={`d d-mb text-foreground/85 ${animation} max-lg:mb-4 max-lg:text-base`}
          >
            {block.line1}{" "}
            <br className="max-lg:hidden" />
            {block.line2}
          </p>
        ))}
      </div>

      <div
        data-abs
        style={d({ left: 1006, top: 490, gap: 60 })}
        className="d z-20 flex flex-col items-center text-foreground/70 max-lg:static max-lg:mt-6 max-lg:flex-row max-lg:gap-6"
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t.projects.previous}
          className="transition-colors hover:text-foreground"
        >
          <ArrowUpIcon style={d({ width: 30, height: 30 })} className="d max-lg:h-6 max-lg:w-6" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t.projects.next}
          className="transition-colors hover:text-foreground"
        >
          <ArrowDownIcon style={d({ width: 30, height: 30 })} className="d max-lg:h-6 max-lg:w-6" />
        </button>
      </div>

      {/* Pilha de cards: cada projeto ocupa um slot e desliza entre eles. */}
      {items.map((project, index) => {
        const offset = slotOffset(index, active, items.length);
        const slot = SLOTS[String(offset)];
        const isActive = offset === 0;
        // Fora dos 5 slots (listas maiores): esconde no extremo mais próximo.
        const visible = Boolean(slot);
        const fallback = offset < 0 ? SLOTS["-2"] : SLOTS["2"];

        return (
          <button
            key={index}
            data-abs
            data-sound="card"
            type="button"
            onClick={() => (isActive ? setIsModalOpen(true) : setActive(index))}
            aria-haspopup={isActive ? "dialog" : undefined}
            aria-hidden={!isActive && !visible}
            tabIndex={visible ? 0 : -1}
            aria-label={
              isActive
                ? `${t.projects.open}: ${project.blocks[0].line1}`
                : project.blocks[0].line1
            }
            style={{
              ...d(slot ?? fallback),
              ...(SLOT_STYLE[String(offset)] ?? { opacity: 0, zIndex: 0 }),
            }}
            className={`carousel-card d d-br d-bw overflow-hidden bg-surface max-lg:mt-4 max-lg:min-h-0 max-lg:w-full max-lg:rounded-2xl max-lg:border-2 ${
              isActive
                ? "border-foreground hover:shadow-lg max-lg:flex-1"
                : "border-foreground/35 max-lg:hidden"
            }`}
          >
            {/* Numeração provisória — troque pela imagem de cada projeto. */}
            <span
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center text-foreground/15"
            >
              <span
                style={d({ fontSize: isActive ? 160 : 60 })}
                className="d font-medium max-lg:text-[clamp(3.5rem,20vw,6rem)]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </span>
          </button>
        );
      })}

      {isModalOpen && (
        <ProjectModal
          project={current}
          labels={{ close: t.projects.close }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
