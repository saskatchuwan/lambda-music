import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PlaylistIndexItem from './playlist_index_item';


class LibraryPlayListIndex extends React.Component {

  componentDidMount () {
    this.props.fetchUserPlaylists(this.props.currentUser.id);
  }

  componentWillUnmount () {
    this.props.clearPlaylists();
  }
 
  render () {
    let { playlists, users } = this.props;

    let playlistItems;

    playlistItems = playlists.map(playlist => {

      let ownerId = playlist.ownerId;
      let owner = users[ownerId-1];

      return (
        <PlaylistIndexItem key={playlist.id} playlist={playlist} />
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