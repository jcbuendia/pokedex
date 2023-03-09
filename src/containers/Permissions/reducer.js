import produce from 'immer';
import { handleActions } from 'redux-actions';
import { initialState } from './state';
import * as constants from './constants';

const changeLocationStatus = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    location: payload
  };
};

const changeBluetoothStatus = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    bluetooth: payload
  };
};

export const permissionsReducer = produce(
  handleActions(
    {
      [constants.HANDLE_CHANGE_LOCATION_STATUS_REDUCER]: changeLocationStatus,
      [constants.HANDLE_CHANGE_BLUETOOTH_STATUS_REDUCER]: changeBluetoothStatus
    },
    initialState
  )
);
