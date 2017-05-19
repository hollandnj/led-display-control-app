import fetch from 'isomorphic-fetch';

class DisplayFeedApi {

  static getDisplayFeed() {
    return fetch(`http://192.168.0.2:5000/api/nre/MDS/list`)
      .then(response => response.json());
  }
}

export default DisplayFeedApi;
