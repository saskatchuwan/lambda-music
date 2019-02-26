import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
 
  render () {
    const currentUser = this.props.currentUser;

    let display;
    if (currentUser) {
      display = (
        <div>
          <h2>Welcome, {currentUser.username}!</h2>
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
      <div>
          {display}
      </div>
    );
  }
}

export default Greeting;