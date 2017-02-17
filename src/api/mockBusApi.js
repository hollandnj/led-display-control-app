import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const buses = [
{
"$type": "Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities",
"id": "1542257140",
"operationType": 1,
"vehicleId": "LX58CWR",
"naptanId": "490020191MU",
"stationName": "South Thames College",
"lineId": "154",
"lineName": "154",
"platformName": "MU",
"direction": "inbound",
"bearing": "181",
"destinationNaptanId": "",
"destinationName": "West Croydon",
"timestamp": "2016-11-24T22:00:05Z",
"timeToStation": 485,
"currentLocation": "",
"towards": "North Cheam or Sutton",
"expectedArrival": "2016-11-24T22:08:10.5102364Z",
"timeToLive": "2016-11-24T22:08:40.5102364Z",
"modeName": "bus",
"timing": {
"$type": "Tfl.Api.Presentation.Entities.PredictionTiming, Tfl.Api.Presentation.Entities",
"countdownServerAdjustment": "00:00:01.5073241",
"source": "2016-11-18T21:50:26.142Z",
"insert": "2016-11-24T21:59:54.951Z",
"read": "2016-11-24T21:59:54.951Z",
"sent": "2016-11-24T22:00:05Z",
"received": "0001-01-01T00:00:00Z"
}
},
{
"$type": "Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities",
"id": "-1902889056",
"operationType": 1,
"vehicleId": "LX09EVH",
"naptanId": "490020191MU",
"stationName": "South Thames College",
"lineId": "80",
"lineName": "80",
"platformName": "MU",
"direction": "inbound",
"bearing": "181",
"destinationNaptanId": "",
"destinationName": "Belmont, High Down & Downview",
"timestamp": "2016-11-24T22:00:05Z",
"timeToStation": 1360,
"currentLocation": "",
"towards": "North Cheam or Sutton",
"expectedArrival": "2016-11-24T22:22:45.5102364Z",
"timeToLive": "2016-11-24T22:23:15.5102364Z",
"modeName": "bus",
"timing": {
"$type": "Tfl.Api.Presentation.Entities.PredictionTiming, Tfl.Api.Presentation.Entities",
"countdownServerAdjustment": "00:00:01.5716148",
"source": "2016-11-18T21:50:26.142Z",
"insert": "2016-11-24T21:59:04.374Z",
"read": "2016-11-24T21:59:04.374Z",
"sent": "2016-11-24T22:00:05Z",
"received": "0001-01-01T00:00:00Z"
}
},
{
"$type": "Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities",
"id": "1486769290",
"operationType": 1,
"vehicleId": "YX65RNZ",
"naptanId": "490020191MU",
"stationName": "South Thames College",
"lineId": "80",
"lineName": "80",
"platformName": "MU",
"direction": "inbound",
"bearing": "181",
"destinationNaptanId": "",
"destinationName": "Belmont, High Down & Downview",
"timestamp": "2016-11-24T22:00:05Z",
"timeToStation": 407,
"currentLocation": "",
"towards": "North Cheam or Sutton",
"expectedArrival": "2016-11-24T22:06:52.5102364Z",
"timeToLive": "2016-11-24T22:07:22.5102364Z",
"modeName": "bus",
"timing": {
"$type": "Tfl.Api.Presentation.Entities.PredictionTiming, Tfl.Api.Presentation.Entities",
"countdownServerAdjustment": "00:00:00.7644508",
"source": "2016-11-18T21:50:26.142Z",
"insert": "2016-11-24T21:59:34.493Z",
"read": "2016-11-24T21:59:34.493Z",
"sent": "2016-11-24T22:00:05Z",
"received": "0001-01-01T00:00:00Z"
}
},
{
"$type": "Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities",
"id": "-1823536011",
"operationType": 1,
"vehicleId": "LX09AXV",
"naptanId": "490020191MU",
"stationName": "South Thames College",
"lineId": "93",
"lineName": "93",
"platformName": "MU",
"direction": "inbound",
"bearing": "181",
"destinationNaptanId": "",
"destinationName": "North Cheam",
"timestamp": "2016-11-24T22:00:05Z",
"timeToStation": 687,
"currentLocation": "",
"towards": "North Cheam or Sutton",
"expectedArrival": "2016-11-24T22:11:32.5102364Z",
"timeToLive": "2016-11-24T22:12:02.5102364Z",
"modeName": "bus",
"timing": {
"$type": "Tfl.Api.Presentation.Entities.PredictionTiming, Tfl.Api.Presentation.Entities",
"countdownServerAdjustment": "00:00:01.5658152",
"source": "2016-11-18T21:50:26.142Z",
"insert": "2016-11-24T21:59:24.493Z",
"read": "2016-11-24T21:59:24.493Z",
"sent": "2016-11-24T22:00:05Z",
"received": "0001-01-01T00:00:00Z"
}
},
{
"$type": "Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities",
"id": "82932132",
"operationType": 1,
"vehicleId": "PJ02RFF",
"naptanId": "490020191MU",
"stationName": "South Thames College",
"lineId": "93",
"lineName": "93",
"platformName": "MU",
"direction": "inbound",
"bearing": "181",
"destinationNaptanId": "",
"destinationName": "North Cheam",
"timestamp": "2016-11-24T22:00:05Z",
"timeToStation": 1217,
"currentLocation": "",
"towards": "North Cheam or Sutton",
"expectedArrival": "2016-11-24T22:20:22.5102364Z",
"timeToLive": "2016-11-24T22:20:52.5102364Z",
"modeName": "bus",
"timing": {
"$type": "Tfl.Api.Presentation.Entities.PredictionTiming, Tfl.Api.Presentation.Entities",
"countdownServerAdjustment": "00:00:01.5802622",
"source": "2016-11-18T21:50:26.142Z",
"insert": "2016-11-24T21:59:24.493Z",
"read": "2016-11-24T21:59:24.493Z",
"sent": "2016-11-24T22:00:05Z",
"received": "0001-01-01T00:00:00Z"
}
}
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (bus) => {
  return replaceAll(bus.title, ' ', '-');
};

class BusApi {
  static getAllBuses() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], buses));
      }, delay);
    });
  }

  static saveBus(bus) {
    bus = Object.assign({}, bus); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minBusTitleLength = 1;
        if (bus.title.length < minBusTitleLength) {
          reject(`Title must be at least ${minBusTitleLength} characters.`);
        }

        if (bus.id) {
          const existingBusIndex = buses.findIndex(a => a.id == bus.id);
          buses.splice(existingBusIndex, 1, bus);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new buses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          bus.id = generateId(bus);
          bus.watchHref = `http://www.pluralsight.com/buses/${bus.id}`;
          buses.push(bus);
        }

        resolve(bus);
      }, delay);
    });
  }

  static deleteBus(busId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfBusToDelete = buses.findIndex(bus => {
          bus.busId == busId;
        });
        buses.splice(indexOfBusToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BusApi;
