import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as firebase from 'firebase';
import {Home} from './pages/Home';
import {Card} from './pages/Card';
import {signIn} from './reduxApp/actions';

export function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.default.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.email);
        dispatch(signIn(user.email))
      } else {
        console.log('no-user');
      }
    })

  });

  return (
    <BrowserRouter>
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/card'} component={Card}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
