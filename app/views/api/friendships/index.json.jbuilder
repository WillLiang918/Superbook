json.user_id @user_id
json.friend_ids do
  json.array! @friendships.map(&:friend_id)
end
