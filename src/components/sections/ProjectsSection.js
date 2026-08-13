"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpIcon, ArrowDownIcon } from "@/components/icons";
import ProjectModal from "@/components/ProjectModal";
import { d } from "@/lib/u";

// Figma (Projetos.png): h1 x 116.3 y 204 (font ~66);
// blocos de texto y 350 e 455.3, font ~24, line pitch 30;
// setas x 1014.3, y 496 e 588.
//
// A pilha tem 5 posições. O projeto ativo fica na posição 0 e os demais nas
// posições decorativas ao redor. Ao navegar, cada card desliza para a posição
// seguinte — a pilha inteira se move, não só o card da frente.
//
// Toda a pilha foi reduzida em 35% (escala 0,65) e reposicionada mais para
// cima e à direita, logo abaixo da linha do título "Projetos", em vez de ficar
// centralizada verticalmente. O card em destaque (posição "0") é o maior.
const BACK_CARD_SIZE = { width: 148.2, height: 89.7 };

const SLOTS = {
  "-2": { left: 1472.3, top: 200, ...BACK_CARD_SIZE, borderRadius: 16, borderWidth: 1 },
  "-1": { left: 1387.4, top: 226, ...BACK_CARD_SIZE, borderRadius: 16, borderWidth: 1 },
  "0": { left: 1240, top: 325.7, width: 294.5, height: 384, borderRadius: 18, borderWidth: 2 },
  "1": { left: 1389.1, top: 716.1, ...BACK_CARD_SIZE, borderRadius: 16, borderWidth: 1 },
  "2": { left: 1452.4, top: 755.1, ...BACK_CARD_SIZE, borderRadius: 16, borderWidth: 1 },
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
        {current.title && (
          <h2
            key={`${active}-titulo`}
            style={d({ fontSize: 30, lineHeight: 40, marginBottom: 28 })}
            className={`d d-mb font-bold ${animation} max-lg:mb-3 max-lg:text-lg`}
          >
            {current.title}
            {current.note && (
              <span
                style={d({ fontSize: 22 })}
                className="d ml-2 font-medium text-foreground/60 max-lg:text-sm"
              >
                {current.note}
              </span>
            )}
          </h2>
        )}

      </div>

      {/* Botões de navegação.svg: dois círculos brancos (fill 20%, traço 1,
          seta branca), empilhados, no lugar das setas antigas. */}
      <div
        data-abs
        style={d({ left: 1180, top: 468, gap: 32 })}
        className="d z-20 flex flex-col items-center max-lg:static max-lg:mt-6 max-lg:flex-row max-lg:gap-6"
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t.projects.previous}
          style={d({ width: 37, height: 37, borderWidth: 1 })}
          className="d d-bw flex items-center justify-center rounded-full border border-white/70 bg-white/20 text-white transition-colors hover:bg-black max-lg:h-10 max-lg:w-10"
        >
          <ArrowUpIcon style={d({ width: 18, height: 18 })} className="d max-lg:h-5 max-lg:w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t.projects.next}
          style={d({ width: 37, height: 37, borderWidth: 1 })}
          className="d d-bw flex items-center justify-center rounded-full border border-white/70 bg-white/20 text-white transition-colors hover:bg-black max-lg:h-10 max-lg:w-10"
        >
          <ArrowDownIcon style={d({ width: 18, height: 18 })} className="d max-lg:h-5 max-lg:w-5" />
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
        // Projeto ainda sem título usa um rótulo genérico, para o botão
        // nunca ficar sem nome em leitores de tela.
        const projectLabel = project.title ?? `${t.projects.fallbackTitle} ${index + 1}`;

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
                ? `${t.projects.open}: ${projectLabel}`
                : projectLabel
            }
            style={{
              ...d(slot ?? fallback),
              ...(SLOT_STYLE[String(offset)] ?? { opacity: 0, zIndex: 0 }),
            }}
            // "relative" é o que faz a imagem com `fill` se ancorar no card
            // no mobile; no desktop o data-abs já deixa o card posicionado.
            className={`carousel-card d d-br d-bw relative overflow-hidden bg-surface max-lg:mt-4 max-lg:min-h-0 max-lg:w-full max-lg:rounded-2xl max-lg:border-2 ${
              isActive
                ? "border-foreground hover:shadow-lg max-lg:flex-1"
                : "border-foreground/35 max-lg:hidden"
            }`}
          >
            {project.thumb ? (
              <Image
                src={project.thumb}
                alt=""
                aria-hidden="true"
                fill
                // O card em destaque é o maior (294 no design); os de trás
                // têm 148, então pedimos a imagem no tamanho certo pra cada.
                sizes={isActive ? "(max-width: 1023px) 92vw, 295px" : "148px"}
                className="object-cover object-top"
              />
            ) : (
              /* Sem imagem ainda: número provisório. */
              <span
                aria-hidden="true"
                className="flex h-full w-full items-center justify-center text-foreground/15"
              >
                <span
                  style={d({ fontSize: isActive ? 104 : 39 })}
                  className="d font-medium max-lg:text-[clamp(3.5rem,20vw,6rem)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            )}
          </button>
        );
      })}

      {isModalOpen && (
        <ProjectModal
          project={{
            ...current,
            label: current.title ?? `${t.projects.fallbackTitle} ${active + 1}`,
          }}
          labels={{ close: t.projects.close }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
