import { RECEIVE_PLAYLIST_SONG, 
        REMOVE_PLAYLIST_SONG,
        RECEIVE_REMOVE_SONG_ERROR,
        CLEAR_REMOVE_SONG_ERRORS
       } 
        from '../actions/playlist_songs_actions';


const playlistSongsMsgReducer = (state="", action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLIST_SONG:
      return action.payload.message;

    case REMOVE_PLAYLIST_SONG:
      return action.payload.message;
    
    case RECEIVE_REMOVE_SONG_ERROR:
      return action.error.message;

    case CLEAR_REMOVE_SONG_ERRORS:
      return action.error;
      
    default:
      return state;
  }
};

export default playlistSongsMsgReducer;