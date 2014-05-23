Hackstarter::Application.routes.draw do
  root 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: 'json' } do
    resources :companies, only: [:show, :create, :update, :destroy]
    resources :investments, only: [:create]
  end
end
