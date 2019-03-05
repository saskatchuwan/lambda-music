@artists.each do |artist|
  json.set! artist.id do
    json.id artist.id
    json.name artist.name
    json.image_url url_for(@artist.image)
  end
end