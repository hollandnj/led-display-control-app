import * as types from  '../actions/actionTypes';
import initialState from './initialState';

export default function busReducer(state = initialState.buses, action) {
  switch(action.type) {
    case types.LOAD_BUSES_SUCCESS:
      return action.buses;

    default:
      return state;
  }
}
