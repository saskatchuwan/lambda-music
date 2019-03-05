import { connect } from 'react-redux';
import BottomMusicPlayer from './bottom_music_player';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];


  //need to pass in props from new slice of state with currently queued up song

  return ({
    currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(BottomMusicPlayer);
