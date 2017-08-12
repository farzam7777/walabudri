ActiveAdmin.register Blog do
  permit_params :title, :description, :image
  
  form do |f|
    f.inputs "Blog Details" do
      f.input :title
      f.input :description
      f.input :image
      end
    f.button :Submit
  end
end
