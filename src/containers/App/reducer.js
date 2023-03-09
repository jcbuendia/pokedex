import produce from 'immer';
import { handleActions } from 'redux-actions';
import { initialState } from './state';
import * as constants from './constants';

const loadingHandler = (state, action) => {
  const { payload } = action;

  return produce(state, (draft) => {
    draft.isLoading = payload.isLoading;
  });
};

export const appReducer = produce(
  handleActions(
    {
      [constants.HANDLE_LOADING_REDUCER]: loadingHandler
    },
    initialState
  )
);
