import React from 'react';


const SongsIndexItem = ({ album, song, artist, openModal, fetchSong }) => {
  return (
    <li>
      <strong>{song.title}</strong>
      <br/>
      {artist.name} - {album.title}
      <button onClick={() => fetchSong(song.id)}>BUTTON</button>
      {/* add button to open modal to add new song */}
      {/* onclick needs to dispatch one song and open modal */}
      {/* () => openModal('add-song-to-playlist') */}
    </li>
   );
};

export default SongsIndexItem;