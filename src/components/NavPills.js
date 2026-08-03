"use client";

import { useLanguage } from "@/context/LanguageContext";
import { d } from "@/lib/u";

const SECTIONS = ["home", "projects", "contact", "whatIDo", "resume"];

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
            className={`d d-bw rounded-full border leading-none transition-colors ${
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-foreground/45 text-foreground hover:border-foreground"
            }`}
          >
            {t.nav[section]}
          </button>
        );
      })}
    </nav>
  );
}
