import React from 'react';
import { Switch } from 'react-router-dom';

import Modal from './modal/modal';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Splash from './splash/splash';
import ProtectedInApp from './protectedInApp';


import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={Splash} />
      
      <ProtectedRoute path="/" component={ProtectedInApp} />
    </Switch>
  </div>
);

export default App;
