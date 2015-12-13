class Profile < ActiveRecord::Base
  belongs_to :user
  has_many :abilities, dependent: :destroy

  validates :user, presence: true
end
