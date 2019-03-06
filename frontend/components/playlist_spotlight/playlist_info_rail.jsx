import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const PlaylistInfoRail = props => {
  let playlistId = props.match.params.playlistId;

  //only render a TRASH playlist button if the current user is the owner of the playlist
  let deleteButton;
  let editButton;

  if (props.currentUserId === props.playlist[playlistId].ownerId) {
    deleteButton = <button className='info-rail-remove-button'
                          onClick={() => props.deletePlaylist(props.match.params.playlistId)
                          .then(() => props.history.push('/library/playlists'))}>
                    REMOVE FROM YOUR LIBRARY</button>

    // insert edit button
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
        {/* doesn't do anything yet */}
        <button className='info-rail-play-button'>Play</button>

        {/* this will only show if user is the owner -- and this DELETES the playlist */}
        {deleteButton}

      </div>

    </div>

  )
};

export default withRouter(PlaylistInfoRail);