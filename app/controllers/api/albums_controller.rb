class Api::AlbumsController < ApplicationController
    # for testing only!
  # skip_before_action :verify_authenticity_token

  def index
    if params[:artist_id]
      @albums = Artist.find(params[:artist_id]).albums
    else
      @albums = Album.all
    end

    render :index
  end

  def show
    @album = Album.get_all_album_data(params[:id])
    render :show
  end
end
