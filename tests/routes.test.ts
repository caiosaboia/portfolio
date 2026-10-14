import { describe, it, expect } from "vitest";
import { generateStaticParams } from "../app/[lang]/page";
import { localeHtmlLangMap, isLocale } from "../lib/locale";

describe("Static Routes & Locale Mapping", () => {
  it("generateStaticParams returns pt and en segments", () => {
    const params = generateStaticParams();
    expect(params).toEqual([{ lang: "pt" }, { lang: "en" }]);
  });

  it("localeHtmlLangMap adheres to AC-01.2", () => {
    expect(localeHtmlLangMap.pt).toBe("pt-BR");
    expect(localeHtmlLangMap.en).toBe("en");
  });

  it("isLocale validates supported locales correctly", () => {
    expect(isLocale("pt")).toBe(true);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("es")).toBe(false);
    expect(isLocale("")).toBe(false);
  });
});
