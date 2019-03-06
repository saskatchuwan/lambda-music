import React from 'react';
import _ from "lodash";

const LibraryPlaylistIndexItem = ({ playlist, owner }) => {
  console.log(owner);
  let ownerUsername = _.get(owner, `username`, "no username");
  
  return (
    <div className = 'tile-container'>
        <a href={`/#/playlist/${playlist.id}`}>
          <div className= 'tile'>
            <img src={`${playlist.coverUrl}`} />
            <div className='tile-overlay'></div>
          </div>
        </a>

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
