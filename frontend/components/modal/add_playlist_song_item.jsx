import React from 'react';

// make into class component?
// need to pass in songid and playlist(to get playlist id) and createPlaylistSong action
// make tiles clickable and add an onClick event handler to createPlaylistSong

//pass in close modal to close out modal once user clicks a song to add to playlist

const AddPlaylistSongIndexItem = ({ playlist, songId, createPlaylistSong, closeModal }) => {
  // songId returns id of song that was clicked on

  
  let playlistSong = {song_id: songId, playlist_id: playlist.id};
  console.log(playlist.id);
  console.log(playlistSong);

  return (
    <div className = 'tile-container'>
        <a href={`/#/playlist/${playlist.id}`} onClick={() => {createPlaylistSong(playlistSong);
                                                        closeModal()}}>
          <div className= 'tile'>
            <img src={window.images.playlist_hold} />
          </div>
        </a>

        <strong>
          <a href={`/#/playlist/${playlist.id}`} onClick={() => {createPlaylistSong(playlistSong);
                                                        closeModal()}}>
          {playlist.name}
          </a>
        </strong>
        
          
    </div>
   );
};

export default AddPlaylistSongIndexItem;
