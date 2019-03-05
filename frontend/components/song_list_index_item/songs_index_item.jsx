import React from 'react';

const SongsIndexItem = ({ album, song, artist, fetchSong }) => {
  return (
      <div className='song-index-item-left'>

        <div className='song-index-play-icon-container'>
          <img className='song-index-play-icon' 
                id='dormant' 
                src={window.images.music_note} />


          <img className='song-index-play-icon' 
                  onClick={() => fetchSong(song.id)}
                  id='play' 
                  src={window.images.music_play} />
        </div>

        <div className='song-index-info'>
          <strong>{song.title}</strong>
          <br/>
          {artist.name} - {album.title}
        </div>

      </div>

   );
};

export default SongsIndexItem;
