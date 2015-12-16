class RenameThreadIdMessages < ActiveRecord::Migration
  def change
    rename_column :messages, :thread_id, :receiver_id
  end
end
