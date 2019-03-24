import React from 'react';
import _ from "lodash";

const AlbumIndexItem = ({ handlePlay, album, handleClick }) => {
  return (
    <div className = 'tile-container'>
        <div className= 'tile'>

          <a href={`/#/album/${album.id}`}  onClick={handleClick}>

            <img src={`${album.coverUrl}`} />

            <div className= 'tile-overlay'>
                <img src={window.images.player_play} 
                  className='play-content-button'
                  onClick={handlePlay(album.id)}></img>
            </div>

          </a>

        </div>

        <strong>
          <a href={`/#/album/${album.id}`}>
          {album.title}
          </a>
        </strong>

        <br />
        {/* {artistName} */}

    </div>
   );
};

export default AlbumIndexItem;