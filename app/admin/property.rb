ActiveAdmin.register Property do

	permit_params :title, :listing_type, :location, :isPublished, :bedrooms, :bath, :furnished, :area, :price, :availibility, :image, :address, :user_id

	scope :all
	scope :published
	scope :unpublished

	action_item :Publish, only: :show do 
		link_to "Publish", Publish_admin_property_path(property), method: :put if !property.isPublished?
	end	

	action_item :UnPublish, only: :show do 
		link_to "UnPublish", UnPublish_admin_property_path(property), method: :put if property.isPublished?
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

end
