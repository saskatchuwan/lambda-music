json.song do
  json.id @song.id
  json.title @song.title
  json.artist_id @song.artist_id
  json.album_id @song.album_id
  json.song_url url_for(@song.song)
end

json.artist do
  json.set! @song.artist.id do 
    json.id @song.artist.id
    json.name @song.artist.name
  end
end

json.album do
  json.set! @song.album.id do 
    json.id @song.album.id
    json.title @song.album.title
  end
end