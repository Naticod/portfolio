"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useLoading } from "@/context/LoadingContext";

const SECTIONS = ["home", "about", "projects", "contact", "whatIDo", "resume"];

export default function MobileNav({ active, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { isLoading } = useLoading();

  function handleSelect(section) {
    onNavigate(section);
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        disabled={isLoading}
        aria-label={t.nav.home}
        aria-expanded={isOpen}
        className={`fixed right-6 top-6 z-40 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/70 bg-white/20 backdrop-blur-sm transition-opacity duration-500 ${
          isLoading ? "pointer-events-none opacity-25" : "opacity-100"
        }`}
      >
        <span className="h-px w-5 bg-white" />
        <span className="h-px w-5 bg-white" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-[#2a0323]/95 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-xl text-white"
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
                    ? "border-black bg-black text-white"
                    : "border-foreground/40 bg-foreground/10 text-foreground"
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
