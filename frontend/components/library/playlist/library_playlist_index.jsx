import React from 'react';
import { Link, NavLink } from 'react-router-dom';


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
              <img id='nav-icon' src={window.images.playlist_hold} />
            </div>
          </a>

          <strong>
            <a href={`/#/playlist/${playlist.id}`}>
            {playlist.name}
            </a>
          </strong>
          
            <br />

          {/* page breaks when navigating back to this page from the /playlist/1 page */}
          {/* {owner.username} */}
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