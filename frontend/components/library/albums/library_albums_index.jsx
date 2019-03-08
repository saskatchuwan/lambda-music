import React from 'react';

class LibraryAlbumsIndex extends React.Component {

  constructor (props) {
    super(props);
    // this.handlePlay = this.handlePlay.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

        // let artistName = artists[album.artistId].name;

        return (
          <div className = 'tile-container' key={album.id}>
            <div className= 'tile'>

              <a href={`/#/album/${album.id}`}  onClick={this.handleClick}>

                <img src={`${album.coverUrl}`} />

                <div className= 'tile-overlay'>
                    <img src={window.images.player_play} 
                      className='play-content-button'
                      onClick={this.handlePlay(album.id)}></img>
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

export default LibraryAlbumsIndex;