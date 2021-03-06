import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import DeparturesPage from './components/departures/DeparturesPage';
//import ManageBusPage from './components/bus/ManageBusPage';
import DisplayPage from './components/display/DisplayPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="departures" component={DeparturesPage} />
    <Route path="display" component={DisplayPage} />
   </Route>
);
/*

<Route path="bus" component={ManageBusPage} />
<Route path="bus/:id" component={ManageBusPage} />

*/
