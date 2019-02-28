json.array! @songs do |song|
  json.id song.id
  json.title song.title
  json.artist_id song.artist_id
  json.album_id song.album_id
end