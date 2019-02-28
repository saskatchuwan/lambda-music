Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    
    resources :songs, only: [:index, :show]

    resources :albums, only: [:index, :show] do
      resources :songs, only: [:index]
    end

    resources :artists, only: [:index, :show] do
      resources :songs, only: [:index]
      resources :albums, only: [:index]
    end
  end
end
