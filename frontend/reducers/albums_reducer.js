import { RECEIVE_ALBUMS,
        RECEIVE_ALBUM,
        CLEAR_ALBUMS,
        } from '../actions/album_actions';

import { RECEIVE_SONGS,
        CLEAR_SONGS,
        } from '../actions/song_actions';

import { RECEIVE_PLAYLISTS,
        RECEIVE_PLAYLIST,
        } from '../actions/playlist_actions';

import { CLEAR_ARTISTS } from '../actions/artist_actions';


const albumsReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.payload.albums;

    case CLEAR_ALBUMS:
      return {};

    case RECEIVE_ALBUM:
      return action.payload.album;

    case RECEIVE_SONGS:
      return action.payload.albums;
    
    case CLEAR_SONGS:
      return {};

    case CLEAR_ARTISTS:
      return {};
      
    case RECEIVE_PLAYLISTS:
      if (action.payload.albums) {
        return action.payload.albums;
      } else {
        return {};
      };

    case RECEIVE_PLAYLIST:
      if (typeof action.payload.albums === 'undefined') {
        return {};
      } else {
        return action.payload.albums;
      };

    default:
      return state;
  }
};

export default albumsReducer;