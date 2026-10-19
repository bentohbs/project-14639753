import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages from './local/index';

// Languages: English (en) and Simplified Chinese (zh).
// The visitor's choice is remembered in the browser; on a first visit the
// browser language is used (any Chinese variant maps to "zh").
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    debug: false,
    resources: messages,
    keySeparator: false, // translation keys are flat, e.g. "hero.title"
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

function applyDocumentLanguage(lng: string) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng && lng.startsWith('zh') ? 'zh-CN' : 'en';
  }
}
applyDocumentLanguage(i18n.language);
i18n.on('languageChanged', applyDocumentLanguage);

export default i18n;
