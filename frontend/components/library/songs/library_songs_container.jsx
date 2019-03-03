import { connect } from 'react-redux';
import LibrarySongsIndex from './library_songs_index';

import { fetchUserSavedSongs } from '../../../actions/song_actions';

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
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(LibrarySongsIndex);
