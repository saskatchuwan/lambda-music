import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class BrowseTopNav extends React.Component {

  render () {
    return (
      <div className='browse-top-nav-container'>
        <ul className='browse-top-nav-links'>
          <li>
            <NavLink className='nav-link' to='/browse/featured'>
              Featured
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/browse/newreleases'>
              New Releases
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/browse/genres'>
              Genres
            </NavLink>
          </li>
        </ul>

    </div>
    );
  }
}

export default BrowseTopNav;