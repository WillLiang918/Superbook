json.news_feed do
  json.array! @posts.map(&:id)
end

json.users do
  @posts.each do |post|
    json.set! post.author_id do
      json.partial! 'api/users/user', user: post.author
    end
  end
end

json.partial! 'api/posts/posts', posts: @posts
json.partial! 'api/posts/post_comments', posts: @posts
json.partial! 'api/posts/post_likes', posts: @posts
