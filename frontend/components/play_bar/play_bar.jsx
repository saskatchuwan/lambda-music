

import React from 'react';
import _ from "lodash";
import ReactPlayer from 'react-player';

class PlayBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      url: null,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playedSeconds: 0,
    }

    this.handleSongEnd = this.handleSongEnd.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playPrev = this.playPrev.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.toggleMuted = this.toggleMuted.bind(this);
    // this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    // this.onSeekChange = this.onSeekChange.bind(this);
    // this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    // this.ref = this.ref.bind(this);
    this.onDuration = this.onDuration.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.secondsToMs = this.secondsToMs.bind(this);
  }

  componentDidMount () {

  }

  componentDidUpdate (prevProps) {
    // set url of song to local state when there is a new song fetched
    if (prevProps.currSong.song !== this.props.currSong.song) {
      this.setState({
        url: this.props.currSong.song.songUrl,
        playing: true
      });
    }
  }

  onDuration (duration) {
    this.setState({ duration });
  }


  onProgress (state) {
    // console.log('onProgress', state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  }


  togglePlay () {
    this.setState({ playing: !this.state.playing });
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

  setVolume (e) {
    this.setState({ 
      volume: parseFloat(e.target.value) 
    });
  }

  toggleMuted () {
    this.setState({ 
      muted: !this.state.muted 
    });
  }


  // onSeekMouseDown (e) {
  //   this.setState({ seeking: true });
  // }

  // onSeekChange (e) {
  //   this.setState({ played: parseFloat(e.target.value) });
  // }
  // onSeekMouseUp (e) {
  //   this.setState({ seeking: false });
  //   this.player.seekTo(parseFloat(e.target.value));
  // }

  // ref (player) {
  //   this.player = player;
  // }

  secondsToMs (seconds) {
    seconds = Number(seconds);

    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 3600 % 60);

    let display;
    if (m < 10 && s < 10) {
      display = '0' + m + ':' + '0' + s;
    } else if (m < 10 && s >= 10) {
      display = '0' + m + ':' + s;
    } else if (m >= 10 && s >= 10) {
      display = m + ':' + s;
    } else if (m >= 10 && s < 10) {
      display = m + ':' + '0' + s;
    } else {

    }

    return display;
  }

  render () {

    let { url, volume, playing, muted, played, ref, playedSeconds, duration } = this.state;

    let currSongAlbumUrl = _.get(this, 'props.currSong.album.coverUrl', 'no album url');
    let currSongAlbumId = _.get(this, 'props.currSong.album.id', 'no album url');

    let currSongArtistName = _.get(this, 'props.currSong.artist.name', '');
    let currSongTitle = _.get(this, 'props.currSong.song.title', '');

  
    const playIcon = (this.state.playing) ? 
            <img id='pause' onClick={this.togglePlay} src={window.images.player_pause} /> 
            : <img id='play' onClick={this.togglePlay} src={window.images.player_play} />
    

    return (
      <div className='play-bar'>

        
        <div className='player-current-song-info'>
          <div className='player-album-cover-holder'>
            <a href={`/#/album/${currSongAlbumId}`}>
              <img src={currSongAlbumUrl}/>
            </a>
          </div>

          <div className='player-curr-song-info-text'>
            <a href={`/#/album/${currSongAlbumId}`}>
              <span id='song-title'>{currSongTitle}</span>
            </a>
            
            <br />

            <span id='artist-name'>{currSongArtistName}</span>

          </div>
        </div>
        

        <div className='player-wrapper'>
          <div className='player-main-toggles'>
              <img id='prev' onClick={this.playPrev} src={window.images.player_next} />

              <div className='toggle'>
                {playIcon}
              </div>

              <img id='next' onClick={this.playNext} src={window.images.player_next} />
          </div>

            {/* <input
                  type='range' min={0} max={1} step='any'
                  value={played}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                /> */}

          <div className='progress-bar'>
            
            <div>{this.secondsToMs(playedSeconds)}</div>
            <progress max={1} value={played} />
            <div>{this.secondsToMs(duration)}</div>
          </div>

          <ReactPlayer 
              className='react-player'
              ref={ref}
              url={url}
              // onEnded={this.handleSongEnd}
              volume={volume}
              muted = {muted}
              onProgress={this.onProgress}
              width='0%'
              height='0%'
              playing={playing}
              onDuration={this.onDuration}
          />
        </div>



        <div className='other-toggles'>
          <div className='mute-container'>
            <input 
                className='mute-toggle'
                id='muted' 
                type='checkbox' 
                checked={muted} 
                onChange={this.toggleMuted} />
            <span className='mute-custom'></span>
            
          </div>

          <input 
              className='volume-toggle-bar'
              type='range' 
              min={0} 
              max={1} 
              step='any' 
              value={volume} 
              onChange={this.setVolume} />
        </div>
 
      </div>
    );
  }
}

export default PlayBar;