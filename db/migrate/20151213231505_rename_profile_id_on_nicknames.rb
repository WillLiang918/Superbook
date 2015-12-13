class RenameProfileIdOnNicknames < ActiveRecord::Migration
  def change
    rename_column :nicknames, :profile_id, :user_id
  end
end
