import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LibraryPlaylistContainer from './library/playlist/library_playlist_container';
import LeftSideNavBarContainer from './left_side_nav_bar/left_side_nav_bar_container';

import {
  ProtectedRoute
} from '../util/route_util';

const ProtectedInApp = () => (
  <div>
    <ProtectedRoute path="/" component={LeftSideNavBarContainer} />
    <Switch>
      <ProtectedRoute path="/library/playlists" component={LibraryPlaylistContainer} />
    </Switch>
    
  </div>
);

export default ProtectedInApp;
