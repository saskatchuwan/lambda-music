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
      let album = this.props.albums[song.albumId - 1];
      let artist = this.props.artists[song.artistId - 1];

      return (
        <li key={song.id}>
          {song.title} - {album.title} - {artist.name}
        </li>
      )
    });


    return (

      <div className='content-index-display-container'>
          <h1>Curated for {this.props.currentUser.username}</h1>
          <ul>
            {songItems}
          </ul>
      </div>
    );
  }
}

export default BrowseSongsIndex;