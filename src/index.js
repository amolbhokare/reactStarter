import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import route from './components/Routes';
import './assets/css/index.css';

ReactDOM.render(
  <Router history={browserHistory} routes={route} />,
  document.getElementById('root')
);
