ActiveAdmin.register Image do
  permit_params :image, :property_id
  
  index do
    selectable_column
    column :property do |image|
      link_to image.property.title, admin_property_path(image.property)
    end
    column "Image" do |image|
        image_tag image.image.url(:thumb)
    end
    actions
  end

  form do |f|
    f.inputs "Image Details" do
      f.input :property_id, as: :select, collection: Property.all.map{|x| [x.title, x.id]}
      f.input :image, :as => :file, :hint => f.object.image.present? \
    ? image_tag(f.object.image.url(:medium))
    : content_tag(:span, "no image yet") 
    end
    f.button :Submit
  end
end
