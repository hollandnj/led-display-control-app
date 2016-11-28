import fetch from 'isomorphic-fetch';

class DisplayFeedApi {

  static getDisplayFeed() {
    return fetch(`http://localhost:5000/api/x/list`)
      .then(response => response.json());
  }
}

export default DisplayFeedApi;
