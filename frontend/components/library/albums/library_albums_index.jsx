import React from 'react';

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
            
            <button onClick={() => this.props.fetchPlaybarAlbum(album.id)}>i'm a button</button>

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