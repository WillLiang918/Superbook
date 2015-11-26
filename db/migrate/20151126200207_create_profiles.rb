class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.text :bio
      t.string :phone
      t.string :address
      t.string :work
      t.integer :user_id, null: false, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
