import React from 'react';
import _ from 'lodash';

const SongsIndexItem = ({ album, song, artist, fetchSong }) => {

  let artistName = _.get(artist, `name`, "no artist name");
  let albumTitle = _.get(album, `title`, "no album title");

  if (artistName === 'no artist name') {
    artistName = song.artistName;
  }

  if (albumTitle === 'no album title') {
    albumTitle = song.albumTitle;
  }


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
          {artistName} - {albumTitle}
        </div>

      </div>

   );
};

export default SongsIndexItem;
