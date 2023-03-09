import produce from 'immer';
import { handleActions } from 'redux-actions';
import { initialState } from './state';
import * as constants from './constants';

const showLoaderHandler = (state) => {
  return {
    ...state,
    visible: state.visible + 1
  };
};

const hideLoaderHandler = (state) => {
  return {
    ...state,
    visible: state.visible - 1
  };
};

export const loaderReducer = produce(
  handleActions(
    {
      [constants.HANDLE_SHOW_LOADER_REDUCER]: showLoaderHandler,
      [constants.HANDLE_HIDE_LOADER_REDUCER]: hideLoaderHandler
    },
    initialState
  )
);
