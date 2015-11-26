# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


men = [
  ["Bruce", "Wayne"],
  ["Bruce", "Banner"],
  ["Charles", "Xavier"],
  ["Clark", "Kent"],
  ["Erik", "Lehnsherr"],
  ["James", "Howlett"],
  ["Nick", "Fury"],
  ["Peter", "Parker"],
  ["Scott", "Summers"],
  ["Steve", "Rogers"],
  ["Thor", "Odinson"],
  ["Tony", "Stark"]
]




users = [
  {
    "first_name" => "Bruce",
    "last_name" => "Wayne",
    "email" => "bruce@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 30.years.ago,
    "avatar_url" => "avatars/bruce_wayne.jpg"
  },

  {
    "first_name" => "Charles",
    "last_name" => "Xavier",
    "email" => "charles@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 80.years.ago,
    "avatar_url" => "avatars/charles_xavier.jpg"
  },

  {
    "first_name" => "Clark",
    "last_name" => "Kent",
    "email" => "clark@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 100.years.ago,
    "avatar_url" => "avatars/clark_kent.jpg"
  },

  {
    "first_name" => "Erik",
    "last_name" => "Lehnsherr",
    "email" => "erik@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 30.years.ago,
    "avatar_url" => "avatars/erik_lehnsherr.jpg"
  },

  {
    "first_name" => "Peter",
    "last_name" => "Parker",
    "email" => "peter@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 30.years.ago,
    "avatar_url" => "avatars/peter_parker.gif"
  }
]

User.destroy_all

users.each do |user|
  attributes = user.except("avatar_url")
  image_path = user["avatar_url"]
  u = User.new(attributes)
  u.save!
  a = Avatar.new(user: u)
  a.image = File.new("#{Rails.root}/app/assets/images/#{image_path}")
  a.save!
end
