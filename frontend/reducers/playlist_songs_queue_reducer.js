import { RECEIVE_SONG } from '../actions/song_actions';


const playlistSongsQueueReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SONG:
      //will just store the song id for the modal for adding songs to playlists
      return Object.keys(action.payload.song)[0];
    default:
      return state;
  }
};

export default playlistSongsQueueReducer;