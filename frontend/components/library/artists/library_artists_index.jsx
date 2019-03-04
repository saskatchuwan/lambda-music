import React from 'react';
import { Link } from 'react-router-dom';

class LibraryArtistsIndex extends React.Component {

  componentDidMount () {
    this.props.fetchUserSavedArtists(this.props.currentUser.id);
  }

  componentWillUnmount () {
    this.props.clearArtists();
  }
 
  render () {
    let { artists } = this.props;

    let artistItems;

    artistItems = artists.map(artist => {

      return (
        <div className = 'tile-container' key={artist.id}>
          <a href={`/#/artist/${artist.id}`}>
            <div className= 'circle'>
              <img src={window.images.playlist_hold} />
            </div>
          </a>

          <strong>
            <a href={`/#/artist/${artist.id}`}>
            {artist.name}
            </a>
          </strong>

        </div>
      )
    });

    return (
      <div className='content-index-display-container-tile'>
          <div className='index-display-section-tile'>
            {artistItems}
          </div>
      </div>
    );
  }
}

export default LibraryArtistsIndex;