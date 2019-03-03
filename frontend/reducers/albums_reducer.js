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
      return action.payload.album;
    case RECEIVE_SONGS:
      return action.payload.albums;
    
    case RECEIVE_PLAYLISTS:
      if (action.payload.albums) {
        return action.payload.albums;
      } else {
        return {};
      }

    case RECEIVE_PLAYLIST:
      if (typeof action.payload.albums === 'undefined') {
        return {};
      } else {
        return action.payload.albums;
      }
      //do we need one for REMOVE_PLAYLIST?
    default:
      return state;
  }
};

export default albumsReducer;