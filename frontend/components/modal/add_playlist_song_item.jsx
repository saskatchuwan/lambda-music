import React from 'react';

// make into class component?
// need to pass in songid and playlist(to get playlist id) and createPlaylistSong action
// make tiles clickable and add an onClick event handler to createPlaylistSong

//pass in close modal to close out modal once user clicks a song to add to playlist

const AddPlaylistSongIndexItem = ({ playlist, songId }) => {
    // songId returns id of song that was clicked on
  return (
    <div className = 'tile-container'>
        {/* <h1>{playlist.id}</h1>
        <h1>{songId}</h1> */}
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
