import { connect } from 'react-redux';
import BrowseAlbumsIndex from './browse_albums_index';

import { fetchAlbums, clearAlbums } from '../../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  //arrays
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
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(BrowseAlbumsIndex);
