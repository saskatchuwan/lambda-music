import { RECEIVE_ARTISTS,
        RECEIVE_ARTIST,
        CLEAR_ARTISTS,
        } from '../actions/artist_actions';

import { RECEIVE_SONGS, RECEIVE_SONG, CLEAR_SONGS } from '../actions/song_actions';

import { RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
   } from '../actions/playlist_actions';

import { RECEIVE_ALBUMS,
          RECEIVE_ALBUM } from '../actions/album_actions';

import { CLEAR_ALBUMS } from '../actions/album_actions';


const artistsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ARTISTS:
      //currently will overwrite all artists
      return action.artists;
    case RECEIVE_ARTIST:
      newState[action.artist.id] = action.artist;
      return newState;
    case CLEAR_ARTISTS:
      return {};

      //when fetchPosts() thunk action is dispatched, will update artists slice of state with assciated artists to list of songs
    case RECEIVE_SONGS:
      return action.payload.artists;

    // case RECEIVE_SONG:
    //   return action.payload.artist;
    
    case CLEAR_SONGS:
      return {};

    // case RECEIVE_PLAYLISTS:

    //   if (action.payload.artists) {
    //     return action.payload.artists;
    //   } else {
    //     return {};
    //   }

    case RECEIVE_PLAYLIST:
      if (typeof action.payload.artists === 'undefined') {
        return {};
      } else {
        return action.payload.artists;
      }
      //do we need one for REMOVE_PLAYLIST?

    case RECEIVE_ALBUM:
      return action.payload.artist;

    case CLEAR_ALBUMS:
      return {};

    default:
      return state;
  }
};

export default artistsReducer;