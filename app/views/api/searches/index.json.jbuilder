json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.id artist.id
      json.name artist.name
      json.cover_url url_for(artist.cover)
    end
  end
end

json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.id album.id
      json.title album.title
      json.artist_id album.artist_id
      json.cover_url url_for(album.cover)
    end
  end
end

json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.id playlist.id
      json.name playlist.name
      json.owner_id playlist.owner_id
      json.cover_url url_for(playlist.cover)
    end
  end
end

json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.title song.title
      json.artist_id song.artist_id
      json.album_id song.album_id
      json.album_title song.album.title
      json.artist_name song.artist.name
      json.song_url url_for(song.song)
    end
  end
end