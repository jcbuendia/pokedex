import * as constants from './constants';

export const handleLoginAction = (payload) => ({
  type: constants.LOGIN_SAGA,
  payload
});

export const handleLogoutAction = () => ({
  type: constants.LOGOUT_SAGA
});

export const bindActions = { handleLoginAction, handleLogoutAction };

export const handleLoginReducer = (payload) => ({
  type: constants.LOGIN_REDUCER,
  payload
});

export const handleLogoutReducer = () => ({
  type: constants.LOGOUT_REDUCER
});
