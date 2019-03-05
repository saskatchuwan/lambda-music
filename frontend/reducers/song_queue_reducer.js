import { RECEIVE_SONGS,
  RECEIVE_SONG,
  CLEAR_SONGS,
 } from '../actions/song_actions';

const songIdQueueReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SONGS:

    default:
    return state;
  }
};

export default songIdQueueReducer;