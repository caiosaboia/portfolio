import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="py-10 sm:py-12 border-b border-zinc-200/60 dark:border-zinc-800/60 last:border-b-0 section-cv"
    >
      <div className="flex items-center gap-3 mb-6">
        <h2
          id={headingId}
          className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 shrink-0"
        >
          {title}
        </h2>
        <div
          className="h-px flex-1 bg-gradient-to-r from-zinc-200/80 to-transparent dark:from-zinc-800/80"
          aria-hidden="true"
        />
      </div>
      {children}
    </section>
  );
}
