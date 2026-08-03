"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const SECTIONS = ["home", "projects", "contact", "whatIDo", "resume"];

export default function MobileNav({ active, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  function handleSelect(section) {
    onNavigate(section);
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={t.nav.home}
        aria-expanded={isOpen}
        className="fixed right-6 top-6 z-40 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-foreground bg-surface"
      >
        <span className="h-px w-5 bg-foreground" />
        <span className="h-px w-5 bg-foreground" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-background/90 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-foreground text-xl"
          >
            ×
          </button>
          {SECTIONS.map((section) => {
            const isActive = section === active;
            return (
              <button
                key={section}
                type="button"
                onClick={() => handleSelect(section)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full border px-8 py-3 font-display text-lg ${
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/40 text-foreground"
                }`}
              >
                {t.nav[section]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
