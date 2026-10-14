"use client";

import { useEffect } from "react";
import { pickLocale } from "@/lib/locale";

export function RootRedirect() {
  useEffect(() => {
    const userLanguages =
      typeof navigator !== "undefined"
        ? navigator.languages || [navigator.language]
        : [];
    const target = pickLocale(userLanguages);
    window.location.replace(`/${target}/`);
  }, []);

  return null;
}
