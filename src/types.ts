import type { translations } from "./translations.js";

// The two supported languages
export type Language = "en" | "dv";
export type Direction = "ltr" | "rtl";

/**
 * A leaf node in the translation tree: an object with exactly "en" and "dv" string values.
 */
type LeafNode = { readonly en: string; readonly dv: string };

/**
 * Recursively extracts all dot-separated key paths from the translation tree.
 *
 * For a tree like:
 *   { auth: { login: { en: "...", dv: "..." } } }
 *
 * This produces: "auth" | "auth.login"
 *
 * How it works:
 * - If T is a LeafNode → no deeper keys, return never
 * - Otherwise → for each key K in T:
 *     - Emit K itself (as a string)
 *     - If T[K] is also an object (not a leaf), recurse and prepend "K."
 */
type ExtractKeys<T> = T extends LeafNode
  ? never
  : {
      [K in keyof T & string]:
        | K
        | (T[K] extends object ? `${K}.${ExtractKeys<T[K]>}` : never);
    }[keyof T & string];

/**
 * Union of all valid translation key paths, e.g.:
 * "test" | "auth" | "auth.login" | "auth.logout" | ...
 */
export type TranslationKey = ExtractKeys<typeof translations>;

/**
 * Recursively maps the translation tree to a typed Proxy shape.
 * Each node becomes a string (when accessed as a leaf) AND
 * has sub-properties for deeper access.
 *
 * This enables:
 *   Ashi.Login         → string
 *   Ashi.Auth.Login    → string
 */
export type ProxyShape<T> = T extends LeafNode
  ? string
  : {
      [K in keyof T as Capitalize<string & K>]: ProxyShape<T[K]>;
    } & string;

/**
 * The type of the top-level `Ashi` proxy object.
 */
export type AshiProxy = ProxyShape<typeof translations>;
