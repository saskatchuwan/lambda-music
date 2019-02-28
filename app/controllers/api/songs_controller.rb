class Api::SongsController < ApplicationController
  def index
    if params[:album_id]
      @songs = Album.find(params[:album_id]).songs
    elsif params[:artist_id]
      @songs = Artist.find(params[:artist_id]).songs
    else
      @songs = Song.all
    end
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
