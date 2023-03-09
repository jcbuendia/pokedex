import * as constants from './constants';

export const openModalReducer = (payload) => ({
  type: constants.HANDLE_OPEN_MODAL_REDUCER,
  payload
});

export const closeModalReducer = () => ({
  type: constants.HANDLE_CLOSE_MODAL_REDUCER
});

export const handleOpenModalAction = (payload) => ({
  type: constants.HANDLE_OPEN_MODAL_SAGA,
  payload
});

export const handleCloseModalAction = () => ({
  type: constants.HANDLE_CLOSE_MODAL_SAGA
});
