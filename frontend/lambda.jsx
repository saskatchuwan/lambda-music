//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Root from './components/root';
import configureStore from './store/store';

//testing
// import { fetchAlbums, fetchAlbum} from './actions/album_actions'
import { fetchUserPlaylists, fetchPlaylist, fetchPlaylists } from './actions/playlist_actions';


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
  window.fetchUserPlaylists = fetchUserPlaylists;
  window.fetchPlaylists = fetchPlaylists;
  window.fetchPlaylist = fetchPlaylist;
  

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});