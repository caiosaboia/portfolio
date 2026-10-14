import React from "react";
import { ProjectCardData } from "@/content";

interface ProjectCardProps {
  project: ProjectCardData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 p-5 sm:p-6 backdrop-blur-xs shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] motion-safe:transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs space-y-3.5">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
        <h3 className="text-base sm:text-lg font-mono font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
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
            className="group/link inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded-xs motion-safe:transition-colors py-0.5"
          >
            <span>{link.label}</span>
            <svg
              className="size-3 text-zinc-400 dark:text-zinc-500 group-hover/link:text-zinc-900 dark:group-hover/link:text-zinc-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-safe:transition-transform duration-150"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        ))}
      </div>
    </article>
  );
}
