import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const CLEAR_ALBUMS = 'CLEAR_ALBUMS';

export const receiveAlbums = (payload) => ({
  type: RECEIVE_ALBUMS,
  payload
});

export const receiveAlbum = (payload) => ({
  type: RECEIVE_ALBUM,
  payload
});

export const clearAlbums = () => ({
  type: CLEAR_ALBUMS
});

export const fetchAlbums = () => dispatch => (
  AlbumApiUtil.fetchAlbums().then(payload => dispatch(receiveAlbums(payload)))
);

export const fetchAlbum = (id) => dispatch => (
  AlbumApiUtil.fetchAlbum(id).then(payload => dispatch(receiveAlbum(payload)))
);

export const fetchUserSavedAlbums = (user_id) => dispatch => (
  AlbumApiUtil.fetchUserSavedAlbums(user_id).then(payload => dispatch(receiveAlbums(payload)))
);


