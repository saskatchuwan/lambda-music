import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class LeftSideNavBar extends React.Component {
 
  render () {

    const currentUser = this.props.currentUser;

    let display;
    if (currentUser) {
      display = (
        <div>
          <h4>Welcome, {currentUser.username}!</h4>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );

    } else {
      display = (
        <div>
          <Link to='/signup'>Sign up!</Link>
          <br />
          <Link to='/login'>Log in!</Link>
        </div>
      )

    }

    return (
      <div className='left-side-nav-bar'>

        <div className='nav-bar-section1'>

          <ul className='navbar-logo'>
            <li><img id='splash-lambda-logo' src={window.images.logo2} /></li>
            <li>lambda</li>
          </ul>

  
          <ul className='side-bar-nav-links'>
            <li><NavLink className='nav-link' to='/browse/featured'>Home</NavLink></li>
            <li><NavLink className='nav-link' to='/library/playlists'>Your Library</NavLink></li>
            <li><NavLink className='nav-link' to='/search'>Search</NavLink></li>
            <li><NavLink className='nav-link' to='/playlist'>Temp playlist link</NavLink></li>
          </ul>


        </div>

        <div className='nav-bar-section2'>
          {display}
        </div>


      </div>
    );
  }
}

export default LeftSideNavBar;