import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import BusesPage from './components/bus/BusesPage';
import TrainsPage from './components/train/TrainsPage';
//import ManageBusPage from './components/bus/ManageBusPage';
import DisplayPage from './components/display/DisplayPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="buses" component={BusesPage} />
    <Route path="trains" component={TrainsPage} />
    <Route path="display" component={DisplayPage} />
   </Route>
);
/*

<Route path="bus" component={ManageBusPage} />
<Route path="bus/:id" component={ManageBusPage} />

*/
