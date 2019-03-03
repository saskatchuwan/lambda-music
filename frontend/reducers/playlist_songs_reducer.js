import { combineReducers } from 'redux';

import playlistSongsMsgReducer from './playlist_songs_msg_reducer';
import playlistSongsQueueReducer from './playlist_songs_queue_reducer';

const playlistSongsReducer = combineReducers({
  playlistSongsMsg: playlistSongsMsgReducer,
  playlistSongsQueue: playlistSongsQueueReducer,
});

export default playlistSongsReducer;