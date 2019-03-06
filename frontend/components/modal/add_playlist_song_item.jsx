import React from 'react';

const AddPlaylistSongIndexItem = ({ playlist, songId, createPlaylistSong, closeModal }) => {

  let playlistSong = {song_id: songId, playlist_id: playlist.id};

  return (
    <div className = 'tile-container'>
        <a href={`/#/browse/featured`} 
          onClick={() => {createPlaylistSong(playlistSong);
                          closeModal()}}>

            <div className= 'tile'>
              <img src={playlist.coverUrl} />
            </div>

        </a>

        <strong>
          <a href={`/#/browse/featured`} 
              onClick={() => {createPlaylistSong(playlistSong);
                              closeModal()}}>

            {playlist.name}
            
          </a>
        </strong>
        
          
    </div>
   );
};

export default AddPlaylistSongIndexItem;
