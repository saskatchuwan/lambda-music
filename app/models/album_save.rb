# == Schema Information
#
# Table name: album_saves
#
#  id         :bigint(8)        not null, primary key
#  album_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class AlbumSave < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: 'Album'
end
