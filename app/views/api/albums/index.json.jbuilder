@albums.each do |album|
  json.albums do
    json.set! album.id do
    json.id album.id
    json.title album.title
    json.artist_id album.artist_id
    json.cover_url url_for(album.cover)
  end
  end
end


@albums.each do |album|
  json.artists do
    json.set! album.artist.id do
    json.id album.artist.id
    json.name album.artist.name
    json.cover_url url_for(album.artist.cover)
  end
  end
end