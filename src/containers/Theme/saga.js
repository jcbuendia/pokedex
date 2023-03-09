import { put, takeLatest } from '@redux-saga/core/effects';
import * as constants from './constants';
import * as actions from './actions';
import * as themes from './themes';

function* handleChangeThemeSaga({ payload: themeName }) {
  if (themeName in themes) {
    yield put(actions.changeThemeReducer(themes[themeName]));
  } else {
    console.warn(`${themeName} is not a valid theme`);

    return;
  }
}

export function* themeSaga() {
  yield takeLatest(constants.HANDLE_CHANGE_THEME_SAGA, handleChangeThemeSaga);
}
