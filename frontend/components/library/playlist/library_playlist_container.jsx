import { connect } from 'react-redux';
import LibraryPlayListIndex from './library_playlist_index';

import { fetchSong } from '../../../actions/song_actions';

import { fetchUserPlaylists, clearPlaylists, fetchPlaylist } from '../../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  //arrays
  let playlists = Object.values(state.entities.playlists);

  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser,
    playlists,
    users: state.entities.users,
    songIdQueue: state.playBar.songIdQueue,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUserPlaylists: (user_id) => dispatch(fetchUserPlaylists(user_id)),
    clearPlaylists: () => dispatch(clearPlaylists()),
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(LibraryPlayListIndex);
