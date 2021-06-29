// import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
// import {persistStore, persistReducer} from 'redux-persist';
import RootReducer from './reducers/index';
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };
const composerRelease = __DEV__
  ? composeWithDevTools(applyMiddleware(thunk, logger, promiseMiddleware))
  : applyMiddleware(thunk, promiseMiddleware);

// const persistedReducer = persistReducer(persistConfig, RootReducer);
const store = createStore(RootReducer, composerRelease);
// const persistor = persistStore(store);
export {store};
