import * as PlaylistSongsApiUtil from '../util/playlist_songs_api_util';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';
export const RECEIVE_REMOVE_SONG_ERROR = 'RECEIVE_REMOVE_SONG_ERROR';
export const CLEAR_REMOVE_SONG_ERRORS = 'CLEAR_REMOVE_SONG_ERRORS';


export const receivePlaylistSong = (payload) => ({
  type: RECEIVE_PLAYLIST_SONG,
  payload
});

export const removePlaylistSong = (payload) => ({
  type: REMOVE_PLAYLIST_SONG,
  payload
});

export const receiveRemoveSongError = (error) => ({
  type: RECEIVE_REMOVE_SONG_ERROR,
  error
});

export const removeClearRemoveSongErrors = () => ({
  type: CLEAR_REMOVE_SONG_ERRORS,
  error: ""
});

export const createPlaylistSong = (playlistSong) => (dispatch) => (
  PlaylistSongsApiUtil.createPlaylistSong(playlistSong)
      .then(payload => dispatch(receivePlaylistSong(payload)))
);

export const deletePlaylistSong = (id) => (dispatch) => (
    PlaylistSongsApiUtil.deletePlaylistSong(id)
        .then(payload => dispatch(removePlaylistSong(payload)),
        (error) => dispatch(receiveRemoveSongError(JSON.parse(error.responseText))))
  );