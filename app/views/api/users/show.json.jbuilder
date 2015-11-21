json.timeline do
  json.user do
    json.partial! 'api/users/user', user: @user
  end

  json.posts do
    json.array! @posts do |post|
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.friendships do
  json.user_id @user.id
  json.friend_ids @friends.map(&:id)
end

json.users @friends do |friend|
  json.set! friend.id do
    json.partial! 'api/users/user', user: friend
  end
end
