"use client";

import React, { useSyncExternalStore } from "react";
import { THEME_KEY, resolveTheme, Theme } from "@/lib/theme";

interface ThemeToggleProps {
  ariaLabel: string;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark =
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  return resolveTheme(stored, prefersDark);
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeToggle({ ariaLabel }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);

    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center text-xs font-mono font-semibold px-3 py-1.5 min-h-[36px] rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 motion-safe:transition-all duration-150 cursor-pointer"
    >
      {theme === "dark" ? "LIGHT" : "DARK"}
    </button>
  );
}
