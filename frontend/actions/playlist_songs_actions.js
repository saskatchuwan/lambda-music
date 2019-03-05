import * as PlaylistSongsApiUtil from '../util/playlist_songs_api_util';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const receivePlaylistSong = (payload) => ({
  type: RECEIVE_PLAYLIST_SONG,
  payload
});

export const removePlaylistSong = (payload) => ({
  type: REMOVE_PLAYLIST_SONG,
  payload
});

export const createPlaylistSong = (playlistSong) => (dispatch) => (
  PlaylistSongsApiUtil.createPlaylistSong(playlistSong)
      .then(payload => dispatch(receivePlaylistSong(payload)))
);

export const deletePlaylistSong = (id) => (dispatch) => (
    PlaylistSongsApiUtil.deletePlaylistSong(id)
        .then(payload => dispatch(removePlaylistSong(payload)))
  );