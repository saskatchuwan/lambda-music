import { RECEIVE_SONG,
  CLEAR_SONGS,
 } from '../actions/song_actions';

 import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const currSongReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SONG:
      return action.payload;

    // case RECEIVE_PLAYLIST:
    //   // let songsArray = Object.values(action.payload.songs);
    //   // return {song: songsArray[0]};
    default:
      return state;
  }
};

export default currSongReducer;