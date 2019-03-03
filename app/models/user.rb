# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence:true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, :session_token, uniqueness:true

  after_initialize :ensure_session_token

  has_many :owned_playlists,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'Playlist'

  has_many :playlist_saves,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'PlaylistSave'

  has_many :saved_playlists,
    through: :playlist_saves,
    source: :playlist

  has_many :song_saves,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'SongSave'

  has_many :artist_saves,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'ArtistSave'

  has_many :album_saves,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'AlbumSave'

  has_many :saved_artists,
    through: :artist_saves,
    source: :artist

  has_many :saved_albums,
    through: :album_saves,
    source: :album

  has_many :saved_songs,
    through: :song_saves,
    source: :song

  has_many :owned_playlist_songs,
    through: :owned_playlists,
    source: :playlist_songs


  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  # doesn't quite work
  # def self.get_all_saved_playlists(user_id)
  #   User.includes(:saved_playlists).find(user_id)
  # end
end
