Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  resources :favorites, only: ['index']

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users

  resources :properties do
    resources :images
    
    member do
      get 'mark_favorite'
    end

    collection do 
      get 'search'
    end

    collection do
      post :search, to: 'properties#index'
    end
    
    collection do 
      get 'neighbour_hood_locations'
    end
    
    collection do
      get 'tag_search'
    end
    
    collection do
      post 'contact_form'
    end
    
    collection do
      post 'newsletter'
    end
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  HighVoltage.configure do |config|
    	config.route_drawer = HighVoltage::RouteDrawers::Root
    end

    HighVoltage.configure do |config|
  	config.home_page = 'index'	
    end  
end
