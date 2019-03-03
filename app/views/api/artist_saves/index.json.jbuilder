@saved_artists.each do |saved_artist|
  json.set! saved_artist.id do
    json.id saved_artist.id
    json.name saved_artist.name
  end
end
