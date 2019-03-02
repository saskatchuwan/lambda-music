import { connect } from 'react-redux';
import PlaylistSongsIndex from '../playlist_spotlight/playlist_songs_index';

import { fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];
  //arrays
  let songs = Object.values(state.entities.songs);
  let artists = Object.values(state.entities.artists);
  let albums = Object.values(state.entities.albums);
  let playlists = Object.values(state.entities.playlists);

  return ({
    currentUser,
    songs: songs,
    artists: artists,
    playlists: playlists,
    albums: albums,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    //need a remove and save to library 
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(PlaylistSongsIndex);
