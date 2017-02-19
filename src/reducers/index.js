// Set up your root reducer here...
import { combineReducers } from 'redux';
import departures from './departuresReducer';
import displayFeed from './displayFeedReducer';

const rootReducer = combineReducers({
  departures,
  displayFeed
});

export default rootReducer;
