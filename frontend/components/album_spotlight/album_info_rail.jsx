import React from 'react';
import { withRouter } from 'react-router-dom';
import _ from "lodash";

const AlbumInfoRail = props => {
  let albumId = props.match.params.albumId;
  let album = props.album[albumId];

  if (!album) {
    return null;
  }

  return (
    <div className='info-rail-container'>

      <div className='img-display-holder'>
        <img src={`${album.coverUrl}`} />
      </div>

      <h1>{album.title}</h1>

      <span className='info-rail-creator'>{props.artist[0].name}</span>
      
      <br />

      <div className='info-rail-links'>
        <button 
          onClick={() => props.fetchSong(props.songIdQueue[0])}
          className='info-rail-play-button'>Play
        </button>

      </div>
    </div>
  )

};

export default withRouter(AlbumInfoRail);