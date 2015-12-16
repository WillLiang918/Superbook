class DropAvatars < ActiveRecord::Migration
  def up
    drop_table :avatars
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
