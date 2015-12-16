class Message < ActiveRecord::Base
  belongs_to :sender, class_name: "User", foreign_key: :sender_id
  belongs_to :thread

  validates :sender, :thread, :body, presence: true
end
