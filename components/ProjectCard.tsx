import React from "react";
import { ProjectCardData } from "@/content";

interface ProjectCardProps {
  project: ProjectCardData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 p-5 sm:p-6 backdrop-blur-xs motion-safe:transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs space-y-3.5">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
        <h3 className="text-base sm:text-lg font-mono font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        <span className="self-start sm:self-auto tabular-nums font-mono text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100/90 dark:bg-zinc-800/80 px-2.5 py-0.5 rounded-full border border-zinc-200/60 dark:border-zinc-700/60">
          {project.highlight}
        </span>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty max-w-prose">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-1.5 pt-0.5" aria-label="Project technologies">
        {project.tags.map((tag, idx) => (
          <li
            key={idx}
            className="font-mono text-xs px-2 py-0.5 rounded-md bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/40"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="pt-3 flex flex-wrap gap-4 border-t border-zinc-100 dark:border-zinc-800/60">
        {project.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded-xs motion-safe:transition-colors py-0.5"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
