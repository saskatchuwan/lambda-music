import {
  RECEIVE_PLAYLIST
 } from '../actions/playlist_actions';

import {
  RECEIVE_ALBUM
 } from '../actions/album_actions';

import {
  RECEIVE_SONGS
 } from '../actions/song_actions';


const songIdQueueReducer = (state=[], action) => {
  Object.freeze(state);
  let newState = state.slice();


  // will have duplicated songs in queue since playlist show and album show are fetching twice upon load
  // return newState.concat(Object.keys(action.payload.songs));

  switch(action.type) {
    case RECEIVE_PLAYLIST:
      if (typeof action.payload.songs === 'undefined') {
        return [];
      } else {

        return Object.keys(action.payload.songs);
      }

    case RECEIVE_ALBUM:
      return Object.keys(action.payload.songs);

    case RECEIVE_SONGS:
      return Object.keys(action.payload.songs);

    default:
      return state;
  }
};

export default songIdQueueReducer;