import React from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//persistent components
import LeftSideNavBarContainer from './left_side_nav_bar/left_side_nav_bar_container';
import PlayBarContainer from './play_bar/play_bar_container';

//dynamic main components
import Library from './library/library';
import Browse from './browse/browse';
import PlaylistContainer from './playlist_spotlight/playlist_container';
import AlbumContainer from './album_spotlight/album_container';
import Search from './search/search';


import {
  ProtectedRoute
} from '../util/route_util';

const mapStateToProps = state => {
  return({
    userActionMsg: state.entities.playlistSongs.playlistSongsMsg,
  });
};


class ProtectedInApp extends React.Component {

  render() {
    return (
      <div className='main-view-container'>
      
        <div id="note">
          {this.props.userActionMsg}
        </div>
    
        <div className='main-view-body-container'>
          <ProtectedRoute path="/" component={LeftSideNavBarContainer} />
    
          <Switch>
            <ProtectedRoute path="/library" component={Library} />
            <ProtectedRoute path="/browse" component={Browse} />
            <ProtectedRoute path="/playlist/:playlistId" component={PlaylistContainer} />
            <ProtectedRoute path="/album/:albumId" component={AlbumContainer} />
            <ProtectedRoute path="/search" component={Search} />
          </Switch>
        </div>
    
        <div className='main-view-footer'>
          <ProtectedRoute path="/" component={PlayBarContainer} />
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, null)(ProtectedInApp);
