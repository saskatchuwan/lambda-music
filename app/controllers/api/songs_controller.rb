class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end

  private
  def song_params
    params.require(:song).permit(:title)
  end
end
