import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class LeftSideNavBar extends React.Component {
 
  render () {

    const currentUser = this.props.currentUser;

    return (
      <div className='left-side-nav-bar-foundation'>
        <div className='left-side-nav-bar'>
        
          <div className='nav-bar-section1'>

            <ul className='navbar-logo'>
              {/* <li><img id='splash-lambda-logo' src={window.images.logo2} /></li> */}
              <li><img id='left-nav-lambda-logo' src={window.images.doppler_logo_w} /></li>
              <li>lambda</li>
            </ul>

    
            <ul className='side-bar-nav-links'>
              <li>
                {/* changed to featured for testing */}
                <NavLink className='nav-link' to='/browse/newreleases'>
                  <img id='nav-icon' src={window.images.home} />
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className='nav-link' to='/library/playlists'>
                  <img id='nav-icon' src={window.images.library} />
                  Your Library
                </NavLink>
              </li>

              <li>
                <NavLink className='nav-link' to='/search/recent'>
                  <img id='nav-icon-search' src={window.images.search} />
                  Search
                </NavLink>
              </li>

            </ul>

          </div>

          <div className='nav-bar-section2'>
            <span>{currentUser.username}</span>
            <span id='nav-bar-line-thru'></span>
            <button className='nav-bar-logout-button' onClick={this.props.logout}>Logout</button>
          </div>

        </div>
      </div>
    );
  }
}

export default LeftSideNavBar;