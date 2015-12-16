class RenameReceiverIdMessages < ActiveRecord::Migration
  def change
    rename_column :messages, :receiver_id, :thread_id
  end
end
