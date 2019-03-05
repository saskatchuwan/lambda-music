import React from 'react';
import _ from "lodash";

class PlayBar extends React.Component {
  constructor (props) {
    this.state = {
      currentSongIndex: 0,
      actualSongId: this.props.songIdQueue[current]
    };
  }
 
  render () {

    let currSongUrl = _.get(this, `props.currSong.song.songUrl`, "no song url");

    return (
      <div className='play-bar'>
        <div className='play-bar-container'>

          <audio src={currSongUrl} controls autoPlay>
            <p>Could not play song.</p>
          </audio>

        </div>
      </div>
    );
  }
}

export default PlayBar;