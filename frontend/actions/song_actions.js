import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const CLEAR_SONGS = 'CLEAR_SONGS';


const receiveSongs = (payload) => ({
  type: RECEIVE_SONGS,
  payload
});

const receiveSong = (payload) => ({
  type: RECEIVE_SONG,
  payload
});

export const clearSongs = () => ({
  type: CLEAR_SONGS
});


export const fetchSongs = () => dispatch => (
  SongApiUtil.fetchSongs().then(payload => 
    dispatch(receiveSongs(payload))
  )
);

export const fetchSong = (id) => dispatch => (
  SongApiUtil.fetchSong(id).then(payload => dispatch(receiveSong(payload)))
);

export const fetchUserSavedSongs = (user_id) => dispatch => (
  SongApiUtil.fetchUserSavedSongs(user_id).then(payload => dispatch(receiveSongs(payload)))
);


