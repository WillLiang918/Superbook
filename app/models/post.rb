class Post < ActiveRecord::Base
  validates :body, :author, :receiver, presence: true
  validate :must_have_permission_to_create

  belongs_to :author, class_name: "User", foreign_key: :author_id
  belongs_to :receiver, class_name: "User", foreign_key: :receiver_id
  has_many :comments, as: :commentable, dependent: :destroy

  def must_have_permission_to_create
    if (author_id && receiver_id && author_id != receiver_id &&
       Friendship.find_by(user_id: author_id, friend_id: receiver_id).nil?)
       errors.add(:base, "you do not have permission to post.")
    end
  end
end
