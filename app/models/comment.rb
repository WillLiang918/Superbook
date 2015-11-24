class Comment < ActiveRecord::Base
  belongs_to :commentable, polymorphic: true
  belongs_to :author, class_name: "User", foreign_key: :author_id
  belongs_to :parent, class_name: "Comment", foreign_key: :parent_id
  has_many   :children, class_name: "Comment", foreign_key: :parent_id, dependent: :destroy
  has_many   :likes, as: :likeable, dependent: :destroy


  validates :author, :commentable, :body, presence: true
  validate  :valid_parent_comment
  validate  :has_permission_to_create
  validate  :can_only_nest_one_level

  def valid_parent_comment
    return if self.parent_id.nil?

    parent = self.parent
    unless parent &&
           parent.commentable_id == self.commentable_id &&
           parent.commentable_type == self.commentable_type
      errors.add(:parent, "must point to the same commentable")
    end
  end

  def has_permission_to_create
    return unless self.commentable_type == "Post"
    post = Post.find(self.commentable_id)
    if post && self.author_id &&
       self.author_id != post.author_id &&
       self.author_id != post.receiver_id &&
       Friendship.where(
        user_id: self.author_id,
        friend_id: [post.author_id, post.receiver_id]
       ).count == 0
      errors.add(:base, "you do not have permission to comment")
    end
  end

  def can_only_nest_one_level
    return unless self.parent_id
    if self.parent && self.parent.parent_id
      errors.add(:base, "you can only nest comments one level")
    end
  end
end
