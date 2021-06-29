import {combineReducers} from 'redux';
import musicReducer from './musicReducer';
const RootReducer = combineReducers({
  music: musicReducer,
});

export default RootReducer;
