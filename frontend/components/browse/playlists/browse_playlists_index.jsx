import React from 'react';
import PlaylistIndexItem from '../../playlist_index_item/playlist_index_item';
import _ from 'lodash';

class BrowsePlayListIndex extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount () {
    this.props.fetchPlaylists();
  }

  componentWillUnmount () {
    this.props.clearPlaylists();
  }

  handleClick (e) {
    //prevent default <a> action if the target is an image tag (play button)
    if (e.target.nodeName === 'IMG') {
      e.preventDefault();
    }
  }
 
  render () {
    let { playlists, users, fetchSong, songIdQueue, fetchPlaybarPlaylist } = this.props;

    let playlistItems;

    if (Object.keys(this.props.playlists).length > 0) {
      playlistItems = playlists.map(playlist => {

        let ownerId = playlist.ownerId;
        let owner = users[ownerId];
    
        return (
          <PlaylistIndexItem key={playlist.id} 
                playlistId={playlist.id}
                playlist={playlist} 
                owner={owner}
                fetchPlaybarPlaylist={fetchPlaybarPlaylist}
                fetchSong={fetchSong}
                songIdQueue={songIdQueue}
                handleClick={this.handleClick}
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