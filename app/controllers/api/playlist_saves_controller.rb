class Api::PlaylistSavesController < ApplicationController

  # for testing only!
  # skip_before_action :verify_authenticity_token

  def create
    @playlist_save = PlaylistSave.new(playlist_id: playlist_save_params[:playlist_id])

    @playlist_save.user_id = current_user.id

    #testing
    # @playlist_save.user_id = 2

    if @playlist_save.save
      render json: ['Saved to Your Library'], status: 200
    else
      render json: ['Unable to follow playlist'], status: 404
    end
  end

  def destroy
    #testing
    # @user = User.find(2)
    # @playlist_save = @user.playlist_saves.find(params[:id])

    @playlist_save = current_user.playlist_saves.find(params[:id])

    @playlist_save.destroy
    render json: ['Removed from Your Library'], status: 200
  end

  private
  def playlist_save_params
    params.require(:playlist_save).permit(:playlist_id)
  end
end
