class CreateThreads < ActiveRecord::Migration
  def change
    create_table :threads do |t|
      t.timestamps null: false
    end
  end
end
