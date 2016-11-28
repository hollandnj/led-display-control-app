import * as types from './actionTypes';
import busApi from '../api/tflBusApi';

export function loadBusesSuccess(buses) {
  buses.sort(function(a, b) {
      return parseInt(a.timeToStation) - parseInt(b.timeToStation);
  });
  return { type: types.LOAD_BUSES_SUCCESS, buses};
}

export function loadBuses() {
  return function(dispatch) {
    return busApi.getAllBuses().then(buses => {
      dispatch(loadBusesSuccess(buses));
    }).catch(error => {
      throw(error);
    });
  };
}
