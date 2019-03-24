import React from 'react';
import AlbumIndexItem from '../../index_items/album_index_item';

class LibraryAlbumsIndex extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount () {
    this.props.fetchUserSavedAlbums(this.props.currentUser.id);
  }

  componentWillUnmount () {
    this.props.clearAlbums();
  }

  handlePlay (albumId) {
    return e => {
      this.props.fetchPlaybarAlbum(albumId);
    };
  }

  handleClick (e) {
    //prevent default <a> action if the target is an image tag (play button)
    if (e.target.nodeName === 'IMG') {
      e.preventDefault();
    }
  }
 
  render () {
    let { albums, artists } = this.props;

    let albumItems;

    if (Object.keys(this.props.albums).length > 0 && Object.keys(this.props.artists).length > 0) {
      albumItems = albums.map(album => {
        return (
          <AlbumIndexItem
            key={album.id}
            album={album}
            handlePlay={this.handlePlay}
            handleClick={this.handleClick}
          />
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