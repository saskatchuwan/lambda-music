import { connect } from 'react-redux';
import React from 'react';

import { fetchSong } 
      from '../../actions/song_actions';
import SongsIndexItem 
      from '../song_list_index_item/songs_index_item';

import { fetchPlaybarPlaylist, 
        fetchPlaybarAlbum  } 
        from '../../actions/play_bar_actions';

const mapStateToProps = (state) => {
  return ({
    artists: state.search.artists,
    albums: state.search.albums,
    playlists: state.search.playlists,
    songs: state.search.songs,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchPlaybarAlbum: (albumId) => dispatch(fetchPlaybarAlbum(albumId)),
    fetchPlaybarPlaylist: (playlistId) => dispatch(fetchPlaybarPlaylist(playlistId)),
  });
};


class SearchResultsContainer extends React.Component {

  render () {
    let artistsDisplay;

    if (Object.keys(this.props.artists).length !== 0) {
      let artists = Object.values(this.props.artists);

      let artistItems = artists.map(artist => {
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

      artistsDisplay = <div className='artists-search-result-container'>
                              <h1>Artists</h1>
                              
                              <div className='index-display-section-tile'>
                                  { artistItems }
                              </div>
                        </div>
    }

    let albumsDisplay;

    if (Object.keys(this.props.albums).length !== 0) {
      let albums = Object.values(this.props.albums);

      let albumItems = albums.map(album => {
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

      albumsDisplay = <div className='albums-search-result-container'>
                              <h1>Albums</h1>
                              
                              <div className='index-display-section-tile'>
                                  { albumItems }
                              </div>
                        </div>
    }

    let playlistsDisplay;

    if (Object.keys(this.props.playlists).length !== 0) {
      let playlists = Object.values(this.props.playlists);

      let playlistItems = playlists.map(playlist => {
        return (
          <div className = 'tile-container'>

          {/* hover works but clicking on play button will also redirect to show */}
          <div className= 'tile'>

            <a href={`/#/playlist/${playlist.id}`} onClick={(e) => e.stopPropagation()}>

              <img src={`${playlist.coverUrl}`} />

              <div className='tile-overlay'>
                <img src={window.images.player_play} 
                    className='play-content-button'
                    onClick={() => this.props.fetchPlaybarPlaylist(playlistId)}></img>
              </div>
              
            </a>

          </div>

          <strong>
            <a href={`/#/playlist/${playlist.id}`}>
            {playlist.name}
            </a>
          </strong>
          </div>
        )
        
      });

      playlistsDisplay = <div className='playlists-search-result-container'>
                              <h1>Playlists</h1>
                              
                              <div className='index-display-section-tile'>
                                  { playlistItems }
                              </div>
                        </div>
    }




    let songsDisplay;

    if (Object.keys(this.props.songs).length !== 0) {
      let songs = Object.values(this.props.songs);

      let songItems = songs.map(song => {

        let album = this.props.albums[song.albumId];
        let artist = this.props.artists[song.artistId];

        return (
          <li key={song.id}>
            <SongsIndexItem
              song={song}
              album={album}
              artist={artist}
              fetchSong={this.props.fetchSong}
            />
          </li>
        )
      });

      songsDisplay = <div className='songs-search-result-container'>
                              <h1>Songs</h1>
                              <div className='content-index-display-container-list'>
                                <div className='index-display-section-list'>
                                    { songItems }
                                </div>
                              </div>
                      </div>
    }



    return (
      <div className='search-results-container'>
        {artistsDisplay}
        {albumsDisplay}
        {playlistsDisplay}
        {songsDisplay}
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResultsContainer);
