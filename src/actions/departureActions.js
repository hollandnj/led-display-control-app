import * as types from './actionTypes';
import DeparturesApi from '../api/departuresApi';

export function loadDeparturesSuccess(departures) {
  departures.sort(function(a, b) {
      return parseInt(a.timeToStation) - parseInt(b.timeToStation);
  });
  return { type: types.LOAD_DEPARTURES_SUCCESS, departures};
}

export function loadDepartures() {
  return function(dispatch) {
    return DeparturesApi.getDepartures().then(departures => {
      dispatch(loadDeparturesSuccess(departures));
    }).catch(error => {
      throw(error);
    });
  };
}
