import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';


const playlistSongsListReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLIST:
      return action.payload.playlistSongs;
    default:
      return state;
  }
};

export default playlistSongsListReducer;