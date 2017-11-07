ActiveAdmin.register User do

	permit_params :email, :first_name, :image, :contact, :id, :middle_name, :family_name, :terms, :password, :password_confirmation

	action_item :Approve, only: :show do 
		link_to "Approve", Approve_admin_user_path(user), method: :put if !user.confirmed?
	end	

	member_action :Approve, method: :put do
		user = User.find(params[:id])
		user.skip_confirmation!
		user.save
		redirect_to [:admin, user], notice: 'User is Successfully Approved.'
	end


	index do
	  selectable_column
	  column :id
	  column :email
	  column :first_name
	  column :middle_name
	  column :family_name
	  image_column :image, style: :thumb
	  column :contact
	  actions
	end

	form multipart: true do |f|
	  f.inputs "User Details" do
	  	f.input :email
	  	if f.object.id.nil?
        f.inputs "Password" do
        f.input :password,              :label => "Password"
        f.input :password_confirmation, :label => "Password Confirmation"
      end
    end
	    f.input :first_name
	    f.input :middle_name
	    f.input :family_name
	    f.input :contact
	    f.input :terms, input_html: { value: 1 }
	    f.input :image, :as => :file, :hint => f.object.image.present? \
	    ? image_tag(f.object.image.url(:medium))
	    : content_tag(:span, "no image yet") 
	  end
	  f.button :Submit
	end

end
