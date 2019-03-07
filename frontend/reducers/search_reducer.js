import { combineReducers } from 'redux';

import artistsSearchReducer from './artists_search_reducer';
import albumsSearchReducer from './albums_search_reducer';
import songsSearchReducer from './songs_search_reducer';
import playlistsSearchReducer from './playlists_search_reducer';

const searchReducer = combineReducers({
  artists: artistsSearchReducer,
  albums: albumsSearchReducer,
  songs: songsSearchReducer,
  playlists: playlistsSearchReducer,
});

export default searchReducer;