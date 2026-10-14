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
      className="text-xs font-mono font-semibold px-2.5 py-1 rounded border border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-500 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors"
    >
      {theme === "dark" ? "LIGHT" : "DARK"}
    </button>
  );
}
