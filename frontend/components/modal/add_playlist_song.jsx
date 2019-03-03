import React from 'react';
import { connect } from 'react-redux';
import { createPlaylistSong } from '../../actions/playlist_songs_actions';

import { fetchSong } from '../../actions/song_actions';
import { fetchUserPlaylists } from '../../actions/playlist_actions';

import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  //want to turn into array: [{id: 3, title: 'song title'}]
  let songId = state.entities.playlistSongs.playlistSongsQueue;

  return {
    currentUserId: state.session.currentUserId,
    songId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlaylistSong: (playlistSong) => dispatch(createPlaylistSong(playlistSong)),
    closeModal: () => dispatch(closeModal())
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.fetchUserPlaylists(this.props.currentUserId);
    this.setState({song_id: this.props.songId, playlist_id: 'OMG'});
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlistSong = Object.assign({}, this.state);
    this.props.createPlaylistSong(playlistSong)
        .then(this.props.closeModal)
        .then(() => this.props.history.push('/library/playlists'));
        //probably need to change this redirect
  }

  render() {


    return (
      <div className="add-song-playlist-form-container">
        
        <button className='close-modal-button'
            onClick={() => this.props.closeModal()}>
          <img id='close-icon' src={window.images.modal_close} />
        </button>

        <h1>Add song to library</h1>
        <h1>{this.state.songId}</h1>

        <div className="in-modal-current-user-playlists">

        </div>

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddSongToPlaylist));