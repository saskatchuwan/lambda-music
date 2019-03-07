import React from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUserId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
  };
};



class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.state);
    this.props.createPlaylist(playlist)
        .then(this.props.closeModal)
        .then(this.props.history.push('/library/playlists'));
  }


  render() {
    return (
      <div className="new-playlist-form-container">
        
        <button className='close-modal-button'
            onClick={() => this.props.closeModal()}>
          <img id='close-icon' src={window.images.modal_close} />
        </button>

        <h1>Create new playlist</h1>

        <form onSubmit={this.handleSubmit} className="create-playlist-form-box">
          <div className='create-playlist-input-container'>

            <div className='create-playlist-content-spacing'>

              <label>Playlist Name</label>
                
              <input type="text"
                      className="create-playlist-input"
                      name='playlist[name]'
                      value={this.state.name}
                      placeholder="Start typing..."
                      onChange={this.update('name')}
                    />
            </div>

          </div>
          <br />
          <br />
          <input type="submit" className="create-submit-button" value='CREATE' />
        </form>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPlaylistForm));