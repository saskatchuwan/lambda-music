import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const AlbumInfoRail = props => {
  let albumId = props.match.params.albumId;

  return (
    <div className='info-rail-container'>

      <div className='img-display-holder'>
        I will be replaced by an image
      </div>

      <h1>{props.album[albumId].title}</h1>

      <span className='info-rail-creator'>{props.artist[0].name}</span>
      
      <br />

      <div className='info-rail-links'>
        {/* doesn't do anything yet */}
        <button className='info-rail-play-button'>Play</button>

      </div>
    </div>
  )

};

export default withRouter(AlbumInfoRail);