import React from 'react';
import { Link } from 'react-router-dom';

class LibraryPlayListIndex extends React.Component {

  componentDidMount () {
    this.props.fetchUserPlaylists(this.props.currentUser.id);
  }
 
  render () {
    let { playlists } = this.props;

    let playlistItems;

    playlistItems = playlists.map(playlist => {
      return (
        <li key={playlist.id}>
          {playlist.name}
        </li>
      )
    });

    return (
      <div className='content-index-display-container'>
          <h1>Playlists curated by {this.props.currentUser.username}</h1>
          
          <div className='index-display-section'>
            { playlistItems }
          </div>
      </div>

 
    );
  }
}

export default LibraryPlayListIndex;