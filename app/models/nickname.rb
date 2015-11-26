class Nickname < ActiveRecord::Base
  belongs_to :profile

  validates :profile, :nickname, presence: true
end
