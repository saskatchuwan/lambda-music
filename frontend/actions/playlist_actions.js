import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receivePlaylists = (payload) => ({
  type: RECEIVE_PLAYLISTS,
  payload
});

export const receivePlaylist = (payload) => ({
  type: RECEIVE_PLAYLIST,
  payload
});


export const removePlaylist = (playlist) => ({
  type: REMOVE_PLAYLIST,
  playlistId: playlist.id
});

export const fetchPlaylists = () => dispatch => (
  PlaylistApiUtil.fetchPlaylists().then(payload => dispatch(receivePlaylists(payload)))
);

export const fetchPlaylist = (id) => dispatch => (
  PlaylistApiUtil.fetchPlaylist(id).then(payload => dispatch(receivePlaylist(payload)))
);

export const createPlaylist = (playlist) => dispatch => (
  PlaylistApiUtil.createPlaylist(playlist).then(payload => dispatch(receivePlaylist(payload)))
);


//change to payload?

export const updatePlaylist = (playlist) => dispatch => (
  PlaylistApiUtil.updatePlaylist(playlist).then(payload => dispatch(receivePlaylist(payload)))
);


//should verify that the .then works here
export const deletePlaylist = (id) => dispatch => (
  PlaylistApiUtil.deletePlaylist(id).then(playlist => dispatch(removePlaylist(playlist)))
);

