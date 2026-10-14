import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { pickLocale } from "../lib/locale";
import { LanguageSwitch } from "../components/LanguageSwitch";
import { RootRedirect } from "../components/RootRedirect";
import RootHomePage from "../app/(root)/page";

describe("T7 — Internationalization & Language Routing", () => {
  describe("pickLocale function adhering to AC-02.1 and AC-02.2", () => {
    it("selects pt when pt appears before en", () => {
      expect(pickLocale(["pt-BR", "en"])).toBe("pt");
      expect(pickLocale(["pt"])).toBe("pt");
    });

    it("selects en when en appears before pt", () => {
      expect(pickLocale(["en-US", "pt-BR"])).toBe("en");
      expect(pickLocale(["en-GB"])).toBe("en");
    });

    it("defaults to en when languages list has no pt or is empty", () => {
      expect(pickLocale(["fr-FR", "de-DE"])).toBe("en");
      expect(pickLocale([])).toBe("en");
      expect(pickLocale(undefined)).toBe("en");
    });
  });

  describe("LanguageSwitch component adhering to AC-03.1 and AC-03.2", () => {
    it("renders link to /en/ with label EN when current locale is pt", () => {
      render(
        <LanguageSwitch
          currentLocale="pt"
          label="EN"
          ariaLabel="Switch to English"
        />
      );
      const link = screen.getByRole("link", { name: "Switch to English" });
      expect(link.getAttribute("href")).toMatch(/^\/en\/?$/);
      expect(link).toHaveTextContent("EN");
    });

    it("renders link to /pt/ with label PT when current locale is en", () => {
      render(
        <LanguageSwitch
          currentLocale="en"
          label="PT"
          ariaLabel="Mudar para Portugues"
        />
      );
      const link = screen.getByRole("link", { name: "Mudar para Portugues" });
      expect(link.getAttribute("href")).toMatch(/^\/pt\/?$/);
      expect(link).toHaveTextContent("PT");
    });
  });

  describe("RootRedirect and RootHomePage adhering to AC-02.1, AC-02.2 and AC-02.3", () => {
    const originalLocation = window.location;

    beforeEach(() => {
      Object.defineProperty(window, "location", {
        configurable: true,
        value: {
          replace: vi.fn(),
        },
      });
    });

    afterEach(() => {
      Object.defineProperty(window, "location", {
        configurable: true,
        value: originalLocation,
      });
    });

    it("redirects to /pt/ when browser language is pt-BR", () => {
      vi.spyOn(navigator, "languages", "get").mockReturnValue(["pt-BR", "en-US"]);
      render(<RootRedirect />);
      expect(window.location.replace).toHaveBeenCalledWith("/pt/");
    });

    it("redirects to /en/ when browser language is not Portuguese", () => {
      vi.spyOn(navigator, "languages", "get").mockReturnValue(["es-ES", "en"]);
      render(<RootRedirect />);
      expect(window.location.replace).toHaveBeenCalledWith("/en/");
    });

    it("renders fallback links on RootHomePage for non-JS / noscript environments", () => {
      render(<RootHomePage />);
      const ptLinks = screen.getAllByRole("link", { name: /Portugues/i });
      const enLinks = screen.getAllByRole("link", { name: /English/i });

      expect(ptLinks.length).toBeGreaterThan(0);
      expect(enLinks.length).toBeGreaterThan(0);

      expect(ptLinks[0].getAttribute("href")).toMatch(/^\/pt\/?$/);
      expect(enLinks[0].getAttribute("href")).toMatch(/^\/en\/?$/);
    });
  });
});
