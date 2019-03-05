import React from 'react';
import _ from "lodash";

class PlayBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentSongQueueIndex: null,
      songIdQueue: this.props.songIdQueue,
    };

    this.handleSongEnd = this.handleSongEnd.bind(this);
  }

  componentDidMount () {
    
  }

  handleSongEnd () {
    let currentSongQueueIndex = this.props.songIdQueue.indexOf(`${this.props.currSong.song.id}`);

    let nextSongQueueIndex = currentSongQueueIndex + 1;
    let nextSongId = this.props.songIdQueue[nextSongQueueIndex];

    this.props.fetchSong(nextSongId);
  }

  render () {
    let currSongUrl = _.get(this, `props.currSong.song.songUrl`, "no song url");

    return (
      <div className='play-bar'>
        <div className='play-bar-container'>

          <audio src={currSongUrl} 
                onEnded={this.handleSongEnd} 
                controls 
                autoPlay>
            <p>Could not play song.</p>
          </audio>

        </div>
      </div>
    );
  }
}

export default PlayBar;