import React from 'react';


const SongsIndexItem = ({ album, song, artist, openModal, fetchSong }) => {
  return (
    <li>
      <strong>{song.title}</strong>
      <br/>
      {artist.name} - {album.title}
      <button onClick={() => {fetchSong(song.id);
                              openModal('add-song-to-playlist') }}>BUTTON</button>
    </li>
   );
};

export default SongsIndexItem;
