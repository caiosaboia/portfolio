import React from "react";
import { SocialLink } from "@/content";

interface HeaderProps {
  name: string;
  headline: string;
  links: SocialLink[];
  actions?: React.ReactNode;
}

export function Header({ name, headline, links, actions }: HeaderProps) {
  return (
    <header className="mb-12 pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 text-balance">
            {name}
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty">
            {headline}
          </p>
        </div>
        {actions ? (
          <div className="flex items-center gap-2 self-end sm:self-start shrink-0">
            {actions}
          </div>
        ) : null}
      </div>

      <nav
        aria-label="Social and contact links"
        className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5"
      >
        {links.map((link) => {
          const isExternal = link.url.startsWith("http");
          return (
            <a
              key={link.url}
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group/nav inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 motion-safe:transition-colors duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded-xs py-0.5"
            >
              <span>{link.label}</span>
              {isExternal ? (
                <svg
                  className="size-3 text-zinc-400 dark:text-zinc-500 group-hover/nav:text-zinc-900 dark:group-hover/nav:text-zinc-100 group-hover/nav:translate-x-0.5 group-hover/nav:-translate-y-0.5 motion-safe:transition-transform duration-150"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              ) : null}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
