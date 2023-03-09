import * as constants from './constants';

export const changeLanguageReducer = (payload) => ({
  type: constants.HANDLE_CHANGE_LANGUAGE_REDUCER,
  payload
});

export const handleChangeLanguageAction = (payload) => ({
  type: constants.HANDLE_CHANGE_LANGUAGE_SAGA,
  payload
});
