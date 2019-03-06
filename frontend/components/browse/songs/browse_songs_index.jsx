import React from 'react';
import SongsIndexItem from '../../song_list_index_item/songs_index_item';

class BrowseSongsIndex extends React.Component {

  componentDidMount() {
    //will update all songs, artists and albums in state
    this.props.fetchSongs();
  }

  render () {
    let songItems;
    
    songItems = this.props.songs.map( song => {
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

          <button className='add-song-to-playlist-button'
              onClick={() => this.props.openModal('add-song-to-playlist', song.id)}>ADD</button>
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

export default BrowseSongsIndex;