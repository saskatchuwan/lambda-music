import { connect } from 'react-redux';
import LibraryArtistsIndex from './library_artists_index';

import { fetchUserSavedArtists } from '../../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  let artists = Object.values(state.entities.artists);

  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser,
    artists,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUserSavedArtists: (userId) => dispatch(fetchUserSavedArtists(userId)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(LibraryArtistsIndex);
