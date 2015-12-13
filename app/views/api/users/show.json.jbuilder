json.timeline do
  json.set! @user.id do
    json.array! @posts.map(&:id)
  end
end

json.friendships do
  json.user_id @user.id
  json.friend_ids @friend_ids
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end

  @posts.each do |post|
    json.set! post.author_id do
      json.partial! 'api/users/user', user: post.author
    end
  end

  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

json.nicknames do
  json.set! @user.id do
    json.array! @nicknames
  end
end

json.partial! 'api/profiles/profile', profile: @user.profile
json.cover @user.cover.image.url
json.partial! 'api/posts/posts', posts: @posts
json.partial! 'api/posts/post_comments', posts: @posts
json.partial! 'api/posts/post_likes', posts: @posts
