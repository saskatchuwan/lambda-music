json.playlist do
  json.set! @playlist.id do
    json.id @playlist.id
    json.name @playlist.name
    json.owner_id @playlist.owner_id
  end
end

json.owners do
  json.set! @playlist.owner.id do 
    json.id @playlist.owner.id
    json.username @playlist.owner.username
  end
end


json.songs do
  @playlist.songs.each do |song|
    json.set! song.id do 
      json.id song.id
      json.title song.title
      json.artist_id song.artist_id
      json.album_id song.album_id
    end
  end
end

json.artists do
  @playlist.artists.each do |artist|
    json.set! artist.id do 
      json.id artist.id
      json.name artist.name
    end
  end
end

json.albums do
  @playlist.albums.each do |album|
    json.set! album.id do 
      json.id album.id
      json.title album.title
    end
  end
end

json.playlist_songs do
  @playlist.playlist_songs.each do |playlist_song|
    json.set! playlist_song.id do 
      json.id playlist_song.id
      json.song_id playlist_song.song_id
    end
  end
end