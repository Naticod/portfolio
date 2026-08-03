"use client";

import { useState, useTransition } from "react";
import Logo from "@/components/Logo";
import NavPills from "@/components/NavPills";
import MobileNav from "@/components/MobileNav";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import BackgroundDecor from "@/components/BackgroundDecor";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import ContactSection from "@/components/sections/ContactSection";
import ResumeSection from "@/components/sections/ResumeSection";

const SECTION_COMPONENTS = {
  home: HomeSection,
  projects: ProjectsSection,
  whatIDo: WhatIDoSection,
  contact: ContactSection,
  resume: ResumeSection,
};

const TRANSITION_MS = 220;

export default function PortfolioShell() {
  const [active, setActive] = useState("home");
  const [displayed, setDisplayed] = useState("home");
  const [isPending, startTransition] = useTransition();
  const [isBlurred, setIsBlurred] = useState(false);

  function handleNavigate(section) {
    if (section === active) return;
    setActive(section);
    setIsBlurred(true);
    window.setTimeout(() => {
      startTransition(() => setDisplayed(section));
      window.setTimeout(() => setIsBlurred(false), TRANSITION_MS);
    }, TRANSITION_MS);
  }

  const ActiveSection = SECTION_COMPONENTS[displayed];

  return (
    <main className="frame">
      <BackgroundDecor />
      <Logo />
      <NavPills active={active} onNavigate={handleNavigate} />
      <MobileNav active={active} onNavigate={handleNavigate} />
      <ThemeToggle />
      <LanguageToggle />
      <div
        className={`section-layer transition-[filter,opacity] duration-200 ease-out ${
          isBlurred || isPending ? "opacity-0 blur-md" : "opacity-100 blur-0"
        }`}
      >
        <ActiveSection />
      </div>
    </main>
  );
}
