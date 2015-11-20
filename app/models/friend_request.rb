class FriendRequest < ActiveRecord::Base
  belongs_to :sender, class_name: "User", foreign_key: :sender_id
  belongs_to :receiver, class_name: "User", foreign_key: :receiver_id

  validates :sender, :receiver, presence: true
  validates :sender_id, uniqueness: { scope: :receiver_id }
  validate :cannot_friend_request_yourself
  validate :not_friends

  def cannot_friend_request_yourself
    if sender_id && receiver_id && sender_id == receiver_id
      errors.add(:base, "cannot friend request yourself")
    end
  end

  def not_friends
    unless Friendship.find_by(user_id: sender_id, friend_id: receiver_id).nil?
      errors.add(:base, "already friends")
    end
  end

  # validate that reverse friend request doesn't already exist
end
