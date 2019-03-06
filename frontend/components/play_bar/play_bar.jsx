import React from 'react';
import _ from "lodash";
import ReactPlayer from 'react-player';

class PlayBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      controls: true,
    }

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

        <div className='player-wrapper'>
          <audio src={currSongUrl} 
                onEnded={this.handleSongEnd} 
                controls 
                autoPlay>
            <p>Could not play song.</p>
          </audio>
{/* 
          <ReactPlayer 
              className='react-player'
              url='https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/02+Jo%CC%80ga.mp3'
              // url={currSongUrl} 
              onEnded={this.handleSongEnd}
              width='100%'
              height='100%'
              controls={this.state.controls}
              playing={true}
          /> */}
        </div>
{/* 
          <img
            onClick={} 
            src={window.images.music_note} /> */}
      </div>
    );
  }
}

export default PlayBar;