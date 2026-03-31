import { translations } from "./translations.js";
import { getLanguage } from "./store.js";
import type { AshiProxy, Language } from "./types.js";

/**
 * Resolves a dot-separated key path against the translation tree and returns
 * the translated string for the current language.
 *
 * Resolution steps:
 * 1. Split the key by "." and lowercase each segment.
 * 2. Walk the translations tree segment by segment.
 * 3. At the leaf ({ en, dv }), return the value for the active language,
 *    falling back to "en" if the active language's value is missing.
 * 4. If the key path is invalid, return the key itself as a fallback.
 */
export function t(key: string): string {
  const segments = key.toLowerCase().split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = translations;

  for (const segment of segments) {
    if (node === null || typeof node !== "object" || !(segment in node)) {
      // Key path not found — return the original key as fallback
      return key;
    }
    node = node[segment];
  }

  // If we landed on a leaf node with language keys, return the translation
  if (node !== null && typeof node === "object") {
    const lang: Language = getLanguage();
    if (lang in node) return node[lang];
    if ("en" in node) return node["en"]; // fallback to English
  }

  // Key resolves to a branch (not a leaf) — return key as fallback
  return key;
}

/**
 * Creates a Proxy that intercepts property access to build a dot-separated
 * key path, then resolves it via `t()` when the value is used as a string.
 *
 * How chaining works:
 *   Ashi.Auth.Login
 *   └─ access "Auth"  → new proxy with path ["auth"]
 *      └─ access "Login" → new proxy with path ["auth", "login"]
 *         └─ toString / valueOf → t("auth.login")
 *
 * Keys are lowercased on access so `Ashi.AUTH.Login === Ashi.auth.login`.
 */
function createProxy(path: string[]): AshiProxy {
  const resolve = (): string => t(path.join("."));

  return new Proxy(
    // Use a function as the base so the proxy is also callable if needed,
    // and so Symbol.toPrimitive / toString work correctly as string coercion.
    Object.assign(resolve, {
      toString: resolve,
      valueOf: resolve,
      [Symbol.toPrimitive]: (_hint: string) => resolve(),
    }),
    {
      get(target, prop: string | symbol) {
        // Preserve built-in symbols and own properties (toString, valueOf, etc.)
        if (typeof prop === "symbol" || prop in target) {
          return (target as unknown as Record<string | symbol, unknown>)[prop];
        }

        // Each property access extends the key path (lowercased for case-insensitivity)
        return createProxy([...path, prop.toLowerCase()]);
      },
    },
  ) as unknown as AshiProxy;
}

/**
 * The top-level `Ashi` proxy. Accessing any property begins a key path chain.
 *
 * @example
 * Ashi.Login         // → t("login")
 * Ashi.Auth.Login    // → t("auth.login")
 */
export const Ashi: AshiProxy = createProxy([]);
