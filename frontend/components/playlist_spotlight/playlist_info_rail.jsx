import React from 'react';
import { withRouter } from 'react-router-dom';


const PlaylistInfoRail = props => {
  let playlistId = props.match.params.playlistId;

  let deleteButton;

  if (props.currentUserId === props.playlist[playlistId].ownerId) {
    deleteButton = <button className='info-rail-remove-button'
                          onClick={() => props.deletePlaylist(props.match.params.playlistId)
                          .then(() => props.history.push('/library/playlists'))}>
                    REMOVE FROM YOUR LIBRARY</button>
  }
  
  return (
    <div className='info-rail-container'>

      <div className='img-display-holder'>
        <img src={`${props.playlist[playlistId].coverUrl}`} />
      </div>

      <h1>{props.playlist[playlistId].name}</h1>
      {/* <span>{props.owner.username}</span> */}
      
      <br />

      <div className='info-rail-links'>
        <button 
          onClick={() => props.fetchSong(props.songIdQueue[0])}
          className='info-rail-play-button'>Play
        </button>

        {/* this will only show if user is the owner -- and this DELETES the playlist */}
        {deleteButton}

      </div>

    </div>

  )
};

export default withRouter(PlaylistInfoRail);