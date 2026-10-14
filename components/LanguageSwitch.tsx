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
      className="text-xs font-mono font-semibold px-2.5 py-1 rounded border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors"
    >
      {label}
    </Link>
  );
}
