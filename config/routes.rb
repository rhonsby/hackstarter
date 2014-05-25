Hackstarter::Application.routes.draw do
  root 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: 'json' } do
    resources :companies, only: [:index, :show, :create, :update, :destroy]
    resources :investments, only: [:create]
    resources :users, only: [:show, :update, :destroy]
  end
end
