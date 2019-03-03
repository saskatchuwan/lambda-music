import { RECEIVE_SONG } from '../actions/song_actions';


const playlistSongsQueueReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SONG:
      return action.payload;
    default:
      return state;
  }
};

export default playlistSongsQueueReducer;