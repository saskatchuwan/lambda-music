@songs.each do |song|
  json.set! song.id do
    json.id song.id
    json.title song.title
    json.artist_id song.artist_id
    json.album_id song.album_id
    json.artist song.artist
    json.album song.album
  end
end