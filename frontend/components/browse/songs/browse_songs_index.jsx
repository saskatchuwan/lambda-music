import React from 'react';

class BrowseSongsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: this.props.songs,
      artists: this.props.artists,
      albums: this.props.albums
    }
  }

  componentDidMount() {
    //will update all songs, artists and albums in state
    this.props.fetchSongs();
  }

  render () {
    let songItems;

    songItems = this.props.songs.map(song => {
      //this.props.albums is a zero-indexed array
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
          <ul className='index-display-section-list'>
            {songItems}
          </ul>
      </div>
    );
  }
}

export default BrowseSongsIndex;