"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Duração da tela de carregamento inicial. A barra na tela de Início preenche
// nesse tempo; enquanto isso, todos os botões ficam esmaecidos e travados.
const LOADING_MS = 4000;

const LoadingContext = createContext({ isLoading: true });

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Roda a cada carregamento da página (entrar/recarregar o portfólio).
    // Quem pediu menos animação libera na hora (delay 0).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setIsLoading(false), reduce ? 0 : LOADING_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
