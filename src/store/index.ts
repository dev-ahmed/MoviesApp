import {createStore, applyMiddleware, compose} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import Logger from 'redux-logger';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reducers} from './reducers';

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers || compose;
}

const middleware = applyMiddleware(thunk, Logger);

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['movies'],
};

const persistedReducer = persistReducer(config, reducers);

const store = createStore(persistedReducer, {}, composeEnhancers(middleware));

const persistor = persistStore(store);

export {store, persistor};
