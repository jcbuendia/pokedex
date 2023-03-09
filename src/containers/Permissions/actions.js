import * as constants from './constants';

export const changeBluetoothStatusReducer = (payload) => ({
  type: constants.HANDLE_CHANGE_BLUETOOTH_STATUS_REDUCER,
  payload
});

export const changeLocationStatusReducer = (payload) => ({
  type: constants.HANDLE_CHANGE_LOCATION_STATUS_REDUCER,
  payload
});

export const handleChangeBluetoothStatusAction = (payload) => ({
  type: constants.HANDLE_CHANGE_BLUETOOTH_STATUS_SAGA,
  payload
});

export const handleChangeLocationStatusAction = (payload) => ({
  type: constants.HANDLE_CHANGE_LOCATION_STATUS_SAGA,
  payload
});
