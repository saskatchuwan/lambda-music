@artists.each do |artist|
  json.set! artist.id do
    json.id artist.id
    json.name artist.name
    
  end
end