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
    delete: {
      en: "Delete",
      dv: "ފޮހެލޭ",
    },
    edit: {
      en: "Edit",
      dv: "އެޑިޓް",
    },
    submit: {
      en: "Submit",
      dv: "ހުށަހަޅޭ",
    },
    back: {
      en: "Back",
      dv: "ފަހަތަށް",
    },
    next: {
      en: "Next",
      dv: "ކުރިއަށް",
    },
    loading: {
      en: "Loading",
      dv: "ލޯޑުވަނީ",
    },
    yes: {
      en: "Yes",
      dv: "އާއެކޭ",
    },
    no: {
      en: "No",
      dv: "ނޫން",
    },
  },
  nav: {
    home: {
      en: "Home",
      dv: "ހޯމް",
    },
    dashboard: {
      en: "Dashboard",
      dv: "ޑޭޝްބޯޑް",
    },
    settings: {
      en: "Settings",
      dv: "ސެޓިންގްސް",
    },
    profile: {
      en: "Profile",
      dv: "ޕްރޮފައިލް",
    },
    search: {
      en: "Search",
      dv: "ހޯދޭ",
    },
    notifications: {
      en: "Notifications",
      dv: "އަންގައިދިނުންތައް",
    },
  },
  errors: {
    notFound: {
      en: "Page not found",
      dv: "ސަފްހާ ނުފެނުނު",
    },
    unauthorized: {
      en: "Unauthorized",
      dv: "ހުއްދަ ނެތް",
    },
    serverError: {
      en: "Server error",
      dv: "ސާވަރ އެރާ",
    },
    networkError: {
      en: "Network error",
      dv: "ނެޓްވޯކް އެރާ",
    },
    required: {
      en: "This field is required",
      dv: "މި ބައި ފުރިހަމަ ކުރޭ",
    },
    invalidEmail: {
      en: "Invalid email address",
      dv: "ރަނގަޅު އީމެއިލް އެޑްރެހެއް ނޫން",
    },
  },
} as const;
