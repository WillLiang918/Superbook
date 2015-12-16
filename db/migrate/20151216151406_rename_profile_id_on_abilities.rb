class RenameProfileIdOnAbilities < ActiveRecord::Migration
  def change
    rename_column :abilities, :profile_id, :user_id
  end
end
