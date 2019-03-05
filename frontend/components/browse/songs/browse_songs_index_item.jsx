import React from 'react';

const SongsIndexItem = ({ album, song, artist, openModal, fetchSong }) => {
  return (
    <li className='songs-index-item'>
      <div className='song-index-info'>
        <strong>{song.title}</strong>
        <br/>
        {artist.name} - {album.title}
      </div>

      <button className='add-song-to-playlist-button'
              onClick={() => {fetchSong(song.id);
                              openModal('add-song-to-playlist') }}>ADD</button>
    </li>
   );
};

export default SongsIndexItem;
