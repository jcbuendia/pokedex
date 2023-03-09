import { put, select, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import * as selectors from './selectors';
import crashlytics from '@react-native-firebase/crashlytics';

function* handleAddValueSaga(action) {
  try {
    yield put(actions.handleAddValueActionStarted());
    const currentValue = yield select(selectors.valueSelector);

    crashlytics().log(`going to add value. Current: ${currentValue}`);

    const newValueCalc = currentValue + 1;
    yield put(actions.updateValueReducer({ newValue: newValueCalc }));
  } catch (error) {
    yield put(actions.handleAddValueActionError(error));
  }
  yield put(actions.handleAddValueActionFinished());
}

function* handleSubstractValueSaga(action) {
  try {
    yield put(actions.handleSubstractValueActionStarted());
    const currentValue = yield select(selectors.valueSelector);

    crashlytics().log(`going to substract value. Current: ${currentValue}`);

    if (currentValue === 0) {
      throw new Error('Tried to substract 1 when value was 0.');
    }

    const newValueCalc = currentValue - 1;
    yield put(actions.updateValueReducer({ newValue: newValueCalc }));
  } catch (error) {
    yield put(actions.handleSubstractValueActionError(error));
  }
  yield put(actions.handleSubstractValueActionFinished());
}

export function* userAccessSaga() {
  yield takeLatest(constants.HANDLE_ADD_VALUE_SAGA, handleAddValueSaga);
  yield takeLatest(
    constants.HANDLE_SUBSTRACT_VALUE_SAGA,
    handleSubstractValueSaga
  );
}
