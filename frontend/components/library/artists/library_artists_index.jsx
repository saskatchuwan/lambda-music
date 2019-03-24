import React from 'react';

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
          <a href={`/#/search/recent`}>
            <div className= 'circle'>
              <img src={`${artist.coverUrl}`} />
            </div>
          </a>

          <strong>
            <a href={`/#/search/recent`}>
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