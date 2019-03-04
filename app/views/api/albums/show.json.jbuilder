json.album do
  json.set! @album.id do 
    json.id @album.id
    json.title @album.title
    json.cover_url url_for(@album.cover)
  end
end

json.songs do
  @album.songs.each do |song|
    json.set! song.id do 
      json.id song.id
      json.title song.title
      json.artist_id song.artist_id
      json.album_id song.album_id
    end
  end
end

json.artist do
  json.set! @album.artist.id do 
    json.id @album.artist.id
    json.name @album.artist.name
  end
end

