import React from 'react';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import './App.css';

import Login from './components/Login'
import Register from './components/Register'
import Settings from './components/Settings'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path='/'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
