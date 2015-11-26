class RenameNicknameColumn < ActiveRecord::Migration
  def change
    rename_column :nicknames, :nickname, :name
  end
end
