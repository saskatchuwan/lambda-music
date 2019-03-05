json.songs do 
  @songs.each do |song_item|
    json.set! song_item.id do
      json.id song_item.id
      json.title song_item.title
      json.artist_id song_item.artist_id
      json.album_id song_item.album_id
      json.song_url url_for(song_item.song)
    end
  end
end

json.artists do
  @songs.each do |song|
    json.set! song.artist.id do
      json.id song.artist.id
      json.name song.artist.name
    end
  end
end


json.albums do
  @songs.each do |song|
    json.set! song.album.id do
      json.id song.album.id
      json.title song.album.title
    end
  end
end




