@albums.each do |album|
  json.set! album.id do
    json.id album.id
    json.title album.title
    json.artist_id album.artist_id
  end
end