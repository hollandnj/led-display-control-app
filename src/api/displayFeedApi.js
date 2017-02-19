import fetch from 'isomorphic-fetch';

class DisplayFeedApi {

  static getDisplayFeed() {
    return fetch(`http://192.168.0.19:5000/api/ldb/list`)
      .then(response => response.json());
  }
}

export default DisplayFeedApi;
