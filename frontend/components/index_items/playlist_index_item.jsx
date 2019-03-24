import React from 'react';
import _ from "lodash";

const PlaylistIndexItem = ({ playlist, playlistId, owner, fetchPlaybarPlaylist, handleClick }) => {
  let ownerUsername = _.get(owner, `username`, "no username");
  
  return (
    <div className = 'tile-container'>
        <div className= 'tile'>
            <a href={`/#/playlist/${playlist.id}`} onClick={handleClick}>
                <img src={`${playlist.coverUrl}`} />

                <div className='tile-overlay'>
                    <img src={window.images.player_play} 
                        className='play-content-button'
                        onClick={() => fetchPlaybarPlaylist(playlistId)}></img>
                </div>
            </a>
        </div>

        <strong>
          <a href={`/#/playlist/${playlist.id}`}>
          {playlist.name}
          </a>
        </strong>
        
        <br />
        {ownerUsername}
    </div>
   );
};

export default PlaylistIndexItem;
