import React, { useState, useEffect, useLayoutEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

import './App.css';
import { auth } from './firebase'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from './reducers/userReducer'

function App() {
  const curr_user = useSelector(state => state.curr_user)
  const dispatch = useDispatch()
  const [initalLog, setInitialLog] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setCurrentUser(authUser))
        setInitialLog(true)
      }
      else {
        setInitialLog(true)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [curr_user, dispatch]);

  const loginOrDashboard = () => {
    if (curr_user != null && initalLog === true) {
      return (<><Dashboard /></>)
    }

    if (initalLog) {
      return (<><Login /></>)
    }
  }

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
          {
            loginOrDashboard
          }
        </Route>
      </Switch>
    </Router>
  );


}

export default App;
