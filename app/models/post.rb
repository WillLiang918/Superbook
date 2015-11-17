class Post < ActiveRecord::Base
  validates :body, :author, :receiver, presence: true

  belongs_to :author, class_name: "User", foreign_key: :author_id
  belongs_to :receiver, class_name: "User", foreign_key: :receiver_id
end
