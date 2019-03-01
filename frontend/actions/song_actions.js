import * as SongApiUtil from '../util/song_api_util';
import { receiveArtists, receiveArtist } from './artist_actions';
import { receiveAlbums, receiveAlbum } from './album_actions';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';


const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});


export const fetchSongs = () => dispatch => (
  SongApiUtil.fetchSongs().then(payload => {
    dispatch(receiveSongs(payload.songs));
    dispatch(receiveArtists(payload.artists));
    dispatch(receiveAlbums(payload.albums));
  })
);


export const fetchSong = (id) => dispatch => (
  SongApiUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
);


