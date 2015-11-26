class Nickname < ActiveRecord::Base
  belongs_to :profile

  validates :profile, :name, presence: true
end
