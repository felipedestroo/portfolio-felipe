import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en.json'
import ptTranslation from './locales/pt.json'

const resources = {
    en: {
        translation: enTranslation,
    },
    pt: {
        translation: ptTranslation,
    },
};

i18n
    .use(initReactI18next) // inicializa o react-i18next
    .init({
        resources,
        debug: true,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true,
        },
    });

    export default i18n;