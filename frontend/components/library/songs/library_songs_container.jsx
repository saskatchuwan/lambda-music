import { connect } from 'react-redux';
import SongsIndex from '../../index/songs_index';

import { fetchUserSavedSongs, clearSongs, fetchSong } from '../../../actions/song_actions';

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
    fetchUserSavedSongs: (userId) => dispatch(fetchUserSavedSongs(userId)),
    clearSongs: () => dispatch(clearSongs()),
    fetchSong: (song_id) => dispatch(fetchSong(song_id)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(SongsIndex);
