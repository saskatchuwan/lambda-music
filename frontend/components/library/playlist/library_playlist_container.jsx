import { connect } from 'react-redux';
import LibraryPlayListIndex from './library_playlist_index';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default connect(mapStateToProps,mapDispatchToProps)(LibraryPlayListIndex);
