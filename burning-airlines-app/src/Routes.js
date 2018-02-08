import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Search from './components/Search';
import Seat from './components/Seat';
import Home from './components/Home';
import Airplane from './components/Airplane';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/seat" component={ Seat } />
      <Route path="/flights/:id" component={ Airplane } />
    </div>
  </Router>
);

export default Routes;
