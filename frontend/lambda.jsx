//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Root from './components/root';
import configureStore from './store/store';

//testing
import { fetchSongs, fetchSong} from './actions/song_actions'


document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // just for testing
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchSongs = fetchSongs;
  // window.fetchSong = fetchSong;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});