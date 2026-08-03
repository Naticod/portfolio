import { useLanguage } from "@/context/LanguageContext";
import { d } from "@/lib/u";

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

      <a
        data-abs
        href="/resume.pdf"
        download
        style={d({ left: 113, top: 400, fontSize: 24, borderWidth: 2 })}
        className="d d-bw inline-block rounded-full border-2 border-foreground px-9 py-3.5 font-bold transition-colors hover:bg-foreground hover:text-background max-lg:mt-6 max-lg:self-start max-lg:px-6 max-lg:py-3 max-lg:text-base"
      >
        {t.resume.download}
      </a>
    </>
  );
}
