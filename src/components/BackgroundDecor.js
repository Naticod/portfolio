import { StarlightIcon, SparkleIcon } from "@/components/icons";
import { d } from "@/lib/u";

// Figma / inicio.svg: estrela Starlight esq x 21.7 y 113.7 (64x74); linha
// vertical esq x 52.7 y 180 h 349; linha vertical dir x 1856 y 441.3 h 358.4;
// sparkle dir x 1840.7 y 788.3 (39x36). As duas linhas horizontais no topo
// ladeiam a logo (centralizada) e são brancas nos dois temas.
export default function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none hidden lg:block">
      {/* Linhas horizontais brancas no topo, uma de cada lado da logo. */}
      <span
        data-abs
        style={d({ left: 90, top: 59, width: 748, height: 2 })}
        className="d z-10 bg-white"
      />
      <span
        data-abs
        style={d({ right: 90, top: 59, width: 748, height: 2 })}
        className="d z-10 bg-white"
      />

      <StarlightIcon
        data-abs
        style={d({ left: 21.7, top: 113.7, width: 58, height: 66.7 })}
        className="d z-10 text-foreground"
      />
      <span
        data-abs
        style={d({ left: 52.7, top: 200, width: 2, height: 349 })}
        className="d z-0 bg-foreground/85"
      />
      <span
        data-abs
        style={d({ right: 58, top: 441.3, width: 2, height: 358.4 })}
        className="d z-0 bg-foreground/85"
      />
      <SparkleIcon
        data-abs
        style={d({ right: 40.3, top: 788.3, width: 39, height: 36.4 })}
        className="d z-10 text-foreground"
      />
    </div>
  );
}
