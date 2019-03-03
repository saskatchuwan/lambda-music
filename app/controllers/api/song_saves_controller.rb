class Api::SongSavesController < ApplicationController
    # for testing only!
    # skip_before_action :verify_authenticity_token

  
  def index
    if params[:user_id]
      @saved_songs = User.find(params[:user_id]).saved_songs
      render :index
    else
      render json: ['No songs unavailable'], status: 404
    end
  end

  def create
    @song_save = SongSave.new(song_id: song_save_params[:song_id])

    @song_save.user_id = current_user.id

    #testing
    # @song_save.user_id = 1

    if @song_save.save
      render json: ['Saved to Your Library'], status: 200
    else
      render json: ['Unable save song to Your Library'], status: 404
    end
  end

  def destroy
    #testing
    # @user = User.find(1)
    # @song_save = @user.song_saves.find(params[:id])

    @song_save = current_user.song_saves.find(params[:id])

    @song_save.destroy
    render json: ['Removed from Your Library'], status: 200
  end

  private
  def song_save_params
    params.require(:song_save).permit(:song_id)
  end

end
