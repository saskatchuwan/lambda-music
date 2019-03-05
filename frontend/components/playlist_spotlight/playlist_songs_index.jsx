import React from 'react';
import PlaylistInfoRail from './playlist_info_rail';
import _ from "lodash";


class PlaylistSongsIndex extends React.Component {

  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistId);
  }

  componentDidUpdate (prevProps) {
    if (Object.keys(prevProps.playlistSongsList).length !== Object.keys(this.props.playlistSongsList).length) {
      this.props.fetchPlaylist(this.props.match.params.playlistId);
    }
  }
  componentWillUnmount () {
    this.props.clearPlaylists();
  }

  render () {

    let songItems;
    let infoRail;


    if (Object.keys(this.props.playlists).length > 0) {
      songItems = this.props.songs.map(song => {
      
        let album = this.props.albums[song.albumId];
        let artist = this.props.artists[song.artistId];
  
        let playlistSongId = _.get(this, `props.playlistSongsList[${song.id}].playlistSongId`, "no id");
  
        return (
          <li key={song.id}>
          <div className='song-index-item-left'>

            <div className='song-index-play-icon-container'>
              <img className='song-index-play-icon' 
                    id='dormant' 
                    src={window.images.music_note} />


              <img className='song-index-play-icon' 
                      onClick={() => this.props.fetchSong(song.id)}
                      id='play' 
                      src={window.images.music_play} />


            </div>

            <div className='song-index-info'>
              <strong>{song.title}</strong>
              <br/>
              {artist.name} - {album.title}
            </div>

          </div>

          <button className='delete-song'
              onClick={() => this.props.deletePlaylistSong(playlistSongId)}>DELETE</button>
          </li>
        )
      });
  

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