class Api::PlaylistSongsController < ApplicationController

  # def create
  #   @playlist_song = PlaylistSong.new()

  #   # hardcode current user id for testing in postman
  #   # @playlist.owner_id = 2

  #   if @playlist.save
  #     render 'api/playlists/show'
  #   else
  #     render json: @playlist.errors.full_messages, status: 404
  #   end
  # end

  # def destroy
  #   @playlist = current_user.owned_playlists.find(params[:id])

  #   # for testing, need to hardcode a user to get owned-playlists
  #   # user = User.find(1)
  #   # @playlist = user.owned_playlists.find(params[:id])

  #   @playlist.destroy
  #   render 'api/playlists/show'
  # end

end
