import React from 'react';
import { Link } from 'react-router-dom';

class LibraryAlbumsIndex extends React.Component {

  componentDidMount () {
    this.props.fetchUserSavedAlbums(this.props.currentUser.id);
  }

  componentWillUnmount () {
    this.props.clearAlbums();
  }
 
  render () {
    let { albums } = this.props;

    let albumItems;

    if (Object.keys(this.props.albums).length > 0) {

      albumItems = albums.map(album => {
  
        return (
          <div className = 'tile-container' key={album.id}>
            <a href={`/#/album/${album.id}`}>
              <div className= 'tile'>
                <img src={`${album.coverUrl}`} />
              </div>
            </a>
  
            <strong>
              <a href={`/#/album/${album.id}`}>
              {album.title}
              </a>
            </strong>
  
          </div>
        )
      });
    }

    return (
      <div className='content-index-display-container-tile'>
          <div className='index-display-section-tile'>
            {albumItems}
          </div>
      </div>
    );
  }
}

export default LibraryAlbumsIndex;