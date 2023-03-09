import { all, fork } from 'redux-saga/effects';
import { appSaga } from '@containers/App';
import { userAccessSaga } from '@containers/UserAccess';
import { themeSaga } from '@containers/Theme';
import { loaderSaga } from '@containers/Loader';
import { permissionsSaga } from '@containers/Permissions';
import { modalSaga } from '@containers/Modal';
import { languageSaga } from '@containers/Translations';
import { authSaga } from '@containers/Auth';

export function* rootSaga() {
  yield all([fork(appSaga)]);
  yield all([fork(userAccessSaga)]);
  yield all([fork(themeSaga)]);
  yield all([fork(loaderSaga)]);
  yield all([fork(modalSaga)]);
  yield all([fork(languageSaga)]);
  yield all([fork(permissionsSaga)]);
  yield all([fork(authSaga)]);
}
