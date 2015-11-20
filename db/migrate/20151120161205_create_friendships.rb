class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :user_id, null: false, index: true, foreign_key: true
      t.integer :friend_id, null: false, foreign_key: true

      t.timestamps null: false
    end
  end
end
