import axios from 'axios';
import {GET_MUSIC_LIST} from '../types';

export const getMusics = () => async dispatch => {
  try {
    const request = await axios
      .get('https://itunes.apple.com/search?term=Michael+jackson')
      .then(res => res)
      .catch(err => {
        console.error(err.response);
        return null;
      });
    if (request && request.status === 200) {
      dispatch({type: GET_MUSIC_LIST, payload: request.data?.results ?? []});
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
