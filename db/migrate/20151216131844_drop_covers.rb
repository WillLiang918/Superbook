class DropCovers < ActiveRecord::Migration
  def up
    drop_table :covers
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
