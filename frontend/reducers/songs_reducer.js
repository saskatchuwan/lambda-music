import { RECEIVE_SONGS,
        RECEIVE_SONG } from '../actions/song_actions';

const songsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SONGS:
      //currently will overwrite all songs
      return action.songs;
    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;
    default:
      return state;
  }
};

export default songsReducer;