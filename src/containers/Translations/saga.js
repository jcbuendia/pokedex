import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as constants from './constants';
import * as actions from './actions';
import { changeLanguage } from './config';

function* handleChangeLanguageSaga({ payload: language }) {
  const locale = yield call(changeLanguage, language);
  yield put(actions.changeLanguageReducer(locale));
}

export function* languageSaga() {
  yield takeLatest(
    constants.HANDLE_CHANGE_LANGUAGE_SAGA,
    handleChangeLanguageSaga
  );
}
