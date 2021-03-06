# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, presence:true

  has_one_attached :song

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Album'

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Artist'
    
  has_many :song_saves,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: 'SongSave'
    
  has_many :playlist_songs,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: 'PlaylistSong'


  def self.get_all_song_data(song_id=nil)
    if !song_id.nil?
      Song.includes(:artist, :album).find(song_id)
    else
      Song.includes(:artist, :album)
    end
  end


end
