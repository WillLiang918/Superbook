class CreateNicknames < ActiveRecord::Migration
  def change
    create_table :nicknames do |t|
      t.string :nickname, null: false
      t.integer :profile_id, null: false, foreign_key: true

      t.timestamps null: false
    end
  end
end
