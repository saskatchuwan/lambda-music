import React from 'react';

const AddPlaylistSongIndexItem = ({ playlist, songId, createPlaylistSong, closeModal, showNotification }) => {

  let playlistSong = {song_id: songId, playlist_id: playlist.id};

  return (
    <div className = 'tile-container'>
        <div id='add-to-playlist-click'
          onClick={() => {createPlaylistSong(playlistSong);
                          closeModal();
                          showNotification();
                          }}>

            <div className= 'tile'>
              <img src={playlist.coverUrl} />
            </div>

        </div>

        <strong>
          <div id='add-to-playlist-click'
              onClick={() => {createPlaylistSong(playlistSong);
                              closeModal();
                              showNotification();
                              }}>

            {playlist.name}
            
          </div>
        </strong>
        
          
    </div>
   );
};

export default AddPlaylistSongIndexItem;
