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

        <h1>Nav</h1>
        <br />
        <div className='side-bar-nav-links'>
          <NavLink to='/library/playlists'>Your Library</NavLink>
          <NavLink to='/browse/featured'>Home</NavLink>
          <NavLink to='/search'>Search</NavLink>
          <NavLink to='/playlist'>Temp playlist link</NavLink>
        </div>

        {display}


      </div>
    );
  }
}

export default LeftSideNavBar;