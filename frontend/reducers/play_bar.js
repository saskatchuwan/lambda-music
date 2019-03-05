import { combineReducers } from 'redux';

import currSongReducer from './curr_song_reducer';
import songIdQueueReducer from './song_queue_reducer';

const playBarReducer = combineReducers({
  currSong: currSongReducer,
  songIdQueue: songIdQueueReducer,
});

export default playBarReducer;