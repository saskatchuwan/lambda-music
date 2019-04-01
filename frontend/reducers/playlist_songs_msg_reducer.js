import { RECEIVE_PLAYLIST_SONG, 
        REMOVE_PLAYLIST_SONG } 
        from '../actions/playlist_songs_actions';


const playlistSongsMsgReducer = (state="", action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLIST_SONG:
      return action.payload.message;

    case REMOVE_PLAYLIST_SONG:
      return action.payload.message;
      
    default:
      return state;
  }
};

export default playlistSongsMsgReducer;