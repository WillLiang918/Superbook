class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, class_name: "User", foreign_key: :friend_id

  validates :user_id, :friend_id, presence: true
  validates :user_id, uniqueness: { scope: :friend_id }
  validate :cannot_friend_yourself

  def cannot_friend_yourself
    if user_id && friend_id && user_id == friend_id
      errors.add(:base, "cannot friend yourself")
    end
  end
end
