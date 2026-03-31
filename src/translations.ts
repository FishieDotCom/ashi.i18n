/**
 * Translation dictionary for all supported languages.
 * Add new keys here — types are automatically inferred from this structure.
 *
 * Structure: { key: { en: "...", dv: "..." } } (flat or nested)
 */
export const translations = {
  test: {
    en: "Test",
    dv: "ޓެސްޓް",
  },
  auth: {
    login: {
      en: "Login",
      dv: "ލޮގިން",
    },
    logout: {
      en: "Logout",
      dv: "ލޮގްއައުޓް",
    },
    register: {
      en: "Register",
      dv: "ރެޖިސްޓަރ",
    },
  },
  common: {
    save: {
      en: "Save",
      dv: "ރައްކާކުރޭ",
    },
    cancel: {
      en: "Cancel",
      dv: "ކެންސަލް",
    },
    confirm: {
      en: "Confirm",
      dv: "ކަށަވަރުކުރޭ",
    },
  },
} as const;
