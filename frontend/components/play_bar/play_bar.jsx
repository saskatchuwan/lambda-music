import React from 'react';
import { Link } from 'react-router-dom';

class PlayBar extends React.Component {
 
  render () {
    return (
      <div className='play-bar'>
        <div className='play-bar-container'>
          <audio src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--02981452dfa06ba930b5e0cf67d0225a8c23854e/02+Jo-CC-80ga.mp3" controls>
            <p>Fallback content goes here.</p>
          </audio>
        </div>
      </div>
    );
  }
}

export default PlayBar;