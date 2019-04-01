import React from 'react';
import { connect } from 'react-redux';
import { createPlaylistSong } from '../../actions/playlist_songs_actions';

import { fetchUserPlaylists, clearPlaylists } from '../../actions/playlist_actions';
import { fetchAlbum } from '../../actions/album_actions';

import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

import AddPlaylistSongIndexItem from './add_playlist_song_item';

const mapStateToProps = (state) => {
  let songId = state.entities.playlistSongs.playlistSongSelected;

  let playlists = Object.values(state.entities.playlists);

  return {
    currentUserId: state.session.currentUserId,
    songId,
    playlists,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlaylistSong: (playlistSong) => dispatch(createPlaylistSong(playlistSong)),
    closeModal: () => dispatch(closeModal()),
    fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
    clearPlaylists: () => dispatch(clearPlaylists()),
    fetchAlbum: () => dispatch(fetchAlbum()),
  };
};


class AddSongToPlaylist extends React.Component {
  constructor(props) {
    super(props);

    //needs to be in snakecase to be received by controller
    this.state = {
      song_id: this.props.songId,
      playlist_id: ''
    };
  }

  componentDidMount () {
    this.props.fetchUserPlaylists(this.props.currentUserId);
  }

  componentWillUnmount () {
    //will clear all slices of state - don't want that.
    // this.props.clearPlaylists();
  }

  showNotification () {
    document.getElementById("note").style.display = "block";
    setTimeout(function(){
      document.getElementById("note").style.display = "none";
    }, 2000);
  }


  render() {
    let { playlists, songId } = this.props;

    let playlistItems;

    playlistItems = playlists.map(playlist => {
      return (
        <AddPlaylistSongIndexItem 
          key={playlist.id} 
          playlist={playlist} 
          songId={songId}
          createPlaylistSong={this.props.createPlaylistSong}
          showNotification={this.showNotification}
          closeModal={this.props.closeModal}
        />
      )
    });



    return (
      <div className="add-song-playlist-form-container">
        
        <button className='close-modal-button'
            onClick={() => this.props.closeModal()}>
          <img id='close-icon' src={window.images.modal_close} />
        </button>

        <h1>Add to playlist</h1>

        <div className='index-display-section-tile'>
          {playlistItems}
        </div>

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddSongToPlaylist));