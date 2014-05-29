Hackstarter::Application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :companies, only: [:index, :show, :create, :update, :destroy]
    resources :investments, only: [:create]
    resources :users, only: [:index, :show, :create, :update, :destroy]
    resources :sectors, only: [:index, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :updates, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :destroy]
  end
end
