import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import usersReducer from '../../../reducers/users_reducer';

class LibraryPlayListIndex extends React.Component {

  componentDidMount () {
    this.props.fetchUserPlaylists(this.props.currentUser.id);
  }

  // need to clear the data after unmounting this component
 
  render () {
    let { playlists, users } = this.props;

    let playlistItems;

    playlistItems = playlists.map(playlist => {

      let ownerId = playlist.ownerId;
      let owner = users[ownerId-1];

      return (
        <div className = 'tile-container' key={playlist.id}>
          <a href={`/#/playlist/${playlist.id}`}>
            <div className= 'tile'>
              {/* will prob insert an image here later */}
            </div>
          </a>

          <strong>
            <a href={`/#/playlist/${playlist.id}`}>
            {playlist.name}
            </a>
          </strong>
          
            <br />
          {owner.username}
        </div>
      )
    });

    return (
      <div className='content-index-display-container-tile'>
          <div className='index-display-section-tile'>
            {playlistItems}
          </div>
      </div>
    );
  }
}

export default LibraryPlayListIndex;