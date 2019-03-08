require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  User.destroy_all
  user1 = User.create(username: "saskatchuwan", password: "password")
  user2 = User.create(username: "grandmahoopla", password: "hellojello")
  user3 = User.create(username: "doppler", password: "demouser")


  Artist.destroy_all
  artist1 = Artist.create(name: "Bjork")
  artistCover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/bjork.jpg')
  artist1.cover.attach(io: artistCover1, filename: 'bjork.jpg')

  artist2 = Artist.create(name: "Clap Your Hands Say Yeah")
  artistCover2 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/cyhsy.jpg')
  artist2.cover.attach(io: artistCover2, filename: 'cyhsy.jpg')

  artist3 = Artist.create(name: "Fleetwood Mac")
  artistCover3 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Fleetwood+Mac/fleetwoodmac.jpg')
  artist3.cover.attach(io: artistCover3, filename: 'fleetwoodmac.jpg')

  artist4 = Artist.create(name: "Animal Collective")
  artistCover4 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Animal+Collective/animal-collective.jpg')
  artist4.cover.attach(io: artistCover4, filename: 'animal-collective.jpg')

  artist5 = Artist.create(name: "Beirut")
  artistCover5 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Beirut/beirut.jpg')
  artist5.cover.attach(io: artistCover5, filename: 'beirut.jpg')


  artist6 = Artist.create(name: "Dirty Projectors")
  artistCover6 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Dirty+Projectors/dirty_projectors.jpg')
  artist6.cover.attach(io: artistCover6, filename: 'dirty_projectors.jpg')



  Album.destroy_all
  album1 = Album.create(title: "Homogenic", artist_id: 1)
  albumCover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/bjork/bjork-homogenic.jpg')
  album1.cover.attach(io: albumCover1, filename: 'bjork-homogenic.jpg')

  album2 = Album.create(title: "Clap Your Hands Say Yeah", artist_id: 2)
  albumCover2 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Clap+Your+Hands+Say+Yeah/cyhsy-cyhsy.png')
  album2.cover.attach(io: albumCover2, filename: 'cyhsy-cyhsy.png')

  album3 = Album.create(title: "Rumours", artist_id: 3)
  albumCover3 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Fleetwood+Mac/fleetword-rumours.jpeg')
  album3.cover.attach(io: albumCover3, filename: 'fleetword-rumours.jpeg')

  album4 = Album.create(title: "Merriweather Post Pavilion", artist_id: 4)
  albumCover4 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Animal+Collective/animalcollective-merriweather-post-pavilion.jpg')
  album4.cover.attach(io: albumCover4, filename: 'animalcollective-merriweather-post-pavilion.jpg')

  album5 = Album.create(title: "Gulag Orkestar", artist_id: 5)
  albumCover5 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Beirut/beirut-gulag-orkestar.jpg')
  album5.cover.attach(io: albumCover5, filename: 'beirut-gulag-orkestar.jpg')

  album6 = Album.create(title: "Bitte Orca", artist_id: 6)
  albumCover6 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Dirty+Projectors/dirty_projectors-bitte_orca.jpg')
  album6.cover.attach(io: albumCover6, filename: 'dirty_projectors-bitte_orca.jpg')


  Song.destroy_all
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


  #Fleetwood Mac
  song13 = Song.create(title: "Second Hand News", album_id: 3, artist_id: 3)
  songSong13 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Fleetwood+Mac/01+Second+Hand+News.mp3')
  song13.song.attach(io: songSong13, filename: '01+Second+Hand+News.mp3')

  song14 = Song.create(title: "Dreams", album_id: 3, artist_id: 3)
  songSong14 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Fleetwood+Mac/02+Dreams.mp3')
  song14.song.attach(io: songSong14, filename: 'Fleetwood+Mac/02+Dreams.mp3')

  song15 = Song.create(title: "Never Going Back Again", album_id: 3, artist_id: 3)
  songSong15 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Fleetwood+Mac/03+Never+Going+Back+Again.mp3')
  song15.song.attach(io: songSong15, filename: '03+Never+Going+Back+Again.mp3')

  song16 = Song.create(title: "I Don't Want To Know", album_id: 3, artist_id: 3)
  songSong16 = open("https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Fleetwood+Mac/09+I+Don't+Want+To+Know.mp3")
  song16.song.attach(io: songSong16, filename: "09+I+Don't+Want+To+Know.mp3")

  song17 = Song.create(title: "Go Your Own Way", album_id: 3, artist_id: 3)
  songSong17 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Fleetwood+Mac/05+Go+Your+Own+Way.mp3')
  song17.song.attach(io: songSong17, filename: '05+Go+Your+Own+Way.mp3')

  song18 = Song.create(title: "You Make Loving Fun", album_id: 3, artist_id: 3)
  songSong18 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Fleetwood+Mac/08+You+Make+Loving+Fun.mp3')
  song18.song.attach(io: songSong18, filename: '08+You+Make+Loving+Fun.mp3')


  #Animal Collective
  song19 = Song.create(title: "In The Flowers", album_id: 4, artist_id: 4)
  songSong19 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Animal+Collective/01+In+The+Flowers.mp3')
  song19.song.attach(io: songSong19, filename: '01+In+The+Flowers.mp3')

  song20 = Song.create(title: "My Girls", album_id: 4, artist_id: 4)
  songSong20 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Animal+Collective/02+My+Girls.mp3')
  song20.song.attach(io: songSong20, filename: '02+My+Girls.mp3')

  song21 = Song.create(title: "Also Frightened", album_id: 4, artist_id: 4)
  songSong21 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Animal+Collective/03+Also+Frightened.mp3')
  song21.song.attach(io: songSong21, filename: '03+Also+Frightened.mp3')

  song22 = Song.create(title: "Daily Routine", album_id: 4, artist_id: 4)
  songSong22 = open("https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Animal+Collective/05+Daily+Routine.mp3")
  song22.song.attach(io: songSong22, filename: "05+Daily+Routine.mp3")

  song23 = Song.create(title: "No More Runnin", album_id: 4, artist_id: 4)
  songSong23 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Animal+Collective/10+No+More+Runnin.mp3')
  song23.song.attach(io: songSong23, filename: '10+No+More+Runnin.mp3')

  song24 = Song.create(title: "Brother Sport", album_id: 4, artist_id: 4)
  songSong24 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Animal+Collective/11+Brother+Sport.mp3')
  song24.song.attach(io: songSong24, filename: '11+Brother+Sport.mp3')


  #Beirut
  song25 = Song.create(title: "Prenzlauerberg", album_id: 5, artist_id: 5)
  songSong25 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Beirut/02+Prenzlauerberg.mp3')
  song25.song.attach(io: songSong25, filename: '02+Prenzlauerberg.mp3')

  song26 = Song.create(title: "Postcards from Italy", album_id: 5, artist_id: 5)
  songSong26 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Beirut/04+Postcards+from+Italy.mp3')
  song26.song.attach(io: songSong26, filename: '04+Postcards+from+Italy.mp3')

  song27 = Song.create(title: "Mount Wroclai (Idle Days)", album_id: 5, artist_id: 5)
  songSong27 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Beirut/05+Mount+Wroclai+(Idle+Days).mp3')
  song27.song.attach(io: songSong27, filename: '05+Mount+Wroclai+(Idle+Days).mp3')

  song28 = Song.create(title: "Rhineland (Heartland)", album_id: 6, artist_id: 6)
  songSong28 = open("https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Beirut/06+Rhineland+(Heartland).mp3")
  song28.song.attach(io: songSong28, filename: "06+Rhineland+(Heartland).mp3")

  song29 = Song.create(title: "Scenic World", album_id: 6, artist_id: 6)
  songSong29 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Beirut/07+Scenic+World.mp3')
  song29.song.attach(io: songSong29, filename: '07+Scenic+World.mp3')

  song30 = Song.create(title: "After The Curtain", album_id: 6, artist_id: 6)
  songSong30 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Beirut/11+After+the+Curtain.mp3')
  song30.song.attach(io: songSong30, filename: '11+After+the+Curtain.mp3')

  #Dirty Projectors
  song31 = Song.create(title: "Cannibal Resource", album_id: 6, artist_id: 6)
  songSong31 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Dirty+Projectors/01+Cannibal+Resource.mp3')
  song31.song.attach(io: songSong31, filename: '01+Cannibal+Resource.mp3')

  song32 = Song.create(title: "Temecula", album_id: 6, artist_id: 6)
  songSong32 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Dirty+Projectors/02+Temecula.mp3')
  song32.song.attach(io: songSong32, filename: '02+Temecula.mp3')

  song33 = Song.create(title: "Stillness Is The Move", album_id: 6, artist_id: 6)
  songSong33 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Dirty+Projectors/04+Stillness+is+the+Move.mp3')
  song33.song.attach(io: songSong33, filename: '04+Stillness+is+the+Move.mp3')

  song34 = Song.create(title: "Useful Chamber", album_id: 6, artist_id: 6)
  songSong34 = open("https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Dirty+Projectors/06+Useful+Chamber.mp3")
  song34.song.attach(io: songSong34, filename: "06+Useful+Chamber.mp3")

  song35 = Song.create(title: "No Intention", album_id: 6, artist_id: 6)
  songSong35 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/Dirty+Projectors/07+No+Intention.mp3')
  song35.song.attach(io: songSong35, filename: '07+No+Intention.mp3')




  Playlist.destroy_all
  playlist1 = Playlist.create(name: "POLLEN", owner_id: 1)
  playlistCover1 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/playlist1.png')
  playlist1.cover.attach(io: playlistCover1, filename: 'playlist1.png')

  playlist2 = Playlist.create(name: "ELECTRIC", owner_id: 1)
  playlistCover2 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/playlist6.jpeg')
  playlist2.cover.attach(io: playlistCover2, filename: 'playlist6.jpeg')

  playlist3 = Playlist.create(name: "GROOVY", owner_id: 2)
  playlistCover3 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/playlist7.jpeg')
  playlist3.cover.attach(io: playlistCover3, filename: 'playlist7.jpeg')
  
  playlist4 = Playlist.create(name: "SMOOTH", owner_id: 1)
  playlistCover4 = open('https://s3-us-west-1.amazonaws.com/lambda-music-app-dev/playlist5.jpeg')
  playlist4.cover.attach(io: playlistCover4, filename: 'playlist5.jpeg')


  PlaylistSong.destroy_all
  playlistSong1 = PlaylistSong.create(playlist_id: 1, song_id: 34)
  playlistSong2 = PlaylistSong.create(playlist_id: 1, song_id: 2)
  playlistSong3 = PlaylistSong.create(playlist_id: 1, song_id: 12)
  playlistSong4 = PlaylistSong.create(playlist_id: 1, song_id: 13)
  playlistSong5 = PlaylistSong.create(playlist_id: 1, song_id: 21)
  playlistSong6 = PlaylistSong.create(playlist_id: 1, song_id: 15)

  playlistSong7 = PlaylistSong.create(playlist_id: 2, song_id: 24)
  playlistSong8 = PlaylistSong.create(playlist_id: 2, song_id: 18)
  playlistSong9 = PlaylistSong.create(playlist_id: 2, song_id: 7)
  playlistSong10 = PlaylistSong.create(playlist_id: 2, song_id: 31)
  playlistSong11 = PlaylistSong.create(playlist_id: 2, song_id: 16)


  playlistSong12 = PlaylistSong.create(playlist_id: 3, song_id: 33)
  playlistSong13 = PlaylistSong.create(playlist_id: 3, song_id: 20)
  playlistSong14 = PlaylistSong.create(playlist_id: 3, song_id: 15)
  playlistSong15 = PlaylistSong.create(playlist_id: 3, song_id: 31)
  playlistSong16 = PlaylistSong.create(playlist_id: 3, song_id: 9)
  playlistSong17 = PlaylistSong.create(playlist_id: 3, song_id: 17)

  playlistSong18 = PlaylistSong.create(playlist_id: 3, song_id: 16)
  playlistSong19 = PlaylistSong.create(playlist_id: 3, song_id: 9)
  playlistSong20 = PlaylistSong.create(playlist_id: 3, song_id: 23)
  playlistSong21 = PlaylistSong.create(playlist_id: 3, song_id: 20)



  PlaylistSave.destroy_all
  playlistSave1 = PlaylistSave.create(playlist_id: 1, user_id: 1)
  playlistSave2 = PlaylistSave.create(playlist_id: 2, user_id: 1)
  playlistSave3 = PlaylistSave.create(playlist_id: 1, user_id: 3)
  playlistSave4 = PlaylistSave.create(playlist_id: 2, user_id: 3)
  playlistSave5 = PlaylistSave.create(playlist_id: 3, user_id: 1)
  playlistSave6 = PlaylistSave.create(playlist_id: 3, user_id: 3)
  playlistSave7 = PlaylistSave.create(playlist_id: 4, user_id: 3)
  playlistSave8 = PlaylistSave.create(playlist_id: 4, user_id: 1)


  SongSave.destroy_all
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

  songSave13 = SongSave.create(song_id: 1, user_id: 3)
  songSave14 = SongSave.create(song_id: 2, user_id: 3)
  songSave15 = SongSave.create(song_id: 3, user_id: 3)
  songSave16 = SongSave.create(song_id: 4, user_id: 3)
  songSave17 = SongSave.create(song_id: 5, user_id: 3)
  songSave18 = SongSave.create(song_id: 6, user_id: 3)

  songSave19 = SongSave.create(song_id: 32, user_id: 3)
  songSave20 = SongSave.create(song_id: 22, user_id: 3)
  songSave21 = SongSave.create(song_id: 25, user_id: 3)
  songSave22 = SongSave.create(song_id: 17, user_id: 3)
  songSave23 = SongSave.create(song_id: 29, user_id: 3)
  songSave24 = SongSave.create(song_id: 19, user_id: 3)

  songSave25 = SongSave.create(song_id: 32, user_id: 1)
  songSave26 = SongSave.create(song_id: 22, user_id: 1)
  songSave27 = SongSave.create(song_id: 25, user_id: 1)
  songSave28 = SongSave.create(song_id: 17, user_id: 1)
  songSave29 = SongSave.create(song_id: 29, user_id: 1)
  songSave30 = SongSave.create(song_id: 19, user_id: 1)



  ArtistSave.destroy_all
  artistSave1 = ArtistSave.create(artist_id: 1, user_id: 1)
  artistSave2 = ArtistSave.create(artist_id: 2, user_id: 1)
  artistSave3 = ArtistSave.create(artist_id: 1, user_id: 3)
  artistSave4 = ArtistSave.create(artist_id: 2, user_id: 3)
  artistSave5 = ArtistSave.create(artist_id: 3, user_id: 1)
  artistSave6 = ArtistSave.create(artist_id: 3, user_id: 3)
  artistSave7 = ArtistSave.create(artist_id: 4, user_id: 3)
  artistSave8 = ArtistSave.create(artist_id: 5, user_id: 3)
  artistSave9 = ArtistSave.create(artist_id: 6, user_id: 3)
  artistSave10 = ArtistSave.create(artist_id: 4, user_id: 1)
  artistSave11 = ArtistSave.create(artist_id: 5, user_id: 1)
  artistSave12 = ArtistSave.create(artist_id: 6, user_id: 1)


  AlbumSave.destroy_all
  albumSave1 = AlbumSave.create(album_id: 1, user_id: 1)
  albumSave2 = AlbumSave.create(album_id: 2, user_id: 1)
  albumSave3 = AlbumSave.create(album_id: 1, user_id: 3)
  albumSave4 = AlbumSave.create(album_id: 2, user_id: 3)
  albumSave5 = AlbumSave.create(album_id: 3, user_id: 1)
  albumSave6 = AlbumSave.create(album_id: 3, user_id: 3)
  albumSave7 = AlbumSave.create(album_id: 4, user_id: 3)
  albumSave8 = AlbumSave.create(album_id: 5, user_id: 3)
  albumSave9 = AlbumSave.create(album_id: 6, user_id: 3)
  albumSave10 = AlbumSave.create(album_id: 4, user_id: 1)
  albumSave11 = AlbumSave.create(album_id: 5, user_id: 1)
  albumSave12 = AlbumSave.create(album_id: 6, user_id: 1)
