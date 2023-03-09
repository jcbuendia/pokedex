import * as constants from './constants';

export const changeThemeReducer = (payload) => ({
  type: constants.HANDLE_CHANGE_THEME_REDUCER,
  payload
});

export const handleChangeThemeAction = (payload) => ({
  type: constants.HANDLE_CHANGE_THEME_SAGA,
  payload
});
