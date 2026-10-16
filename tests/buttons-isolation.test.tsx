import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { THEME_KEY } from "@/lib/theme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Portfolio } from "@/components/Portfolio";
import { ptContent } from "@/content/pt";
import { enContent } from "@/content/en";

describe("TLC Spec-Driven — Buttons Isolation & Independence (PORT-03 & PORT-04)", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("ensures LanguageSwitch acts individually: changes only target language route without mutating theme state or localStorage", () => {
    // Setup initial dark theme
    localStorage.setItem(THEME_KEY, "dark");
    document.documentElement.classList.add("dark");

    const { unmount } = render(
      <LanguageSwitch
        currentLocale="pt"
        label="EN"
        ariaLabel="Switch to English"
      />
    );

    const langLink = screen.getByRole("link", { name: "Switch to English" });
    expect(langLink).toBeInTheDocument();
    expect(langLink.getAttribute("href")).toMatch(/^\/en\/?$/);

    // Clicking the language switch does not mutate theme in localStorage or documentElement
    fireEvent.click(langLink);

    expect(localStorage.getItem(THEME_KEY)).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    unmount();

    // Verify reverse locale (en -> pt)
    render(
      <LanguageSwitch
        currentLocale="en"
        label="PT"
        ariaLabel="Mudar para Portugues"
      />
    );

    const ptLink = screen.getByRole("link", { name: "Mudar para Portugues" });
    expect(ptLink.getAttribute("href")).toMatch(/^\/pt\/?$/);
    fireEvent.click(ptLink);

    expect(localStorage.getItem(THEME_KEY)).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("ensures ThemeToggle acts individually: toggles only color theme without changing page content, language links, or routes", () => {
    const { container } = render(
      <Portfolio
        content={ptContent}
        lang="pt"
        headerActions={
          <>
            <ThemeToggle ariaLabel="Alternar tema claro e escuro" />
            <LanguageSwitch
              currentLocale="pt"
              label="EN"
              ariaLabel="Switch to English"
            />
          </>
        }
      />
    );

    const themeBtn = screen.getByRole("button", {
      name: "Alternar tema claro e escuro",
    });
    const langLink = screen.getByRole("link", { name: "Switch to English" });

    // Initial language invariants
    expect(langLink.getAttribute("href")).toMatch(/^\/en\/?$/);
    expect(container.querySelector("h1")?.textContent).toBe("Caio Saboia");
    expect(container.querySelector("h2")?.textContent).toBe("Sobre");

    // Toggle theme to dark
    fireEvent.click(themeBtn);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem(THEME_KEY)).toBe("dark");

    // Language and content remain strictly untouched
    expect(langLink.getAttribute("href")).toMatch(/^\/en\/?$/);
    expect(container.querySelector("h1")?.textContent).toBe("Caio Saboia");
    expect(container.querySelector("h2")?.textContent).toBe("Sobre");

    // Toggle theme back to light
    fireEvent.click(themeBtn);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem(THEME_KEY)).toBe("light");

    // Language and content still remain strictly untouched
    expect(langLink.getAttribute("href")).toMatch(/^\/en\/?$/);
    expect(container.querySelector("h1")?.textContent).toBe("Caio Saboia");
    expect(container.querySelector("h2")?.textContent).toBe("Sobre");
  });

  it("maintains theme consistency across language views without cross-contamination", () => {
    // User selects dark theme in Portuguese page
    localStorage.setItem(THEME_KEY, "dark");

    const { unmount: unmountPt } = render(
      <Portfolio
        content={ptContent}
        lang="pt"
        headerActions={
          <>
            <ThemeToggle ariaLabel="Alternar tema" />
            <LanguageSwitch currentLocale="pt" label="EN" ariaLabel="Switch to English" />
          </>
        }
      />
    );

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    unmountPt();

    // User navigates to English page
    render(
      <Portfolio
        content={enContent}
        lang="en"
        headerActions={
          <>
            <ThemeToggle ariaLabel="Toggle theme" />
            <LanguageSwitch currentLocale="en" label="PT" ariaLabel="Mudar para Portugues" />
          </>
        }
      />
    );

    // Theme remains dark and localStorage is unchanged
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem(THEME_KEY)).toBe("dark");

    // Language switch points to PT
    const ptLink = screen.getByRole("link", { name: "Mudar para Portugues" });
    expect(ptLink.getAttribute("href")).toMatch(/^\/pt\/?$/);
  });
});
