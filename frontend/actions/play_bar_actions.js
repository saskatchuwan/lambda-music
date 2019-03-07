import * as PlaylistApiUtil from '../util/playlist_api_util';
import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_PLAYBAR_PLAYLIST = 'RECEIVE_PLAYBAR_PLAYLIST';
export const RECEIVE_PLAYBAR_ALBUM = 'RECEIVE_PLAYBAR_ALBUM';

export const receivePlaybarPlaylist = (payload) => ({
  type: RECEIVE_PLAYBAR_PLAYLIST,
  payload
});

export const receivePlaybarAlbum = (payload) => ({
  type: RECEIVE_PLAYBAR_ALBUM,
  payload
});


export const fetchPlaybarPlaylist = (playlistId) => dispatch => (
  PlaylistApiUtil.fetchPlaylist(playlistId).then(payload => dispatch(receivePlaybarPlaylist(payload)))
);

export const fetchPlaybarAlbum = (albumId) => dispatch => (
  AlbumApiUtil.fetchAlbum(albumId).then(payload => dispatch(receivePlaybarAlbum(payload)))
);
