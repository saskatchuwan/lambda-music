import {
  RECEIVE_PLAYLIST
 } from '../actions/playlist_actions';


const songIdQueueReducer = (state=[], action) => {
  Object.freeze(state);
  let newState = state.slice();

  switch(action.type) {
    case RECEIVE_PLAYLIST:
      // will have duplicated songs in queue since playlist show and album show are fetching twice upon load
      // return newState.concat(Object.keys(action.payload.songs));
      return Object.keys(action.payload.songs);
    default:
      return state;
  }
};

export default songIdQueueReducer;