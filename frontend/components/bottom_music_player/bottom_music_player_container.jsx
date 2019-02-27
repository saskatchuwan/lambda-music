import { connect } from 'react-redux';
import BottomMusicPlayer from './left_side_nav_bar';
import { logout } from '../../actions/session_actions';

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

export default connect(mapStateToProps,mapDispatchToProps)(LeftSideNavBar);
