import fetch from 'isomorphic-fetch';

//"https://api.tfl.gov.uk/StopPoint/490020191MU/Arrivals?app_id=&app_key="

class BusApi {

  static getAllBuses(stopPoint) {
    stopPoint = "490020191MU";
    return fetch(`https://api.tfl.gov.uk/StopPoint/${stopPoint}/Arrivals?app_id=&app_key=`)
      .then(response => response.json());
  }
}

export default BusApi;
