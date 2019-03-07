json.playlists do
  @saved_playlists.each do |saved_playlist|
    json.set! saved_playlist.id do
      json.id saved_playlist.id
      json.name saved_playlist.name
      json.owner_id saved_playlist.owner_id
      json.cover_url url_for(saved_playlist.cover)
    end
  end
end


json.songs do
  @saved_playlists.each do |saved_playlist|
    saved_playlist.songs.each do |song|
      json.set! song.id do
        json.id song.id
        json.title song.title
        json.artist_id song.artist_id
        json.album_id song.album_id
        json.song_url url_for(song.song)
      end
    end
  end
end



json.artists do
  @saved_playlists.each do |saved_playlist|
    saved_playlist.artists.each do |artist|
      json.set! artist.id do
        json.id artist.id
        json.name artist.name
        json.cover_url url_for(artist.cover)
      end
    end
  end
end


json.albums do
  @saved_playlists.each do |saved_playlist|
    saved_playlist.albums.each do |album|
      json.set! album.id do
        json.id album.id
        json.title album.title
        json.artist_id album.artist_id
        json.cover_url url_for(album.cover)
      end
    end
  end
end

json.users do
  @saved_playlists.each do |saved_playlist|
    json.set! saved_playlist.owner.id do
      json.id saved_playlist.owner.id
      json.username saved_playlist.owner.username
    end
  end
end



