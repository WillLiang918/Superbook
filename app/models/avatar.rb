class Avatar < ActiveRecord::Base
  belongs_to :user

  has_attached_file :avatar, styles: { profile: "160x160#", thumb: "21x21#" }, default_url: "/images/:style/default_avatar.png"

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  validates :user_id, presence: true
end
