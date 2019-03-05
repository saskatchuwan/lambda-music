@artists.each do |artist|
  json.set! artist.id do
    json.id artist.id
    json.name artist.name
    json.cover_url url_for(@artist.cover)
  end
end