# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#show
# json.cover_url url_for(@playlist.cover)

#index
# json.cover_url url_for(playlist.cover)

class Playlist < ApplicationRecord
  validates :name, presence:true

  has_one_attached :cover

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'

  has_many :playlist_songs,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: 'PlaylistSong'

  has_many :playlist_saves,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: 'PlaylistSave'

  has_many :songs,
    through: :playlist_songs,
    source: :song

  has_many :artists,
    through: :songs,
    source: :artist

  has_many :albums,
    through: :songs,
    source: :album


  def self.get_all_playlist_data(playlist_id=nil)
    if !playlist_id.nil?
      Playlist.includes(:songs, :artists, :albums, :owner, :playlist_songs).find(playlist_id)
    else
      Playlist.includes(:songs, :artists, :albums, :owner, :playlist_songs)
    end
  end

  def cover_nil
    if !self.cover.attached?
        self.cover.attach(io: File.open('app/assets/images/content/playlist_images/default.png'), filename: 'default.png')
    end
  end

  
end
