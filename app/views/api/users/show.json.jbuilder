image = @user.avatar.image

json.user do
  json.(@user, :id, :first_name, :last_name, :email, :birthday, :sex, :created_at, :updated_at)
  json.avatar do
    json.normal image_path(image.url)
    json.thumb image_path(image.url(:thumb))
    json.profile image_path(image.url(:profile))
  end
end
json.posts do
  json.array! @posts do |post|
    json.partial! 'api/posts/post', post: post
  end
end
