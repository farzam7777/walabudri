ActiveAdmin.register Setting do

  permit_params :phone, :email, :welcome_msg, :fb_link, :twitter_link, :instagram_link, 
                :youtube_link, :about_us_welcome_msg, :about_us_text, :terms_of_services_text, 
                :accuracy_of_info_text, :membership_and_account_reg_text, 
                :general_ownership_of_account_text, :changes_to_the_terms_of_service_text, 
                :avoid_scams_text, :tips_avoid_scams_text

  form multipart: true do |f|
    f.inputs "Settings" do
      f.input :phone
      f.input :email
      f.input :welcome_msg, as: :ckeditor
      f.input :fb_link
      f.input :twitter_link
      f.input :instagram_link
      f.input :youtube_link
      f.input :about_us_welcome_msg, as: :ckeditor
      f.input :about_us_text, as: :ckeditor
      f.input :terms_of_services_text, as: :ckeditor
      f.input :accuracy_of_info_text, as: :ckeditor
      f.input :membership_and_account_reg_text, as: :ckeditor
      f.input :general_ownership_of_account_text, as: :ckeditor
      f.input :changes_to_the_terms_of_service_text, as: :ckeditor
      f.input :avoid_scams_text, as: :ckeditor
      f.input :tips_avoid_scams_text, as: :ckeditor
    end
    f.actions
  end

end
