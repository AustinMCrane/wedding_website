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
import TabBar from '../../Components/TabBar';

class App extends Component {
  render() {
    return (
      <div className="app-background">
        <div>
          <div>
            <HashRouter>
              <div>
                <Route path="/" component={TabBar} />
                <Route exact path="/" component={Home}  />
                <Route path="/photos" component={PhotoShare} />
                <Route path="/locations" component={Locations} />
              </div>
            </HashRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
