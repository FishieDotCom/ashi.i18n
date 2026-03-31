/**
 * ashi.i18n — Bilingual translation support for English ("en") and Dhivehi ("dv")
 *
 * Public API:
 *   Ashi            Proxy-based object for typed property-chain access
 *   t(key)          Translate a dot-separated key string
 *   setLanguage()   Switch the active language
 *   getLanguage()   Get the current language
 *   toggleLanguage()  Toggle between "en" and "dv"
 *   getDirection()  Get text direction ("ltr" | "rtl")
 */

export { Ashi, t } from "./proxy.js";
export { setLanguage, getLanguage, toggleLanguage, getDirection } from "./store.js";
export type { Language, Direction, TranslationKey, AshiProxy } from "./types.js";
