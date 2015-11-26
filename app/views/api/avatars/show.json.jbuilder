image = @avatar.image

json.avatar do
  json.normal image_path(image.url)
  json.thumb image_path(image.url(:thumb))
  json.profile image_path(image.url(:profile))
end
