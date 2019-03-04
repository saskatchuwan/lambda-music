import React from 'react';
import { connect } from 'react-redux';
import { createPlaylistSong } from '../../actions/playlist_songs_actions';

import { fetchSong } from '../../actions/song_actions';
import { fetchUserPlaylists, clearPlaylists } from '../../actions/playlist_actions';

import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

import AddPlaylistSongIndexItem from './add_playlist_song_item';

const mapStateToProps = (state) => {
  let songId = state.entities.playlistSongs.playlistSongsQueue;

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

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.fetchUserPlaylists(this.props.currentUserId);

    this.setState({song_id: this.props.songId, playlist_id: 'test'});
  }

  componentWillUnmount () {
    //will clear all slices of state - don't want that.
    // this.props.clearPlaylists();
  }


  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const playlistSong = Object.assign({}, this.state);
  //   this.props.createPlaylistSong(playlistSong)
  //       .then(this.props.closeModal)
  //       .then(() => this.props.history.push('/library/playlists'));
  //       //probably need to change this redirect
  // }

  render() {
    let { playlists, songId } = this.props;

    let playlistItems;

    playlistItems = playlists.map(playlist => {
      return (
        <AddPlaylistSongIndexItem 
          key={playlist.id} 
          playlist={playlist} 
          songId={songId}
          />
      )
    });



    return (
      <div className="add-song-playlist-form-container">
        
        <button className='close-modal-button'
            onClick={() => this.props.closeModal()}>
          <img id='close-icon' src={window.images.modal_close} />
        </button>

        <h1>Add song to library</h1>
        {/* <h1>{`${this.props.songId}`}</h1> */}


        <div className='index-display-section-tile'>
          {/* make these clickable and on click, to createplaylistsong */}
          {playlistItems}

        </div>

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddSongToPlaylist));