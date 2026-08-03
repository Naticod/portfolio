import { useLanguage } from "@/context/LanguageContext";
import { d } from "@/lib/u";

// Figma (inicio.png): h1 x 113 y 180.3, font ~49, line-height 66.4;
// p1 y 330 font ~32.5; p2 y 400; card x 1042.7–1507.7, y 222.7–825.0.
export default function HomeSection() {
  const { t } = useLanguage();

  return (
    <>
      <h1
        data-abs
        style={d({ left: 113, top: 174, fontSize: 49, lineHeight: 66.4 })}
        className="d font-medium tracking-tight max-lg:text-[clamp(1.25rem,5.6vw,1.75rem)] max-lg:leading-snug"
      >
        {t.hero.greetingLine1}{" "}
        {/* A quebra é do design desktop. No mobile a frase flui contínua,
            senão "mas" fica sozinho numa linha. */}
        <br className="max-lg:hidden" />
        {t.hero.greetingLine2}
      </h1>

      <p
        data-abs
        style={d({ left: 113, top: 324, fontSize: 32.5 })}
        className="d text-foreground/85 max-lg:mt-4 max-lg:text-[clamp(0.8rem,3.4vw,1rem)]"
      >
        {t.hero.text1}
      </p>

      <p
        data-abs
        style={d({ left: 113, top: 394, fontSize: 32.5 })}
        className="d text-foreground/85 max-lg:mt-3 max-lg:text-[clamp(0.8rem,3.4vw,1rem)]"
      >
        {t.hero.text2Prefix}
        <span className="font-bold text-foreground">{t.hero.text2Highlight}</span>
      </p>

      <div
        data-abs
        style={d({ left: 1042.7, top: 222.7, width: 465, height: 602.3, borderRadius: 28, borderWidth: 2.5 })}
        className="d d-br d-bw border-foreground bg-surface max-lg:mt-5 max-lg:min-h-0 max-lg:w-full max-lg:flex-1 max-lg:rounded-2xl max-lg:border-2"
      />
    </>
  );
}
