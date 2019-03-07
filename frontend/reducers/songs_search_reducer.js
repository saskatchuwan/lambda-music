import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';


const songsSearchReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      if (typeof action.payload.songs === 'undefined') {
        return {};
      } else {
        return action.payload.songs;
      }
    default:
      return state;
  }

};

export default songsSearchReducer;