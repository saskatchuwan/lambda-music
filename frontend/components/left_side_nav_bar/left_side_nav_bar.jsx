import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class LeftSideNavBar extends React.Component {
 
  render () {
    return (
      <div className='left-side-nav-bar'>
        <h1>Nav</h1>
        <div className='side-bar-nav-links'>
          <NavLink to='/library/playlists'>Your Library</NavLink>
          <NavLink to='/browse/featured'>Home</NavLink>
          <NavLink to='/search'>Search</NavLink>
        </div>
      </div>
    );
  }
}

export default LeftSideNavBar;