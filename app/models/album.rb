# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :title, presence:true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Artist'

  has_many :songs,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Song'

  has_many :album_saves,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'AlbumSave'

  def self.get_all_album_data(album_id)
    Album.includes(:songs).find(album_id)
  end

end
