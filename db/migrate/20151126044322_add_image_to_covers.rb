class AddImageToCovers < ActiveRecord::Migration
  def up
    add_attachment :covers, :image
  end

  def down
    remove_attachment :covers, :image
  end
end
