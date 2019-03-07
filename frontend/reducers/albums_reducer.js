import { RECEIVE_ALBUMS,
        RECEIVE_ALBUM,
        CLEAR_ALBUMS,
      } from '../actions/album_actions';

import { RECEIVE_SONGS, RECEIVE_SONG, CLEAR_SONGS } from '../actions/song_actions';

import { RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
   } from '../actions/playlist_actions';

import { CLEAR_ARTISTS } from '../actions/artist_actions';


const albumsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALBUMS:
      //currently will overwrite all albums
      return action.payload.albums;

    case CLEAR_ALBUMS:
      return {};

    case RECEIVE_ALBUM:
      return action.payload.album;

    case RECEIVE_SONGS:
      return action.payload.albums;

    // case RECEIVE_SONG:
    //   return action.payload.album;
    
    case CLEAR_SONGS:
      return {};

    case CLEAR_ARTISTS:
      return {};
      

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