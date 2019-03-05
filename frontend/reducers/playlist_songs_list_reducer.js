import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { REMOVE_PLAYLIST_SONG } from '../actions/playlist_songs_actions';


const playlistSongsListReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLIST:
      if (typeof action.payload.playlistSongs !== 'undefined') {
        return action.payload.playlistSongs;
      } else {
        //need this for when we first create a playlist (with no playlistsongs yet)
        return {};
      }

    case REMOVE_PLAYLIST_SONG:
      let newState = Object.assign({}, state);

      delete newState[action.payload.playlist_song.song_id];
      return newState;
    default:
      return state;
  }
}

export default playlistSongsListReducer;