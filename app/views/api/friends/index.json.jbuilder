json.friendships do
  json.user_id current_user.id
  json.friend_ids @friends.map(&:id)
end

json.users do
  @friends.each do |friend|
    json.set! friend.id do
      json.partial! 'api/users/user', user: friend
    end
  end
end
