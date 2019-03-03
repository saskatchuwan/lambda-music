json.albums do
  @saved_albums.each do |saved_album|
    json.set! saved_album.id do
      json.id saved_album.id
      json.title saved_album.title
      json.artist_id saved_album.artist_id
    end
  end
end