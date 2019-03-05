import { connect } from 'react-redux';
import PlayBar from './play_bar';
import { fetchSong } from '../../actions/song_actions';

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
    fetchSong: (songId) => dispatch(fetchSong(songId)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayBar);
