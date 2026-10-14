import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-8 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
      <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
