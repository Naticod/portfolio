import { useLanguage } from "@/context/LanguageContext";
import { d } from "@/lib/u";

// Figma (Contatos.png): h1 x 112.3 y 205 font ~66;
// itens: quadrado x 268 (50x45), texto x 345.3, primeiro item y 310.7, pitch 92.
export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <>
      <h1
        data-abs
        style={d({ left: 112.3, top: 190, fontSize: 66 })}
        className="d font-medium tracking-tight max-lg:text-[clamp(1.5rem,7vw,2.25rem)]"
      >
        {t.contact.title}
      </h1>

      <ul data-abs style={d({ left: 268, top: 310.7 })} className="d max-lg:mt-6">
        {t.contact.items.map((item) => (
          <li
            key={item}
            // Figma: item 45 de altura, próximo item 92 abaixo.
            // No mobile o espaçamento pedido é de 18px entre os retângulos.
            style={d({ height: 45, marginBottom: 47, gap: 27 })}
            className="d d-mb flex items-center max-lg:mb-[18px] max-lg:gap-4 max-lg:last:mb-0"
          >
            <span
              style={d({ width: 50, height: 45, borderRadius: 10 })}
              className="d d-br flex-shrink-0 rounded-md bg-foreground max-lg:h-8 max-lg:w-9"
            />
            <span style={d({ fontSize: 26 })} className="d max-lg:text-base">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
