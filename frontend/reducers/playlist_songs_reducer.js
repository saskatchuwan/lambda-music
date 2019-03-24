import { combineReducers } from 'redux';

import playlistSongsMsgReducer from './playlist_songs_msg_reducer';
import playlistSongSelectedReducer from './playlist_songs_selected_reducer';
import playlistSongsListReducer from './playlist_songs_list_reducer';

const playlistSongsReducer = combineReducers({
  playlistSongsMsg: playlistSongsMsgReducer,
  playlistSongSelected: playlistSongSelectedReducer,
  playlistSongsList: playlistSongsListReducer,
});

export default playlistSongsReducer;