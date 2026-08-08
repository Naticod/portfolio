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
        src="/logo.svg"
        alt="Natali Design"
        width={2004}
        height={448}
        priority
        // Esta versão da marca é horizontal (proporção ~4,5:1), então a altura
        // é menor que a da versão empilhada para a largura não dominar o topo.
        style={d({ height: 58 })}
        className="d w-auto dark:invert max-lg:h-10"
      />
    </div>
  );
}
