"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { SunIcon, MoonIcon } from "@/components/icons";
import { d } from "@/lib/u";

// Figma: x 50.7–155.7 (w 105), y 937.3–987.7 (h 50.4) => bottom 36.3.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const knob = (active) =>
    `d flex items-center justify-center rounded-full transition-colors max-lg:h-9 max-lg:w-9 ${
      active ? "bg-background text-foreground" : "text-background"
    }`;

  return (
    <button
      data-abs
      type="button"
      onClick={toggleTheme}
      aria-label={t.themeToggle}
      aria-pressed={theme === "dark"}
      style={d({ left: 50.7, bottom: 36.3, width: 105, height: 50.4, padding: 4 })}
      className="d d-p z-40 flex items-center justify-between rounded-full bg-foreground max-lg:fixed max-lg:bottom-5 max-lg:left-5 max-lg:h-11 max-lg:w-24 max-lg:p-1"
    >
      <span style={d({ width: 42, height: 42 })} className={knob(theme === "light")}>
        <SunIcon style={d({ width: 22, height: 22 })} className="d max-lg:h-4 max-lg:w-4" />
      </span>
      <span style={d({ width: 42, height: 42 })} className={knob(theme === "dark")}>
        <MoonIcon style={d({ width: 20, height: 20 })} className="d max-lg:h-4 max-lg:w-4" />
      </span>
    </button>
  );
}
