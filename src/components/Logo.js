import Image from "next/image";
import { d } from "@/lib/u";

// Figma: logo centrada no topo (bbox x 920.7–998, y 42–85.7), ampliada a pedido.
export default function Logo() {
  return (
    <div
      data-abs
      style={d({ top: 30, left: "50%", centerX: true })}
      className="d z-40 max-lg:mb-8 max-lg:flex max-lg:justify-center"
    >
      <Image
        src="/logo-branco.svg"
        alt="Natali Design"
        width={194}
        height={60}
        priority
        // "Logo final - Branco": a marca é sempre branca (nos dois temas),
        // como no inicio.svg. Nada de inverter no modo claro.
        style={d({ height: 58 })}
        className="d w-auto max-lg:h-10"
      />
    </div>
  );
}
