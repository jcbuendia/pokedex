import { combineReducers } from 'redux';
import { appReducer, id as appId } from '@containers/App';
import { userAccessReducer, id as userAccessId } from '@containers/UserAccess';
import { themeReducer, id as themeId } from '@containers/Theme';
import { loaderReducer, id as loaderId } from '@containers/Loader';
import { modalReducer, id as modalId } from '@containers/Modal';
import { languageReducer, id as translationId } from '@containers/Translations';
import {
  permissionsReducer,
  id as permissionsId
} from '@containers/Permissions';
import { authReducer, id as authId } from '@containers/Auth';

export const rootReducer = combineReducers({
  [appId]: appReducer,
  [userAccessId]: userAccessReducer,
  [themeId]: themeReducer,
  [loaderId]: loaderReducer,
  [modalId]: modalReducer,
  [translationId]: languageReducer,
  [permissionsId]: permissionsReducer,
  [authId]: authReducer
});
