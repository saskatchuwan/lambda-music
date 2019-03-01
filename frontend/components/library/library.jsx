import React from 'react';
import { Route, Switch } from 'react-router-dom';


//dynamic main components
import LibraryTopNav from './top_nav/library_top_nav';
import LibraryPlaylistContainer from './playlist/library_playlist_container';
import LibrarySongsContainer from './songs/library_songs_container';

import {
  ProtectedRoute
} from '../../util/route_util';

const LibraryContainer = () => (
  <div className='main-view-body-central-container'>
    <ProtectedRoute path="/library" component={LibraryTopNav} />

    <Switch>
      <ProtectedRoute path="/library/songs" component={LibrarySongsContainer} />
      <ProtectedRoute path="/library/playlists" component={LibraryPlaylistContainer} />
    </Switch>

  </div>
);

export default LibraryContainer;
