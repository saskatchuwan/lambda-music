import React from 'react';
import { Link } from 'react-router-dom';

class LibrarySongsIndex extends React.Component {

 
  render () {
    return (
      <div className='content-index-display-container'>
          <h1>Songs curated by {this.props.currentUser.username}</h1>

          <div className='index-display-section'>

          </div>
      </div>
    );
  }
}

export default LibrarySongsIndex;