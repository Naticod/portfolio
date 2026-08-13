"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { SunIcon, MoonIcon } from "@/components/icons";
import { d } from "@/lib/u";

// Figma: x 50.7–155.7 (w 105), y 937.3–987.7 (h 50.4) => bottom 36.3.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  // Pílula branca translúcida (igual nos dois temas, como no inicio.svg): o
  // lado ativo vira um círculo escuro com o ícone claro; o inativo fica só o
  // ícone escuro sobre a pílula.
  const knob = (active) =>
    `d flex items-center justify-center rounded-full transition-colors max-lg:h-9 max-lg:w-9 ${
      active ? "bg-[#100f0f] text-white" : "text-[#100f0f]/65"
    }`;

  return (
    <button
      data-abs
      type="button"
      onClick={toggleTheme}
      aria-label={t.themeToggle}
      aria-pressed={theme === "dark"}
      style={d({ left: 50.7, bottom: 36.3, width: 105, height: 50.4, padding: 4, borderWidth: 1.5 })}
      className="d d-p d-bw z-40 flex items-center justify-between rounded-full border border-white/55 bg-white/25 backdrop-blur-sm max-lg:fixed max-lg:bottom-5 max-lg:left-5 max-lg:h-11 max-lg:w-24 max-lg:border max-lg:p-1"
    >
      <span style={d({ width: 42, height: 42 })} className={knob(theme === "light")}>
        <SunIcon style={d({ width: 20, height: 20 })} className="d max-lg:h-4 max-lg:w-4" />
      </span>
      <span style={d({ width: 42, height: 42 })} className={knob(theme === "dark")}>
        <MoonIcon style={d({ width: 19, height: 19 })} className="d max-lg:h-4 max-lg:w-4" />
      </span>
    </button>
  );
}
