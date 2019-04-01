import { RECEIVE_PLAYLIST_SONG, 
        REMOVE_PLAYLIST_SONG,
        RECEIVE_REMOVE_SONG_ERROR
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
      
    default:
      return state;
  }
};

export default playlistSongsMsgReducer;