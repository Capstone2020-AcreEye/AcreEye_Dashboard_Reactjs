import React from 'react';

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

import './App.css';

import Login from './components/Login'
import Register from './components/Register'
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
