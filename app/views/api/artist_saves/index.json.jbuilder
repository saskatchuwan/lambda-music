@saved_artists.each do |saved_artist|
  json.set! saved_artist.id do
    json.id saved_artist.id
    json.name saved_artist.name
    json.cover_url url_for(saved_artist.cover)
  end
end
