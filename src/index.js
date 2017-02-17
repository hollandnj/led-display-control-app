// Set up your application entry point here...
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadBuses} from './actions/busActions';
import {loadTrains} from './actions/trainActions';
import {loadDisplayFeed} from './actions/displayFeedActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadBuses());
store.dispatch(loadTrains());
store.dispatch(loadDisplayFeed());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
