class CreateAbilities < ActiveRecord::Migration
  def change
    create_table :abilities do |t|
      t.string :name, null: false
      t.integer :profile_id, null: false, foreign_key: true

      t.timestamps null: false
    end
  end
end
