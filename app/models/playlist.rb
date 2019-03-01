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

class Playlist < ApplicationRecord
  validates :name, presence:true

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
end
