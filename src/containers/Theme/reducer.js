import produce from 'immer';
import { handleActions } from 'redux-actions';
import { initialState } from './state';
import * as constants from './constants';

const changeThemeHandler = (state, action) => {
  const { payload } = action;

  return payload;
};

export const themeReducer = produce(
  handleActions(
    {
      [constants.HANDLE_CHANGE_THEME_REDUCER]: changeThemeHandler
    },
    initialState
  )
);
