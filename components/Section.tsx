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
      className="py-10 sm:py-12 border-b border-zinc-200/70 dark:border-zinc-800/70 last:border-b-0"
    >
      <h2
        id={headingId}
        className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
