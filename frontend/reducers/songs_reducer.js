import { RECEIVE_SONGS,
        RECEIVE_SONG } from '../actions/song_actions';

import { RECEIVE_PLAYLISTS,
          RECEIVE_PLAYLIST,
          REMOVE_PLAYLIST,
           } from '../actions/playlist_actions';

const songsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SONGS:
      //currently will overwrite all songs
      return action.payload.songs;
    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;

    case RECEIVE_PLAYLISTS:
      return action.payload.songs;
    case RECEIVE_PLAYLIST:
      let playlistSongs = Object.values(action.payload.songs);

      playlistSongs.forEach(playlistSong => {
        newState[playlistSong.id] = playlistSong;
      });

      return newState;

      //do we need one for REMOVE_PLAYLIST?
      
    default:
      return state;
  }
};

export default songsReducer;