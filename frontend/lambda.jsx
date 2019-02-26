import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
import { login, signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {

  // window.login = SessionAPIUtil.login;
  // window.signup = SessionAPIUtil.signup;
  // window.logout = SessionAPIUtil.logout;

  window.login = login;
  window.signup = signup;
  

  // const store = configureStore();

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


  //TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});