import { connect } from 'react-redux';
import LibraryTopNav from './library_top_nav';


const mapStateToProps = (state, ownProps) => {
  // let currentUserId = state.session.currentUserId;
  // let currentUser = state.entities.users[currentUserId];

  return ({
    // currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(LibraryTopNav);
