import * as types from './actionTypes';
import trainApi from '../api/nreTrainApi';

export function loadTrainsSuccess(trains) {
  return { type: types.LOAD_TRAINS_SUCCESS, trains};
}

export function loadTrains() {
  return function(dispatch) {
    return trainApi.getAllTrains().then(trains => {
      dispatch(loadTrainsSuccess(trains));
    }).catch(error => {
      throw(error);
    });
  };
}
