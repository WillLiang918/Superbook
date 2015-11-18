class FriendRequest < ActiveRecord::Base
  belongs_to :requester, class_name: "User", foreign_key: :requester_id
  belongs_to :requestee, class_name: "User", foreign_key: :requestee_id

  validates :requester, :requestee, presence: true
  validate :cannot_friend_request_yourself

  def cannot_friend_request_yourself
    if requestee_id == requester_id
      errors.add(:base, "cannot friend request yourself")
    end
  end
end
