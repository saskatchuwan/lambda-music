import { connect } from 'react-redux';
import React from 'react';

import { fetchAlbum } from '../../actions/album_actions';
import { fetchSong } from '../../actions/song_actions';


const mapStateToProps = (state, ownProps) => {
  //arrays
  let songs = Object.values(state.entities.songs);

  return ({
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


class SearchPlaceCardContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render () {
    console.log(this.state);

    let searchResultElement;
    


    return (
      <div className='search-main-container'>
        <div className='search-bar-container'>
          <input type='text' 
                  className='search-bar'
                  onChange={this.update('searchTerm')} 
                  placeholder= 'Start typing...' 
                  value={this.state.searchTerm}/>
        </div>

        <div className='search-placecard'>

          <div className='placecard-info'>
            <h1>Search lambda</h1>
            <span>Find your favorite songs, artists, albums, podcasts and playlists.</span>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPlaceCardContainer);
