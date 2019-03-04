require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# need to attach images and song urls here

# # Users
# User.destroy_all

# user1 = User.create(username: "saskatchuwan", password: "password")
# user2 = User.create(username: "grandmahoopla", password: "hellojello")

# #Songs
# Song.destroy_all
# song1 = Song.create(title: "Cannons", album_id: 1, artist_id: 1)

#Albums
# Album.destroy_all
album1 = Album.create(title: "The Year of Hibernation - test", artist_id: 1)
album_cover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/j1EfFLNrkwqD2WdmXr1FFVMx')
album1.cover.attach(io: album_cover1, filename: 'youth-lagoon-hiberation.jpg')

# #Artists
# Artist.destroy_all
# artist1 = Artist.create(name: "Youth Lagoon")

# #Playlists
# Playlist.destroy_all
# playlist1 = Playlist.create(name: "Best Playlist Ever", owner_id: 1)

# #PlaylistSongs
# PlaylistSong.destroy_all
# playlistsong1 = PlaylistSong.create(playlist_id: 1, song_id: 1)

# #PlaylistSongs
# PlaylistSave.destroy_all
# playlistsave1 = PlaylistSave.create(playlist_id: 1, user_id: 1)