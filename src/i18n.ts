import i18n from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
	fallbackLng: 'uz',
	supportedLngs: ['uz', 'ru', 'en'],
	interpolation: {
		escapeValue: false
	}
})

export default i18n
