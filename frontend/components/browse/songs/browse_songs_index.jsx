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
    console.log('about to fetchSongs');
    this.props.fetchSongs();
  }

  render () {
    // let {songs, artists, albums } = this.props;
    console.log('start state ');
    console.log(this.state.albums);
    console.log(this.state.songs);
    console.log(this.state.artists);

    console.log('start props ');
    console.log(this.props.albums);
    console.log(this.props.songs);
    console.log(this.props.artists);


    let songItems;

    if (this.props.songs.length !== 0 && this.props.albums.length !== 0) {
      console.log('start of if')
      console.log(this.props.albums);
      console.log(this.props.songs);
      


      songItems = this.props.songs.map(song => {
        let album = this.props.albums[song.albumId - 1];

        console.log(song.albumId);
        console.log(album.title);

        return (
          <li key={song.id}>
            {/* {song.title} */}
            {album.title}
          </li>
        )
      });
    }

    console.log('before return');

    console.log('end state');
    console.log(this.state.albums);
    console.log(this.state.songs);
    console.log(this.state.artists);

    console.log('end props ');
    console.log(this.props.albums);
    console.log(this.props.songs);
    console.log(this.props.artists);



    

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