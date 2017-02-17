//import fetch from 'isomorphic-fetch';
import delay from './delay';

const trains = [
  {
    "id": 1,
    "platformName": "1",
    "destinationName": "Wimbledon",
    "std": "18:00",
    "etd": "18:02"
  },
  {
    "id": 2,
    "platformName": "1",
    "destinationName": "Wimbledon",
    "std": "18:30",
    "etd": "18:32"
  },
  {
    "id": 3,
    "platformName": "1",
    "destinationName": "Wimbledon",
    "std": "19:00",
    "etd": "19:02"
  },
  {
    "id": 4,
    "platformName": "1",
    "destinationName": "Wimbledon",
    "std": "19:30",
    "etd": "19:32"
  },
  {
    "id": 5,
    "platformName": "1",
    "destinationName": "Wimbledon",
    "std": "20:00",
    "etd": "20:02"
  },
  {
    "id": 6,
    "platformName": "1",
    "destinationName": "Wimbledon",
    "std": "18:00",
    "etd": "18:02"
  }
];

class TrainApi {

  //static getAllTrains(stopPoint) {
  //  stopPoint = "490020191MU";
  //  return fetch(`https://api.tfl.gov.uk/StopPoint/${stopPoint}/Arrivals?app_id=&app_key=`)
  //    .then(response => response.json());
  //}

  static getAllTrains() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], trains));
      }, delay);
    });
  }
}

export default TrainApi;
