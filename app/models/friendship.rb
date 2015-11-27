class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, class_name: "User", foreign_key: :friend_id

  validates :user_id, :friend_id, presence: true
  validates :user_id, uniqueness: { scope: :friend_id }
  validate :cannot_friend_yourself

  after_create :create_reverse_friendship!
  after_destroy :destroy_reverse_friendship!

  def cannot_friend_yourself
    if user_id && friend_id && user_id == friend_id
      errors.add(:base, "cannot friend yourself")
    end
  end

  def create_reverse_friendship!
    reverse_friendship = Friendship.find_by(user_id: self.friend_id, friend_id: self.user_id)
    if reverse_friendship.nil?
      Friendship.create!(user_id: self.friend_id, friend_id: self.user_id)
    end
  end

  def destroy_reverse_friendship!
    reverse_friendship = Friendship.find_by(user_id: self.friend_id, friend_id: self.user_id)
    reverse_friendship.destroy! unless reverse_friendship.nil?
  end
end
