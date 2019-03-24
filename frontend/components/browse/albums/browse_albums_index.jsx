import React from 'react';
import _ from 'lodash';

import AlbumIndexItem from '../../album_index_item/album_index_item';

class BrowseAlbumsIndex extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount () {
    this.props.fetchAlbums();
  }

  componentWillUnmount () {
    this.props.clearAlbums();
  }

  handleClick (e) {
    //prevent default <a> action if the target is an image tag (play button)
    if (e.target.nodeName === 'IMG') {
      e.preventDefault();
    }
  }

  handlePlay (albumId) {
    return e => {
      this.props.fetchPlaybarAlbum(albumId);
    };
  }
 
  render () {
    let { albums, artists } = this.props;

    let albumItems;

    if (Object.keys(this.props.albums).length > 0 && Object.keys(this.props.artists).length > 0) {

      albumItems = albums.map(album => {
        // let artistName = artists[album.artistId].name;
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

export default BrowseAlbumsIndex;