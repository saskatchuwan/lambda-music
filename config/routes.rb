Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create]

    resources :users, only: [:show] do
      resources :playlist_saves, only: [:index]
      resources :song_saves, only: [:index]
      resources :album_saves, only: [:index]
      resources :artist_saves, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    
    resources :songs, only: [:index, :show]

    resources :albums, only: [:index, :show] do
      resources :songs, only: [:index]
    end

    resources :artists, only: [:index, :show] do
      resources :songs, only: [:index]
      resources :albums, only: [:index]
    end

    resources :playlists, only: [:index, :show, :create, :update, :destroy] do
      resources :songs, only: [:index]
    end

    resources :playlist_songs, only: [:create, :destroy]

    resources :playlist_saves, only: [:create, :destroy]
    resources :song_saves, only: [:create, :destroy]
    resources :artist_saves, only: [:create, :destroy]
    resources :album_saves, only: [:create, :destroy]
  end

end
