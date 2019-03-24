import { RECEIVE_PLAYLIST } 
        from '../actions/playlist_actions';

import { RECEIVE_ALBUM } 
        from '../actions/album_actions';

import { RECEIVE_SONGS } 
        from '../actions/song_actions';

import { RECEIVE_PLAYBAR_PLAYLIST,
        RECEIVE_PLAYBAR_ALBUM } 
        from '../actions/play_bar_actions';


const songIdQueueReducer = (state=[], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLIST:
      if (typeof action.payload.songs === 'undefined') {
        return [];
      } else {
        return Object.keys(action.payload.songs);
      };
      
    case RECEIVE_ALBUM:
      return Object.keys(action.payload.songs);

    case RECEIVE_SONGS:
      return Object.keys(action.payload.songs);

    case RECEIVE_PLAYBAR_PLAYLIST:
      return Object.keys(action.payload.songs);

    case RECEIVE_PLAYBAR_ALBUM:
      return Object.keys(action.payload.songs);

    default:
      return state;
  }
};

export default songIdQueueReducer;