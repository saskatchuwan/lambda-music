import { connect } from 'react-redux';
import PlaylistSongsIndex from '../playlist_spotlight/playlist_songs_index';


import { fetchPlaylist, deletePlaylist, clearPlaylists } from '../../actions/playlist_actions';
import { deletePlaylistSong } from '../../actions/playlist_songs_actions';

import { fetchSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];
  
  //array
  let songs = Object.values(state.entities.songs);

  return ({
    currentUser,
    currentUserId,
    songs,
    artists: state.entities.artists,
    playlists: state.entities.playlists,
    albums: state.entities.albums,
    playlistSongsList: state.entities.playlistSongs.playlistSongsList,
    
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    //need a remove and save to library 
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
    deletePlaylist: (playlist_id) => dispatch(deletePlaylist(playlist_id)),
    clearPlaylists: () => dispatch(clearPlaylists()),
    deletePlaylistSong: (playlist_song_id) => dispatch(deletePlaylistSong(playlist_song_id)),
    fetchSong: (song_id) => dispatch(fetchSong(song_id)),
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(PlaylistSongsIndex);
