class Api::PlaylistSongsController < ApplicationController
  # just for testing
  # skip_before_action :verify_authenticity_token

  rescue_from ActiveRecord::RecordNotFound, with: :dude_wheres_my_record

  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)

    if @playlist_song.save
      respond_to do |format|
        format.json do
          render json: {
            playlist_song: @playlist_song,
            message: 'Saved song to Your Playlist'
          }.to_json, status: 200
        end
      end
    else
      respond_to do |format|
        format.json do
          render json: {
            playlist_song: "",
            message: 'Unable to save song to Your Playlist'
          }.to_json, status: 404
        end
      end
    end
  end


  def destroy
    @playlist_song = current_user.owned_playlist_songs.find(params[:id])
    # user = User.find(3)
    # @playlist_song = user.owned_playlist_songs.find(params[:id])

    @playlist_song.destroy
    respond_to do |format|
      format.json do
        render json: {
          playlist_song: @playlist_song,
          message: 'Successfully removed song from Your Playlist'
        }.to_json, status: 200
      end
    end
    
  end

  def dude_wheres_my_record
    respond_to do |format|
      format.json do
        render json: {
          playlist_song: @playlist_song,
          message: 'Cannot remove songs from playlists owned by other users.'
        }.to_json, status: 401
      end
    end
  end

  private

  def playlist_song_params
    params.require(:playlistSong).permit(:playlist_id, :song_id)
  end

end
