import * as PlaylistSongsApiUtil from '../util/playlist_songs_api_util';

export const RECEIVE_PLAYLIST_SONG_ACTION = 'RECEIVE_PLAYLIST_SONG_ACTION';

export const receivePlaylistSongMsg = (playlistSongMsg) => ({
  type: RECEIVE_PLAYLIST_SONG_ACTION,
  playlistSongMsg
});

export const createPlaylistSong = (playlistSong) => (dispatch) => (
  PlaylistSongsApiUtil.createPlaylistSong(playlistSong)
      .then(msg => dispatch(receivePlaylistSongMsg(msg)))
);

export const deletePlaylistSong = (id) => (dispatch) => (
  PlaylistSongsApiUtil.deletePlaylistSong(id)
      .then(msg => dispatch(receivePlaylistSongMsg(msg)))
);