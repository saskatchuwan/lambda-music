import { OPEN_MODAL } from '../actions/modal_actions';


const playlistSongSelectedReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {

    case OPEN_MODAL:
      return action.songId;
    default:
      return state;
  }
};

export default playlistSongSelectedReducer;