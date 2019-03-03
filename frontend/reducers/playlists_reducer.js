import { RECEIVE_PLAYLISTS,
          RECEIVE_PLAYLIST,
          REMOVE_PLAYLIST
        } from '../actions/playlist_actions';

const playlistsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      //currently will overwrite all playlists
      return action.payload.playlists;

    case RECEIVE_PLAYLIST:
      return action.payload.playlist;

    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;

    default:
      return state;
  }
};

export default playlistsReducer;