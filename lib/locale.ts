import { Locale, locales } from "@/content";

export const localeHtmlLangMap: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
