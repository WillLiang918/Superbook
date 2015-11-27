# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

seed_image_root = "#{Rails.root}/app/assets/images/seeds/"

["male", "female"].each do |sex|
  avatar_root = seed_image_root + "#{sex}/avatars/"
  cover_root  = seed_image_root + "#{sex}/covers/"

  Dir.foreach(avatar_root) do |path|
    next if path.starts_with?(".")

    name_path, extension = path.split(".")
    name_parts = name_path.split("_").map(&:capitalize)
    first_name = name_parts.first
    last_name = name_parts.drop(1).join(" ")
    email = name_path.gsub("_", ".") + "@gmail.com"
    birthday = 50.years.ago

    user = User.create!(
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: "password",
      sex: sex,
      birthday: birthday
    )

    avatar = user.avatar
    avatar.image = File.new(avatar_root + path)
    avatar.save!

    cover_path = Dir.glob(cover_root + name_path + ".*").first
    cover = user.cover
    cover.image = File.new(cover_path)
    cover.save!
  end
end

User.all.each do |user|
  User.where.not(id: user.id).sample(30).each do |other_user|
    next if Friendship.find_by(user_id: user.id, friend_id: other_user.id)

    request = FriendRequest.find_by(sender_id: other_user.id, receiver_id: user.id)
    if request.nil?
      FriendRequest.create!(sender_id: user.id, receiver_id: other_user.id)
    else
      request.accept!
    end
  end
end


# ["male", "female"].each do |sex|
#   avatar_root = seed_image_root + "#{sex}/avatars/"
#   cover_root = seed_image_root + "#{sex}/covers/"
#
#   Dir.foreach(avatar_root) do |path|
#     next if path.starts_with?(".")
#
#     name_path, extension = path.split(".")
#     cover_paths = Dir.glob(cover_root + name_path + ".*")
#     if (cover_paths.length === 0)
#       debugger
#     end
#   end
# end
