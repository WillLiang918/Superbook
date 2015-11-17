class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :body, null: false
      t.integer :author_id, null: false, index: true, foreign_key: true
      t.integer :receiver_id, null: false, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
