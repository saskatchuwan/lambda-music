json.songs do
  @saved_songs.each do |saved_song|
    json.set! saved_song.id do
      json.id saved_song.id
      json.title saved_song.title
      json.artist_id saved_song.artist_id
      json.album_id saved_song.album_id
    end
  end
end

json.artists do
  @saved_songs.each do |saved_song|
    json.set! saved_song.artist.id do
      json.id saved_song.artist.id
      json.name saved_song.artist.name
    end
  end
end

json.albums do
  @saved_songs.each do |saved_song|
    json.set! saved_song.album.id do
      json.id saved_song.album.id
      json.title saved_song.album.title
    end
  end
end