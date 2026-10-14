import React from "react";
import { ProjectCardData } from "@/content";

interface ProjectCardProps {
  project: ProjectCardData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 space-y-3 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono">
          {project.title}
        </h3>
        <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-200/60 dark:border-zinc-700/60">
          {project.highlight}
        </span>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Project technologies">
        {project.tags.map((tag, idx) => (
          <li
            key={idx}
            className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="pt-2 flex flex-wrap gap-4 border-t border-zinc-100 dark:border-zinc-800/60">
        {project.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
