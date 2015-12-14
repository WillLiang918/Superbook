json.array! @users do |user|
  json.partial! 'api/users/user', user: user
  json.nicknames do
    json.array! user.nicknames
  end
end
