import React from 'react';

const AddPlaylistSongIndexItem = ({ playlist, songId, createPlaylistSong, closeModal }) => {

  let playlistSong = {song_id: songId, playlist_id: playlist.id};

  return (
    <div className = 'tile-container'>
        <div id='add-to-playlist-click'
          onClick={() => {createPlaylistSong(playlistSong);
                          closeModal()}}>

            <div className= 'tile'>
              <img src={playlist.coverUrl} />
            </div>

        </div>

        <strong>
          <div id='add-to-playlist-click'
              onClick={() => {createPlaylistSong(playlistSong);
                              closeModal()}}>

            {playlist.name}
            
          </div>
        </strong>
        
          
    </div>
   );
};

export default AddPlaylistSongIndexItem;
