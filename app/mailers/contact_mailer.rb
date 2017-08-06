class ContactMailer < ApplicationMailer
  
  def contact(name, email, phone, subject, message)
    @greeting = "Hi, contact has just been made with araddi. Mail info are as follows."
    @name = name
    @phone = phone
    @message = message
    mail to: 'info@araddi.com', subject: subject, from: email
  end
end
