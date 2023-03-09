import * as constants from './constants';

export const updateValueReducer = (payload) => ({
  type: constants.HANDLE_UPDATE_VALUE_REDUCER,
  payload
});

export const handleAddValueAction = (payload) => ({
  type: constants.HANDLE_ADD_VALUE_SAGA,
  payload
});

export const handleAddValueActionStarted = () => ({
  type: constants.HANDLE_ADD_VALUE_SAGA_STARTED
});

export const handleAddValueActionError = (payload) => ({
  type: constants.HANDLE_ADD_VALUE_SAGA_ERROR,
  payload
});

export const handleAddValueActionFinished = () => ({
  type: constants.HANDLE_ADD_VALUE_SAGA_FINISHED
});

export const handleSubstractValueAction = (payload) => ({
  type: constants.HANDLE_SUBSTRACT_VALUE_SAGA,
  payload
});

export const handleSubstractValueActionStarted = () => ({
  type: constants.HANDLE_SUBSTRACT_VALUE_SAGA_STARTED
});

export const handleSubstractValueActionError = (payload) => ({
  type: constants.HANDLE_SUBSTRACT_VALUE_SAGA_ERROR,
  payload
});

export const handleSubstractValueActionFinished = () => ({
  type: constants.HANDLE_SUBSTRACT_VALUE_SAGA_FINISHED
});

export const bindActions = {
  handleAddValueAction,
  handleSubstractValueAction
};
