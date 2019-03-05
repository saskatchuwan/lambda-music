import React from 'react';
import _ from "lodash";

class PlayBar extends React.Component {
  constructor (props) {
    super(props);

    this.handleSongEnd = this.handleSongEnd.bind(this);
  }

  componentDidMount () {
    
  }

  handleSongEnd () {
    let { songIdQueue, currSong, fetchSong } = this.props;
    let currentSongQueueIndex = songIdQueue.indexOf(`${currSong.song.id}`);

    let nextSongQueueIndex = currentSongQueueIndex + 1;
    let nextSongId = songIdQueue[nextSongQueueIndex];

    fetchSong(nextSongId);
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