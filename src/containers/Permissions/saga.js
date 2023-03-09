import { put, takeLatest } from '@redux-saga/core/effects';
import * as constants from './constants';
import * as actions from './actions';

function* handleChangeBluetoothStatusSaga({ payload }) {
  yield put(actions.changeBluetoothStatusReducer(payload));
}

function* handleChangeLocationStatusSaga({ payload }) {
  yield put(actions.changeLocationStatusReducer(payload));
}

export function* permissionsSaga() {
  yield takeLatest(
    constants.HANDLE_CHANGE_BLUETOOTH_STATUS_SAGA,
    handleChangeBluetoothStatusSaga
  );
  yield takeLatest(
    constants.HANDLE_CHANGE_LOCATION_STATUS_SAGA,
    handleChangeLocationStatusSaga
  );
}
