import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const PlaylistInfoRail = props => (
  <div className='info-rail-container'>

    <div className='img-display-holder'>
      I will be replaced by an image
    </div>

    {/* <h1>{props.playlist[props.match.params.playlistId].name}</h1> */}
    <h1>playlist {`${props.match.params.playlistId}`} name</h1>
    <span>username</span>
    
    <br />

    <div className='info-rail-links'>
      <a href='#'>play</a>
      <a href='#'>add/remove from library (...)</a>

      {/* add playlist numbers */}
      <button 
        onClick={() => props
                        .deletePlaylist(props.match.params.playlistId)
                        .then(() => props.history.push('/library/playlists'))}>Delete playlist</button>
    </div>

  </div>

);

export default withRouter(PlaylistInfoRail);