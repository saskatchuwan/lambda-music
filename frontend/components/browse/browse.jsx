import React from 'react';
import { Route, Switch } from 'react-router-dom';


//dynamic main components
import BrowseTopNav from './top_nav/browse_top_nav';
import BrowseSongsContainer from './songs/browse_songs_container';

import {
  ProtectedRoute
} from '../../util/route_util';

const BrowseContainer = () => (
  <div className='main-view-body-central-container'>
    <ProtectedRoute path="/browse" component={BrowseTopNav} />

    <Switch>
      <ProtectedRoute path="/browse/featured" component={BrowseSongsContainer} />
    </Switch>

  </div>
);

export default BrowseContainer;
