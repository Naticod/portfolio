"use client";

import { useLanguage } from "@/context/LanguageContext";
import { d } from "@/lib/u";

const SECTIONS = ["home", "about", "projects", "contact", "whatIDo", "resume"];

// Figma: pills x 1690.7–1830.3 (w 139.6), h 38.4, pitch 46.7 (gap 8.3),
// primeira pill top 109.3, margem direita 89.7.
export default function NavPills({ active, onNavigate }) {
  const { t } = useLanguage();

  return (
    <nav
      data-abs
      aria-label={t.nav.home}
      style={d({ right: 89.7, top: 109.3, gap: 8.3 })}
      className="d z-40 hidden flex-col lg:flex"
    >
      {SECTIONS.map((section) => {
        const isActive = section === active;
        return (
          <button
            key={section}
            type="button"
            onClick={() => onNavigate(section)}
            aria-current={isActive ? "page" : undefined}
            style={d({ width: 139.6, height: 38.4, fontSize: 21, borderWidth: 1.5 })}
            // Botão Início.svg: preenchimento branco 20%, traço branco 1.5,
            // texto branco. Ativo/hover: preenchimento preto 100%.
            className={`d d-bw rounded-full border border-white/70 leading-none text-white transition-colors ${
              isActive ? "bg-black" : "bg-white/20 hover:bg-black"
            }`}
          >
            {t.nav[section]}
          </button>
        );
      })}
    </nav>
  );
}
