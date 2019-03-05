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

  // componentDidUpdate (prevProps) {
  //   if (prevProps.playlistSongs !== this.props.playlistSongs) {
  //     this.setState({playlistSongs: this.props.playlistSongs});
  //     // this.props.fetchPlaylist(this.props.match.params.playlistId);
  //   }
  // }

  
 
  removeSong (playlistSongId) {
    this.props.deletePlaylistSong(playlistSongId);
    this.props.fetchPlaylist(this.props.match.params.playlistId);

    this.setState({
      removedSong: true
    });
  }


  render () {

    let songItems;
    let infoRail;

    songItems = this.props.songs.map(song => {
      
      let album = this.props.albums[song.albumId];
      let artist = this.props.artists[song.artistId];

      let playlistSongId = _.get(this, `props.playlistSongs[${song.id}].playlistSongId`, "no id");

      return (
        <li key={song.id}>
          <div className='song-index-info'>
            <strong>{song.title}</strong>
            <br/>
            {artist.name} - {album.title}

          </div>
            <button className='delete-song'
            onClick={() => this.removeSong(playlistSongId)}>DELETE</button>
        </li>
      )
    });



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