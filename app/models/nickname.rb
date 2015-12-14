class Nickname < ActiveRecord::Base
  belongs_to :user, inverse_of: :nicknames

  validates :user, :name, presence: true
end
