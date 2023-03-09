import produce from 'immer';
import { handleActions } from 'redux-actions';
import { initialState } from './state';
import * as constants from './constants';

const updateValueHandler = (state, action) => {
  const { payload } = action;

  return produce(state, (draft) => {
    draft.value = payload.newValue;
    draft.lastUpdate = new Date();
  });
};

export const userAccessReducer = produce(
  handleActions(
    {
      [constants.HANDLE_UPDATE_VALUE_REDUCER]: updateValueHandler
    },
    initialState
  )
);
