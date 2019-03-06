import { connect } from 'react-redux';
import AlbumSongsIndex from '../album_spotlight/album_songs_index';

import { fetchAlbum } from '../../actions/album_actions';
import { fetchSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];
  //arrays
  let songs = Object.values(state.entities.songs);

  return ({
    currentUser,
    currentUserId,
    songs,
    artists: state.entities.artists,
    albums: state.entities.albums,
    songIdQueue: state.playBar.songIdQueue,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    //need a remove and save to library 
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    fetchSong: (song_id) => dispatch(fetchSong(song_id)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(AlbumSongsIndex);
