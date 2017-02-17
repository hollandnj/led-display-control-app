import * as types from  '../actions/actionTypes';
import initialState from './initialState';

export default function trainReducer(state = initialState.trains, action) {
  switch(action.type) {
    case types.LOAD_TRAINS_SUCCESS:
      return action.trains;

    default:
      return state;
  }
}
