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
    
    let songs = this.props.songs.map(song => {
      return (
        <li key={song.id}>
          {song.title}
        </li>
      )
    });

    return (

      <div className='in-app-main'>
          <h1>browse/songs placeholder</h1>
          <ul>
            {songs}
          </ul>
      </div>
    );
  }
}

export default BrowseSongsIndex;