import React from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';


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
    this.props.createPlaylist(playlist).then(this.props.closeModal);
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="new-playlist-form-container">
        <form onSubmit={this.handleSubmit} className="create-playlist-form-box">
          <input type="text"
                  name='playlist[name]'
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="create-playlist-input"
                />
          <input type="submit" className="create-submit" value='create' />
        </form>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistForm);