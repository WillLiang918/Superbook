class AddImageToAvatars < ActiveRecord::Migration
  def up
    add_attachment :avatars, :image
  end

  def down
    remove_attachment :avatars, :image
  end
end
