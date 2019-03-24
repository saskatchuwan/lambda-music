import { RECEIVE_PLAYLIST_SONG, 
        REMOVE_PLAYLIST_SONG } 
        from '../actions/playlist_songs_actions';


const playlistSongsMsgReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_PLAYLIST_SONG:
      newState = action.payload.message;
      return newState;

    case REMOVE_PLAYLIST_SONG:
      newState = action.payload.message;
      return newState;
      
    default:
      return state;
  }
};

export default playlistSongsMsgReducer;