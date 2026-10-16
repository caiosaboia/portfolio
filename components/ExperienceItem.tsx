import React from "react";
import { ExperienceData } from "@/content";

export interface ExperienceItemProps {
  item: ExperienceData;
  isLast?: boolean;
}

export function ExperienceItem({ item, isLast = false }: ExperienceItemProps) {
  return (
    <article className="group relative flex gap-4 sm:gap-6 items-start">
      {/* Timeline track with node and continuous connector line */}
      <div className="relative flex flex-col items-center self-stretch shrink-0 w-4 sm:w-5">
        <div
          className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-zinc-50 dark:ring-zinc-950 group-hover:bg-zinc-500 dark:group-hover:bg-zinc-400 mt-1.5 motion-safe:transition-colors"
          aria-hidden="true"
        />
        {!isLast && (
          <div
            className="w-px flex-1 bg-zinc-200 dark:bg-zinc-800"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Experience details */}
      <div className={`flex-1 ${!isLast ? "pb-8 sm:pb-9" : "pb-1"} space-y-1.5 min-w-0`}>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="text-sm sm:text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {item.role} <span className="text-zinc-400 font-normal" aria-hidden="true">|</span> <span className="text-zinc-600 dark:text-zinc-400 font-normal">{item.organization}</span>
          </h3>
          <time className="tabular-nums font-mono text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100/70 dark:bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-200/60 dark:border-zinc-800/60 shrink-0 self-start sm:self-auto">
            {item.period}
          </time>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty max-w-prose">
          {item.summary}
        </p>
      </div>
    </article>
  );
}
