import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist
});

export const fetchArtists = () => dispatch => (
  ArtistApiUtil.fetchArtists().then(artists => dispatch(receiveArtists(artists)))
);

export const fetchArtist = (id) => dispatch => (
  ArtistApiUtil.fetchArtist(id).then(artist => dispatch(receiveArtist(artist)))
);

export const fetchUserSavedArtists = (user_id) => dispatch => (
  ArtistApiUtil.fetchUserSavedArtists(user_id).then(payload => dispatch(receiveArtists(payload)))
);


