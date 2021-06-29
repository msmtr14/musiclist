import {GET_MUSIC_LIST} from '../types';

const initialState = {music: null};

const musicReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case GET_MUSIC_LIST:
      return {...state, music: action.payload};
    default:
      return {...state};
  }
};
export default musicReducer;
