import React, { Component } from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom'

import logo from './logo.svg';
import './styles.css';

import Home from '../Home';
import PhotoShare from '../PhotoShare';
import Locations from '../Locations';

class App extends Component {
  render() {
    return (
      <div className="app-background">
        <HashRouter>
          <div>
            <Route exact path="/" component={Home}  />
            <Route path="/photos" component={PhotoShare} />
            <Route path="/locations" component={Locations} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
