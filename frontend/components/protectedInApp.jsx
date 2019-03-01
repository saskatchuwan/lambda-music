import React from 'react';
import { Route, Switch } from 'react-router-dom';

//persistent components
import LeftSideNavBarContainer from './left_side_nav_bar/left_side_nav_bar_container';
import BottomMusicPlayerContainer from './bottom_music_player/bottom_music_player_container';

//dynamic main components
import Library from './library/library';
import Browse from './browse/browse';


import {
  ProtectedRoute
} from '../util/route_util';

const ProtectedInApp = () => (
  <div className='in-app-container'>

    <div className='in-app-body'>
      <ProtectedRoute path="/" component={LeftSideNavBarContainer} />

      <Switch>
        <ProtectedRoute path="/library" component={Library} />
        <ProtectedRoute path="/browse" component={Browse} />
      </Switch>
    </div>

    <div className='in-app-footer'>
      <ProtectedRoute path="/" component={BottomMusicPlayerContainer} />
    </div>
  </div>
);

export default ProtectedInApp;
