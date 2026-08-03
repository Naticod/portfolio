import { StarIcon, SparkleIcon } from "@/components/icons";
import { d } from "@/lib/u";

// Figma: estrela esq x 21.7 y 113.7 (64x74); linha esq x 52.7 y 180 h 349;
// linha dir x 1856 y 441.3 h 358.4; sparkle dir x 1840.7 y 788.3 (39x36).
export default function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none hidden lg:block">
      <StarIcon
        data-abs
        style={d({ left: 21.7, top: 113.7, width: 64.3, height: 73.6 })}
        className="d z-10 text-foreground"
      />
      <span
        data-abs
        style={d({ left: 52.7, top: 180, width: 2, height: 349 })}
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
