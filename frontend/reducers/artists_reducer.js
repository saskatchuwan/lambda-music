import { RECEIVE_ARTISTS,
  RECEIVE_ARTIST } from '../actions/artist_actions';

const artistsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ARTISTS:
      //currently will overwrite all artists
      return action.artists;
    case RECEIVE_ARTIST:
      newState[action.artist.id] = action.artist;
      return newState;
    default:
      return state;
  }
};

export default artistsReducer;