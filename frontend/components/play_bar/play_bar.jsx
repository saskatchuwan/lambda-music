import React from 'react';
import _ from "lodash";
import ReactPlayer from 'react-player';

class PlayBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      url: null,
      pip: false,
      playing: true,
      controls: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    }

    this.handleSongEnd = this.handleSongEnd.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount () {

  }

  componentDidUpdate (prevProps) {
    // check prevProps vs this.props
    // this.setState({
    //   url: this.props.currSong.url
    // });

    // if (prevProps.currSong !== this.props.currSong) {
    //   console.log(prevProps);
    //   console.log(this.props.currSong);
    // }
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



  render () {
    let currSongUrl = _.get(this, `props.currSong.song.songUrl`, "no song url");


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
              url={currSongUrl}
              // onEnded={this.handleSongEnd}
              width='100%'
              height='100%'
              playing={this.state.playing}
          />

        </div>
        
        <div className='toggle'>
          <img id='play' onClick={this.togglePlay} src={window.images.player_play} />
        </div>
         
      </div>
    );
  }
}

export default PlayBar;