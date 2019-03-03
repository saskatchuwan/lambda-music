class Api::ArtistSavesController < ApplicationController
  # for testing only!
  # skip_before_action :verify_authenticity_token

  def create
    @artist_save = ArtistSave.new(artist_id: artist_save_params[:artist_id])

    @artist_save.user_id = current_user.id

    #testing
    # @artist_save.user_id = 1

    if @artist_save.save
      render json: ['Saved to Your Library'], status: 200
    else
      render json: ['Unable save artist to Your Library'], status: 404
    end
  end

  def destroy
    #testing
    # @user = User.find(1)
    # @artist_save = @user.artist_saves.find(params[:id])

    @artist_save = current_user.artist_saves.find(params[:id])

    @artist_save.destroy
    render json: ['Removed from Your Library'], status: 200
  end

  private
  def artist_save_params
    params.require(:artist_save).permit(:artist_id)
  end
end
