import { ptContent } from "./pt";
import { enContent } from "./en";
import { Content } from "./types";

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export function getContent(locale: Locale): Content {
  switch (locale) {
    case "pt":
      return ptContent;
    case "en":
      return enContent;
    default:
      return ptContent;
  }
}

export * from "./types";
