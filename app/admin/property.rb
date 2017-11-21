WtfLang::API.key = "fa9d6d9faf06420ada0090796f8c778d"

ActiveAdmin.register Property do

	permit_params :title, :listing_type, :location, :isPublished, :isFeatured, :bedrooms,
                :bath, :furnished, :area, :price, :availibility, :image, :address, :user_id,
                :near_by_location, :description, :tag, :longitude, :latitude, :currency, :unit,  
                :unpublished_date, :status, images_attributes: [:id, :property_id, :image, :_destroy]
                
	scope :all
	scope :rent
	scope :sell
  scope :Sold
  scope :Rented
	scope :published
	scope :unpublished
	scope :featured
	scope :not_featured
  
  # batch_action :isFeatured do |selection|
  #   Property.find(selection).each { |property| property.update(isFeatured: 1) }
  #   redirect_to collection_path, notice: "The properties have been featured."
  # end

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

  action_item :mark_property_sold, only: :show do
    link_to 'Mark Property Sold', mark_property_sold_admin_property_path(property), method: :put if property.tag == 'Sell' && !property.status.present?
  end

  action_item :un_mark_property_sold, only: :show do
    link_to 'Unmark Property Sold', un_mark_property_sold_admin_property_path(property), method: :put if property.status == 'Sold'
  end

  action_item :mark_property_rented, only: :show do
    link_to 'Mark Property Rented', mark_property_rented_admin_property_path(property), method: :put if property.tag == 'Rent' && !property.status.present? 
  end

  action_item :un_mark_property_rented, only: :show do
    link_to 'Unmark Property Rented', un_mark_property_rented_admin_property_path(property), method: :put if property.status == 'Rented'
  end

	member_action :Publish, method: :put do
		property = Property.find(params[:id])
		property.update(isPublished: 1)
    property.update(unpublished_date: nil)
		redirect_to admin_property_path(property)
	end	

	member_action :UnPublish, method: :put do
		property = Property.find(params[:id])
		property.update(isPublished: 0)
    property.update(unpublished_date: DateTime.now)
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

  member_action :mark_property_sold, method: :put do
    property = Property.find(params[:id])
    property.update(status: 'Sold')
    redirect_to admin_property_path(property)
  end

  member_action :mark_property_rented, method: :put do
    property = Property.find(params[:id])
    property.update(status: 'Rented')
    redirect_to admin_property_path(property)
  end

  member_action :un_mark_property_sold, method: :put do
    property = Property.find(params[:id])
    property.update(status: '')
    redirect_to admin_property_path(property)
  end

  member_action :un_mark_property_rented, method: :put do
    property = Property.find(params[:id])
    property.update(status: '')
    redirect_to admin_property_path(property)
  end
	
	index do
    selectable_column
    column 'Requisition Number' do |property|
      property.id
    end
    column :user do |property|
      property.user.to_s.capitalize
    end
    column "Image" do |image|
        image_tag image.image.url(:thumb)
    end
    column :title
    column :listing_type
    column :address
    column :location
    column :status
    column :price
    column "isPublished" do |property|
      isPublished_status(property.isPublished)
    end
    column "isFeatured" do |property|
      isFeatured_status(property.isFeatured)
    end
    column :area
    column :unit
    column :tag
    column :bedrooms
    column 'Bathrooms' do |property|
      property.bath
    end
    column :unpublished_date
    column 'Published Date' do |property|
      property.created_at
    end
    actions dropdown: true do |property|
      item "Publish", Publish_admin_property_path(property), method: :put if !property.isPublished?
      item "UnPublish", UnPublish_admin_property_path(property), method: :put if property.isPublished?
      item 'Mark Sold', mark_property_sold_admin_property_path(property), method: :put if property.tag == 'Sell' && !property.status.present?
      item 'Mark UnSold', un_mark_property_sold_admin_property_path(property), method: :put if property.status == 'Sold'
      item 'Mark Rented', mark_property_rented_admin_property_path(property), method: :put if property.tag == 'Rent' && !property.status.present?
      item 'Unmark Rented', un_mark_property_rented_admin_property_path(property), method: :put if property.status == 'Rented'      
    end
  end
  
  show do
    attributes_table do
      row :user
      row 'Requisition Number' do
        property.id
      end
      row :title
      row :listing_type
      row :location
      row :status
      row :address
      row :bedrooms
      row 'Bathrooms' do
        property.bath
      end
      row :furnished
      row :area
      row :unit
      row :currency
      row :price
      if property.description.full_lang == 'arabic'
        row :description, dir: 'rtl'
      else
        row :description
      end
      row :availibility
      row :image do
        image_tag property.image.url(:medium)
      end
      row :longitude
      row :latitude
      row :isPublished
      row :isFeatured
      row :tag
      row :unpublished_date
      row "Images" do
        ul do
          property.images.each do |img|
            li do 
              image_tag(img.image.url(:large))
            end
          end
        end
      end
    end
    
    active_admin_comments
  end

  form multipart: true do |f|
    f.inputs "Property Details" do
    	f.input :user
      f.input :title
      f.input :listing_type, as: :select, collection: ['Apartment', 'House', 'Villa', 'Office', 'Farm', 'Empty Land'], include_blank: false
      f.input :location, as: :select, collection: ['Khartoum', 'Bahri/Khartoum North', 'Omdurman'], include_blank: false
      f.input :address
      f.input :bedrooms
      f.input :bath, label: 'Bathrooms'
      f.input :furnished
      f.input :unit, as: :select, collection: ['Acre', 'Square Meter'], include_blank: false
      f.input :area
      f.input :currency, as: :select, collection: ['USD', 'SDG'], include_blank: false
      f.input :price
      if f.object.new_record?
        f.input :description
      else
        if f.object.description.full_lang == 'arabic'
          f.input :description, input_html: { dir: 'rtl' }
        else
          f.input :description
        end
      end
      f.input :availibility
      f.input :image, :as => :file, :hint => f.object.image.present? \
      ? image_tag(f.object.image.url(:medium))
      : content_tag(:span, "no image yet") 
      f.input :longitude
      f.input :latitude
      f.input :isPublished
      f.input :isFeatured
      f.input :status, as: :select, collection: ['Sold', 'Rented']
      f.input :tag, as: :select, collection: ['Rent', 'Sell'], include_blank: false
      f.inputs "Images" do
        f.has_many :images, allow_destroy: true do |p|
          p.input :image, :hint => p.object.image.present? \
      ? image_tag(p.object.image.url(:medium))
      : content_tag(:span, "no image yet")
        end
      end
    end
    f.button :Submit
  end
  
  filter :user
  filter :id, label: 'Requisition Number'
  filter :title
  filter :address
  filter :location, as: :select, collection: ['Khartoum', 'Bahri/Khartoum North', 'Omdurman']
  filter :tag, as: :select, collection: ['Rent', 'Sell']
  filter :listing_type, as: :select, collection: ['Apartment', 'House', 'Villa', 'Office', 'Farm', 'Empty Land']
  filter :bedrooms
  filter :bath, label: 'Bathrooms'
  filter :furnished
  filter :unit, as: :select, collection: ['Acre', 'Square Meter']
  filter :area
  filter :currency, as: :select, collection: ['USD', 'SDG']
  filter :price
  filter :description
  filter :availibility
  filter :image
  filter :status, as: :select, collection: ['Sold', 'Rented']
  filter :isPublished, as: :select, collection: ['1', '0']
  filter :isFeatured, as: :select, collection: ['1', '0']
end
