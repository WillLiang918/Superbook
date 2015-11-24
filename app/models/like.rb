class Like < ActiveRecord::Base
  belongs_to :user
  belongs_to :likeable, polymorphic: true

  validates :user, :likeable, presence: true
  validates :user, uniqueness: {scope: [:likeable_id, :likeable_type]}
end
