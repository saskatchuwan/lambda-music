import { RECEIVE_SONG,
  CLEAR_SONGS,
 } from '../actions/song_actions';

import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';


import {
  RECEIVE_PLAYBAR_PLAYLIST,
  RECEIVE_PLAYBAR_ALBUM
 } from '../actions/play_bar_actions';


const currSongReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  let songsArray;
  let artistsArray;
  let albumsArray;

  switch(action.type) {
    case RECEIVE_SONG:
      return action.payload;

    // case RECEIVE_PLAYLIST:
    //   // let songsArray = Object.values(action.payload.songs);
    //   // return {song: songsArray[0]};

    case RECEIVE_PLAYBAR_PLAYLIST:
      songsArray = Object.values(action.payload.songs);
      artistsArray = Object.values(action.payload.artists);
      albumsArray = Object.values(action.payload.albums);
      return {
        song: songsArray[0],
        artist: artistsArray[0],
        album: albumsArray[0],
      };

    case RECEIVE_PLAYBAR_ALBUM:
      songsArray = Object.values(action.payload.songs);
      artistsArray = Object.values(action.payload.artist);
      albumsArray = Object.values(action.payload.album);

      return {
        song: songsArray[0],
        artist: artistsArray[0],
        album: albumsArray[0],
      };

    default:
      return state;
  }
};

export default currSongReducer;