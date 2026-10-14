import React from "react";
import { Content, Locale } from "@/content";
import { Header } from "./Header";
import { Section } from "./Section";

export interface PortfolioProps {
  content: Content;
  lang: Locale;
  headerActions?: React.ReactNode;
}

export function Portfolio({ content, headerActions }: PortfolioProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 antialiased transition-colors">
      <main className="max-w-3xl mx-auto px-5 py-12">
        <Header
          name={content.header.name}
          headline={content.header.headline}
          links={content.header.links}
          actions={headerActions}
        />

        <Section id="about" title={content.about.title}>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
            {content.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
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
          <div className="space-y-5">
            {content.skills.categories.map((cat, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-xs">
                  {cat.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-mono"
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
