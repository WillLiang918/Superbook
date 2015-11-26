class Profile < ActiveRecord::Base
  belongs_to :user
  has_many :nicknames, dependent: :destroy

  validates :user, presence: true
end
