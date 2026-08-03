import { Baloo_2, Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import ClickSound from "@/components/ClickSound";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
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
      className={`${baloo.variable} ${quicksand.variable} h-full antialiased`}
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
