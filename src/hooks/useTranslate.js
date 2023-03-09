import I18n, { LANGUAGE_OPTIONS } from '@containers/Translations/config';
import { handleChangeLanguageAction } from '@containers/Translations/actions';
import { languageSelector } from '@containers/Translations/selectors';
import { useSelector, useDispatch } from 'react-redux';

const useTranslate = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state) => languageSelector(state));

  const translate = (key) => {
    return I18n.t(key, { locale });
  };

  const handleChangeLanguage = (lenguage) => {
    dispatch(handleChangeLanguageAction(lenguage));
  };

  return {
    locale,
    LANGUAGE_OPTIONS,
    translate,
    handleChangeLanguage
  };
};

export { useTranslate };
