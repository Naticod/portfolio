import Image from "next/image";
import { SparkIcon, ClockIcon, LayersIcon } from "@/components/icons";
import { d } from "@/lib/u";

// O painel do modal tem 1860 de largura, com 60 de recuo de cada lado.
// Cada bloco é dividido em duas colunas: título à esquerda, texto à direita.
const LEFT_COLUMN = 620;
const COLUMN_GAP = 90;

const STAT_ICONS = { clock: ClockIcon, layers: LayersIcon };

/** Coluna da esquerda: rótulo com brilho + título da seção. */
function SectionAside({ label, heading, dark }) {
  return (
    <div>
      {label && (
        <p
          style={d({ fontSize: 15, marginBottom: 12, gap: 8 })}
          className={`d d-mb flex items-center font-bold uppercase tracking-[0.14em] max-lg:mb-1.5 max-lg:gap-1.5 max-lg:text-[0.65rem] ${
            dark ? "text-[#f5f2ea]/50" : "text-foreground/45"
          }`}
        >
          <SparkIcon
            style={d({ width: 13, height: 13 })}
            className="d shrink-0 max-lg:h-2.5 max-lg:w-2.5"
          />
          {label}
        </p>
      )}
      <h3
        style={d({ fontSize: 32, lineHeight: 42 })}
        className={`d font-bold tracking-tight max-lg:text-lg max-lg:leading-snug ${
          dark ? "text-[#f5f2ea]" : ""
        }`}
      >
        {heading}
      </h3>
    </div>
  );
}

/** Grade de duas colunas usada por todos os blocos do case. */
function TwoColumns({ children }) {
  return (
    <div
      style={d({ gap: COLUMN_GAP })}
      className="d grid max-lg:flex max-lg:flex-col max-lg:gap-3"
      // A coluna da esquerda tem largura fixa; a direita ocupa o resto.
      // No mobile isso vira uma coluna só (max-lg:flex acima).
      data-two-columns
    >
      {children}
    </div>
  );
}

function Paragraph({ children, last, dark }) {
  return (
    <p
      style={d({ fontSize: 19, lineHeight: 30, marginBottom: last ? 0 : 14 })}
      className={`d d-mb font-medium max-lg:mb-3 max-lg:text-sm max-lg:leading-relaxed ${
        dark ? "text-[#f5f2ea]/70" : "text-foreground/90"
      }`}
    >
      {children}
    </p>
  );
}

/** Bloco de texto: título à esquerda, conteúdo à direita. */
function TextSection({ section }) {
  return (
    <section>
      <TwoColumns>
        <SectionAside label={section.label} heading={section.heading} />
        <div>
          {section.paragraphs?.map((text, index) => (
            <Paragraph
              key={index}
              last={index === section.paragraphs.length - 1 && !section.list}
            >
              {text}
            </Paragraph>
          ))}

          {section.list && (
            <ul
              style={d({ marginTop: section.paragraphs ? 22 : 0 })}
              className="d d-mt max-lg:mt-2"
            >
              {section.list.map((item, index) => (
                <li
                  key={index}
                  style={d({ fontSize: 19, lineHeight: 30, marginBottom: 12, paddingLeft: 24 })}
                  className="d d-mb d-pl relative font-medium text-foreground/90 max-lg:mb-2.5 max-lg:pl-4 max-lg:text-sm max-lg:leading-relaxed"
                >
                  {/* `left: 0` precisa vir do d(): a classe "d" define
                      left:auto e venceria a classe "left-0" do Tailwind,
                      jogando o ponto em cima da primeira letra. */}
                  <span
                    aria-hidden="true"
                    style={d({ width: 6, height: 6, top: 12, left: 0 })}
                    className="d absolute rounded-full bg-foreground/60 max-lg:top-2 max-lg:h-1.5 max-lg:w-1.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </TwoColumns>
    </section>
  );
}

/** Imagem com legenda embaixo. Usa as dimensões reais do arquivo (via
    `section.width`/`height`) para não estourar largura maior que a
    própria imagem — evita ela ficar "grandona" e borrada. */
function ImageSection({ section, alt }) {
  return (
    <figure className="flex flex-col items-center">
      <div
        style={d({ borderRadius: 20, width: section.width })}
        className="d d-br relative overflow-hidden rounded-2xl border border-foreground/15 max-lg:w-full"
      >
        <Image
          src={section.src}
          alt={alt}
          width={section.width}
          height={section.height}
          sizes="(max-width: 1023px) 90vw, 838px"
          className="h-auto w-full"
        />
      </div>
      {section.caption && (
        <figcaption
          style={d({ fontSize: 17, marginTop: 14, width: section.width })}
          className="d d-mt font-medium text-foreground/55 max-lg:mt-2 max-lg:w-full max-lg:text-xs"
        >
          {section.caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Galeria de telas do produto. Sem `section.columns`, empilha uma
    embaixo da outra em largura total (usado em "Todas as telas"). Com
    `section.columns` (ex.: 4), vira grade — 7 itens numa grade de 4
    colunas formam sozinhos 2 fileiras (4 e depois 3), sem precisar
    dividir a lista manualmente. */
function ScreensSection({ section, alt }) {
  const isGrid = Boolean(section.columns);

  return (
    <section>
      <h3
        style={d({ fontSize: 32, lineHeight: 42, marginBottom: 40 })}
        className="d d-mb font-bold tracking-tight max-lg:mb-6 max-lg:text-lg max-lg:leading-snug"
      >
        {section.heading}
      </h3>
      <div
        style={d({ gap: isGrid ? 32 : 56 })}
        className={`d max-lg:gap-6 ${
          isGrid
            ? // No mobile são 2 colunas; no desktop, o que a seção pedir
              // (2, 3 ou 4 conforme o número de imagens).
              `grid grid-cols-2 ${
                section.columns === 2
                  ? "lg:grid-cols-2"
                  : section.columns === 3
                    ? "lg:grid-cols-3"
                    : "lg:grid-cols-4"
              }`
            : "flex flex-col max-lg:gap-8"
        }`}
      >
        {section.items.map((item, index) => (
          <figure key={index}>
            <div
              style={d({ borderRadius: isGrid ? 14 : 20 })}
              className="d d-br relative overflow-hidden rounded-2xl border border-foreground/15"
            >
              <Image
                src={item.src}
                alt={item.caption ?? alt}
                width={item.width}
                height={item.height}
                sizes={
                  isGrid
                    ? "(max-width: 1023px) 45vw, 420px"
                    : "(max-width: 1023px) 90vw, 1740px"
                }
                className="h-auto w-full"
              />
            </div>
            {item.caption && (
              <figcaption
                style={d({ fontSize: isGrid ? 15 : 17, marginTop: isGrid ? 10 : 14 })}
                className="d d-mt font-medium text-foreground/55 max-lg:mt-2 max-lg:text-xs"
              >
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

/** Faixa clara — onde entram as telas de wireframe. */
function GallerySection({ section }) {
  return (
    <section
      style={d({ borderRadius: 20, padding: 48 })}
      className="d-p d-br rounded-2xl bg-[#F7F7F7] max-lg:p-6"
    >
      <TwoColumns>
        <SectionAside label={section.label} heading={section.heading} />
        <div>
          {section.paragraphs?.map((text, index) => (
            <p
              key={index}
              style={d({ fontSize: 19, lineHeight: 30 })}
              className="d font-medium text-[#1a1a1a]/75 max-lg:text-sm"
            >
              {text}
            </p>
          ))}
        </div>
      </TwoColumns>
      <div
        style={d({ height: 240, marginTop: 36, borderRadius: 16 })}
        className="d d-mt d-br flex items-center justify-center rounded-xl border border-dashed border-[#1a1a1a]/25 max-lg:mt-5 max-lg:h-32"
      >
        <span
          style={d({ fontSize: 18 })}
          className="d font-medium text-[#1a1a1a]/40 max-lg:text-xs"
        >
          {section.placeholder}
        </span>
      </div>
    </section>
  );
}

/** Lista de links para material externo (Medium etc.). Cada link abre em
    nova aba, protegido com noopener. */
function LinksSection({ section }) {
  return (
    <section>
      <TwoColumns>
        <SectionAside label={section.label} heading={section.heading} />
        <ul style={d({ gap: 14 })} className="d flex flex-col max-lg:gap-2.5">
          {section.links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={d({ fontSize: 19, gap: 12, paddingBottom: 14 })}
                className="d d-pb group flex items-center border-b border-foreground/15 font-medium text-foreground/90 transition-colors hover:text-foreground max-lg:pb-2.5 max-lg:text-sm"
              >
                {link.label}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={d({ width: 18, height: 18 })}
                  className="d shrink-0 text-foreground/40 transition-colors group-hover:text-foreground max-lg:h-4 max-lg:w-4"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </TwoColumns>
    </section>
  );
}

/** Faixa preta sólida com os números e ícones de impacto. */
function ResultsSection({ section }) {
  return (
    <section
      style={d({ borderRadius: 20, padding: 48 })}
      className="d-p d-br rounded-2xl bg-[#141414] max-lg:p-6"
    >
      <TwoColumns>
        <SectionAside label={section.label} heading={section.heading} dark />
        <div>
          <dl
            style={d({ gap: 36 })}
            className="d grid grid-cols-2 max-lg:gap-5"
          >
            {section.stats.map((stat, index) => {
              const Icon = STAT_ICONS[stat.icon];
              return (
                <div key={index}>
                  {Icon && (
                    <Icon
                      style={d({ width: 30, height: 30, marginBottom: 10 })}
                      className="d d-mb text-[#f5f2ea]/80 max-lg:mb-1 max-lg:h-5 max-lg:w-5"
                    />
                  )}
                  <dt
                    style={d({ fontSize: 46, lineHeight: 54 })}
                    className="d font-bold tracking-tight text-[#f5f2ea] max-lg:text-2xl max-lg:leading-tight"
                  >
                    {stat.value}
                  </dt>
                  <dd
                    style={d({ fontSize: 17, lineHeight: 25, marginTop: 8 })}
                    className="d d-mt font-medium text-[#f5f2ea]/65 max-lg:mt-1 max-lg:text-xs"
                  >
                    {stat.label}
                  </dd>
                </div>
              );
            })}
          </dl>

          {section.paragraphs?.map((text, index) => (
            <p
              key={index}
              style={d({ fontSize: 18, lineHeight: 29, marginTop: 40 })}
              className="d d-mt font-medium text-[#f5f2ea]/65 max-lg:mt-5 max-lg:text-sm"
            >
              {text}
            </p>
          ))}
        </div>
      </TwoColumns>
    </section>
  );
}

const RENDERERS = {
  text: TextSection,
  image: ImageSection,
  gallery: GallerySection,
  results: ResultsSection,
  screens: ScreensSection,
  links: LinksSection,
};

/** Abertura: frase-síntese e ficha técnica (os números ficam em Resultados). */
function CaseIntro({ project }) {
  const meta = project.meta;
  const fields = meta ? [meta.role, meta.year, meta.focus].filter(Boolean) : [];

  return (
    <>
      {project.summary && (
        <p
          style={d({ fontSize: 26, lineHeight: 38, marginTop: 20, width: 1240 })}
          className="d d-mt font-medium text-foreground/80 max-lg:mt-3 max-lg:w-full max-lg:text-base max-lg:leading-relaxed"
        >
          {project.summary}
        </p>
      )}

      {fields.length > 0 && (
        // Linha grossa, acompanhando o texto: preta no tema claro,
        // branca no escuro — igual às divisórias do resto do site.
        <dl
          style={d({ marginTop: 44, paddingBottom: 40, gap: 120 })}
          className="d d-mt d-pb flex border-b-[3px] border-foreground max-lg:mt-5 max-lg:flex-col max-lg:gap-4 max-lg:pb-5"
        >
          {fields.map((field, index) => (
            <div key={index}>
              <dt
                style={d({ fontSize: 15, marginBottom: 10 })}
                className="d d-mb font-bold uppercase tracking-[0.14em] text-foreground/45 max-lg:mb-1 max-lg:text-[0.65rem]"
              >
                {field.label}
              </dt>
              <dd
                style={d({ fontSize: 19, lineHeight: 28, gap: 12 })}
                className="d flex flex-wrap items-center font-medium max-lg:gap-2 max-lg:text-sm"
              >
                {/* Vários itens (o "Foco") ficam na mesma linha, separados
                    por um ponto. Um item só é texto simples. */}
                {Array.isArray(field.value)
                  ? field.value.map((item, itemIndex) => (
                      <span key={itemIndex} className="flex items-center gap-3 max-lg:gap-2">
                        {itemIndex > 0 && (
                          <span
                            aria-hidden="true"
                            style={d({ width: 5, height: 5 })}
                            className="d rounded-full bg-foreground/35 max-lg:h-1 max-lg:w-1"
                          />
                        )}
                        {item}
                      </span>
                    ))
                  : field.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
}

export default function CaseContent({ project, outro }) {
  if (!project.sections) return null;

  return (
    <>
      <CaseIntro project={project} />

      <div style={d({ marginTop: 56 })} className="d d-mt max-lg:mt-7">
        {project.sections.map((section, index) => {
          const Renderer = RENDERERS[section.type];
          if (!Renderer) return null;
          return (
            <div key={index} style={d({ marginBottom: 64 })} className="d d-mb max-lg:mb-8">
              <Renderer section={section} alt={project.label} />
            </div>
          );
        })}
      </div>

      {/* Fecho do case: convite para conversar. Em March (fonte de display),
          38px, no lilás #A989AB — mesmo texto em todos os projetos. */}
      {outro && (
        <p
          style={d({ fontSize: 38, lineHeight: 50, marginTop: 8, paddingBottom: 8 })}
          className="d d-mt d-pb font-display text-[#a989ab] max-lg:text-lg max-lg:leading-snug"
        >
          {outro}
        </p>
      )}
    </>
  );
}
