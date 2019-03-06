import React from 'react';
import _ from "lodash";
import ReactPlayer from 'react-player';

class PlayBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      url: null,
      playing: true,
      //set to true for testing
      controls: false,

      volume: 0.3,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    }

    this.handleSongEnd = this.handleSongEnd.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playPrev = this.playPrev.bind(this);
  }

  componentDidMount () {

  }

  componentDidUpdate (prevProps) {
    // set url of song to local state when there is a new song fetched
    if (prevProps.currSong.song !== this.props.currSong.song) {
    this.setState({
      url: this.props.currSong.song.songUrl
    });
    }
  }





  togglePlay () {
    console.log('toggling pause/play');
    this.setState({ playing: !this.state.playing });
    console.log(`playing is now: ${!this.state.playing}`);
  }


  handleSongEnd () {
    let { songIdQueue, currSong, fetchSong } = this.props;
    let currentSongQueueIndex = songIdQueue.indexOf(`${currSong.song.id}`);

    let nextSongQueueIndex = currentSongQueueIndex + 1;
    let nextSongId = songIdQueue[nextSongQueueIndex];

    fetchSong(nextSongId);
  }

  playNext () {
    let { songIdQueue, currSong, fetchSong } = this.props;
    let currentSongQueueIndex = songIdQueue.indexOf(`${currSong.song.id}`);

    let nextSongQueueIndex = (currentSongQueueIndex + 1) % songIdQueue.length;
    let nextSongId = songIdQueue[nextSongQueueIndex];

    fetchSong(nextSongId);
  }

  playPrev () {
    let { songIdQueue, currSong, fetchSong } = this.props;
    let currentSongQueueIndex = songIdQueue.indexOf(`${currSong.song.id}`);

    let nextSongQueueIndex = (currentSongQueueIndex - 1) ;
    let nextSongId = songIdQueue[nextSongQueueIndex];

    fetchSong(nextSongId);
  }




  render () {
    console.log(this.state);

    return (
      <div className='play-bar'>

          {/* <audio className='player'
                src={currSongUrl} 
                onEnded={this.handleSongEnd} 
                controls 
                autoPlay>
            <p>Could not play song.</p>
          </audio> */}


        <div className='player-wrapper'>

          <ReactPlayer 
              className='react-player'
              url={this.state.url}
              // onEnded={this.handleSongEnd}
              volume={this.state.volume}
              width='100%'
              height='100%'
              playing={this.state.playing}
          />

        </div>
        
        <div className='player-main-toggles'>

          <img id='prev' onClick={this.playPrev} src={window.images.player_next} />

          <div className='toggle'>
            <img id='play' onClick={this.togglePlay} src={window.images.player_play} />
          </div>

          <img id='next' onClick={this.playNext} src={window.images.player_next} />
          
        </div>
 
      </div>
    );
  }
}

export default PlayBar;