class Cover < ActiveRecord::Base
  belongs_to :user

  has_attached_file :image, default_url: ActionController::Base.helpers.asset_path("covers/default_cover.jpg")

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  validates :user, presence: true
end
