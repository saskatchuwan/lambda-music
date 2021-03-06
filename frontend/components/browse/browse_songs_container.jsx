import { connect } from 'react-redux';
import SongsIndex from '../index/songs_index';

import { fetchSongs, fetchSong, clearSongs } from '../../actions/song_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  let songs = Object.values(state.entities.songs);

  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser,
    songs,
    albums: state.entities.albums,
    artists: state.entities.artists,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchSongs: () => dispatch(fetchSongs()),
    clearSongs: () => dispatch(clearSongs()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    openModal: (modal, songId) => dispatch(openModal(modal, songId)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(SongsIndex);
