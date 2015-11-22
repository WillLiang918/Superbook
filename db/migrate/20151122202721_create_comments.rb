class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false, index: true, foreign_key: true
      t.references :commentable, polymorphic: true, index: true, null: false
      t.string :body, null: false
      t.integer :parent_id, index: true

      t.timestamps null: false
    end
  end
end
