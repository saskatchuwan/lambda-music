import { RECEIVE_CURRENT_USER } 
        from '../actions/session_actions';

import { RECEIVE_PLAYLISTS,
        RECEIVE_PLAYLIST,
        REMOVE_PLAYLIST } 
        from '../actions/playlist_actions';

const usersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });

    case RECEIVE_PLAYLISTS:
      let playlistOwners = Object.values(action.payload.users);

      playlistOwners.forEach(owner => {
        newState[owner.id] = owner;
      });

      return newState;

    //broken right now
    
    // case RECEIVE_PLAYLIST:
    //   let playlistOwner = Object.values(action.payload.owners);

    //   playlistOwner.forEach(owner => {
    //     newState[owner.id] = owner;
    //   });

    //   return newState;

    default:
      return state;
  }
};

export default usersReducer;