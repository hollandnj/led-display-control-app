import fetch from 'isomorphic-fetch';

class DeparturesApi {

  static getDepartures() {
    let departures = [];
    let stationCode = 'MDS';
    let bus_north_stop_point = '490004960N';
    let bus_south_stop_point = '490020191MU';

    let urls = [
      `http://192.168.0.19:5000/api/nre/${stationCode}/list`,
      `http://192.168.0.19:5000/api/tfl/${bus_north_stop_point}/list`,
      `http://192.168.0.19:5000/api/tfl/${bus_south_stop_point}/list`
    ];

    let promise0 = fetch(urls[0])
    .then(response => response.json());
    let promise1 = fetch(urls[1])
    .then(response => response.json());
    let promise2 = fetch(urls[2])
    .then(response => response.json());

    return Promise.all([promise0, promise1, promise2])
    .then(function(data){
      data.forEach(function(item) {
        departures = departures.concat(item);
      });
      return departures;
    });
  }
}

export default DeparturesApi;
