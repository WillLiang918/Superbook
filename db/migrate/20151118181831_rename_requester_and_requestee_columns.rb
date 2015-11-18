class RenameRequesterAndRequesteeColumns < ActiveRecord::Migration
  def change
    rename_column :friend_requests, :requester_id, :sender_id
    rename_column :friend_requests, :requestee_id, :receiver_id
  end
end
