import React from 'react';
import PlaylistInfoRail from './playlist_info_rail';
import _ from "lodash";


class PlaylistSongsIndex extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      removedSong: false
    };

    this.removeSong = this.removeSong.bind(this);
  }

  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistId);
  }

  componentWillUnmount () {
    this.props.clearPlaylists();
  }

  componentDidUpdate (prevProps) {
    console.log('prev');
    console.log(prevProps.playlistSongsList);
    console.log('current');
    console.log(this.props.playlistSongsList);

    if (Object.keys(prevProps.playlistSongsList).length !== Object.keys(this.props.playlistSongsList).length) {
      this.props.fetchPlaylist(this.props.match.params.playlistId);
      console.log(prevProps);
    }
  }

  
 
  removeSong (playlistSongId) {
    this.props.deletePlaylistSong(playlistSongId);
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
            <div className='song-index-info'>
              <strong>{song.title}</strong>
              <br/>
              {artist.name} - {album.title}
  
            </div>
              <button className='delete-song'
              // onClick={() => this.removeSong(playlistSongId)}>DELETE</button>
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