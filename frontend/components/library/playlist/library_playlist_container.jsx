import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import LibraryPlayListIndex from '../playlist/library_playlist_index';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(LibraryPlayListIndex);
