import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LibraryPlaylistContainer from './library/playlist/library_playlist_container';
import LeftSideNavBarContainer from './left_side_nav_bar/left_side_nav_bar_container';
import BottomMusicPlayerContainer from './bottom_music_player/bottom_music_player_container';
import PlaylistContainer from './playlist_spotlight/playlist_container';

import {
  ProtectedRoute
} from '../util/route_util';

const ProtectedInApp = () => (
  <div className='in-app-container'>
    <div className='in-app-body'>
      <ProtectedRoute className='in-app-side-bar-component' path="/" component={LeftSideNavBarContainer} />

      <Switch className='in-app-main-component'>
        <ProtectedRoute path="/library/playlists" component={LibraryPlaylistContainer} />
        {/* <ProtectedRoute path="/playlist" component={PlaylistContainer} /> */}
      </Switch>
    </div>

    <div className='in-app-footer'>
      <ProtectedRoute className='in-app-footer-component' path="/" component={BottomMusicPlayerContainer} />
    </div>
  </div>
);

export default ProtectedInApp;
