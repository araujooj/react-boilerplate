import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import { DEVELOPMENT } from "../constants/environment";
import resources from './translations';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'pt-BR',
    lng: 'pt-BR',
    debug: process.env.NODE_ENV === DEVELOPMENT,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
