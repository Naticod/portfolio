import { StarlightIcon, LogoMarkIcon } from "@/components/icons";
import { d } from "@/lib/u";

// Início: a tela de abertura do inicio.svg — só a moldura decorada com um campo
// de estrelas Starlight espalhadas. O texto de apresentação e a foto ficam na
// seção "Sobre mim". A logo, as linhas, a estrela do canto e os toggles são
// globais (BackgroundDecor / PortfolioShell).
//
// As posições das estrelas seguem o espalhamento do mockup inicio.svg (que é
// 1440×768), adaptadas para o frame 1920×1024 — são decorativas.
const STARS = [
  { left: 1050, top: 372, size: 88, opacity: "text-white/70" },
  { left: 560, top: 470, size: 52, opacity: "text-white/60" },
  { left: 900, top: 648, size: 30, opacity: "text-white/55" },
  { left: 1360, top: 560, size: 34, opacity: "text-white/45" },
  { left: 470, top: 772, size: 42, opacity: "text-white/55" },
  { left: 720, top: 884, size: 28, opacity: "text-white/45" },
  { left: 1420, top: 838, size: 24, opacity: "text-white/40" },
];

export default function HomeSection() {
  return (
    <>
      {/* Desktop: campo de estrelas espalhado pelo frame. */}
      <div aria-hidden="true" className="max-lg:hidden">
        {STARS.map((s, i) => (
          <StarlightIcon
            key={i}
            data-abs
            style={d({ left: s.left, top: s.top, width: s.size, height: s.size })}
            className={`d ${s.opacity}`}
          />
        ))}
      </div>

      {/* Desktop: símbolo da marca no centro do frame + barra de carregamento. */}
      <div
        data-abs
        aria-hidden="true"
        style={{ ...d({ gap: 30 }), left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        className="d z-10 flex flex-col items-center max-lg:hidden"
      >
        <LogoMarkIcon style={d({ width: 104, height: 104 })} className="d text-foreground" />
        <span style={d({ width: 220, height: 4 })} className="loading-bar d" />
      </div>

      {/* Mobile: mesmo símbolo + barra, centralizados. */}
      <div
        aria-hidden="true"
        className="hidden flex-1 flex-col items-center justify-center gap-6 max-lg:flex"
      >
        <LogoMarkIcon className="h-24 w-24 text-white" />
        <span className="loading-bar h-1 w-44" />
      </div>
    </>
  );
}
