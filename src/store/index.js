import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import AsyncStorage from '@react-native-community/async-storage';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import reducer from './reducer';
import reducer from './../reducers/index'

const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      // eslint-disable-next-line no-undef
      predicate: () => __DEV__,
    }),
  ),
];

/* eslint-disable no-undef */
const composeEnhancers =
  (__DEV__ &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

const persistConfig = {
  key: 'root',
  storage,
  keyPrefix: '',
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);
export default () => {
    let store = createStore(persistedReducer, {}, enhancer);
    let persistor = persistStore(store)
    return { store, persistor }
  }