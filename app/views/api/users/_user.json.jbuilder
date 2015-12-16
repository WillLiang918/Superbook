json.(user, :id, :first_name, :last_name, :email, :birthday, :sex, :created_at, :updated_at)

avatar = user.avatar
json.avatar do
  json.normal image_path(avatar.url)
  json.thumb image_path(avatar.url(:thumb))
  json.profile image_path(avatar.url(:profile))
end

json.cover user.cover.url(:cover)
