import { connect } from 'react-redux';
import React from 'react';
import { fetchSong } from '../../actions/song_actions';
import SongsIndexItem from '../song_list_index_item/songs_index_item';

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
    fetchSong: (song_id) => dispatch(fetchSong(song_id)),
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
            <a href={`/#/artist/${artist.id}`}>
              <div className= 'circle'>
                <img src={`${artist.coverUrl}`} />
              </div>
            </a>

            <strong>
              <a href={`/#/artist/${artist.id}`}>
              {artist.name}
              </a>
            </strong>
          </div>
        )
        
      });

      artistsDisplay = <div className='artists-search-result-container'>
                              <h1>Artists</h1>
                              <br />
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
            <a href={`/#/album/${album.id}`}>
              <div className= 'tile'>
                <img src={`${album.coverUrl}`} />
              </div>
            </a>

            <strong>
              <a href={`/#/album/${album.id}`}>
              {album.name}
              </a>
            </strong>
          </div>
        )
        
      });

      albumsDisplay = <div className='albums-search-result-container'>
                              <h1>Albums</h1>
                              <br />
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
          <div className = 'tile-container' key={playlist.id}>
            <a href={`/#/playlist/${playlist.id}`}>
              <div className= 'tile'>
                <img src={`${playlist.coverUrl}`} />
              </div>
            </a>

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
                              <br />
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
