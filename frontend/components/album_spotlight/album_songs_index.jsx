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
      //this.props.albums is a zero-indexed array
      let album = this.props.albums[song.albumId];
      let artist = this.props.artists[song.artistId];

      return (
        <li key={song.id}>
          <strong>{song.title}</strong>
          <br/>
          {artist.name} - {album.title}
        </li>
      )
    });

    

    return (
      
      <div className='main-view-spotlight-container'>

        <AlbumInfoRail 
          //how to do i get the playlist name out heeerrreeee
        />

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