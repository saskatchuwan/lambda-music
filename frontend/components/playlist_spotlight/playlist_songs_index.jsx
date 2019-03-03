import React from 'react';
import { Link } from 'react-router-dom';

import PlaylistInfoRail from './playlist_info_rail';

class PlaylistSongsIndex extends React.Component {


  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistId);
  }

  componentWillUnmount () {
    this.props.clearPlaylists();
  }
 

  render () {

    let songItems;
    songItems = this.props.songs.map(song => {
      
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


    // let infoRail;
    // infoRail = this.props.playlists.map(playlist => {
    //   return (
    //     <PlaylistInfoRail 
    //     // playlist={playlist}
    //     // deletePlaylist={this.props.deletePlaylist}
    //     />
    //   )
    // });

    // console.log(this.props.playlists);
    

    return (
      
      <div className='main-view-spotlight-container'>

        <PlaylistInfoRail 
          // playlist={playlist}
          deletePlaylist={this.props.deletePlaylist}
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