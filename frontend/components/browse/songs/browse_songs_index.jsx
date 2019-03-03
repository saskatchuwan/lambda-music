import React from 'react';
import SongsIndexItem from './browse_songs_index_item';

class BrowseSongsIndex extends React.Component {

  componentDidMount() {
    //will update all songs, artists and albums in state
    this.props.fetchSongs();
  }

  render () {
    console.log(this.props.songQueue);

    let songItems;

    songItems = this.props.songs.map( song => {
      let album = this.props.albums[song.albumId];
      let artist = this.props.artists[song.artistId];

      return (
        <SongsIndexItem
          key={song.id}
          song={song}
          album={album}
          artist={artist}
          openModal={this.props.openModal}
          fetchSong={this.props.fetchSong}
        />
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