import React from "react";
import { ExperienceData } from "@/content";

interface ExperienceItemProps {
  item: ExperienceData;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="space-y-1.5 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 py-1 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
          {item.role} <span className="text-zinc-400 font-normal" aria-hidden="true">|</span> {item.organization}
        </h3>
        <time className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          {item.period}
        </time>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {item.summary}
      </p>
    </article>
  );
}
