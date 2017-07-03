class User < ApplicationRecord

  	has_many :properties, :dependent => :destroy	
		
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
	     :recoverable, :rememberable, :trackable, :validatable

	validates_confirmation_of :password         

	has_attached_file :image, styles: { large: "750x441>", medium: "300x300>", thumb: "100x100#" }
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
