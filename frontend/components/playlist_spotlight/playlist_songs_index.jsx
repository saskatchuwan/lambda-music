import React from 'react';
import { Link } from 'react-router-dom';

import PlaylistInfoRail from './playlist_info_rail';

class PlaylistSongsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: this.props.songs,
      artists: this.props.artists,
      albums: this.props.albums,
      playlists: this.props.playlists,
    }
  }

  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistId);
  }

  render () {

    let songItems;
    songItems = this.props.songs.map(song => {
      //this.props.albums is a zero-indexed array
      let album = this.props.albums[song.albumId - 1];
      let artist = this.props.artists[song.artistId - 1];

      return (
        <li key={song.id}>
          <strong>{song.title}</strong>
          <br/>
          {artist.name} - {album.title}
        </li>
      )
    });

    

    return (
      
      <div className='main-view-spotlight-container'>

        <PlaylistInfoRail 
          //how to do i get the playlist name out heeerrreeee
        />

        <div className='content-index-display-container-list'>
            <ul className='index-display-section-list'>
              {songItems}
            </ul>
        </div>

      </div>
    );
  }

}

export default PlaylistSongsIndex;