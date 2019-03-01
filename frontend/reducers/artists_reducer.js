import { RECEIVE_ARTISTS,
  RECEIVE_ARTIST } from '../actions/artist_actions';

import { RECEIVE_SONGS } from '../actions/song_actions';

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

      //when fetchPosts() thunk action is dispatched, will update artists slice of state with assciated artists to list of songs
    case RECEIVE_SONGS:
      return action.payload.artists;
    default:
      return state;
  }
};

export default artistsReducer;