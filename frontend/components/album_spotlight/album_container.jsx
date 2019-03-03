import { connect } from 'react-redux';
import AlbumSongsIndex from '../album_spotlight/album_songs_index';

import { fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];
  //arrays
  let songs = Object.values(state.entities.songs);

  return ({
    currentUser,
    songs,
    artists: state.entities.artists,
    albums: state.entities.albums,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    //need a remove and save to library 
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(AlbumSongsIndex);
