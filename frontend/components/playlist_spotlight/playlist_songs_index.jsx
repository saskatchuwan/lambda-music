import React from 'react';
import PlaylistInfoRail from './playlist_info_rail';
import _ from "lodash";
import SongsIndexItem from '../song_list_index_item/songs_index_item';

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
            
              <SongsIndexItem
                song={song}
                album={album}
                artist={artist}
                fetchSong={this.props.fetchSong}
              />

            <button className='delete-song'
                onClick={() => this.props.deletePlaylistSong(playlistSongId)}>DELETE</button>
            </li>
          )
        });
  
        // infoRail =  this.props.playlists.map(playlist => {
        //   let ownerId = playlist.ownerId;
        //   let owner = users[ownerId];
      
        //   return (
        //       <PlaylistInfoRail 
        //           playlist={this.props.playlists}
        //           deletePlaylist={this.props.deletePlaylist}
        //           currentUserId={this.props.currentUserId}
        //           owner={owner}
        //           />
        //   )
        // });

          infoRail = <PlaylistInfoRail 
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