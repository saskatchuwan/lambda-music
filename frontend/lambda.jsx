//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import * as SessionAPIUtil from './util/session_api_util';



document.addEventListener('DOMContentLoaded', () => {

  //TESTING START
  window.login = SessionAPIUtil.login;
  window.signup = SessionAPIUtil.signup;
  window.logout = SessionAPIUtil.logout;
  //TESTING END

  const store = configureStore();


  //TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING END


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});