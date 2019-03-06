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
    this.playNext = this.playNext.bind(this);
    this.playPrev = this.playPrev.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.toggleMuted = this.toggleMuted.bind(this);
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


  render () {
    console.log(this.state);

    let { url, volume, playing, muted } = this.state;

    let currSongAlbumUrl = _.get(this, 'props.currSong.album.coverUrl', 'no album url');
    let currSongArtistName = _.get(this, 'props.currSong.artist.name', '');
    let currSongTitle = _.get(this, 'props.currSong.song.title', '');

    return (
      <div className='play-bar'>

        
        <div className='player-current-song-info'>
          <div className='player-album-cover-holder'>
            <img src={currSongAlbumUrl}/>
          </div>

          <div className='player-curr-song-info-text'>
            <span id='song-title'>{currSongTitle}</span>
            <br />
            <span id='artist-name'>{currSongArtistName}</span>
          </div>
        </div>
        

        <div className='player-wrapper'>
          <div className='player-main-toggles'>
              <img id='prev' onClick={this.playPrev} src={window.images.player_next} />

              <div className='toggle'>
                <img id='play' onClick={this.togglePlay} src={window.images.player_play} />
              </div>

              <img id='next' onClick={this.playNext} src={window.images.player_next} />
            </div>

          <ReactPlayer 
              className='react-player'
              url={url}
              // onEnded={this.handleSongEnd}
              volume={volume}
              muted = {muted}
              width='0%'
              height='0%'
              playing={playing}
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