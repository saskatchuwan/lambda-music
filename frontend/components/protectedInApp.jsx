import React from 'react';
import { Route, Switch } from 'react-router-dom';

//persistent components
import LeftSideNavBarContainer from './left_side_nav_bar/left_side_nav_bar_container';
import BottomMusicPlayerContainer from './bottom_music_player/bottom_music_player_container';

//dynamic main components
import Library from './library/library';
import Browse from './browse/browse';
import PlaylistContainer from './playlist_spotlight/playlist_container';
import AlbumContainer from './album_spotlight/album_container';


import {
  ProtectedRoute
} from '../util/route_util';

const ProtectedInApp = () => (
  <div className='main-view-container'>

    <div className='main-view-body-container'>
      <ProtectedRoute path="/" component={LeftSideNavBarContainer} />

      <Switch>
        <ProtectedRoute path="/library" component={Library} />
        <ProtectedRoute path="/browse" component={Browse} />
        <ProtectedRoute path="/playlist/:playlistId" component={PlaylistContainer} />
        <ProtectedRoute path="/album/:albumId" component={AlbumContainer} />
      </Switch>
    </div>

    <div className='main-view-footer'>
      <ProtectedRoute path="/" component={BottomMusicPlayerContainer} />
    </div>
  </div>
);

export default ProtectedInApp;
