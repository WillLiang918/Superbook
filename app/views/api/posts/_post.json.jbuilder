json.(post, :id, :body, :author_id, :receiver_id, :created_at)
json.updated_at (time_ago_in_words(post.updated_at) + " ago")
json.author do
  json.partial! 'api/users/user', user: post.author
end
