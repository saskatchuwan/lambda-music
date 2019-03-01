import React from 'react';
import { Route, Switch } from 'react-router-dom';


//dynamic main components
import LibraryTopNav from './top_nav/library_top_nav';
import LibraryPlaylistContainer from './playlist/library_playlist_container';
import LibrarySongsContainer from './songs/library_songs_index';

import {
  ProtectedRoute
} from '../../util/route_util';

const LibraryContainer = () => (
  <div className='library-container'>
    <ProtectedRoute path="/library" component={LibraryTopNav} />

    <Switch>
      <ProtectedRoute path="/library/playlists" component={LibraryPlaylistContainer} />
      <ProtectedRoute path="/library/songs" component={LibrarySongsContainer} />
    </Switch>

  </div>
);

export default LibraryContainer;
