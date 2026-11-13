"use client";

import React, { useEffect, useState } from "react";
import { Locale } from "@/content";

interface ScrollSpyNavProps {
  lang: Locale;
  sectionLabels: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    education: string;
  };
}

const SECTION_IDS = ["about", "projects", "skills", "experience", "education"] as const;

export function ScrollSpyNav({ lang, sectionLabels }: ScrollSpyNavProps) {
  const [activeId, setActiveId] = useState<string>("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 180);

      // Check if page is scrollable and user has scrolled near or to the bottom
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const isScrollable = scrollHeight > clientHeight;
      const isAtBottom = isScrollable && clientHeight + window.scrollY >= scrollHeight - 60;

      if (isAtBottom) {
        setActiveId("education");
        return;
      }

      const scrollPosition = window.scrollY + 200;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTION_IDS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(SECTION_IDS[i]);
          return;
        }
      }
      setActiveId("about");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navAriaLabel =
    lang === "pt" ? "Navegação rápida por seções" : "Quick section navigation";

  return (
    <nav
      aria-label={navAriaLabel}
      className={`fixed bottom-5 inset-x-0 z-40 flex justify-center pointer-events-none transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 p-1 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md shadow-lg shadow-zinc-900/5 dark:shadow-black/30">
        {SECTION_IDS.map((id) => {
          const isActive = activeId === id;
          const label = sectionLabels[id];

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={scrollTo(id)}
              className={`px-2.5 sm:px-3 py-1 text-xs font-mono rounded-full motion-safe:transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 ${
                isActive
                  ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-semibold shadow-xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70"
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
