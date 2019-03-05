import { connect } from 'react-redux';
import PlayBar from './play_bar';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser,
    currSong: state.playBar.currSong,
    songIdQueue: state.playBar.songIdQueue,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayBar);
