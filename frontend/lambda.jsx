//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Root from './components/root';
import configureStore from './store/store';

//testing
// import { fetchAlbums, fetchAlbum} from './actions/album_actions'
import { fetchUserSavedSongs } from './actions/song_actions';
import { fetchUserSavedArtists } from './actions/artist_actions';
import { fetchUserSavedAlbums } from './actions/album_actions';

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
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUserSavedSongs = fetchUserSavedSongs;
  window.fetchUserSavedArtists = fetchUserSavedArtists;
  window.fetchUserSavedAlbums = fetchUserSavedAlbums;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});