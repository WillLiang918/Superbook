image = @avatar.image

json.normal image_path(image.url)
json.thumb image_path(image.url(:thumb))
json.profile image_path(image.url(:profile))
json.(@avatar, :user_id)
