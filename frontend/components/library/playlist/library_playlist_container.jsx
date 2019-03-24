import { connect } from 'react-redux';
import PlaylistIndex from '../../index/playlists_index';

import { fetchSong } from '../../../actions/song_actions';

import { fetchUserPlaylists, clearPlaylists } from '../../../actions/playlist_actions';
import { fetchPlaybarPlaylist } from '../../../actions/play_bar_actions';

const mapStateToProps = (state, ownProps) => {
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
    fetchPlaybarPlaylist: (playlistId) => dispatch(fetchPlaybarPlaylist(playlistId)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(PlaylistIndex);
