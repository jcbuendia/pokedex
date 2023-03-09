import { put, select, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import * as selectors from './selectors';
import crashlytics from '@react-native-firebase/crashlytics';

function* handleInitializeSaga(action) {
  try {
    yield put(actions.handleInitializeActionStarted());
    yield put(actions.loadingReducer({ isLoading: true }));

    let isLoading = yield select(selectors.loadingSelector);
    console.log('isLoading on Saga Started === ', isLoading);

    yield delay(5000);
    yield put(actions.loadingReducer({ isLoading: false }));

    isLoading = yield select(selectors.loadingSelector);
    console.log('isLoading on Saga Finished === ', isLoading);
  } catch (error) {
    yield put(actions.handleInitializeActionError(error));
  }
  yield put(actions.handleInitializeActionFinished());
}

function* unexpectedErrorHandler(action) {
  crashlytics().recordError(action.payload);
}

export function* appSaga() {
  yield takeLatest(constants.HANDLE_INITIALIZE_SAGA, handleInitializeSaga);

  yield takeEvery(
    (action) => !!action.type.match(/(SAGA|WORKFLOW)_ERROR/i),
    unexpectedErrorHandler
  );
}
