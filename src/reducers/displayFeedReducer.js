import * as types from  '../actions/actionTypes';
import initialState from './initialState';

export default function displayFeedReducer(state = initialState.displayFeed, action) {
  switch(action.type) {
    case types.LOAD_DISPLAY_FEED_SUCCESS:
      return action.displayFeed;

    default:
      return state;
  }
}
