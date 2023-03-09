import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const appliedMiddlewares = applyMiddleware(...middlewares);

const devtoolsComposer = __DEV__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : undefined;

const composedEnhancers = devtoolsComposer
  ? devtoolsComposer(appliedMiddlewares)
  : appliedMiddlewares;

const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export { store };
