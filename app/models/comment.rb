class Comment < ActiveRecord::Base
  belongs_to :commentable, polymorphic: true
  belongs_to :parent, class_name: "Comment", foreign_key: :parent_id
  belongs_to :author, class_name: "User", foreign_key: :author_id

  validates :author, :commentable, :body, presence: true
  validate :valid_parent_comment

  def valid_parent_comment
    return if self.parent_id.nil?

    parent = self.parent
    unless parent &&
           parent.commentable_id == self.commentable_id &&
           parent.commentable_type == self.commentable_type
      errors.add(:parent, "must point to the same commentable")
    end
  end
end
