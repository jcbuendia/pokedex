import produce from 'immer';
import { handleActions } from 'redux-actions';
import { initialState } from './state';
import * as constants from './constants';
import { objectStatus } from './helpers';

const loginHandler = (state, { payload }) => {
  return {
    ...state,
    status: objectStatus.loggedIn,
    session: payload.user,
    token: payload.token
  };
};

const logoutHandler = (state) => {
  return {
    ...state,
    ...initialState,
    status: objectStatus.loggedOut
  };
};

export const authReducer = produce(
  handleActions(
    {
      [constants.LOGIN_REDUCER]: loginHandler,
      [constants.LOGOUT_REDUCER]: logoutHandler
    },
    initialState
  )
);
