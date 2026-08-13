import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import ClickSound from "@/components/ClickSound";

// March (display) para títulos e botões; Italiana para o corpo de texto.
// Ambas são fontes locais, servidas do próprio domínio. (A Fragille foi
// descartada por não ter acentos.)
const march = localFont({
  src: "./fonts/March-Regular.otf",
  variable: "--font-march",
  display: "swap",
});

const italiana = localFont({
  src: "./fonts/Italiana-Regular.ttf",
  variable: "--font-italiana",
  display: "swap",
});

export const metadata = {
  title: "Natali Design — Product Designer UX/UI",
  description:
    "Portfólio de Natali, Product Designer UX/UI pleno. Projetos, processo e contato.",
  openGraph: {
    title: "Natali Design — Product Designer UX/UI",
    description:
      "Portfólio de Natali, Product Designer UX/UI pleno. Projetos, processo e contato.",
    type: "website",
  },
};

const themeInitScript = `
try {
  var stored = localStorage.getItem('theme');
  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (theme === 'dark') document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${march.variable} ${italiana.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-portfolio">
        <ThemeProvider>
          <LanguageProvider>
            <ClickSound />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
