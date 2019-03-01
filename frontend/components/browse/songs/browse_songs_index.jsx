import React from 'react';

class BrowseSongsIndex extends React.Component {

  // constructor (props) {
  //   super(props);
  //   this.state = this.props.songs;
  // }
  
  componentDidMount() {
    this.props.fetchSongs();
  }
 
  render () {
    let {songs, artists, albums } = this.props;

    let albumItems = albums.map(album => {
      return (
        <li key={album.id}>
          {album.title}
        </li>
      )
    });
    
    let songItems = songs.map(song => {
      return (
        <li key={song.id}>
          {song.title}
        </li>
      )
    });

    return (

      <div className='content-index-display-container'>
          <h1>browse/songs placeholder</h1>
          <ul>
            {songItems}
          </ul>
      </div>
    );
  }
}

export default BrowseSongsIndex;