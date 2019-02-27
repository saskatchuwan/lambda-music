import React from 'react';
import { Link } from 'react-router-dom';

class LibraryPlayListIndex extends React.Component {
 
  render () {
    const currentUser = this.props.currentUser;

    let display;
    if (currentUser) {
      display = (
        <div>
          <h2>Welcome, {currentUser.username}!</h2>
          <br />
          <h1>library homepage placeholder</h1>
          <br />
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
      <div className='in-app-main'>
          {display}
      </div>
    );
  }
}

export default LibraryPlayListIndex;