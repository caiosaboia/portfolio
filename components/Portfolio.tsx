import React from "react";
import { Content, Locale } from "@/content";
import { Section } from "./Section";

export interface PortfolioProps {
  content: Content;
  lang: Locale;
}

export function Portfolio({ content }: PortfolioProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 antialiased transition-colors">
      <main className="max-w-3xl mx-auto px-5 py-12">
        <header className="mb-10 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            {content.header.name}
          </h1>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            {content.header.headline}
          </p>
        </header>

        <Section id="about" title={content.about.title}>
          <div className="space-y-3">
            {content.about.paragraphs.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Section>

        <Section id="projects" title={content.projects.title}>
          <div className="space-y-4">
            {content.projects.items.map((item, idx) => (
              <article key={idx} className="p-4 rounded-md border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                <p className="text-sm mt-1">{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title={content.skills.title}>
          <div className="space-y-3">
            {content.skills.categories.map((cat, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{cat.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{cat.skills.join(", ")}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title={content.experience.title}>
          <div className="space-y-4">
            {content.experience.items.map((exp, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {exp.role} — {exp.organization}
                </h3>
                <p className="text-xs text-zinc-500">{exp.period}</p>
                <p className="text-sm mt-1">{exp.summary}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title={content.education.title}>
          <div className="space-y-2">
            {content.education.items.map((edu, idx) => (
              <p key={idx} className="text-sm leading-relaxed">
                {edu.text}
              </p>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
