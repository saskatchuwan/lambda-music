import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Splash from './splash/splash';
import LibraryPlaylistContainer from './library/playlist/library_playlist_container';

import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_util';

const App = () => (
  <div>
    <header>
      {/* comment greeting container in and comment out splash page to logout */}
      {/* <GreetingContainer /> */}
    </header>

    
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/library/playlists" component={LibraryPlaylistContainer} />
      <Route path="/" component={Splash} />
    </Switch>

  </div>
);

export default App;
