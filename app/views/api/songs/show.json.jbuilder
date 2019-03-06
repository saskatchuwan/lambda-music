json.song do
  json.id @song.id
  json.title @song.title
  json.artist_id @song.artist_id
  json.album_id @song.album_id
  json.song_url url_for(@song.song)
end

json.artist do
    json.id @song.artist.id
    json.name @song.artist.name
    json.cover_url url_for(@song.artist.cover)
end

json.album do
    json.id @song.album.id
    json.title @song.album.title
    json.cover_url url_for(@song.album.cover)
end