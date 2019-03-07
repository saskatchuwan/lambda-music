class Api::SearchesController < ApplicationController
  # for testing only!
  # skip_before_action :verify_authenticity_token

  def index
    @artists = Artist.where('name ILIKE ?', '%' + search_params[:search_term] + '%').all.limit(12)
    @playlists = Playlist.where('name ILIKE ?', '%' + search_params[:search_term] + '%').all.limit(12)
    @songs = Song.where('title ILIKE ?', '%' + search_params[:search_term] + '%').all.limit(12)
    @albums = Album.where('title ILIKE ?', '%' + search_params[:search_term] + '%').all.limit(12)

    render :index
  end

  private

  def search_params
    params.require(:search).permit(:search_term)
  end
end
