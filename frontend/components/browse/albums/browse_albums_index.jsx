import React from 'react';
import _ from 'lodash';

class BrowseAlbumsIndex extends React.Component {

  componentDidMount () {
    this.props.fetchAlbums();
  }

  componentWillUnmount () {
    this.props.clearAlbums();
  }
 
  render () {
    let { albums, artists } = this.props;

    let albumItems;


    if (Object.keys(this.props.albums).length > 0 && Object.keys(this.props.artists).length > 0) {

      albumItems = _.shuffle(albums).map(album => {

        // let artistName = artists[album.artistId].name;

        return (
          <div className = 'tile-container' key={album.id}>
            <div className= 'tile'>

              <a href={`/#/album/${album.id}`}  onClick={(e) => e.stopPropagation()}>

                <img src={`${album.coverUrl}`} />

                <div className= 'tile-overlay'>
                    <img src={window.images.player_play} 
                      className='play-content-button'
                      onClick={() => this.props.fetchPlaybarAlbum(album.id)}></img>
                </div>

              </a>

            </div>

            <strong>
              <a href={`/#/album/${album.id}`}>
              {album.title}
              </a>
            </strong>

            <br />
            {/* {artistName} */}
  
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

export default BrowseAlbumsIndex;