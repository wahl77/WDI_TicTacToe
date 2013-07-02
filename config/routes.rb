RailsProject::Application.routes.draw do
  get "static_pages/index"

  root :to => 'static_pages#index'
  
  resources :users
  
  resources :games do 
    resources :moves 
  end
  
end
