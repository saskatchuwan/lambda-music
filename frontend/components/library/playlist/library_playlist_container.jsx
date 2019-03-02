import { connect } from 'react-redux';
import LibraryPlayListIndex from './library_playlist_index';

import { fetchUserPlaylists } from '../../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  //arrays
  let playlists = Object.values(state.entities.playlists);
  let users = Object.values(state.entities.users);

  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser,
    playlists,
    users,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUserPlaylists: (user_id) => dispatch(fetchUserPlaylists(user_id)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(LibraryPlayListIndex);
