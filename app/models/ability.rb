class Ability < ActiveRecord::Base
  belongs_to :profile

  validates :name, :profile, presence: true
end
