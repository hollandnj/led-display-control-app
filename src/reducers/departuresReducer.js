import * as types from  '../actions/actionTypes';
import initialState from './initialState';

export default function departuresReducer(state = initialState.departures, action) {
  switch(action.type) {
    case types.LOAD_DEPARTURES_SUCCESS:
      return action.departures;

    default:
      return state;
  }
}
