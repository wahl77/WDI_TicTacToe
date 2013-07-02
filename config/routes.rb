RailsProject::Application.routes.draw do
  get "sessions/new"

  get "sessions/destroy"

  get "sessions/create"

  get "static_pages/index"

  root :to => 'static_pages#index'
  
  get "/logout" => "sessions#destroy", as:"logout"
  
  resources :users
  
  resources :games do 
    resources :moves 
  end
  
  resources :sessions
  
end
