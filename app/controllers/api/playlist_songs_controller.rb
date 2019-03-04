class Api::PlaylistSongsController < ApplicationController
  # just for testing
  #  skip_before_action :verify_authenticity_token

  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)

    if @playlist_song.save
      render json: ['Saved song to Your Playlist'], status: 200
    else
      render json: ['Unable to save song to Your Playlist'], status: 404
    end
  end


  def destroy
    @playlist_song = current_user.owned_playlist_songs.find(params[:id])

    # for testing, need to hardcode a user to get owned-playlist-songs
    # user = User.find(1)
    # @playlist_song = current_user.owned_playlist_songs.find(params[:id])

    @playlist_song.destroy
    render json: ['Successfully removed song from Your Playlist'], status: 200
  end

  def playlist_song_params
    params.require(:playlistSong).permit(:playlist_id, :song_id)
  end

end
