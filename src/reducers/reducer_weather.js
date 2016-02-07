import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('action', FETCH_WEATHER);
  switch (action.type) {
    case FETCH_WEATHER:
      const data = [ action.payload.data, ...state ]; // same as [action.payload.data].concat(sate); -> new item at the top 
      return data;
  }
  return state;
}