import React from 'react';
import SongsIndexItem from '../../song_list_index_item/songs_index_item';

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
      let album = this.props.albums[song.albumId];
      let artist = this.props.artists[song.artistId];
      return (
        <li key={song.id}>
          <SongsIndexItem
            song={song}
            album={album}
            artist={artist}
            fetchSong={this.props.fetchSong}
          />
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