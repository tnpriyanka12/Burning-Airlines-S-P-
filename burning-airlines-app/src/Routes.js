import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Search from './components/Search';
import Seat from './components/Seat';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Search } />
      <Route exact path="/Seat" component={ Seat } />
    </div>
  </Router>
);

export default Routes;
