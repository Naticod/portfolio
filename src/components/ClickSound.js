"use client";

import { useEffect } from "react";

/**
 * Toca um som curto quando um botão ou link é clicado.
 *
 * Ouve o clique no documento inteiro em vez de exigir um handler em cada
 * botão — assim qualquer controle novo já vem com som, sem precisar lembrar
 * de ligá-lo.
 *
 * Um controle pode pedir um som diferente com `data-sound="<nome>"`.
 * Os cards de projeto usam `data-sound="card"`.
 */
const SOUNDS = {
  default: "/click.mp3",
  card: "/card-click.mp3",
};

// Cada som mantém algumas cópias prontas e vai alternando entre elas.
// Clonar na hora do clique atrasaria o som, porque a cópia nova ainda
// precisaria carregar o arquivo; o rodízio também deixa cliques seguidos
// se sobreporem em vez de cortar o som anterior.
const POOL_SIZE = 4;
const VOLUME = 0.35;

export default function ClickSound() {
  useEffect(() => {
    // Quem pediu menos animação fica de fora.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pools = {};
    for (const [name, src] of Object.entries(SOUNDS)) {
      pools[name] = {
        players: Array.from({ length: POOL_SIZE }, () => {
          const audio = new Audio(src);
          audio.preload = "auto";
          audio.volume = VOLUME;
          audio.load();
          return audio;
        }),
        next: 0,
      };
    }

    function onPointerDown(event) {
      const control = event.target.closest("button, a[href], [role='button']");
      if (!control || control.disabled) return;

      const pool = pools[control.dataset.sound] ?? pools.default;
      const audio = pool.players[pool.next];
      pool.next = (pool.next + 1) % pool.players.length;

      audio.currentTime = 0;
      // O navegador bloqueia áudio antes da primeira interação: ignorar é
      // o comportamento certo, o som não é essencial para usar o site.
      audio.play().catch(() => {});
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return null;
}
