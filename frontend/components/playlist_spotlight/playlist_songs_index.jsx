import React from 'react';
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
          <div className='song-index-info'>
            <strong>{song.title}</strong>
            <br/>
            {artist.name} - {album.title}

            {/* <button onClick={() => this.props.deletePlaylistSong(song.id)}>DELETE</button> */}
          </div>
        </li>
      )
    });


    let infoRail;
    if (Object.keys(this.props.playlists).length > 0) {
      infoRail =  <PlaylistInfoRail 
                    playlist={this.props.playlists}
                    deletePlaylist={this.props.deletePlaylist}
                    currentUserId={this.props.currentUserId}
                    />
    }


    return (
      
      <div className='main-view-spotlight-container'>

        {infoRail}

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