import * as constants from './constants';

export const showLoaderReducer = () => ({
  type: constants.HANDLE_SHOW_LOADER_REDUCER
});

export const hideLoaderReducer = () => ({
  type: constants.HANDLE_HIDE_LOADER_REDUCER
});

export const handleShowLoaderAction = () => ({
  type: constants.HANDLE_SHOW_LOADER_SAGA
});

export const handleHideLoaderAction = () => ({
  type: constants.HANDLE_HIDE_LOADER_SAGA
});
