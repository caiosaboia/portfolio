import React from "react";
import { Content, Locale } from "@/content";
import { Header } from "./Header";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { ExperienceItem } from "./ExperienceItem";
import { ScrollCraftProgress } from "./ScrollCraftProgress";
import { ScrollSpyNav } from "./ScrollSpyNav";
import { ScrollReveal } from "./ScrollReveal";
import { AmbientLighting } from "./AmbientLighting";

export interface PortfolioProps {
  content: Content;
  lang: Locale;
  headerActions?: React.ReactNode;
}

export function Portfolio({ content, lang, headerActions }: PortfolioProps) {
  const skipText = lang === "pt" ? "Pular para o conteúdo principal" : "Skip to main content";

  const sectionLabels = {
    about: content.about.title,
    projects: content.projects.title,
    skills: content.skills.title,
    experience: content.experience.title,
    education: content.education.title,
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 antialiased selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900 motion-safe:transition-colors overflow-x-clip">
      <ScrollCraftProgress />
      <AmbientLighting />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-zinc-900 focus:text-zinc-50 dark:focus:bg-zinc-100 dark:focus:text-zinc-900 focus:ring-2 focus:ring-zinc-400 font-mono text-xs shadow-lg"
      >
        {skipText}
      </a>
      <main id="main-content" className="relative max-w-3xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-32 sm:pb-40">
        <Header
          name={content.header.name}
          headline={content.header.headline}
          tags={content.header.tags}
          links={content.header.links}
          actions={headerActions}
        />

        <Section id="about" title={content.about.title}>
          <ScrollReveal>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base text-pretty max-w-prose">
              {content.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </Section>

        <Section id="projects" title={content.projects.title}>
          <div className="space-y-4">
            {content.projects.items.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <ProjectCard project={item} />
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section id="skills" title={content.skills.title}>
          <div className="space-y-6">
            {content.skills.categories.map((cat, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="space-y-2.5">
                  <h3 className="font-mono text-xs font-medium tracking-normal text-zinc-500 dark:text-zinc-400">
                    {cat.name}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="font-mono text-xs px-2.5 py-1 rounded-md border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 backdrop-blur-xs motion-safe:transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-white dark:hover:bg-zinc-900 shadow-2xs"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section id="experience" title={content.experience.title}>
          <div className="flex flex-col">
            {content.experience.items.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 70}>
                <ExperienceItem
                  item={exp}
                  isLast={idx === content.experience.items.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section id="education" title={content.education.title}>
          <div className="space-y-3">
            {content.education.items.map((edu, idx) => (
              <ScrollReveal key={idx} delay={idx * 70}>
                <div className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] motion-safe:transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed text-pretty max-w-prose">
                    {edu.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </main>

      <ScrollSpyNav lang={lang} sectionLabels={sectionLabels} />
    </div>
  );
}
