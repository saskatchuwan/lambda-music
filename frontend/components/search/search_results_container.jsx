import { connect } from 'react-redux';
import React from 'react';

import { fetchSong } 
      from '../../actions/song_actions';

import { fetchPlaybarPlaylist, 
  fetchPlaybarAlbum  } 
  from '../../actions/play_bar_actions';

import SongsIndexItem 
      from '../song_list_index_item/songs_index_item';

import PlaylistIndexItem 
      from '../playlist_index_item/playlist_index_item';

import AlbumIndexItem 
      from '../album_index_item/album_index_item';


const mapStateToProps = (state) => {
  return ({
    artists: state.search.artists,
    albums: state.search.albums,
    playlists: state.search.playlists,
    songs: state.search.songs,
    songIdQueue: state.playBar.songIdQueue,
    users: state.entities.users,
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

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
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
          <AlbumIndexItem
            key={album.id}
            album={album}
            handlePlay={this.handlePlay}
            handleClick={this.handleClick}
          />
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

        let ownerId = playlist.ownerId;
        let owner = this.props.users[ownerId];

        return (
          <PlaylistIndexItem key={playlist.id} 
                playlistId={playlist.id}
                playlist={playlist} 
                owner={owner}
                fetchPlaybarPlaylist={this.props.fetchPlaybarPlaylist}
                handleClick={this.handleClick}
          />
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
