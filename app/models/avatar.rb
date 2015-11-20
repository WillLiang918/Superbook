class Avatar < ActiveRecord::Base
  belongs_to :user

  has_attached_file :image, styles: { profile: "160x160#", thumb: "21x21#" }, default_url: "/images/:style/default_avatar.png"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  validates :user_id, presence: true
end
