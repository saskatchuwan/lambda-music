require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# need to attach images and song urls here

#Users
# User.destroy_all
user1 = User.create(username: "saskatchuwan", password: "password")
user2 = User.create(username: "grandmahoopla", password: "hellojello")
user3 = User.create(username: "ChristianDopper", password: "demouser")

#Artists
# Artist.destroy_all
artist1 = Artist.create(name: "Bjork")
artistCover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/bjork.jpg')
artist1.cover.attach(io: artistCover1, filename: 'bjork.jpg')

#Albums
# Album.destroy_all
album1 = Album.create(title: "Homogenic", artist_id: 1)
albumCover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/bjork-homogenic.jpg')
album1.cover.attach(io: albumCover1, filename: 'bjork-homogenic.jpg')

#Songs
# Song.destroy_all
song1 = Song.create(title: "Hunter", album_id: 1, artist_id: 1)
songSong1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/01+Hunter.mp3')
song1.song.attach(io: songSong1, filename: '01+Hunter.mp3')

song2 = Song.create(title: "Joga", album_id: 1, artist_id: 1)
songSong2 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/02+Jo%CC%80ga.mp3')
song2.song.attach(io: songSong2, filename: '02+Jo%CC%80ga.mp3')



#Playlists
# Playlist.destroy_all
playlist1 = Playlist.create(name: "POLLEN", owner_id: 1)
playlistCover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/playlist1.png')
playlist1.cover.attach(io: playlistCover1, filename: 'playlist1.png')

# PlaylistSongs
# PlaylistSong.destroy_all
playlistSong1 = PlaylistSong.create(playlist_id: 1, song_id: 1)
playlistSong2 = PlaylistSong.create(playlist_id: 1, song_id: 2)

#PlaylistSaves
# PlaylistSave.destroy_all
playlistSave1 = PlaylistSave.create(playlist_id: 1, user_id: 1)

#SongSaves
# SongSave.destroy_all
songSave1 = SongSave.create(song_id: 1, user_id: 1)


#ArtistSaves
# SongSave.destroy_all
artistSave1 = ArtistSave.create(artist_id: 1, user_id: 1)

#AlbumSaves
# AlbumSave.destroy_all
albumSave1 = AlbumSave.create(album_id: 1, user_id: 1)