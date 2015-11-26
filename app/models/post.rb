class Post < ActiveRecord::Base
  validates :body, :author, :receiver, presence: true
  validate :must_have_permission_to_create

  belongs_to :author, class_name: "User", foreign_key: :author_id
  belongs_to :receiver, class_name: "User", foreign_key: :receiver_id
  has_many :comments, as: :commentable, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy

  def must_have_permission_to_create
    if (author_id && receiver_id && author_id != receiver_id &&
       Friendship.find_by(user_id: author_id, friend_id: receiver_id).nil?)
       errors.add(:base, "you do not have permission to post.")
    end
  end

  def self.commenter_ids(posts)
    posts.reduce(Set.new) do |commenter_ids, post|
      post.comments.each { |comment| commenter_ids << comment.author_id }
      commenter_ids
    end
  end

  def self.receiver_ids(posts)
    posts.reduce(Set.new) do |receiver_ids, post|
      receiver_ids << post.receiver_id
      receiver_ids
    end
  end
end
