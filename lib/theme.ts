export const THEME_KEY = "theme";
export type Theme = "light" | "dark";

export function resolveTheme(
  storedTheme: string | null,
  prefersDark: boolean
): Theme {
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }
  return prefersDark ? "dark" : "light";
}

export const antiFlashScript = `(function() {
  try {
    var stored = localStorage.getItem("${THEME_KEY}");
    var prefersDark = false;
    if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
      prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    var theme = (stored === "dark" || stored === "light") ? stored : (prefersDark ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();`;
