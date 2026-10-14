import React from "react";
import { Content, Locale } from "@/content";
import { Header } from "./Header";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { ExperienceItem } from "./ExperienceItem";

export interface PortfolioProps {
  content: Content;
  lang: Locale;
  headerActions?: React.ReactNode;
}

export function Portfolio({ content, lang, headerActions }: PortfolioProps) {
  const skipText = lang === "pt" ? "Pular para o conteudo principal" : "Skip to main content";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 antialiased selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900 motion-safe:transition-colors">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-zinc-900 focus:text-zinc-50 dark:focus:bg-zinc-100 dark:focus:text-zinc-900 focus:ring-2 focus:ring-zinc-400 font-mono text-xs shadow-lg"
      >
        {skipText}
      </a>
      <main id="main-content" className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <Header
          name={content.header.name}
          headline={content.header.headline}
          links={content.header.links}
          actions={headerActions}
        />

        <Section id="about" title={content.about.title}>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base text-pretty max-w-prose">
            {content.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="projects" title={content.projects.title}>
          <div className="space-y-4">
            {content.projects.items.map((item, idx) => (
              <ProjectCard key={idx} project={item} />
            ))}
          </div>
        </Section>

        <Section id="skills" title={content.skills.title}>
          <div className="space-y-6">
            {content.skills.categories.map((cat, idx) => (
              <div key={idx} className="space-y-2.5">
                <h3 className="font-mono text-xs font-medium tracking-normal text-zinc-500 dark:text-zinc-400">
                  {cat.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="font-mono text-xs px-2.5 py-1 rounded-md border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 backdrop-blur-xs motion-safe:transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title={content.experience.title}>
          <div className="space-y-7">
            {content.experience.items.map((exp, idx) => (
              <ExperienceItem key={idx} item={exp} />
            ))}
          </div>
        </Section>

        <Section id="education" title={content.education.title}>
          <div className="space-y-3">
            {content.education.items.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xs"
              >
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed text-pretty max-w-prose">
                  {edu.text}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
