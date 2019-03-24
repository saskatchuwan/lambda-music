import { RECEIVE_SEARCH_RESULTS } 
        from '../actions/search_actions';

const artistsSearchReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      if (typeof action.payload.artists === 'undefined') {
        return {};
      } else {
        return action.payload.artists;
      }
    default:
      return state;
  }

};

export default artistsSearchReducer;