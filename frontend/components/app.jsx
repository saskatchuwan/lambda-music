import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Splash from './splash/splash';

import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_util';

const App = () => (
  <div>
    <header>
      {/* <h1>lambda</h1> */}
      {/* <GreetingContainer /> */}
    </header>

    <Route exact path="/" component={Splash} />

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />


  </div>
);

export default App;
