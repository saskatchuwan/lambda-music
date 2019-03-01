import { connect } from 'react-redux';
import BrowseSongsIndex from './browse_songs_index';

import { fetchSongs } from '../../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  let songs = Object.values(state.entities.songs); //array
  return ({
    songs
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchSongs: () => dispatch(fetchSongs()),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(BrowseSongsIndex);
