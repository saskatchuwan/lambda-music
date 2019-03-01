import { connect } from 'react-redux';
import LibrarySongsIndex from './library_songs_index';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser,
    test: 'testing',
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default connect(mapStateToProps,mapDispatchToProps)(LibrarySongsIndex);
