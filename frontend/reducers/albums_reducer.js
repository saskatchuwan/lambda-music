import { RECEIVE_ALBUMS,
  RECEIVE_ALBUM } from '../actions/album_actions';

import { RECEIVE_SONGS } from '../actions/song_actions';

import { RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
   } from '../actions/playlist_actions';

const albumsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALBUMS:
      //currently will overwrite all albums
      return action.albums;
    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album;
      return newState;
    case RECEIVE_SONGS:
      return action.payload.albums;

    
    case RECEIVE_PLAYLISTS:
      return action.payload.albums;
    case RECEIVE_PLAYLIST:
      let playlistAlbums = Object.values(action.payload.albums);

      playlistAlbums.forEach(playlistAlbum => {
        newState[playlistAlbum.id] = playlistAlbum;
      });

      return newState;

      //do we need one for REMOVE_PLAYLIST?

    default:
      return state;
  }
};

export default albumsReducer;