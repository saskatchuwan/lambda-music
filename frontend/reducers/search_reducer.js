import { combineReducers } from 'redux';

import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import songsReducer from './songs_reducer';
import playlistsReducer from './playlists_reducer';

const searchReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer,
  playlists: playlistsReducer,
});

export default searchReducer;