import React from 'react';
import PlaylistInfoRail from './playlist_info_rail';
import _ from "lodash";
import SongsIndexItem from '../index_items/songs_index_item';

class PlaylistSongsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

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

  showNotification () {
    document.getElementById("note").style.display = "block";

    let prom = new Promise(function(resolve, reject) {
      setTimeout(function() {
        document.getElementById("note").style.display = "none";
        resolve("Stuff worked!");
      }, 2000);
    });

    return prom;
  }

  handleClick (playlistSongId) {
    this.props.deletePlaylistSong(playlistSongId);
    this.showNotification().then(() => this.props.removeClearRemoveSongErrors());
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
            
              <SongsIndexItem
                song={song}
                album={album}
                artist={artist}
                fetchSong={this.props.fetchSong}
              />

            <button className='delete-song'
                onClick={() => this.handleClick(playlistSongId)}>DELETE</button>
            </li>
          )
        });

          infoRail = <PlaylistInfoRail 
                          playlist={this.props.playlists}
                          deletePlaylist={this.props.deletePlaylist}
                          currentUserId={this.props.currentUserId}
                          songIdQueue={this.props.songIdQueue}
                          fetchSong={this.props.fetchSong}
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