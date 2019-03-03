class Api::PlaylistsController < ApplicationController

  # require login

  # for testing only!
  skip_before_action :verify_authenticity_token

  def index
    @playlists = Playlist.get_all_playlist_data
    render :index
  end

  def show
    @playlist = Playlist.get_all_playlist_data(params[:id])
    render :show
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.owner_id = current_user.id

    # hardcode current user id for testing in postman
    # @playlist.owner_id = 1

    if @playlist.save
      # save to playlist_save table
      @playlist_save = PlaylistSave.new(playlist_id: @playlist.id, user_id: @playlist.owner_id)

      @playlist_save.save

      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 404
    end
  end

  def update
    @playlist = current_user.owned_playlists.find(params[:id])

    # for testing, need to hardcode a user to get owned-playlists
    # user = User.find(1)
    # @playlist = user.owned_playlists.find(params[:id])

    if @playlist.update_attributes(playlist_params)
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 404

      # if the above error does not work...
      # render json: ['could not update playlist'], status: 404
    end
  end

  def destroy
    @playlist = current_user.owned_playlists.find(params[:id])

    # for testing, need to hardcode a user to get owned-playlists
    # user = User.find(1)
    # @playlist = user.owned_playlists.find(params[:id])

    @playlist.destroy
    render 'api/playlists/show'
  end

  private
  def playlist_params
    params.require(:playlist).permit(:name)
  end
end

