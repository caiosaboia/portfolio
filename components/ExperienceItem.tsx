import React from "react";
import { ExperienceData } from "@/content";

interface ExperienceItemProps {
  item: ExperienceData;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="group relative pl-6 sm:pl-7 border-l border-zinc-200 dark:border-zinc-800 space-y-1.5 motion-safe:transition-colors">
      <div
        className="absolute -left-[4.5px] top-2 size-2 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-zinc-50 dark:ring-zinc-950 group-hover:bg-zinc-500 dark:group-hover:bg-zinc-400 motion-safe:transition-colors"
        aria-hidden="true"
      />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-sm sm:text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {item.role} <span className="text-zinc-400 font-normal" aria-hidden="true">|</span> <span className="text-zinc-600 dark:text-zinc-400 font-normal">{item.organization}</span>
        </h3>
        <time className="tabular-nums font-mono text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100/70 dark:bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-200/60 dark:border-zinc-800/60">
          {item.period}
        </time>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty max-w-prose">
        {item.summary}
      </p>
    </article>
  );
}
