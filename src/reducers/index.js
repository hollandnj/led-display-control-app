// Set up your root reducer here...
import { combineReducers } from 'redux';
import buses from './busReducer';
import trains from './trainReducer';
import displayFeed from './displayFeedReducer';

const rootReducer = combineReducers({
  buses,
  trains,
  displayFeed
});

export default  rootReducer;
