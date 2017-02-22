import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Routing Components
import App from './App';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import LayoutFull from './LayoutFull';
import LayoutBlank from './LayoutBlank';

module.exports = (
  <Route path="/" component={App}>
    <Route component={LayoutFull}>
      <IndexRoute component={Home}/>
      <Route path='About' component={About}/>
    </Route>
	/*
    <Route component={LayoutBlank}>
      <Route path='Blank/About' component={About}/>
      <Route path='Blank/Home' component={Home}/>
      <Route path='*' component={NotFound}/>
    </Route>
	*/
  </Route>
)
