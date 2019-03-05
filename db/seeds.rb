require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.destroy_all
user1 = User.create(username: "saskatchuwan", password: "password")
user2 = User.create(username: "grandmahoopla", password: "hellojello")
user3 = User.create(username: "doppler", password: "demouser")


# Artist.destroy_all
artist1 = Artist.create(name: "Bjork")
artistCover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/bjork.jpg')
artist1.cover.attach(io: artistCover1, filename: 'bjork.jpg')

artist2 = Artist.create(name: "Clap Your Hands Say Yeah")
artistCover2 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/cyhsy.jpg')
artist2.cover.attach(io: artistCover2, filename: 'cyhsy.jpg')


# Album.destroy_all
album1 = Album.create(title: "Homogenic", artist_id: 1)
albumCover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/bjork-homogenic.jpg')
album1.cover.attach(io: albumCover1, filename: 'bjork-homogenic.jpg')

album2 = Album.create(title: "Clap Your Hands Say Yeah", artist_id: 2)
albumCover2 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/cyhsy-cyhsy.png')
album2.cover.attach(io: albumCover2, filename: 'cyhsy-cyhsy.png')


# Song.destroy_all
#Bjork
song1 = Song.create(title: "Hunter", album_id: 1, artist_id: 1)
songSong1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/01+Hunter.mp3')
song1.song.attach(io: songSong1, filename: '01+Hunter.mp3')

song2 = Song.create(title: "Joga", album_id: 1, artist_id: 1)
songSong2 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/02+Jo%CC%80ga.mp3')
song2.song.attach(io: songSong2, filename: '02+Jo%CC%80ga.mp3')

song3 = Song.create(title: "Unravel", album_id: 1, artist_id: 1)
songSong3 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/03+Unravel.mp3')
song3.song.attach(io: songSong3, filename: '03+Unravel.mp3')

song4 = Song.create(title: "Bachelorette", album_id: 1, artist_id: 1)
songSong4 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/04+Bachelorette.mp3')
song4.song.attach(io: songSong4, filename: '04+Bachelorette.mp3')

song5 = Song.create(title: "All Neon Like", album_id: 1, artist_id: 1)
songSong5 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/05+All+Neon+Like.mp3')
song5.song.attach(io: songSong5, filename: '05+All+Neon+Like.mp3')

song6 = Song.create(title: "All Is Full Of Love", album_id: 1, artist_id: 1)
songSong6 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/10+All+Is+Full+Of+Love.mp3')
song6.song.attach(io: songSong6, filename: '10+All+Is+Full+Of+Love.mp3')

#Clap Your Hands Say Yeah
song7 = Song.create(title: "Let The Cool Goddess Rust Away", album_id: 2, artist_id: 2)
songSong7 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/02+Let+The+Cool+Goddess+Rust+Away.mp3')
song7.song.attach(io: songSong7, filename: '02+Let+The+Cool+Goddess+Rust+Away.mp3')

song8 = Song.create(title: "Over and Over Again (Lost and Found)", album_id: 2, artist_id: 2)
songSong8 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/03+Over+and+Over+Again+(Lost+and+Found).mp3')
song8.song.attach(io: songSong8, filename: '03+Over+and+Over+Again+(Lost+and+Found).mp3')

song9 = Song.create(title: "Sunshine and Clouds (and Everything Proud)", album_id: 2, artist_id: 2)
songSong9 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/04+Sunshine+and+Clouds+(and+Everything+Proud).mp3')
song9.song.attach(io: songSong9, filename: '04+Sunshine+and+Clouds+(and+Everything+Proud).mp3')

song10 = Song.create(title: "The Skin of My Yellow Country Teeth", album_id: 2, artist_id: 2)
songSong10 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/06+The+Skin+of+My+Yellow+Country+Teeth.mp3')
song10.song.attach(io: songSong10, filename: '06+The+Skin+of+My+Yellow+Country+Teeth.mp3')

song11 = Song.create(title: "Heavy Metal", album_id: 2, artist_id: 2)
songSong11 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/08+Heavy+Metal.mp3')
song11.song.attach(io: songSong11, filename: '08+Heavy+Metal.mp3')

song12 = Song.create(title: "Upon This Tidal Wave of Young Blood", album_id: 2, artist_id: 2)
songSong12 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/12+Upon+This+Tidal+Wave+of+Young+Blood.mp3')
song12.song.attach(io: songSong12, filename: '12+Upon+This+Tidal+Wave+of+Young+Blood.mp3')



# Playlist.destroy_all
playlist1 = Playlist.create(name: "POLLEN", owner_id: 1)
playlistCover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/playlist1.png')
playlist1.cover.attach(io: playlistCover1, filename: 'playlist1.png')


# PlaylistSong.destroy_all
playlistSong1 = PlaylistSong.create(playlist_id: 1, song_id: 1)
playlistSong2 = PlaylistSong.create(playlist_id: 1, song_id: 2)
playlistSong3 = PlaylistSong.create(playlist_id: 1, song_id: 12)
playlistSong4 = PlaylistSong.create(playlist_id: 1, song_id: 3)
playlistSong5 = PlaylistSong.create(playlist_id: 1, song_id: 10)
playlistSong6 = PlaylistSong.create(playlist_id: 1, song_id: 6)


# PlaylistSave.destroy_all
playlistSave1 = PlaylistSave.create(playlist_id: 1, user_id: 1)


# SongSave.destroy_all
songSave1 = SongSave.create(song_id: 1, user_id: 1)
songSave2 = SongSave.create(song_id: 2, user_id: 1)
songSave3 = SongSave.create(song_id: 3, user_id: 1)
songSave4 = SongSave.create(song_id: 4, user_id: 1)
songSave5 = SongSave.create(song_id: 5, user_id: 1)
songSave6 = SongSave.create(song_id: 6, user_id: 1)

songSave7 = SongSave.create(song_id: 7, user_id: 1)
songSave8 = SongSave.create(song_id: 8, user_id: 1)
songSave9 = SongSave.create(song_id: 9, user_id: 1)
songSave10 = SongSave.create(song_id: 10, user_id: 1)
songSave11 = SongSave.create(song_id: 11, user_id: 1)
songSave12 = SongSave.create(song_id: 12, user_id: 1)

songSave1 = SongSave.create(song_id: 1, user_id: 3)
songSave2 = SongSave.create(song_id: 2, user_id: 3)
songSave3 = SongSave.create(song_id: 3, user_id: 3)
songSave4 = SongSave.create(song_id: 4, user_id: 3)
songSave5 = SongSave.create(song_id: 5, user_id: 3)
songSave6 = SongSave.create(song_id: 6, user_id: 3)



# SongSave.destroy_all
artistSave1 = ArtistSave.create(artist_id: 1, user_id: 1)
artistSave2 = ArtistSave.create(artist_id: 2, user_id: 1)

artistSave3 = ArtistSave.create(artist_id: 1, user_id: 3)
artistSave4 = ArtistSave.create(artist_id: 2, user_id: 3)


# AlbumSave.destroy_all
albumSave1 = AlbumSave.create(album_id: 1, user_id: 1)
albumSave2 = AlbumSave.create(album_id: 2, user_id: 1)

albumSave3 = AlbumSave.create(album_id: 1, user_id: 3)
albumSave4 = AlbumSave.create(album_id: 2, user_id: 3)