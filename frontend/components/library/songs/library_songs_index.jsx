import React from 'react';
import { Link } from 'react-router-dom';

class LibrarySongsIndex extends React.Component {

  componentDidMount () {
    this.props.fetchUserSavedSongs(this.props.currentUser.id);
  }

  componentWillUnmount () {
    this.props.clearSongs();
  }
 
  render () {
    let songItems;

    songItems = this.props.songs.map(song => {
      
      //this.props.albums  and artists are objects
      let album = this.props.albums[song.albumId];
      let artist = this.props.artists[song.artistId];


      return (
        <li key={song.id}>
          <strong>{song.title}</strong>
          <br/>
          {artist.name} - {album.title}
        </li>
      )
    });

    return (
      <div className='content-index-display-container-list'>
          <div className='index-display-section-list'>
            {songItems}
          </div>
      </div>
    );
  }
}

export default LibrarySongsIndex;