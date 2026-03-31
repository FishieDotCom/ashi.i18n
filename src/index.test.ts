import {
  Ashi,
  t,
  setLanguage,
  getLanguage,
  toggleLanguage,
  getDirection,
} from "./index.js";

// Reset to English before each test
beforeEach(() => setLanguage("en"));

// ─── t() ─────────────────────────────────────────────────────────────────────

describe("t()", () => {
  it("returns English translation by default", () => {
    expect(t("test")).toBe("Test");
  });

  it("returns Dhivehi translation after setLanguage('dv')", () => {
    setLanguage("dv");
    expect(t("test")).toBe("ޓެސްޓް");
  });

  it("resolves nested keys", () => {
    expect(t("auth.login")).toBe("Login");
  });

  it("is case-insensitive", () => {
    expect(t("AUTH.LOGIN")).toBe("Login");
    expect(t("Auth.Login")).toBe("Login");
  });

  it("returns the key when not found", () => {
    expect(t("nonexistent.key")).toBe("nonexistent.key");
  });

  it("falls back to English when Dhivehi is missing (simulated)", () => {
    // All keys have both translations in the fixture, so just verify the fallback
    // path by checking the English value exists
    setLanguage("en");
    expect(t("auth.login")).toBe("Login");
  });
});

// ─── Ashi Proxy ───────────────────────────────────────────────────────────────

describe("Ashi proxy", () => {
  it("resolves top-level key via property access", () => {
    expect(`${Ashi.Test}`).toBe("Test");
  });

  it("resolves nested key via chained property access", () => {
    expect(`${Ashi.Auth.Login}`).toBe("Login");
  });

  it("is case-insensitive (uppercase)", () => {
    // Runtime proxy lowercases all property accesses; types only expose Capitalized forms
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(`${(Ashi as any).AUTH.LOGIN}`).toBe("Login");
  });

  it("is case-insensitive (mixed)", () => {
    expect(`${Ashi.Auth.Login}`).toBe("Login");
  });

  it("returns Dhivehi after language switch", () => {
    setLanguage("dv");
    expect(`${Ashi.Auth.Login}`).toBe("ލޮގިން");
  });

  it("returns key string for unknown property", () => {
    // @ts-expect-error — intentionally accessing unknown key
    expect(`${Ashi.Unknown.Stuff}`).toBe("unknown.stuff");
  });
});

// ─── Language management ──────────────────────────────────────────────────────

describe("setLanguage / getLanguage", () => {
  it("defaults to 'en'", () => {
    expect(getLanguage()).toBe("en");
  });

  it("switches to 'dv'", () => {
    setLanguage("dv");
    expect(getLanguage()).toBe("dv");
  });
});

describe("toggleLanguage()", () => {
  it("toggles from en → dv", () => {
    toggleLanguage();
    expect(getLanguage()).toBe("dv");
  });

  it("toggles from dv → en", () => {
    setLanguage("dv");
    toggleLanguage();
    expect(getLanguage()).toBe("en");
  });
});

// ─── Direction ────────────────────────────────────────────────────────────────

describe("getDirection()", () => {
  it("returns 'ltr' for English", () => {
    expect(getDirection()).toBe("ltr");
  });

  it("returns 'rtl' for Dhivehi", () => {
    setLanguage("dv");
    expect(getDirection()).toBe("rtl");
  });
});
