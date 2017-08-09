ActiveAdmin.register Property do

	permit_params :title, :listing_type, :location, :isPublished, :bedrooms, :bath, :furnished, :area, :price, :availibility, :image, :address, :user_id, :near_by_location, :description, :tag

	scope :all
	scope :rent
	scope :buy
	scope :sell
	scope :published
	scope :unpublished
	scope :featured
	scope :not_featured

	action_item :Publish, only: :show do 
		link_to "Publish", Publish_admin_property_path(property), method: :put if !property.isPublished?
	end	

	action_item :UnPublish, only: :show do 
		link_to "UnPublish", UnPublish_admin_property_path(property), method: :put if property.isPublished?
	end

	action_item :Featured, only: :show do 
		link_to "Featured", Featured_admin_property_path(property), method: :put if !property.isFeatured?
	end	

	action_item :UnFeatured, only: :show do 
		link_to "UnFeatured", UnFeatured_admin_property_path(property), method: :put if property.isFeatured?
	end	

	member_action :Publish, method: :put do
		property = Property.find(params[:id])
		property.update(isPublished: 1)
		redirect_to admin_property_path(property)
	end	

	member_action :UnPublish, method: :put do
		property = Property.find(params[:id])
		property.update(isPublished: 0)
		redirect_to admin_property_path(property)
	end

	member_action :Featured, method: :put do
		property = Property.find(params[:id])
		property.update(isFeatured: 1)
		redirect_to admin_property_path(property)
	end	

	member_action :UnFeatured, method: :put do
		property = Property.find(params[:id])
		property.update(isFeatured: 0)
		redirect_to admin_property_path(property)
	end	
	
	index do
    column :user do |property|
      property.user.first_name
    end
    Property.column_names.each do |c|
      column c.to_sym
    end
    actions
  end
  
  form do |f|
    f.inputs "Property Details" do
    	f.input :user_id, as: :select, collection: User.all.map{|x| [x.first_name, x.id]}
      f.input :title
      f.input :listing_type, as: :select, collection: ['Apartment', 'House', 'Villa', 'Office', 'Farm House', 'Empty Land'], include_blank: false
      f.input :location, as: :select, collection: ['Khartoum', 'Bahri, Khartoum/North', 'Umdurman'], include_blank: false
      f.input :address
      f.input :bedrooms
      f.input :bath
      f.input :furnished
      f.input :area
      f.input :price
      f.input :description
      f.input :availibility
      f.input :image
      f.input :isPublished
      f.input :isFeatured
      f.input :tag, as: :select, collection: ['Rent', 'Sell'], include_blank: false
    end
    f.button :Submit
  end
  
  filter :user_id, as: :select, collection: User.all.map{|x| [x.email, x.id]}
  filter :title
  filter :address
  filter :location
  filter :tag, as: :select, collection: ['Rent', 'Sell']
  filter :listing_type, as: :select, collection: ['Apartment', 'House', 'Villa', 'Office', 'Farm House', 'Empty Land']
  filter :bedrooms
  filter :bath
  filter :furnished
  filter :area
  filter :price
  filter :description
  filter :availibility
  filter :image
  filter :isPublished, as: :select, collection: ['1', '0']
  filter :isFeatured, as: :select, collection: ['1', '0']
end
