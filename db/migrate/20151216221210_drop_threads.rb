class DropThreads < ActiveRecord::Migration
  def change
    drop_table :threads
  end
end
