import { Locale, locales } from "@/content";

export const localeHtmlLangMap: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function pickLocale(languages?: readonly string[]): Locale {
  if (!languages || languages.length === 0) {
    return "en";
  }

  for (const lang of languages) {
    const normalized = lang.toLowerCase();
    if (normalized.startsWith("pt")) {
      return "pt";
    }
    if (normalized.startsWith("en")) {
      return "en";
    }
  }

  return "en";
}
