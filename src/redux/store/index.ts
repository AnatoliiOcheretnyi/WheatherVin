import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from '../saga';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const appliedMiddlewares = [sagaMiddleware];

const middlewares = [applyMiddleware(...appliedMiddlewares)];

const persistedReducer = persistReducer(persistConfig, rootReducer());

const store = createStore(
  persistedReducer,
  composeWithDevTools(...middlewares),
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

const {getState, dispatch} = store;

export type AppDispatch = typeof store.dispatch;
export {store, persistor, getState, dispatch};
