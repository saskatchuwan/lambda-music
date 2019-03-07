import React from 'react';
import _ from "lodash";

const LibraryPlaylistIndexItem = ({ playlist, playlistId, owner, fetchPlaybarPlaylist }) => {
  let ownerUsername = _.get(owner, `username`, "no username");
  
  return (
    <div className = 'tile-container'>
        <div className='tile-attributes-container'>

            <div className= 'tile'>
              <a href={`/#/playlist/${playlist.id}`} onClick={(e) => e.stopPropagation()}>
                <img src={`${playlist.coverUrl}`} />
                <div className='tile-overlay'></div>
              </a>
            
                <button className='play-content-button'
                    onClick={() => fetchPlaybarPlaylist(playlistId)}>i'm a button</button>
            </div>

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

export default LibraryPlaylistIndexItem;
