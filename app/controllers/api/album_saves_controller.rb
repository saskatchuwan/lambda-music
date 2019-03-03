class Api::AlbumSavesController < ApplicationController
  # for testing only!
  # skip_before_action :verify_authenticity_token

  def index
    if params[:user_id]
      @saved_albums = User.find(params[:user_id]).saved_albums
      render :index
    else
      render json: ['No albums unavailable'], status: 404
    end
  end

  def create
    @album_save = AlbumSave.new(album_id: album_save_params[:album_id])

    # @album_save.user_id = current_user.id

    #testing
    @album_save.user_id = 1

    if @album_save.save
      render json: ['Saved to Your Library'], status: 200
    else
      render json: ['Unable save album to Your Library'], status: 404
    end
  end

  def destroy
    #testing
    @user = User.find(1)
    @album_save = @user.album_saves.find(params[:id])

    # @album_save = current_user.album_saves.find(params[:id])

    @album_save.destroy
    render json: ['Removed from Your Library'], status: 200
  end

  private
  def album_save_params
    params.require(:album_save).permit(:album_id)
  end
end
