import React from 'react';
import { NavLink } from 'react-router-dom';


const AlbumInfoRail = props => (
  <div className='info-rail-container'>

    <div className='img-display-holder'>
      I will be replaced by an image
    </div>

    <h1>album name</h1>
    <span>username</span>
    
    <br />

    <div className='info-rail-links'>
      <a href='#'>play</a>
      <a href='#'>add/remove from library (...)</a>
    </div>

  </div>

);

export default AlbumInfoRail;