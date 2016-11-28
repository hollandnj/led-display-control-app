import * as types from  '../actions/actionTypes';
import initialState from './initialState';

export default function trainReducer(state = initialState.trains, action) {
  switch(action.type) {

    default:
      return state;
  }
}
