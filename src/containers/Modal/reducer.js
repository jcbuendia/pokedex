import produce from 'immer';
import { handleActions } from 'redux-actions';
import { initialState } from './state';
import * as constants from './constants';

const openModalHandler = (state, { payload }) => {
  return {
    ...state,
    ...payload,
    visible: true
  };
};

const closeModalHandler = (state) => {
  return {
    ...state,
    visible: false
  };
};

export const modalReducer = produce(
  handleActions(
    {
      [constants.HANDLE_OPEN_MODAL_REDUCER]: openModalHandler,
      [constants.HANDLE_CLOSE_MODAL_REDUCER]: closeModalHandler
    },
    initialState
  )
);
