import * as constants from './constants';

export const loadingReducer = (payload) => ({
  type: constants.HANDLE_LOADING_REDUCER,
  payload
});

export const handleInitializeAction = (payload) => ({
  type: constants.HANDLE_INITIALIZE_SAGA,
  payload
});

export const handleInitializeActionStarted = () => ({
  type: constants.HANDLE_INITIALIZE_SAGA_STARTED
});

export const handleInitializeActionError = (payload) => ({
  type: constants.HANDLE_INITIALIZE_SAGA_ERROR,
  payload
});

export const handleInitializeActionFinished = () => ({
  type: constants.HANDLE_INITIALIZE_SAGA_FINISHED
});

export const bindActions = {
  handleInitializeAction
};
