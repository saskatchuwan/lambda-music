import { RECEIVE_PLAYLISTS,
          RECEIVE_PLAYLIST,
          REMOVE_PLAYLIST,
          CLEAR_PLAYLISTS, } 
        from '../actions/playlist_actions';


const playlistsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.payload.playlists;

    case RECEIVE_PLAYLIST:
      return Object.assign(newState, action.payload.playlist);

    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;

    case CLEAR_PLAYLISTS:
      return {};

    default:
      return state;
  }
};

export default playlistsReducer;