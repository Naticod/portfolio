import { useLanguage } from "@/context/LanguageContext";
import { d } from "@/lib/u";

// Dois currículos: um em português e outro em inglês. A pessoa escolhe qual
// baixar, independentemente do idioma em que está navegando o site.
const CVS = [
  { file: "/cv-natali-neves-PT.pdf", labelKey: "downloadPt", tag: "PT" },
  { file: "/cv-natali-neves-EN.pdf", labelKey: "downloadEn", tag: "EN" },
];

export default function ResumeSection() {
  const { t } = useLanguage();

  return (
    <>
      <h1
        data-abs
        style={d({ left: 113, top: 190, fontSize: 66 })}
        className="d font-medium tracking-tight max-lg:text-[clamp(1.5rem,7vw,2.25rem)]"
      >
        {t.resume.title}
      </h1>

      <p
        data-abs
        style={d({ left: 113, top: 324, fontSize: 30 })}
        className="d text-foreground/85 max-lg:mt-6 max-lg:text-base"
      >
        {t.resume.subtitle}
      </p>

      <div
        data-abs
        style={d({ left: 113, top: 400, gap: 20 })}
        className="d flex max-lg:mt-6 max-lg:flex-col max-lg:items-start max-lg:gap-3"
      >
        {CVS.map((cv) => (
          <a
            key={cv.tag}
            href={cv.file}
            download
            style={d({ fontSize: 24, borderWidth: 1.5, gap: 12 })}
            className="d d-bw inline-flex items-center rounded-full border border-white/70 bg-white/20 px-9 py-3.5 font-bold text-white transition-colors hover:bg-black hover:text-white max-lg:gap-2 max-lg:self-start max-lg:px-6 max-lg:py-3 max-lg:text-base"
          >
            {/* Ícone de download, para o botão se explicar sozinho. */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={d({ width: 20, height: 20 })}
              className="d shrink-0 max-lg:h-4 max-lg:w-4"
              aria-hidden="true"
            >
              <path d="M12 3v12M7 12l5 5 5-5M4 20h16" />
            </svg>
            {t.resume[cv.labelKey]}
          </a>
        ))}
      </div>
    </>
  );
}
