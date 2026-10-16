import React from "react";
import Link from "next/link";
import { Locale } from "@/content";

interface LanguageSwitchProps {
  currentLocale: Locale;
  label: string;
  ariaLabel: string;
}

export function LanguageSwitch({
  currentLocale,
  label,
  ariaLabel,
}: LanguageSwitchProps) {
  const targetLocale: Locale = currentLocale === "pt" ? "en" : "pt";
  const targetHref = `/${targetLocale}/`;

  return (
    <Link
      href={targetHref}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center text-xs font-mono font-semibold px-3 py-1.5 min-h-[36px] rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 shadow-2xs shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 motion-safe:transition-all motion-safe:active:scale-[0.97] duration-150"
    >
      {label}
    </Link>
  );
}
