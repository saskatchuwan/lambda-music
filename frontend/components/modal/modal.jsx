import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewPlaylistForm from './new_playlist_form';
// imoprt add song to playlist modal

function Modal({modal, closeModal}) {

  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'create-playlist':
      component = <NewPlaylistForm />;
      break;
    case 'add-song-to-playlist':
      component = <h2>placeholder</h2>;
      break;
    default:
      return null;
  }


  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);