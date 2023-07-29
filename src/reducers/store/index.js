import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from './../../../ReactotronConfig';
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from '../../reducers/index';
import rootSaga from '../../sagas/index';

const middleware = [];
const enhancers = [];

const persistConfig = {
  key: 'BabyCare',
  storage: AsyncStorage,
};

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = __DEV__
  ? createSagaMiddleware({sagaMonitor})
  : createSagaMiddleware();
middleware.push(sagaMiddleware);

enhancers.push(applyMiddleware(...middleware));

const persistRootReducer = persistReducer(persistConfig, rootReducer);

export const store = __DEV__
  ? createStore(
      persistRootReducer,
      compose(...enhancers, Reactotron.createEnhancer()),
    )
  : createStore(persistRootReducer, compose(...enhancers));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
