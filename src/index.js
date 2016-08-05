import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import TheaterDetails from './components/TheaterDetails'
import Interstitial from './components/Interstitial'

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Interstitial} />
    <Route path="/map" component={App} />
    <Route path="theater-details/:theaterId" component={TheaterDetails}/>
  </Router>),
  document.getElementById('root')
);
