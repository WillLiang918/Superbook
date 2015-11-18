class FriendRequest < ActiveRecord::Base
  belongs_to :sender, class_name: "User", foreign_key: :sender_id
  belongs_to :receiver, class_name: "User", foreign_key: :receiver_id

  validates :sender, :receiver, presence: true
  validate :cannot_friend_request_yourself

  def cannot_friend_request_yourself
    if sender_id && receiver_id && sender_id == receiver_id
      errors.add(:base, "cannot friend request yourself")
    end
  end
end
