import React from 'react'
import { Router, Route, Switch, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import Admin from './containers/Admin';
import AttNavbar from './components/AttNavbar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css'

export default () => (
  <Router>
    <div>
      <AttNavbar />
      <div className="content">
        <Switch>
          <Route path='/admin' component={Admin} />
          <Routes />
        </Switch>
      </div>
    </div>
  </Router>
)
