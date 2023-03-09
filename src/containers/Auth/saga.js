import { put, takeLatest } from '@redux-saga/core/effects';
import * as constants from './constants';
import * as actions from './actions';
import { deleteToken } from '@services/storage/user';

function* handleLoginSaga({ payload }) {
  try {
    yield put(actions.handleLoginReducer(payload));
  } catch (error) {
    console.log(error);
  }
}

function* handleLogoutSaga() {
  try {
    yield deleteToken();
    yield put(actions.handleLogoutReducer());
  } catch (error) {
    console.log(error);
  }
}

export function* authSaga() {
  yield takeLatest(constants.LOGIN_SAGA, handleLoginSaga);
  yield takeLatest(constants.LOGOUT_SAGA, handleLogoutSaga);
}
