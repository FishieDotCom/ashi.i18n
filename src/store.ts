import type { Language, Direction } from "./types.js";

/**
 * Simple reactive store for the active language.
 * Kept in a separate module so both `proxy.ts` and `index.ts`
 * share the same singleton state without circular imports.
 */

let currentLanguage: Language = "en";

export function getLanguage(): Language {
  return currentLanguage;
}

export function setLanguage(lang: Language): void {
  currentLanguage = lang;

  // Update document direction when running in a browser environment
  if (typeof document !== "undefined") {
    document.dir = getDirection();
  }
}

export function toggleLanguage(): void {
  setLanguage(currentLanguage === "en" ? "dv" : "en");
}

export function getDirection(): Direction {
  return currentLanguage === "dv" ? "rtl" : "ltr";
}
