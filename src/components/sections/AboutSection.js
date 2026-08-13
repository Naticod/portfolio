import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { d } from "@/lib/u";

// "Sobre mim": título de apresentação, bio e foto. O texto e o título ficam
// SEMPRE em branco (nos dois temas), a pedido do design.
//
// A bio é longa demais para o espaço, então a coluna de texto rola dentro de
// si mesma — a página em si continua sem rolagem.
export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <>
      <h1
        data-abs
        style={d({ left: 113, top: 174, fontSize: 49, lineHeight: 66.4 })}
        className="d font-medium tracking-tight text-white max-lg:text-[clamp(1.25rem,5.6vw,1.75rem)] max-lg:leading-snug"
      >
        {t.hero.greetingLine1}{" "}
        {/* A quebra é do design desktop. No mobile a frase flui contínua,
            senão "mas" fica sozinho numa linha. */}
        <br className="max-lg:hidden" />
        {t.hero.greetingLine2}
      </h1>

      <div
        data-abs
        // O h1 começa em 174 e ocupa duas linhas de 66.4 → termina em 306.8.
        // 18px de respiro depois dele = 325.
        style={d({ left: 113, top: 325, width: 850, height: 505 })}
        className="bio-scroll d overflow-y-auto overscroll-contain pr-6 max-lg:mt-4 max-lg:min-h-0 max-lg:flex-1 max-lg:pr-3"
      >
        {t.hero.paragraphs.map((paragraph, index) => {
          const isLast = index === t.hero.paragraphs.length - 1;
          return (
            <p
              key={index}
              // O último parágrafo não leva margem: os 16px sobrando no fim
              // bastavam para o texto passar da área e criar rolagem.
              style={d({ fontSize: 23, lineHeight: 31, marginBottom: isLast ? 0 : 12 })}
              className={`d d-mb font-medium text-white max-lg:mb-3 max-lg:text-[clamp(0.8rem,3.2vw,0.95rem)] max-lg:last:mb-0 ${
                paragraph.italic ? "italic text-white/75" : ""
              }`}
            >
              {paragraph.text}
            </p>
          );
        })}
      </div>

      <div
        data-abs
        style={d({ left: 1042.7, top: 222.7, width: 465, height: 602.3, borderWidth: 3 })}
        // No mobile a foto leva mais espaço que o texto, senão a proporção
        // do arco a deixa estreita demais.
        className="photo-frame photo-arch d d-bw relative overflow-hidden border-foreground bg-surface max-lg:mt-5 max-lg:min-h-0 max-lg:flex-[1.7] max-lg:border-2"
      >
        <Image
          src="/foto.jpg"
          alt="Retrato de Natali"
          fill
          sizes="(max-width: 1023px) 90vw, 465px"
          priority
          className="photo-vintage object-cover"
        />
      </div>
    </>
  );
}
