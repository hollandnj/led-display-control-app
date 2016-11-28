import * as types from './actionTypes';
import displayFeedApi from '../api/displayFeedApi';

export function loadDisplayFeedSuccess(displayFeed) {
  return { type: types.LOAD_DISPLAY_FEED_SUCCESS, displayFeed};
}

export function loadDisplayFeed() {
  return function(dispatch) {
    return displayFeedApi.getDisplayFeed().then(data => {
      dispatch(loadDisplayFeedSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}
