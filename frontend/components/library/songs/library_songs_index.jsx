import React from 'react';
import { Link } from 'react-router-dom';

class LibrarySongsIndex extends React.Component {
  
 
  render () {
    console.log(this.props.currentUser)
    return (
      <div className='content-index-display-container'>
          {/* <h1>Playlists curated by {this.props.currentUser.username}</h1> */}
          <h1>Songs by {this.props.test}</h1>
      </div>
    );
  }
}

export default LibrarySongsIndex;