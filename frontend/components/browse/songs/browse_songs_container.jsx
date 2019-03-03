import { connect } from 'react-redux';
import BrowseSongsIndex from './browse_songs_index';

import { fetchSongs } from '../../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  //arrays
  let songs = Object.values(state.entities.songs);

  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];
  
  return ({
    songs: songs,
    artists: state.entities.artists,
    albums: state.entities.albums,
    currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchSongs: () => dispatch(fetchSongs()),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(BrowseSongsIndex);
