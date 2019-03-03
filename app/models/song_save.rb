# == Schema Information
#
# Table name: song_saves
#
#  id         :bigint(8)        not null, primary key
#  song_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SongSave < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: 'Song'

  
end
