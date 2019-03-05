import { RECEIVE_SONG,
  CLEAR_SONGS,
 } from '../actions/song_actions';

const currSongReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

    switch(action.type) {
    case RECEIVE_SONG:
      return action.payload;
    default:
    return state;
  }
};

export default currSongReducer;