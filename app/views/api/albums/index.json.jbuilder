json.array! @albums do |album|
  json.id album.id
  json.title album.title
  json.artist_id album.artist_id
end