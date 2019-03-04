import React from 'react';


const AddPlaylistSongIndexItem = ({ playlist }) => {
  return (
    <div className = 'tile-container'>
        <a href={`#`}>
          <div className= 'tile'>
            <img id='nav-icon' src={window.images.playlist_hold} />
          </div>
        </a>

        <strong>
          <a href={`#`}>
          {playlist.name}
          </a>
        </strong>
        
          <br />

        {/* page breaks when navigating back to this page from the /playlist/1 page */}
        {/* {owner.username} */}
    </div>
   );
};

export default AddPlaylistSongIndexItem;
