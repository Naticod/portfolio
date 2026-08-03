"use client";

import { useLanguage } from "@/context/LanguageContext";
import { d } from "@/lib/u";

// Figma: bloco EN/PT x 1766.7–1838.7 (w 72), y 949.3–966.3 => right 81.3, bottom 57.7.
export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      data-abs
      role="group"
      aria-label={t.languageToggle}
      style={d({ right: 81.3, bottom: 50, gap: 12, fontSize: 23 })}
      className="d z-40 flex items-center max-lg:fixed max-lg:bottom-6 max-lg:right-6 max-lg:gap-3 max-lg:text-base"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={language === "en" ? "font-bold text-foreground" : "text-foreground/45"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
        className={language === "pt" ? "font-bold text-foreground" : "text-foreground/45"}
      >
        PT
      </button>
    </div>
  );
}
