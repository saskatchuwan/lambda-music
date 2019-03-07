import React from 'react';
import LibraryPlaylistIndexItem from '../../library/playlist/library_playlist_index_item';


class BrowsePlayListIndex extends React.Component {

  componentDidMount () {
    this.props.fetchPlaylists();
  }

  componentWillUnmount () {
    this.props.clearPlaylists();
  }
 
  render () {
    let { playlists, users, fetchSong, songIdQueue, fetchPlaybarPlaylist } = this.props;

    let playlistItems;

    if (Object.keys(this.props.playlists).length > 0) {
      playlistItems = playlists.map(playlist => {

        let ownerId = playlist.ownerId;
        let owner = users[ownerId];
    
        return (
          <LibraryPlaylistIndexItem key={playlist.id} 
                playlistId={playlist.id}
                playlist={playlist} 
                owner={owner}
                fetchPlaybarPlaylist={fetchPlaybarPlaylist}
                fetchSong={fetchSong}
                songIdQueue={songIdQueue}
          />
        )
      });
  
    }

    return (
      <div className='content-index-display-container-tile'>
          <div className='index-display-section-tile'>
            {playlistItems}
          </div>
      </div>
    );
  }
}

export default BrowsePlayListIndex;