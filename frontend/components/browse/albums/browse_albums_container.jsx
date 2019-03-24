import { connect } from 'react-redux';
import AlbumsIndex from '../../index/albums_index';

import { fetchAlbums, clearAlbums } from '../../../actions/album_actions';
import { fetchPlaybarAlbum } from '../../../actions/play_bar_actions';

const mapStateToProps = (state, ownProps) => {
  let albums = Object.values(state.entities.albums);
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];

  return ({
    currentUser,
    albums,
    artists: state.entities.artists,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    clearAlbums: () => dispatch(clearAlbums()),
    fetchPlaybarAlbum: (playlistId) => dispatch(fetchPlaybarAlbum(playlistId)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(AlbumsIndex);
