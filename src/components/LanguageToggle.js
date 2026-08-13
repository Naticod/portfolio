"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";
import { d } from "@/lib/u";

// EN.svg: pílula branca translúcida (fill 20%, stroke 1.5) com EN e PT; o
// idioma ativo aparece dentro de um círculo escuro. Mesma linguagem visual
// do seletor de tema.
export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const { isLoading } = useLoading();

  const seg = (active) =>
    `d flex items-center justify-center rounded-full leading-none transition-colors max-lg:h-9 max-lg:w-9 ${
      active ? "bg-[#100f0f] text-white" : "text-[#100f0f]/65"
    }`;

  return (
    <div
      data-abs
      role="group"
      aria-label={t.languageToggle}
      style={d({ right: 81.3, bottom: 46, width: 92, height: 44, padding: 4, borderWidth: 1.5, fontSize: 18 })}
      className={`d d-p d-bw z-40 flex items-center justify-between rounded-full border border-white/55 bg-white/25 backdrop-blur-sm transition-opacity duration-500 max-lg:fixed max-lg:bottom-6 max-lg:right-6 max-lg:h-11 max-lg:w-24 max-lg:border max-lg:p-1 max-lg:text-base ${
        isLoading ? "pointer-events-none opacity-25" : "opacity-100"
      }`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        style={d({ width: 40, height: 36 })}
        className={seg(language === "en")}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
        style={d({ width: 40, height: 36 })}
        className={seg(language === "pt")}
      >
        PT
      </button>
    </div>
  );
}
