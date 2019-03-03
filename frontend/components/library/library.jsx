import React from 'react';
import { Route, Switch } from 'react-router-dom';


//dynamic main components
import LibraryTopNav from './top_nav/library_top_nav';
import LibraryPlaylistContainer from './playlist/library_playlist_container';
import LibrarySongsContainer from './songs/library_songs_container';
import LibraryArtistsContainer from './artists/library_artists_container';
import LibraryAlbumsContainer from './albums/library_albums_container';

import {
  ProtectedRoute
} from '../../util/route_util';

const LibraryContainer = () => (
  <div className='main-view-body-central-container'>
    <ProtectedRoute path="/library" component={LibraryTopNav} />

    <Switch>
      <ProtectedRoute path="/library/songs" component={LibrarySongsContainer} />
      <ProtectedRoute path="/library/playlists" component={LibraryPlaylistContainer} />
      <ProtectedRoute path="/library/artists" component={LibraryArtistsContainer} />
      <ProtectedRoute path="/library/albums" component={LibraryAlbumsContainer} />
    </Switch>

  </div>
);

export default LibraryContainer;
