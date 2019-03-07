import { RECEIVE_SONGS,
        RECEIVE_SONG,
        CLEAR_SONGS,
       } from '../actions/song_actions';

import { RECEIVE_PLAYLISTS,
          RECEIVE_PLAYLIST,
          REMOVE_PLAYLIST,
          CLEAR_PLAYLISTS,
           } from '../actions/playlist_actions';

import { RECEIVE_ALBUMS,
          RECEIVE_ALBUM } from '../actions/album_actions';

import { CLEAR_ARTISTS } from '../actions/artist_actions';

import { CLEAR_ALBUMS } from '../actions/album_actions';


const songsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SONGS:
      //currently will overwrite all songs
      return action.payload.songs;

    // case RECEIVE_SONG:
    //   return action.payload.song;
    
    case CLEAR_SONGS:
      return {};

    case RECEIVE_PLAYLISTS:
      if (action.payload.songs) {
        return action.payload.songs;
      } else {
        return {};
      }
      
    case RECEIVE_PLAYLIST:
      if (typeof action.payload.songs === 'undefined') {
        return {};
      } else {
        return action.payload.songs;
      }

      //do we need one for REMOVE_PLAYLIST?

    case CLEAR_PLAYLISTS:
      return {};
      
    case RECEIVE_ALBUM:
      return action.payload.songs;
    
    case CLEAR_ARTISTS:
      return {};

    case CLEAR_ALBUMS:
      return {};
      
    default:
      return state;
  }
};

export default songsReducer;