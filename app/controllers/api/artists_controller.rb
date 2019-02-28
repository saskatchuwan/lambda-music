class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = Artist.get_all_artist_data(params[:id])
    render :show
  end
end
