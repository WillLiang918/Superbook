json.user @user
json.posts do
  json.array! @posts do |post|
    json.(post, :id, :body, :author_id, :receiver_id)
    json.updated_at time_ago_in_words(post.updated_at)
    json.author post.author
  end
end
