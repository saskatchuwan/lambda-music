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

require 'test_helper'

class SongSaveTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
