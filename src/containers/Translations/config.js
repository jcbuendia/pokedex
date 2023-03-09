import { I18nManager } from 'react-native';
import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en_US from './en_US.json';
import es_MX from './es_MX.json';
import { StorageService } from '@services/index';

export const LANGUAGE_OPTIONS = ['en-US', 'es-MX'];

let appLanguageTag = 'es-MX';
const esLanguageTagDefault = 'es-MX';

const translations = {
  ['es-MX']: es_MX,
  ['en-US']: en_US
};

const [mainUserLanguagePreferenceFromDeviceInfo] = RNLocalize.getLocales(); //phone language preference
const { countryCode, languageTag, languageCode, isRTL } =
  mainUserLanguagePreferenceFromDeviceInfo;

const esLanguageCountries = Object.keys(translations)
  .filter((e) => e.includes('es'))
  .map((e) => e.split('-')[1]);

if (languageCode === 'es') {
  appLanguageTag = esLanguageCountries.includes(countryCode)
    ? languageTag
    : esLanguageTagDefault;
}

I18nManager.forceRTL(isRTL);
I18n.fallbacks = { languageTag: appLanguageTag, isRTL };
I18n.translations = translations;
I18n.locale = appLanguageTag;

export const changeLanguage = (newLanguage) => {
  if (newLanguage === 'es') {
    let espLang = `${newLanguage} - ${countryCode}`;
    newLanguage = esLanguageTagDefault;
    if (isAvailableSpanishLanguage(espLang)) {
      newLanguage = espLang;
    }
  } else {
    newLanguage = appLanguageTag.includes(newLanguage)
      ? appLanguageTag
      : LANGUAGE_OPTIONS[0];
  }
  StorageService.preferences.setLanguage(newLanguage);
  I18n.defaultLocale = newLanguage;
  I18n.locale = newLanguage;
  return I18n.currentLocale();
};

const isAvailableSpanishLanguage = (espLang) =>
  LANGUAGE_OPTIONS.includes(espLang) &&
  esLanguageCountries.includes(countryCode);

StorageService.preferences.getLanguage().then((currentLocale) => {
  if (currentLocale) {
    I18n.defaultLocale = currentLocale;
    I18n.locale = currentLocale;
  }
});

export default I18n;
