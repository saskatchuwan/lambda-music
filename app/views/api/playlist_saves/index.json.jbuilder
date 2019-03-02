json.playlists do
  @saved_playlists.each do |saved_playlist|
    json.set! saved_playlist.id do
      json.id saved_playlist.id
      json.name saved_playlist.name
      json.owner_id saved_playlist.owner_id
    end
  end
end