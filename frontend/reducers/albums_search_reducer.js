import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';


const albumsSearchReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      if (typeof action.payload.albums === 'undefined') {
        return {};
      } else {
        return action.payload.albums;
      }
    default:
      return state;
  }

};

export default albumsSearchReducer;