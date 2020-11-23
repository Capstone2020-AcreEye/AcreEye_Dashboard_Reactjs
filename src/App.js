import React, {useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

import './App.css';
import {auth} from './firebase'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import {useSelector, useDispatch} from 'react-redux'
import {setCurrentUser} from './reducers/userReducer'

function App() {
  const curr_user = useSelector(state => state.curr_user)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setCurrentUser(authUser))
      } 
    })

    return () => {
      unsubscribe()
    }
  }, [curr_user, dispatch]);

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
            curr_user != null? (<Dashboard/>) : (<Login/>) 
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
