import React from 'react';
import { Switch } from 'react-router-dom';


//dynamic main components
import BrowseTopNav from './browse_top_nav';
import BrowseSongsContainer from './browse_songs_container';
import BrowseAlbumsContainer from './browse_albums_container';
import BrowsePlaylistsContainer from './browse_playlists_container';

import {
  ProtectedRoute
} from '../../util/route_util';

const BrowseContainer = () => (
  <div className='main-view-body-central-container'>
    <ProtectedRoute path="/browse" component={BrowseTopNav} />

    <Switch>
      <ProtectedRoute path="/browse/featured" component={BrowseSongsContainer} />
      <ProtectedRoute path="/browse/newreleases" component={BrowseAlbumsContainer} />
      <ProtectedRoute path="/browse/genres" component={BrowsePlaylistsContainer} />
    </Switch>

  </div>
);

export default BrowseContainer;
