import { put, takeLatest } from '@redux-saga/core/effects';
import * as constants from './constants';
import * as actions from './actions';

function* handleShowLoaderSaga() {
  yield put(actions.showLoaderReducer());
}

function* handleHideLoaderSaga() {
  yield put(actions.hideLoaderReducer());
}

export function* loaderSaga() {
  yield takeLatest(constants.HANDLE_SHOW_LOADER_SAGA, handleShowLoaderSaga);
  yield takeLatest(constants.HANDLE_HIDE_LOADER_SAGA, handleHideLoaderSaga);
}
