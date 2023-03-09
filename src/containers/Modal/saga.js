import { put, takeLatest } from '@redux-saga/core/effects';
import * as constants from './constants';
import * as actions from './actions';

function* handleOpenModalSaga({ payload }) {
  yield put(actions.openModalReducer(payload));
}

function* handleCloseModalSaga() {
  yield put(actions.closeModalReducer());
}

export function* modalSaga() {
  yield takeLatest(constants.HANDLE_OPEN_MODAL_SAGA, handleOpenModalSaga);
  yield takeLatest(constants.HANDLE_CLOSE_MODAL_SAGA, handleCloseModalSaga);
}
