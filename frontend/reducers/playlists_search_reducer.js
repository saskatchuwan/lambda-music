import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';


const playlistsSearchReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      if (typeof action.payload.playlists === 'undefined') {
        return {};
      } else {
        return action.payload.playlists;
      }
    default:
      return state;
  }

};

export default playlistsSearchReducer;