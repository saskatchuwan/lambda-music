import React from 'react';
import AlbumInfoRail from './album_info_rail';

class AlbumSongsIndex extends React.Component {

  componentDidMount() {
    let albumId = this.props.match.params.albumId;
    this.props.fetchAlbum(albumId);
  }

  render () {

    let songItems;
    songItems = this.props.songs.map(song => {
      let album = this.props.albums[song.albumId];
      let artist = this.props.artists[song.artistId];

      return (
        <li key={song.id}>
          <div className='song-index-item-left'>


            <div className='song-index-play-icon-container'>
              <img className='song-index-play-icon' 
                    id='dormant' 
                    src={window.images.music_note} />

              <img className='song-index-play-icon' 
                    id='play' 
                    src={window.images.music_play} />
            </div>

            <div className='song-index-info'>
              <strong>{song.title}</strong>
              <br/>
              {artist.name} - {album.title}
            </div>

          </div>
        </li>
      )
    });

    let infoRail;
    if (Object.keys(this.props.albums).length > 0 && Object.keys(this.props.artists).length > 0) {
      infoRail =  <AlbumInfoRail 
                    album={this.props.albums}
                    artist={Object.values(this.props.artists)}
                    />
    }


    return (
      
      <div className='main-view-spotlight-container'>

        {infoRail}

        <div className='content-index-display-container-list'>
            <ul className='index-display-section-list'>
              {songItems}
            </ul>
        </div>

      </div>
    );
  }

}

export default AlbumSongsIndex;