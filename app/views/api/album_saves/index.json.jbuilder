@saved_albums.each do |saved_album|
  json.albums do
    json.set! saved_album.id do
    json.id saved_album.id
    json.title saved_album.title
    json.artist_id saved_album.artist_id
    json.cover_url url_for(saved_album.cover)
  end
  end
end


@saved_albums.each do |saved_album|
  json.artists do
    json.set! saved_album.artist.id do
    json.id saved_album.artist.id
    json.name saved_album.artist.name
    json.cover_url url_for(saved_album.artist.cover)
  end
  end
end