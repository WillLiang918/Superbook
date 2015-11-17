json.user @user
json.posts do
  json.array! @posts do |post|
    json.(post, :id, :body, :author_id, :receiver_id)
    json.author post.author
  end
end
