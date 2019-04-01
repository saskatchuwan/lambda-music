//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Root from './components/root';
import configureStore from './store/store';

// import {deletePlaylistSong} from './actions/playlist_songs_actions';
import {deletePlaylistSong, createPlaylistSong} from './util/playlist_songs_api_util';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id },
      // playBar: {
      //   currSong: {
      //     album: {
      //       coverUrl: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--94759e61f33e7c8fd76b7859878e2ae9ce371110/fleetword-rumours.jpeg",
      //       id: 3,
      //       title: "Rumours"
      //     },
      //     artist: {
      //       coverUrl: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--179848640d34dfe8faf5c7fe82df4aea99d7b512/fleetwoodmac.jpg",
      //       id: 3,
      //       name: "Fleetwood Mac"
      //     },
      //     song: {
      //       albumId: 3,
      //       artistId: 3,
      //       id: 16,
      //       songUrl: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3d3dc271188ed21487876fea38eb98df05773dfa/09+I+Don't+Want+To+Know.mp3",
      //       title: "I Don't Want To Know"
      //     }
      //   }
      // }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // just for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.deletePlaylistSong = deletePlaylistSong;
  window.createPlaylistSong = createPlaylistSong;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});