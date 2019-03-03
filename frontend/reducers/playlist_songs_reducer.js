import { RECEIVE_PLAYLIST_SONG_ACTION } from '../actions/playlist_songs_actions';


const playlistSongsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_PLAYLIST_SONG_ACTION:
      newState.msg = action.playlistSongMsg;
      return newState;
    default:
      return state;
  }
};

export default playlistSongsReducer;