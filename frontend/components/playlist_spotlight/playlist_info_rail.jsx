import React from 'react';
import { NavLink } from 'react-router-dom';

class PlaylistInfoRail extends React.Component {

  render () {
    return (
      <div className='playlist-info-rail-container'>
        <ul className='playlist-info-rail-links'>
          <li>
            <NavLink className='nav-link' to='/browse/featured'>
              FEATURED
            </NavLink>

          </li>
          <li>
            <NavLink className='nav-link' to='/browse/newreleases'>
              NEW RELEASES
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/browse/genres'>
              GENRES & MOODS
            </NavLink>
          </li>
        </ul>
    </div>
    );
  }
}

export default PlaylistInfoRail;