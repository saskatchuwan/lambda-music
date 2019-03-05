# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# json.cover_url url_for(@artist.cover)

class Artist < ApplicationRecord
  validates :name, presence:true

  has_one_attached :cover

  has_many :albums,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Album'

  has_many :songs,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'Song'

  has_many :artist_saves,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: 'ArtistSave'

  def self.get_all_artist_data(artist_id)
    Artist.includes(:songs, :albums).find(artist_id)
  end

end
