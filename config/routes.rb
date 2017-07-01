Rails.application.routes.draw do
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get 'images/new'

  get 'images/create'

  devise_for :users
  get 'properties/index'

  get 'properties/new'

  get 'properties/edit'

  get 'properties/show'

  resources :properties do
    resources :images
  end  


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

HighVoltage.configure do |config|
  	config.route_drawer = HighVoltage::RouteDrawers::Root
  end

  HighVoltage.configure do |config|
	config.home_page = 'index'	
  end
end
