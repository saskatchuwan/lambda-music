json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.id playlist.id
      json.name playlist.name
      json.owner_id playlist.owner_id
    end
  end
end

json.owners do
  @playlists.each do |playlist|
    json.set! playlist.owner.id do 
      json.id playlist.owner.id
      json.username playlist.owner.username
    end
  end
end

json.songs do
  @playlists.each do |playlist|
    playlist.songs.each do |song|
      json.set! song.id do 
        json.id song.id
        json.title song.title
      end
    end
  end
end

json.artists do
  @playlists.each do |playlist|
    playlist.artists.each do |artist|
      json.set! artist.id do 
        json.id artist.id
        json.name artist.name
      end
    end
  end
end

json.albums do
  @playlists.each do |playlist|
    playlist.albums.each do |album|
      json.set! album.id do 
        json.id album.id
        json.title album.title
      end
    end
  end
end

json.playlist_songs do
  @playlists.each do |playlist|
    playlist.playlist_songs.each do |playlist_song|
      json.set! playlist_song.song_id do 
        json.song_id playlist_song.song_id
        json.playlist_song_id playlist_song.id
      end
    end
  end
end