import produce from 'immer';
import { handleActions } from 'redux-actions';
import { initialState } from './state';
import * as constants from './constants';

const changeLanguageHandler = (state, action) => {
  const { payload } = action;

  return payload;
};

export const languageReducer = produce(
  handleActions(
    {
      [constants.HANDLE_CHANGE_LANGUAGE_REDUCER]: changeLanguageHandler
    },
    initialState
  )
);
