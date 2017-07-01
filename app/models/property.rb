class Property < ApplicationRecord

	belongs_to :user
	has_many   :images

	has_attached_file :image, styles: { large: "750x441>", medium: "600x600>", thumb: "100x100#" }
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

	geocoded_by :address
	after_validation :geocode, :if => :address_changed?

end
