json.timeline do
  json.set! @user.id do
    json.array! @posts.map(&:id)
  end
end

json.friendships do
  json.user_id @user.id
  json.friend_ids @friends.map(&:id)
end

json.users do
  @friends.each do |friend|
    json.set! friend.id do
      json.partial! 'api/users/user', user: friend
    end
  end

  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.partial! 'api/posts/post_comments', posts: @posts

json.likes do
  json.post do
    @posts.each do |post|
      json.set! post.id, post.likes.map(&:user_id)
    end
  end

  json.comment do
    @posts.each do |post|
      post.comments.each do |comment|
        json.set! comment.id, comment.likes.map(&:user_id)
      end
    end
  end
end
