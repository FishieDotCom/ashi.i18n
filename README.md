# ashi.i18n

Bilingual translation support for **English** (`en`) and **Dhivehi** (`dv`).

- Zero dependencies
- Full TypeScript — autocomplete for every key
- Two access styles: `Ashi.Auth.Login` and `t("auth.login")`
- Automatic RTL direction for Dhivehi
- Works in Node.js and the browser

---

## Installation

```bash
npm install ashi.i18n
```

---

## Quick Start

```ts
import { Ashi, t, setLanguage } from "ashi.i18n";

// English (default)
console.log(Ashi.Auth.Login);       // "Login"
console.log(t("auth.login"));       // "Login"

// Switch to Dhivehi
setLanguage("dv");
console.log(Ashi.Auth.Login);       // "ލޮގިން"
console.log(t("auth.login"));       // "ލޮގިން"
```

---

## API

### `Ashi`

A Proxy-based object that resolves translation keys via chained property access. Keys are **case-insensitive**.

```ts
Ashi.Login            // → t("login")
Ashi.Auth.Login       // → t("auth.login")
Ashi.AUTH.LOGIN       // → t("auth.login")  (same result)
Ashi.Nav.Dashboard    // → t("nav.dashboard")
Ashi.Errors.NotFound  // → t("errors.notFound")
```

Use it anywhere a string is expected — in JSX, template literals, or string concatenation:

```tsx
<button>{Ashi.Common.Save}</button>
<p>{`${Ashi.Status.Pending}...`}</p>
```

---

### `t(key: string): string`

Translate a dot-separated key string.

```ts
t("auth.login")         // "Login"
t("errors.notFound")    // "Page not found"
t("AUTH.LOGIN")         // "Login"  (case-insensitive)
t("nonexistent.key")    // "nonexistent.key"  (key returned as-is)
```

- Keys are case-insensitive
- Returns the key itself if not found
- Falls back to English if the active language has no translation

---

### `setLanguage(lang: "en" | "dv"): void`

Switch the active language. Automatically updates `document.dir` in the browser.

```ts
setLanguage("dv"); // switches to Dhivehi (RTL)
setLanguage("en"); // switches to English (LTR)
```

---

### `getLanguage(): "en" | "dv"`

Returns the currently active language.

```ts
getLanguage(); // "en"
```

---

### `toggleLanguage(): void`

Toggles between `"en"` and `"dv"`.

```ts
toggleLanguage(); // "en" → "dv"
toggleLanguage(); // "dv" → "en"
```

---

### `getDirection(): "ltr" | "rtl"`

Returns the text direction for the active language.

```ts
setLanguage("dv");
getDirection(); // "rtl"

setLanguage("en");
getDirection(); // "ltr"
```

---

## Translation Keys

All available keys, grouped by category:

### `auth`

| Key | English | Dhivehi |
|---|---|---|
| `auth.login` | Login | ލޮގިން |
| `auth.logout` | Logout | ލޮގްއައުޓް |
| `auth.register` | Register | ރެޖިސްޓަރ |

### `common`

| Key | English | Dhivehi |
|---|---|---|
| `common.save` | Save | ރައްކާކުރޭ |
| `common.cancel` | Cancel | ކެންސަލް |
| `common.confirm` | Confirm | ކަށަވަރުކުރޭ |
| `common.delete` | Delete | ފޮހެލޭ |
| `common.edit` | Edit | އެޑިޓް |
| `common.submit` | Submit | ހުށަހަޅޭ |
| `common.back` | Back | ފަހަތަށް |
| `common.next` | Next | ކުރިއަށް |
| `common.loading` | Loading | ލޯޑުވަނީ |
| `common.yes` | Yes | އާއެކޭ |
| `common.no` | No | ނޫން |

### `nav`

| Key | English | Dhivehi |
|---|---|---|
| `nav.home` | Home | ހޯމް |
| `nav.dashboard` | Dashboard | ޑޭޝްބޯޑް |
| `nav.settings` | Settings | ސެޓިންގްސް |
| `nav.profile` | Profile | ޕްރޮފައިލް |
| `nav.search` | Search | ހޯދޭ |
| `nav.notifications` | Notifications | އަންގައިދިނުންތައް |

### `errors`

| Key | English | Dhivehi |
|---|---|---|
| `errors.notFound` | Page not found | ސަފްހާ ނުފެނުނު |
| `errors.unauthorized` | Unauthorized | ހުއްދަ ނެތް |
| `errors.serverError` | Server error | ސާވަރ އެރާ |
| `errors.networkError` | Network error | ނެޓްވޯކް އެރާ |
| `errors.required` | This field is required | މި ބައި ފުރިހަމަ ކުރޭ |
| `errors.invalidEmail` | Invalid email address | ރަނގަޅު އީމެއިލް އެޑްރެހެއް ނޫން |

### `form`

| Key | English | Dhivehi |
|---|---|---|
| `form.email` | Email | އީމެއިލް |
| `form.password` | Password | ޕާސްވޯޑް |
| `form.username` | Username | ޔޫޒަރނޭމް |
| `form.phone` | Phone | ފޯން |
| `form.submit` | Submit | ހުށަހަޅޭ |
| `form.reset` | Reset | ރީސެޓް |
| `form.emailPlaceholder` | Enter your email | އީމެއިލް ލިޔޭ |
| `form.passwordPlaceholder` | Enter your password | ޕާސްވޯޑް ލިޔޭ |
| `form.usernamePlaceholder` | Enter your username | ޔޫޒަރނޭމް ލިޔޭ |
| `form.phonePlaceholder` | Enter your phone number | ފޯން ނަންބަރ ލިޔޭ |

### `user`

| Key | English | Dhivehi |
|---|---|---|
| `user.profile` | Profile | ޕްރޮފައިލް |
| `user.name` | Name | ނަން |
| `user.email` | Email | އީމެއިލް |
| `user.role` | Role | މަގާމް |
| `user.lastSeen` | Last seen | އެންމެ ފަހުން ފެނުނީ |
| `user.avatar` | Avatar | އަވަތަރ |

### `status`

| Key | English | Dhivehi |
|---|---|---|
| `status.active` | Active | ހަރަކާތްތެރި |
| `status.inactive` | Inactive | ހަރަކާތްތެރި ނޫން |
| `status.pending` | Pending | މަޑުކުރަނީ |
| `status.success` | Success | ކާމިޔާބު |
| `status.failed` | Failed | ނާކާމިޔާބު |
| `status.archived` | Archived | އާކައިވްކޮށްފި |

### `table`

| Key | English | Dhivehi |
|---|---|---|
| `table.noData` | No data available | މައުލޫމާތެއް ނެތް |
| `table.showing` | Showing | ދައްކަނީ |
| `table.of` | of | އިން |
| `table.rowsPerPage` | Rows per page | ކޮންމެ ސަފްހާއަކަށް |
| `table.firstPage` | First page | ފުރަތަމަ ސަފްހާ |
| `table.lastPage` | Last page | އެންމެ ފަހު ސަފްހާ |

---

## TypeScript

All keys and the `Ashi` proxy are fully typed. Your editor will autocomplete both access styles.

```ts
import { Ashi, t } from "ashi.i18n";
import type { TranslationKey, Language } from "ashi.i18n";

// t() only accepts valid keys
t("auth.login");       // ✓
t("auth.invalid");     // ✗ TypeScript error

// Ashi proxy is typed to the translation tree
Ashi.Auth.Login;       // ✓
Ashi.Nav.Dashboard;    // ✓

// Use TranslationKey in your own code
function translate(key: TranslationKey) {
  return t(key);
}

// Use Language for type-safe lang values
const lang: Language = "dv";
setLanguage(lang);
```

---

## Adding Translations

Open `src/translations.ts` and add a new key. Types update automatically — no extra steps.

```ts
export const translations = {
  // Add a flat key
  welcome: {
    en: "Welcome",
    dv: "މަރުހަބާ",
  },
  // Add a nested key under an existing group
  auth: {
    forgotPassword: {
      en: "Forgot password?",
      dv: "ޕާސްވޯޑް ހަނދާންނެތިއްޖެ؟",
    },
    // ...existing keys
  },
} as const;
```

Then rebuild:

```bash
npm run build
```

---

## RTL Support

When the language is set to `"dv"`, `document.dir` is automatically set to `"rtl"` (browser only). In Node.js this is safely skipped.

```ts
setLanguage("dv");
// browser: document.dir === "rtl"

getDirection(); // "rtl"
```
