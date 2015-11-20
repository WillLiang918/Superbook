class CreateAvatars < ActiveRecord::Migration
  def change
    create_table :avatars do |t|
      t.integer :user_id, null: false, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
