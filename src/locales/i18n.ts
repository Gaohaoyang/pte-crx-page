import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import homeEn from "@/locales/en/home.json";
import homeZh from "@/locales/zh/home.json";

const LANGUAGE_KEY = "language";

const isBrowser = typeof window !== "undefined";

/**
 * Get user's preferred language from localStorage or browser settings
 */
export const getPreferredLanguage = () => {
  try {
    if (!isBrowser) {
      return "en"; // Default to English on server-side
    }

    // Check localStorage first
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (savedLanguage === "en" || savedLanguage === "zh") {
      return savedLanguage;
    }

    // If no saved language, detect from browser
    const lang = navigator.languages
      ? navigator.languages[0]
      : navigator.language;
    if (lang) {
      if (
        lang.includes("zh-Hant") ||
        lang.includes("zh-HK") ||
        lang.includes("zh-MO") ||
        lang.includes("zh-TW")
      ) {
        return "en";
      } else if (lang.includes("zh")) {
        return "zh";
      }
    }
    return "en";
  } catch (e) {
    // Return default language if running on server or if there's any error
    console.error(e);
    return "en";
  }
};

/**
 * Save language preference to localStorage
 */
export const saveLanguagePreference = (language: string) => {
  if (!isBrowser) return; // Don't attempt to save on server-side

  try {
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch (e) {
    console.error(e);
    // Ignore errors (e.g., when running on server)
  }
};

export const resources = {
  en: {
    home: homeEn,
  },
  zh: {
    home: homeZh,
  },
} as const;

const initI18n = (language: "en" | "zh") => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      // resources: {
      //   en: {
      //     translation: {
      //       'Welcome to React': 'Welcome to React and react-i18next',
      //     },
      //   },
      // },
      resources,
      lng: language, // if you're using a language detector, do not define the lng option
      fallbackLng: "en",

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
};

export default initI18n;
