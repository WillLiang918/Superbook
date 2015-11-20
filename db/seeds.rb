# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = [
  {
    "first_name" => "Bruce",
    "last_name" => "Wayne",
    "email" => "bruce@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 30.years.ago,
    "image_url" => "bruce_wayne.jpg"
  },

  {
    "first_name" => "Charles",
    "last_name" => "Xavier",
    "email" => "charles@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 80.years.ago,
    "image_url" => "charles_xavier.jpg"
  },

  {
    "first_name" => "Clark",
    "last_name" => "Kent",
    "email" => "clark@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 100.years.ago,
    "image_url" => "clark_kent.jpg"
  },

  {
    "first_name" => "Erik",
    "last_name" => "Lensherr",
    "email" => "erik@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 30.years.ago,
    "image_url" => "erik_lensherr.jpg"
  },

  {
    "first_name" => "Peter",
    "last_name" => "Parker",
    "email" => "peter@gmail.com",
    "password" => "password",
    "sex" => "male",
    "birthday" => 30.years.ago,
    "image_url" => "peter_parker.gif"
  }
]

User.destroy_all

users.each do |user|
  attributes = user.except("image_url")
  image_path = user["image_url"]
  u = User.new(attributes)
  u.save!
  a = Avatar.new(user: u)
  a.image = File.new("#{Rails.root}/app/assets/images/#{image_path}")
  a.save!
end
