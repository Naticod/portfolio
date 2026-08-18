"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // O portfólio sempre abre no modo claro. O escuro fica a critério da
    // pessoa: só é usado se ela mesma tiver trocado no botão antes (o que
    // fica guardado no localStorage). A preferência do sistema é ignorada
    // de propósito — senão quem usa o computador no escuro entraria no
    // tema escuro sem ter escolhido.
    const stored = window.localStorage.getItem("theme");
    // localStorage só existe no browser, então isso só pode ser lido depois da montagem inicial.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(stored === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme precisa estar dentro de um ThemeProvider");
  }
  return context;
}
