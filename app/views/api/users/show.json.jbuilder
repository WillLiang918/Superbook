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

json.comments do
  @posts.each do |post|
    comments = post.comments
    nested_comments = comments.reduce(Hash.new { |h, k| h[k] = [] }) do |accum, comment|
      accum[comment.parent_id] << comment; accum
    end

    if nested_comments.size == 0
      json.set! post.id, {}
    else
      json.set! post.id do
        nested_comments.each do |parent_id, comments|
          json.set! (parent_id || "null") do
            json.array! comments
          end
        end
      end
    end
  end
end

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
