import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { resolveTheme, antiFlashScript, THEME_KEY } from "../lib/theme";
import { ThemeToggle } from "../components/ThemeToggle";
import { Portfolio } from "../components/Portfolio";
import { ptContent } from "../content/pt";
import { enContent } from "../content/en";

describe("T8 — Theme Resolution & ThemeToggle Component", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  describe("resolveTheme function adhering to AC-04.1", () => {
    it("returns system preference when no stored theme exists", () => {
      expect(resolveTheme(null, true)).toBe("dark");
      expect(resolveTheme(null, false)).toBe("light");
    });

    it("respects stored theme over system preference", () => {
      expect(resolveTheme("light", true)).toBe("light");
      expect(resolveTheme("dark", false)).toBe("dark");
    });

    it("falls back to system preference on invalid stored values", () => {
      expect(resolveTheme("invalid", true)).toBe("dark");
      expect(resolveTheme("invalid", false)).toBe("light");
    });
  });

  describe("ThemeToggle component adhering to AC-04.2 and AC-04.4", () => {
    it("exposes accessible name provided by locale", () => {
      render(<ThemeToggle ariaLabel="Alternar tema claro e escuro" />);
      const btn = screen.getByRole("button", {
        name: "Alternar tema claro e escuro",
      });
      expect(btn).toBeInTheDocument();
    });

    it("toggles dark class on documentElement and writes to localStorage", () => {
      render(<ThemeToggle ariaLabel="Toggle theme" />);
      const btn = screen.getByRole("button", { name: "Toggle theme" });

      // Initial state in jsdom (no matchMedia dark): light
      expect(document.documentElement.classList.contains("dark")).toBe(false);

      // Click to switch to dark
      fireEvent.click(btn);
      expect(document.documentElement.classList.contains("dark")).toBe(true);
      expect(localStorage.getItem(THEME_KEY)).toBe("dark");

      // Click to switch back to light
      fireEvent.click(btn);
      expect(document.documentElement.classList.contains("dark")).toBe(false);
      expect(localStorage.getItem(THEME_KEY)).toBe("light");
    });
  });

  describe("antiFlashScript adhering to AC-04.3", () => {
    it("adds dark class when stored theme is dark", () => {
      localStorage.setItem(THEME_KEY, "dark");
      eval(antiFlashScript);
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("removes dark class when stored theme is light", () => {
      document.documentElement.classList.add("dark");
      localStorage.setItem(THEME_KEY, "light");
      eval(antiFlashScript);
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });
  });

  describe("Rendered markup emoji check adhering to AC-11.4", () => {
    const emojiRegex = /\p{Extended_Pictographic}/u;

    it("contains no emojis in rendered PT markup", () => {
      const { container } = render(
        <Portfolio
          content={ptContent}
          lang="pt"
          headerActions={<ThemeToggle ariaLabel="Alternar tema" />}
        />
      );
      expect(emojiRegex.test(container.textContent || "")).toBe(false);
    });

    it("contains no emojis in rendered EN markup", () => {
      const { container } = render(
        <Portfolio
          content={enContent}
          lang="en"
          headerActions={<ThemeToggle ariaLabel="Toggle theme" />}
        />
      );
      expect(emojiRegex.test(container.textContent || "")).toBe(false);
    });
  });
});
