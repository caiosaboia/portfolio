"use client";

import React, { useEffect, useRef, useState } from "react";

interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-title`;
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={headingId}
      className="py-10 sm:py-12 border-b border-zinc-200/60 dark:border-zinc-800/60 last:border-b-0 section-cv"
    >
      <div className="flex items-center gap-3 mb-6">
        <h2
          id={headingId}
          className={`text-base sm:text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 shrink-0 motion-safe:transition-all motion-safe:duration-500 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-40 -translate-x-1"
          }`}
        >
          {title}
        </h2>
        <div
          className={`h-px flex-1 bg-gradient-to-r from-zinc-200/80 to-transparent dark:from-zinc-800/80 origin-left motion-safe:transition-transform motion-safe:duration-700 ease-out ${
            isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
          aria-hidden="true"
        />
      </div>
      {children}
    </section>
  );
}
