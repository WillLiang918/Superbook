image = user.avatar.image

json.(user, :id, :first_name, :last_name, :email, :birthday, :sex, :created_at, :updated_at)
json.avatar do
  json.normal image_path(image.url)
  json.thumb image_path(image.url(:thumb))
  json.profile image_path(image.url(:profile))
end
