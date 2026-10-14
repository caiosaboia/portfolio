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
    <header className="mb-10 pb-8 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {name}
          </h1>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            {headline}
          </p>
        </div>
        {actions ? <div className="flex items-center gap-2 pt-1">{actions}</div> : null}
      </div>

      <nav aria-label="Social and contact links" className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        {links.map((link) => {
          const isExternal = link.url.startsWith("http");
          return (
            <a
              key={link.url}
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white underline underline-offset-4 transition-colors"
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
