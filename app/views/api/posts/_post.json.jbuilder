json.(post, :body, :author_id, :receiver_id)
json.updated_at time_ago_in_words(post.updated_at)
json.author post.author
