class Property < ApplicationRecord

	belongs_to :user
	has_many   :images

	has_many   :favorites
	# has_many   :users, through: :favorites

	has_attached_file :image, styles: { large: "750x441>", medium: "600x600>", thumb: "100x100#" }
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

	geocoded_by :address
	after_validation :geocode, :if => :address_changed?

	scope :published, ->{ where(isPublished: 1) }
	scope :unpublished, ->{ where(isPublished: 0) }

	validates :title, presence: true
	validates :address, presence: true
	validates :listing_type, presence: true
	validates :location, presence: true
	validates :bedrooms, presence: true
	validates :bath, presence: true
	validates :area, presence: true
	validates :price, presence: true
	validates :availibility, presence: true
	validates :image, presence: true

	validates :address, length: { minimum: 10 }
	validates :description, length: { minimum: 15 }

	def to_param
		"#{id} #{title}".parameterize
	end

end
