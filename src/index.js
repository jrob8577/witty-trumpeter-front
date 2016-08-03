import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import TheaterDetails from './components/TheaterDetails'

import App from './App';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="theater-details/:theaterId" component={TheaterDetails}/>
  </Router>),
  document.getElementById('root')
);
