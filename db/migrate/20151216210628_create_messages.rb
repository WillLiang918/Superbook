class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer  :sender_id,   null: false, foreign_key: true
      t.integer  :receiver_id, null: false, foreign_key: true
      t.text     :body,        null: false

      t.timestamps null: false
    end
  end
end
