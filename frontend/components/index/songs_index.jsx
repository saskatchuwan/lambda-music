import React from 'react';
import SongsIndexItem from '../index_items/songs_index_item';
import _ from 'lodash';

class SongsIndex extends React.Component {

  componentDidMount() {
    if (this.props.fetchUserSavedSongs) {
      this.props.fetchUserSavedSongs(this.props.currentUser.id);
    } else {
      //will update all songs, artists and albums in state
      this.props.fetchSongs();
    }
  }

  componentWillUnmount () {
    this.props.clearSongs();
  }

  render () {
    let songItems;

    songItems = this.props.songs.map( song => {
      let album = this.props.albums[song.albumId];
      let artist = this.props.artists[song.artistId];

      let openAddSongModal;
      if (this.props.openModal) {
        openAddSongModal = <button className='add-song-to-playlist-button'
                            onClick={() => this.props.openModal('add-song-to-playlist', song.id)}>ADD</button>
      }

      return (
        <li key={song.id}>
          <SongsIndexItem
            song={song}
            album={album}
            artist={artist}
            fetchSong={this.props.fetchSong}
          />
          {openAddSongModal}
        </li>

      )
    });


    return (
      <div className='content-index-display-container-list'>
          <ul className='index-display-section-list'>
            {songItems}
          </ul>
      </div>
    );
  }
}

export default SongsIndex;