import { RECEIVE_ALBUMS,
  RECEIVE_ALBUM } from '../actions/album_actions';

import { RECEIVE_SONGS } from '../actions/song_actions';

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
    default:
      return state;
  }
};

export default albumsReducer;