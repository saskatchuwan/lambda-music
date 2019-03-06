import { connect } from 'react-redux';
import React from 'react';

import { fetchAlbum } from '../../actions/album_actions';
import { fetchSong } from '../../actions/song_actions';


const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let currentUser = state.entities.users[currentUserId];
  //arrays
  let songs = Object.values(state.entities.songs);

  return ({
    currentUser,
    currentUserId,
    songs,
    artists: state.entities.artists,
    albums: state.entities.albums,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
    fetchSong: (song_id) => dispatch(fetchSong(song_id)),
  });
};


class SearchResultsContainer extends React.Component {

  render () {
    return (
      <h1>hello</h1>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResultsContainer);
