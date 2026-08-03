"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("language");
    if (stored === "pt" || stored === "en") {
      // localStorage só existe no browser, então isso só pode ser lido depois da montagem inicial.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("language", language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage precisa estar dentro de um LanguageProvider");
  }
  return context;
}
